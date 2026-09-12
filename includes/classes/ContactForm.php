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

		$new_post = wp_insert_post(['post_type' => 'contact_form', 'post_title' => $name, 'post_status' => 'private', 'meta_input' => ['_name' => $name, '_phone' => $phone, '_email' => $email, '_subject' => $subject, '_message' => $message]]);

		if (is_wp_error($new_post)) {
			return self::result(false, __('The message could not be sent. Please try again.', 'orange-county-handy'), 500);
		}

		// store time and count for rate limit
		set_transient($rate_key, time(), self::MIN_INTERVAL);
		$count_data['count']++;
		set_transient($count_key, $count_data, HOUR_IN_SECONDS);

		self::notify(['name' => $name, 'email' => $email, 'phone' => $phone, 'subject' => $subject, 'message' => $message, 'edit_url' => admin_url('post.php?post=' . $new_post . '&action=edit')]);

		return self::result(true, __('Thanks! Your message has been sent.', 'orange-county-handy'), 200);
	}

	/**
	 * Email the submission to the site owner
	 * @param array $data submitted values
	 * @return void
	 */
	private static function notify($data)
	{
		$to = get_option('receiver_form_email') ?: get_option('contact_form_email') ?: get_option('email_address') ?: get_option('admin_email');

		if (! is_email($to)) return;

		$subject = sprintf(__('New contact message from %s', 'orange-county-handy'), $data['name']);
		$headers = ['Content-Type: text/html; charset=UTF-8'];

		if (is_email($data['email'])) $headers[] = 'Reply-To: ' . $data['name'] . ' <' . $data['email'] . '>';

		wp_mail($to, $subject, Templates::getEmail('contact-form', $data), $headers);
	}

	private static function result($success, $message, $status)
	{
		return ['success' => $success, 'message' => $message, 'status' => $status];
	}

	/**
	 * Get client IP address
	 * @return string
	 */
	private static function getClientIp()
	{
		$ip_keys = ['HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR'];

		foreach ($ip_keys as $key) {
			if (array_key_exists($key, $_SERVER) === true) {
				foreach (explode(',', $_SERVER[$key]) as $ip) {
					$ip = trim($ip);
					if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) {
						return $ip;
					}
				}
			}
		}

		return isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '0.0.0.0';
	}
}
