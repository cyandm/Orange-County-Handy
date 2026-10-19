<?php

/**
 * Deliver form email / Telegram after the user already got a success response.
 * Prefer PHP-FPM flush; if that did not send, WP-Cron backup runs.
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class FormNotify
{

	const HOOK = 'cyn_deliver_form_notifications';

	/** Seconds to wait before cron backup (gives FPM / async a head start) */
	const CRON_BACKUP_DELAY = 15;

	public static function init()
	{
		add_action(self::HOOK, [__CLASS__, 'deliver'], 10, 2);
	}

	/**
	 * @param int $post_id
	 * @param string $type 'quote' | 'contact'
	 * @return void
	 */
	public static function queue($post_id, $type)
	{
		$post_id = (int) $post_id;
		$type = sanitize_key((string) $type);

		if ($post_id <= 0 || ! in_array($type, ['quote', 'contact'], true)) return;
		if (! self::postMatchesType($post_id, $type)) return;

		$token = wp_generate_password(32, false, false);
		update_post_meta($post_id, '_notify_token', $token);
		update_post_meta($post_id, '_notify_type', $type);
		update_post_meta($post_id, '_notify_queued', '1');

		// Parallel loopback (does not block the user response)
		self::dispatchAsync($post_id, $type, $token);

		// Cron backup; cleared when FPM / async already delivered
		self::scheduleBackup($post_id, $type);

		add_action('shutdown', static function () use ($post_id, $type) {
			$detached = false;

			if (function_exists('fastcgi_finish_request')) {
				$detached = (bool) @fastcgi_finish_request();
			} elseif (function_exists('litespeed_finish_request')) {
				// call_user_func: LiteSpeed-only helper — avoids IDE "undefined function" noise
				$detached = (bool) @call_user_func('litespeed_finish_request');
			}

			// PHP-FPM / LiteSpeed: response already sent → deliver now
			if ($detached) {
				if (function_exists('ignore_user_abort')) ignore_user_abort(true);
				self::deliver($post_id, $type);
			}

			// If still not delivered → wake WP-Cron backup
			if (! self::isDelivered($post_id)) {
				self::scheduleBackup($post_id, $type);
				self::spawnBackup();
			}
		}, 100);
	}

	/**
	 * @param int $post_id
	 * @param string $type
	 * @return void
	 */
	private static function scheduleBackup($post_id, $type)
	{
		$args = [$post_id, $type];

		if (wp_next_scheduled(self::HOOK, $args)) return;

		wp_schedule_single_event(time() + self::CRON_BACKUP_DELAY, self::HOOK, $args);
	}

	private static function spawnBackup()
	{
		// constant(): DISABLE_WP_CRON is optional in wp-config — avoids IDE "undefined constant"
		if (defined('DISABLE_WP_CRON') && constant('DISABLE_WP_CRON')) return;

		spawn_cron(time());
	}

	/**
	 * @param int $post_id
	 * @return bool
	 */
	private static function isDelivered($post_id)
	{
		return get_post_meta((int) $post_id, '_notify_done', true) === '1'
			|| get_post_meta((int) $post_id, '_notify_lock', true) !== '';
	}

	/**
	 * @param int $post_id
	 * @param string $type
	 * @return bool
	 */
	private static function postMatchesType($post_id, $type)
	{
		$post = get_post($post_id);
		$expected = $type === 'quote' ? 'quote_form' : 'contact_form';

		return $post && $post->post_type === $expected;
	}

	/**
	 * @param int $post_id
	 * @param string $type
	 * @param string $token
	 * @return void
	 */
	private static function dispatchAsync($post_id, $type, $token)
	{
		wp_remote_post(rest_url('cyn/v1/form-notify'), [
			'timeout' => 0.01,
			'blocking' => false,
			'sslverify' => apply_filters('https_local_ssl_verify', true),
			'headers' => ['Content-Type' => 'application/x-www-form-urlencoded; charset=UTF-8'],
			'body' => [
				'post_id' => $post_id,
				'type' => $type,
				'token' => $token,
			],
		]);
	}

	/**
	 * @param \WP_REST_Request $request
	 * @return \WP_REST_Response
	 */
	public static function handleRest($request)
	{
		$post_id = (int) $request->get_param('post_id');
		$type = sanitize_key((string) $request->get_param('type'));
		$token = (string) $request->get_param('token');
		$stored = (string) get_post_meta($post_id, '_notify_token', true);
		$stored_type = (string) get_post_meta($post_id, '_notify_type', true);

		if ($post_id <= 0 || $token === '' || $stored === '' || ! hash_equals($stored, $token)) {
			return new \WP_REST_Response(['error' => 'Forbidden'], 403);
		}

		if (! in_array($type, ['quote', 'contact'], true) || $stored_type !== $type || ! self::postMatchesType($post_id, $type)) {
			return new \WP_REST_Response(['error' => 'Forbidden'], 403);
		}

		if (get_post_meta($post_id, '_notify_queued', true) !== '1') {
			return new \WP_REST_Response(['error' => 'Forbidden'], 403);
		}

		self::deliver($post_id, $type);

		return new \WP_REST_Response(['ok' => true], 200);
	}

	/**
	 * @param int $post_id
	 * @param string $type
	 * @return void
	 */
	public static function deliver($post_id, $type)
	{
		$post_id = (int) $post_id;
		$type = sanitize_key((string) $type);

		if ($post_id <= 0 || ! in_array($type, ['quote', 'contact'], true)) return;
		if (! self::postMatchesType($post_id, $type)) return;

		// Only submissions that went through queue() — blocks arbitrary cron / forged REST
		if (get_post_meta($post_id, '_notify_queued', true) !== '1') return;

		$stored_type = (string) get_post_meta($post_id, '_notify_type', true);
		if ($stored_type !== '' && $stored_type !== $type) return;

		// Atomic lock — FPM / async / cron must not send twice
		if (! add_post_meta($post_id, '_notify_lock', (string) time(), true)) return;

		delete_post_meta($post_id, '_notify_token');
		delete_post_meta($post_id, '_notify_queued');
		delete_post_meta($post_id, '_notify_type');

		if ($type === 'quote') {
			QuoteForm::deliverNotifications($post_id);
		} else {
			ContactForm::deliverNotifications($post_id);
		}

		update_post_meta($post_id, '_notify_done', '1');
		wp_clear_scheduled_hook(self::HOOK, [$post_id, $type]);
	}
}
