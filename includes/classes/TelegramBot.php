<?php

/**
 * Telegram notifications for form submissions (theme-side Bot API client)
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class TelegramBot
{

	/**
	 * @return string
	 */
	public static function token()
	{
		return trim((string) get_option('telegram_bot_token', ''));
	}

	/**
	 * @return string
	 */
	public static function chatId()
	{
		return trim((string) get_option('telegram_user_id', ''));
	}

	/**
	 * @return bool
	 */
	public static function isConfigured()
	{
		return self::token() !== '' && self::chatId() !== '';
	}

	/**
	 * @param string $text
	 * @param string|null $token override bot token
	 * @param string|null $chat_id override chat / user id
	 * @return array{ok: bool, error: string, skipped?: bool}
	 */
	public static function sendMessage($text, $token = null, $chat_id = null)
	{
		$token = trim((string) ($token ?? self::token()));
		$chat_id = trim((string) ($chat_id ?? self::chatId()));

		if ($token === '' || $chat_id === '') {
			return [
				'ok' => false,
				'error' => __('Set both Telegram Bot Token and User ID first.', 'orange-county-handy'),
				'skipped' => true,
			];
		}

		$text = self::truncate((string) $text);
		$url = 'https://api.telegram.org/bot' . $token . '/sendMessage';

		$response = wp_remote_post($url, [
			'timeout' => 15,
			'body' => [
				'chat_id' => $chat_id,
				'text' => $text,
				'disable_web_page_preview' => true,
			],
		]);

		if (is_wp_error($response)) {
			return ['ok' => false, 'error' => $response->get_error_message()];
		}

		$code = (int) wp_remote_retrieve_response_code($response);
		$body = json_decode((string) wp_remote_retrieve_body($response), true);

		if ($code === 200 && ! empty($body['ok'])) {
			return ['ok' => true, 'error' => ''];
		}

		$api_error = is_array($body) ? (string) ($body['description'] ?? '') : '';
		$error = $api_error !== '' ? $api_error : sprintf(__('Telegram API error (HTTP %d).', 'orange-county-handy'), $code);

		return ['ok' => false, 'error' => $error];
	}

	/**
	 * Send a short connectivity test (uses saved options or provided overrides)
	 * @param string|null $token
	 * @param string|null $chat_id
	 * @return array{ok: bool, error: string, skipped?: bool}
	 */
	public static function sendTest($token = null, $chat_id = null)
	{
		$site = wp_specialchars_decode(get_bloginfo('name'), ENT_QUOTES);
		$text = implode("\n", [
			'✅ ' . __('Telegram test message', 'orange-county-handy'),
			'',
			sprintf(__('Site: %s', 'orange-county-handy'), $site),
			sprintf(__('Time: %s', 'orange-county-handy'), current_time('Y-m-d H:i:s')),
			'',
			__('If you received this, form notifications can reach this chat.', 'orange-county-handy'),
		]);

		return self::sendMessage($text, $token, $chat_id);
	}

	/**
	 * @param array $data quote meta + edit_url
	 * @return array{ok: bool, error: string, skipped?: bool}
	 */
	public static function notifyQuote($data)
	{
		$lines = [
			'🧾 ' . __('New quote request', 'orange-county-handy'),
			'',
		];

		$map = [
			'_source' => __('Source', 'orange-county-handy'),
			'_name' => __('Name', 'orange-county-handy'),
			'_phone' => __('Phone', 'orange-county-handy'),
			'_email' => __('Email', 'orange-county-handy'),
			'_service' => __('Service', 'orange-county-handy'),
			'_zip' => __('Zip', 'orange-county-handy'),
			'_property_type' => __('Property', 'orange-county-handy'),
			'_timeframe' => __('Timeframe', 'orange-county-handy'),
			'_preferred_date' => __('Preferred date', 'orange-county-handy'),
			'_contact_method' => __('Contact method', 'orange-county-handy'),
			'_description' => __('Project', 'orange-county-handy'),
			'_notes' => __('Notes', 'orange-county-handy'),
		];

		foreach ($map as $key => $label) {
			$value = trim((string) ($data[$key] ?? ''));
			if ($value === '') continue;
			$lines[] = $label . ': ' . $value;
		}

		$photos = is_array($data['_photos'] ?? null) ? $data['_photos'] : [];
		if ($photos) {
			$lines[] = __('Photos', 'orange-county-handy') . ': ' . count($photos);
		}

		if (! empty($data['edit_url'])) {
			$lines[] = '';
			$lines[] = __('Admin', 'orange-county-handy') . ': ' . $data['edit_url'];
		}

		$result = self::sendMessage(implode("\n", $lines));

		if (empty($result['ok']) || ! $photos) return $result;

		$media = self::sendQuotePhotos($photos);

		if (! empty($media['ok'])) return $result;

		return [
			'ok' => false,
			'error' => sprintf(
				/* translators: %s: Telegram API error */
				__('Message sent, but photos failed: %s', 'orange-county-handy'),
				$media['error'] !== '' ? $media['error'] : __('Unknown error.', 'orange-county-handy')
			),
		];
	}

	/**
	 * Upload quote photos to Telegram (previewable formats as album, HEIC/AVIF as documents)
	 * @param array<int, string> $photos relative upload paths
	 * @return array{ok: bool, error: string}
	 */
	public static function sendQuotePhotos(array $photos)
	{
		if (! self::isConfigured()) {
			return ['ok' => false, 'error' => __('Set both Telegram Bot Token and User ID first.', 'orange-county-handy')];
		}

		$preview = [];
		$files = [];

		foreach ($photos as $photo) {
			$path = QuoteForm::photoPath($photo);
			if (! $path) continue;

			$ext = strtolower((string) pathinfo($path, PATHINFO_EXTENSION));
			// Telegram sendPhoto is reliable for JPEG/PNG; GIF/WebP/HEIC/AVIF go as documents
			if (in_array($ext, ['jpg', 'jpeg', 'png'], true)) {
				$preview[] = $path;
			} else {
				$files[] = $path;
			}
		}

		if (! $preview && ! $files) {
			return ['ok' => false, 'error' => __('Could not read quote photos for Telegram.', 'orange-county-handy')];
		}

		foreach (array_chunk($preview, 10) as $chunk) {
			$result = count($chunk) === 1
				? self::api('sendPhoto', ['chat_id' => self::chatId()], ['photo' => $chunk[0]])
				: self::sendMediaGroup($chunk);

			if (empty($result['ok'])) return $result;
		}

		foreach ($files as $path) {
			$result = self::api('sendDocument', ['chat_id' => self::chatId()], ['document' => $path]);
			if (empty($result['ok'])) return $result;
		}

		return ['ok' => true, 'error' => ''];
	}

	/**
	 * @param array<int, string> $paths absolute image paths (2–10)
	 * @return array{ok: bool, error: string}
	 */
	private static function sendMediaGroup(array $paths)
	{
		$media = [];
		$files = [];

		foreach (array_values($paths) as $i => $path) {
			$key = 'file' . $i;
			$media[] = ['type' => 'photo', 'media' => 'attach://' . $key];
			$files[$key] = $path;
		}

		return self::api('sendMediaGroup', ['chat_id' => self::chatId(), 'media' => wp_json_encode($media)], $files);
	}

	/**
	 * Telegram Bot API call (multipart when $files is set)
	 * @param string $method
	 * @param array<string, mixed> $params
	 * @param array<string, string> $files field => absolute path
	 * @return array{ok: bool, error: string}
	 */
	private static function api($method, array $params = [], array $files = [])
	{
		$token = self::token();
		if ($token === '') {
			return ['ok' => false, 'error' => __('Set both Telegram Bot Token and User ID first.', 'orange-county-handy')];
		}

		$url = 'https://api.telegram.org/bot' . $token . '/' . $method;

		if ($files) {
			if (! function_exists('curl_init') || ! class_exists('\CURLFile')) {
				return ['ok' => false, 'error' => __('PHP cURL is required to send Telegram photos.', 'orange-county-handy')];
			}

			foreach ($files as $field => $path) {
				$mime = function_exists('mime_content_type') ? (mime_content_type($path) ?: 'application/octet-stream') : 'application/octet-stream';
				$params[$field] = new \CURLFile($path, $mime, basename($path));
			}

			$ch = curl_init($url);
			curl_setopt_array($ch, [
				CURLOPT_POST => true,
				CURLOPT_POSTFIELDS => $params,
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_CONNECTTIMEOUT => 10,
				CURLOPT_TIMEOUT => 30,
			]);
			$raw = curl_exec($ch);
			$errno = curl_errno($ch);
			$error = curl_error($ch);
			$code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
			curl_close($ch);

			if ($errno || $raw === false) {
				return ['ok' => false, 'error' => $error !== '' ? $error : __('Telegram upload failed.', 'orange-county-handy')];
			}

			$body = json_decode((string) $raw, true);
			if ($code === 200 && ! empty($body['ok'])) return ['ok' => true, 'error' => ''];

			$api_error = is_array($body) ? (string) ($body['description'] ?? '') : '';
			return ['ok' => false, 'error' => $api_error !== '' ? $api_error : sprintf(__('Telegram API error (HTTP %d).', 'orange-county-handy'), $code)];
		}

		$response = wp_remote_post($url, ['timeout' => 15, 'body' => $params]);

		if (is_wp_error($response)) {
			return ['ok' => false, 'error' => $response->get_error_message()];
		}

		$code = (int) wp_remote_retrieve_response_code($response);
		$body = json_decode((string) wp_remote_retrieve_body($response), true);

		if ($code === 200 && ! empty($body['ok'])) return ['ok' => true, 'error' => ''];

		$api_error = is_array($body) ? (string) ($body['description'] ?? '') : '';
		return ['ok' => false, 'error' => $api_error !== '' ? $api_error : sprintf(__('Telegram API error (HTTP %d).', 'orange-county-handy'), $code)];
	}

	/**
	 * @param array $data contact fields + edit_url
	 * @return array{ok: bool, error: string, skipped?: bool}
	 */
	public static function notifyContact($data)
	{
		$lines = [
			'✉️ ' . __('New contact message', 'orange-county-handy'),
			'',
		];

		$map = [
			'name' => __('Name', 'orange-county-handy'),
			'phone' => __('Phone', 'orange-county-handy'),
			'email' => __('Email', 'orange-county-handy'),
			'subject' => __('Subject', 'orange-county-handy'),
			'message' => __('Message', 'orange-county-handy'),
		];

		foreach ($map as $key => $label) {
			$value = trim((string) ($data[$key] ?? ''));
			if ($value === '') continue;
			$lines[] = $label . ': ' . $value;
		}

		if (! empty($data['edit_url'])) {
			$lines[] = '';
			$lines[] = __('Admin', 'orange-county-handy') . ': ' . $data['edit_url'];
		}

		return self::sendMessage(implode("\n", $lines));
	}

	/**
	 * @param int $post_id
	 * @param array{ok: bool, error: string, skipped?: bool} $result
	 * @return void
	 */
	public static function applyResult($post_id, $result)
	{
		$post_id = (int) $post_id;

		if ($post_id <= 0) return;
		if (! empty($result['skipped'])) return;

		update_post_meta($post_id, '_telegram_sent_at', current_time('mysql'));
		update_post_meta($post_id, '_telegram_chat_id', self::chatId());

		if (! empty($result['ok'])) {
			update_post_meta($post_id, '_telegram_sent', '1');
			delete_post_meta($post_id, '_telegram_error');
			return;
		}

		update_post_meta($post_id, '_telegram_sent', '0');
		update_post_meta($post_id, '_telegram_error', $result['error'] ?? __('Unknown Telegram error.', 'orange-county-handy'));
	}

	/**
	 * @param string $text
	 * @return string
	 */
	private static function truncate($text)
	{
		$max = 4000;

		if (function_exists('mb_strlen') && mb_strlen($text) > $max) {
			return mb_substr($text, 0, $max - 1) . '…';
		}

		if (strlen($text) > $max) {
			return substr($text, 0, $max - 1) . '…';
		}

		return $text;
	}
}
