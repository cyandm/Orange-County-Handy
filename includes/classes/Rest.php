<?php

/**
 * Rest API
 * this class is used to register rest routes and handle requests
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

use WP_REST_Request;
use WP_REST_Response;

class Rest
{

	protected static $namespace = 'cyn/v1';

	public static function init()
	{
		add_action('rest_api_init', [__CLASS__, 'registerRoutes']);
	}

	public static function registerRoutes()
	{
		self::makeRoute('/contact_form', 'POST', [__CLASS__, 'createForm']);
	}

	public static function createForm(WP_REST_Request $request)
	{
		$ip = self::getClientIp();

		// Minimum interval between two submissions (seconds)
		$min_interval = 120; // 2 minutes
		$rate_key = 'cyn_contact_last_' . md5($ip);
		$last_time = get_transient($rate_key);
		if ($last_time !== false && (time() - $last_time) < $min_interval) {
			$wait = $min_interval - (time() - $last_time);
			return new WP_REST_Response([
				'error' => sprintf(__('لطفاً %d ثانیه صبر کنید و دوباره تلاش کنید.', 'orange-county-handy'), $wait)
			], 429);
		}

		// Maximum submissions per hour per IP
		$max_per_hour = 2;
		$count_key = 'cyn_contact_count_' . md5($ip);
		$count_data = get_transient($count_key);
		if ($count_data === false) {
			$count_data = ['count' => 0, 'start' => time()];
		}
		if ($count_data['count'] >= $max_per_hour) {
			return new WP_REST_Response([
				'error' => __('تعداد ارسال‌های شما در این ساعت به حد مجاز رسیده. لطفاً بعداً تلاش کنید.', 'orange-county-handy')
			], 429);
		}

		$body = $request->get_body_params();

		$name = isset($body['name']) ? sanitize_text_field($body['name']) : '';
		$email = isset($body['email']) ? sanitize_email($body['email']) : '';
		$phone = isset($body['phone']) ? sanitize_text_field($body['phone']) : '';
		$message = isset($body['message']) ? sanitize_textarea_field($body['message']) : '';

		// Validate required fields
		if (empty($phone) || empty($name) || empty($email) || empty($message)) {
			return new WP_REST_Response(['error' => 'تمام فیلدها الزامی هستند'], 400);
		}

		// Validate phone number (Iranian format)
		if (!preg_match('/^[0-9]{11}$/', $phone)) {
			return new WP_REST_Response(['error' => 'شماره تلفن معتبر نیست'], 400);
		}

		$new_post = wp_insert_post([
			'post_type' => 'contact_form',
			'post_title' => $name,
			'post_status' => 'private',
			'meta_input' => [
				'_name' => $name,
				'_phone' => $phone,
				'_email' => $email,
				'_message' => $message,
			]
		]);

		if (is_wp_error($new_post)) {
			return new WP_REST_Response(['error' => 'خطا در ثبت فرم، لطفاً دوباره تلاش کنید'], 500);
		}

		// Store time and count for rate limit
		set_transient($rate_key, time(), $min_interval);
		$count_data['count']++;
		set_transient($count_key, $count_data, 3600); // 1 hour

		return new WP_REST_Response(['message' => 'فرم با موفقیت ارسال شد'], 200);
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

	/**
	 * make route
	 * @param string $route route path
	 * @param string $methods GET, POST, PUT, DELETE, etc.
	 * @param callable $callback callback function
	 * @param callable $permission_callback permission callback function
	 * @return void
	 */
	private static function makeRoute($route, $methods, $callback, $permission_callback = '__return_true')
	{
		register_rest_route(self::$namespace, $route, [
			'methods' => $methods,
			'callback' => $callback,
			'permission_callback' => $permission_callback
		]);
	}
}
