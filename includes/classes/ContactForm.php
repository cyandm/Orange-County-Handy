<?php

/**
 * Contact Form
 * validation, rate limiting and storage for contact submissions,
 * shared by the htmx form and the rest route
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

use Cyan\Theme\Helpers\Templates;

class ContactForm
{

	/** minimum interval between two submissions of the same ip (seconds) */
	const MIN_INTERVAL = 120;

	/** maximum submissions per hour per ip */
	const MAX_PER_HOUR = 2;

	/**
	 * Validate and store a submission
	 * @param array $data raw (unslashed) form data
	 * @return array{success: bool, message: string, status: int}
	 */
	public static function submit($data)
	{
		$ip = self::getClientIp();

		$rate_key = 'cyn_contact_last_' . md5($ip);
		$last_time = get_transient($rate_key);

		if ($last_time !== false && (time() - $last_time) < self::MIN_INTERVAL) {
			$wait = self::MIN_INTERVAL - (time() - $last_time);
			return self::result(false, sprintf(__('Please wait %d seconds before sending another message.', 'orange-county-handy'), $wait), 429);
		}

		$count_key = 'cyn_contact_count_' . md5($ip);
		$count_data = get_transient($count_key);

		if ($count_data === false) {
			$count_data = ['count' => 0, 'start' => time()];
		}

		if ($count_data['count'] >= self::MAX_PER_HOUR) {
			return self::result(false, __('You have reached the sending limit for this hour. Please try again later.', 'orange-county-handy'), 429);
		}

		$first_name = isset($data['first_name']) ? sanitize_text_field($data['first_name']) : '';
		$last_name = isset($data['last_name']) ? sanitize_text_field($data['last_name']) : '';
		$name = trim($first_name . ' ' . $last_name);
		$email = isset($data['email']) ? sanitize_email($data['email']) : '';
		$phone = isset($data['phone']) ? sanitize_text_field($data['phone']) : '';
		$subject = isset($data['subject']) ? sanitize_text_field($data['subject']) : '';
		$message = isset($data['message']) ? sanitize_textarea_field($data['message']) : '';

		// phone is the only optional field
		if (empty($name) || empty($email) || empty($message)) {
			return self::result(false, __('Please fill in all required fields.', 'orange-county-handy'), 400);
		}

		if (! is_email($email)) {
			return self::result(false, __('Please enter a valid email address.', 'orange-county-handy'), 400);
		}

		$phone_digits = preg_replace('/\D/', '', $phone);

		if (! empty($phone) && (strlen($phone_digits) < 10 || strlen($phone_digits) > 15)) {
			return self::result(false, __('Please enter a valid phone number.', 'orange-county-handy'), 400);
		}

		$new_post = wp_insert_post(['post_type' => 'contact_form', 'post_title' => $name, 'post_status' => FormStatuses::defaultStatus('contact_form'), 'meta_input' => ['_name' => $name, '_phone' => $phone, '_email' => $email, '_subject' => $subject, '_message' => $message]]);

		if (is_wp_error($new_post)) {
			return self::result(false, __('The message could not be sent. Please try again.', 'orange-county-handy'), 500);
		}

		// store time and count for rate limit
		set_transient($rate_key, time(), self::MIN_INTERVAL);
		$count_data['count']++;
		set_transient($count_key, $count_data, HOUR_IN_SECONDS);

		FormNotify::queue((int) $new_post, 'contact');

		return self::result(true, __('Thanks! Your message has been submitted.', 'orange-county-handy'), 200);
	}

	/**
	 * Send email + Telegram for a stored contact message (called from background queue)
	 * @param int $post_id
	 * @return void
	 */
	public static function deliverNotifications($post_id)
	{
		$post_id = (int) $post_id;
		$post = get_post($post_id);

		if (! $post || $post->post_type !== 'contact_form') return;

		$payload = [
			'name' => (string) get_post_meta($post_id, '_name', true),
			'email' => (string) get_post_meta($post_id, '_email', true),
			'phone' => (string) get_post_meta($post_id, '_phone', true),
			'subject' => (string) get_post_meta($post_id, '_subject', true),
			'message' => (string) get_post_meta($post_id, '_message', true),
			'edit_url' => admin_url('post.php?post=' . $post_id . '&action=edit'),
		];

		if (get_post_meta($post_id, '_email_sent', true) === '') {
			FormMail::applyResult($post_id, 'contact_form', self::notify($payload));
		}

		if (get_post_meta($post_id, '_telegram_sent', true) === '') {
			TelegramBot::applyResult($post_id, TelegramBot::notifyContact($payload));
		}
	}

	/**
	 * Email the submission to the site owner
	 * @param array $data submitted values
	 * @return array{ok: bool, error: string, to: string}
	 */
	private static function notify($data)
	{
		$subject = sprintf(__('New contact message from %s', 'orange-county-handy'), $data['name'] ?? '');

		return FormMail::send(FormMail::recipient(), $subject, Templates::getEmail('contact-form', $data), $data['name'] ?? '', $data['email'] ?? '');
	}

	private static function result($success, $message, $status)
	{
		return ['success' => $success, 'message' => $message, 'status' => $status];
	}

	/**
	 * Client IP for rate limiting — REMOTE_ADDR only (forwarded headers are spoofable)
	 * @return string
	 */
	private static function getClientIp()
	{
		$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';

		return filter_var($ip, FILTER_VALIDATE_IP) ? $ip : '0.0.0.0';
	}
}
