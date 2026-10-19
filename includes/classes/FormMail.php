<?php

/**
 * Form notification email helper — send + record success/failure on the submission post
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class FormMail
{

	/** @var string */
	private static $last_error = '';

	/**
	 * @param string $to
	 * @param string $subject
	 * @param string $body html
	 * @param string $reply_name
	 * @param string $reply_email
	 * @param array<int, string> $attachments absolute file paths
	 * @return array{ok: bool, error: string, to: string}
	 */
	public static function send($to, $subject, $body, $reply_name = '', $reply_email = '', $attachments = [])
	{
		self::$last_error = '';
		$to = is_string($to) ? trim($to) : '';

		if (! is_email($to)) {
			return [
				'ok' => false,
				'error' => __('No valid recipient email is configured. Set Forms Recipient (or Email) in Appearance → Customize → Address.', 'orange-county-handy'),
				'to' => $to,
			];
		}

		$on_failed = static function ($error) {
			if (is_wp_error($error)) self::$last_error = $error->get_error_message();
		};

		add_action('wp_mail_failed', $on_failed);

		$headers = ['Content-Type: text/html; charset=UTF-8'];

		if (is_email($reply_email)) {
			$headers[] = 'Reply-To: ' . trim($reply_name !== '' ? $reply_name : $reply_email) . ' <' . $reply_email . '>';
		}

		$files = array_values(array_filter((array) $attachments, static fn($path) => is_string($path) && is_readable($path)));
		$sent = wp_mail($to, $subject, $body, $headers, $files);
		remove_action('wp_mail_failed', $on_failed);

		if ($sent) {
			return ['ok' => true, 'error' => '', 'to' => $to];
		}

		$error = self::$last_error !== ''
			? self::$last_error
			: __('WordPress could not send the email (wp_mail failed). Check SMTP / mail server settings.', 'orange-county-handy');

		return ['ok' => false, 'error' => $error, 'to' => $to];
	}

	/**
	 * Resolve recipient used by contact / quote forms
	 * @return string
	 */
	public static function recipient()
	{
		return get_option('receiver_form_email') ?: get_option('email_address') ?: get_option('admin_email');
	}

	/**
	 * Store mail result on the submission; set Unsend status when delivery failed
	 * @param int $post_id
	 * @param string $post_type
	 * @param array{ok: bool, error: string, to: string} $result
	 * @return void
	 */
	public static function applyResult($post_id, $post_type, $result)
	{
		$post_id = (int) $post_id;

		if ($post_id <= 0) return;

		update_post_meta($post_id, '_email_to', $result['to'] ?? '');
		update_post_meta($post_id, '_email_sent_at', current_time('mysql'));

		if (! empty($result['ok'])) {
			update_post_meta($post_id, '_email_sent', '1');
			delete_post_meta($post_id, '_email_error');
			return;
		}

		update_post_meta($post_id, '_email_sent', '0');
		update_post_meta($post_id, '_email_error', $result['error'] ?? __('Unknown email error.', 'orange-county-handy'));

		$unsent = FormStatuses::unsentStatus($post_type);

		if ($unsent) wp_update_post(['ID' => $post_id, 'post_status' => $unsent]);
	}
}
