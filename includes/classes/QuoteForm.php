<?php

/**
 * Quote Form
 * validation, photo storage, rate limiting and persistence for the four step quote wizard
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

use Cyan\Theme\Helpers\Templates;

class QuoteForm
{

	/** minimum interval between two submissions of the same ip (seconds) */
	const MIN_INTERVAL = 120;

	/** maximum submissions per hour per ip */
	const MAX_PER_HOUR = 3;

	/** photos are kept outside the media library, inside this uploads sub folder */
	const UPLOAD_FOLDER = 'quotes';

	const MAX_FILES = 8;

	const MAX_FILE_SIZE = 10485760;

	/** extension => expected image type, anything else is rejected */
	const ALLOWED_TYPES = ['jpg' => IMAGETYPE_JPEG, 'jpeg' => IMAGETYPE_JPEG, 'png' => IMAGETYPE_PNG, 'webp' => IMAGETYPE_WEBP];

	/**
	 * Timeframe options of step three
	 * @return array<string, array{title: string, text: string}>
	 */
	public static function timeframes()
	{
		return [
			'asap' => ['title' => __('As Soon As Possible', 'orange-county-handy'), 'text' => __('I’d like to get started as soon as availability allows.', 'orange-county-handy')],
			'week' => ['title' => __('Within a Week', 'orange-county-handy'), 'text' => __('I’m hoping to have the project completed soon.', 'orange-county-handy')],
			'month' => ['title' => __('Within a Month', 'orange-county-handy'), 'text' => __('I’m planning ahead and have some flexibility.', 'orange-county-handy')],
			'flexible' => ['title' => __('I’m Flexible', 'orange-county-handy'), 'text' => __('There’s no specific deadline for this project.', 'orange-county-handy')],
		];
	}

	/**
	 * Property type options of step two
	 * @return array<string, string>
	 */
	public static function propertyTypes()
	{
		return [
			'house' => __('House', 'orange-county-handy'),
			'apartment' => __('Apartment', 'orange-county-handy'),
			'condo' => __('Condo', 'orange-county-handy'),
			'townhouse' => __('Townhouse', 'orange-county-handy'),
			'commercial' => __('Commercial', 'orange-county-handy'),
			'other' => __('Other', 'orange-county-handy'),
		];
	}

	/**
	 * Contact method options of step four
	 * @return array<string, array{title: string, icon: string}>
	 */
	public static function contactMethods()
	{
		return [
			'phone' => ['title' => __('phone call', 'orange-county-handy'), 'icon' => 'Phone,-Call'],
			'text' => ['title' => __('Text Message', 'orange-county-handy'), 'icon' => 'Messages,-Chat-7'],
			'email' => ['title' => __('Email', 'orange-county-handy'), 'icon' => 'Email,-Circle'],
		];
	}

	/**
	 * Validate, store and notify a quote request
	 * @param array $data raw (unslashed) form data
	 * @param array $files raw $_FILES style array
	 * @return array{success: bool, message: string, status: int}
	 */
	public static function submit($data, $files = [])
	{
		$ip = self::getClientIp();
		$rate_key = 'cyn_quote_last_' . md5($ip);
		$last_time = get_transient($rate_key);

		if ($last_time !== false && (time() - $last_time) < self::MIN_INTERVAL) {
			$wait = self::MIN_INTERVAL - (time() - $last_time);
			return self::result(false, sprintf(__('Please wait %d seconds before sending another request.', 'orange-county-handy'), $wait), 429);
		}

		$count_key = 'cyn_quote_count_' . md5($ip);
		$count_data = get_transient($count_key) ?: ['count' => 0, 'start' => time()];

		if ($count_data['count'] >= self::MAX_PER_HOUR) {
			return self::result(false, __('You have reached the sending limit for this hour. Please try again later.', 'orange-county-handy'), 429);
		}

		$service_id = isset($data['service']) ? (int) $data['service'] : 0;
		$service = $service_id ? get_post($service_id) : null;

		if (! $service || $service->post_type !== 'service' || $service->post_status !== 'publish') {
			return self::result(false, __('Please choose the service you need.', 'orange-county-handy'), 400);
		}

		$zip = isset($data['zip']) ? sanitize_text_field($data['zip']) : '';
		$property_type = isset($data['property_type']) ? sanitize_key($data['property_type']) : '';
		$description = isset($data['description']) ? sanitize_textarea_field($data['description']) : '';
		$timeframe = isset($data['timeframe']) ? sanitize_key($data['timeframe']) : '';
		$preferred_date = isset($data['preferred_date']) ? sanitize_text_field($data['preferred_date']) : '';
		$notes = isset($data['notes']) ? sanitize_textarea_field($data['notes']) : '';
		$first_name = isset($data['first_name']) ? sanitize_text_field($data['first_name']) : '';
		$last_name = isset($data['last_name']) ? sanitize_text_field($data['last_name']) : '';
		$email = isset($data['email']) ? sanitize_email($data['email']) : '';
		$phone = isset($data['phone']) ? sanitize_text_field($data['phone']) : '';
		$contact_method = isset($data['contact_method']) ? sanitize_key($data['contact_method']) : '';
		$name = trim($first_name . ' ' . $last_name);

		if (! preg_match('/^\d{5}(-\d{4})?$/', $zip)) {
			return self::result(false, __('Please enter a valid zip code.', 'orange-county-handy'), 400);
		}

		if (! isset(self::propertyTypes()[$property_type])) {
			return self::result(false, __('Please choose the property type.', 'orange-county-handy'), 400);
		}

		if (! isset(self::timeframes()[$timeframe])) {
			return self::result(false, __('Please choose your preferred timeframe.', 'orange-county-handy'), 400);
		}

		if ($preferred_date && ! self::isValidDate($preferred_date)) {
			return self::result(false, __('Please choose a valid date.', 'orange-county-handy'), 400);
		}

		if (empty($first_name) || empty($email)) {
			return self::result(false, __('Please fill in all required fields.', 'orange-county-handy'), 400);
		}

		if (! is_email($email)) {
			return self::result(false, __('Please enter a valid email address.', 'orange-county-handy'), 400);
		}

		if (! isset(self::contactMethods()[$contact_method])) {
			return self::result(false, __('Please choose how we should reach you.', 'orange-county-handy'), 400);
		}

		$phone_digits = preg_replace('/\D/', '', $phone);

		if ($phone && (strlen($phone_digits) < 10 || strlen($phone_digits) > 15)) {
			return self::result(false, __('Please enter a valid phone number.', 'orange-county-handy'), 400);
		}

		if (in_array($contact_method, ['phone', 'text'], true) && empty($phone)) {
			return self::result(false, __('Please add a phone number so we can reach you.', 'orange-county-handy'), 400);
		}

		$photos = self::storePhotos($files, $name, $phone_digits);

		$meta = [
			'_service' => $service->post_title,
			'_service_id' => $service->ID,
			'_zip' => $zip,
			'_property_type' => self::propertyTypes()[$property_type],
			'_description' => $description,
			'_timeframe' => self::timeframes()[$timeframe]['title'],
			'_preferred_date' => $preferred_date,
			'_notes' => $notes,
			'_name' => $name,
			'_email' => $email,
			'_phone' => $phone,
			'_contact_method' => self::contactMethods()[$contact_method]['title'],
			'_photos' => $photos,
		];

		$new_post = wp_insert_post(['post_type' => 'quote_form', 'post_title' => $name . ' — ' . $service->post_title, 'post_status' => 'private', 'meta_input' => $meta]);

		if (is_wp_error($new_post)) {
			return self::result(false, __('The request could not be sent. Please try again.', 'orange-county-handy'), 500);
		}

		set_transient($rate_key, time(), self::MIN_INTERVAL);
		$count_data['count']++;
		set_transient($count_key, $count_data, HOUR_IN_SECONDS);

		self::notify(array_merge($meta, ['edit_url' => admin_url('post.php?post=' . $new_post . '&action=edit')]));

		return self::result(true, __('Thanks! Your request has been sent, we will get back to you shortly.', 'orange-county-handy'), 200);
	}

	/**
	 * Public url of a stored photo
	 * @param string $file path relative to the uploads folder
	 * @return string
	 */
	public static function photoUrl($file)
	{
		$uploads = wp_upload_dir();

		return trailingslashit($uploads['baseurl']) . ltrim($file, '/');
	}

	/**
	 * Move the uploaded photos into uploads/quotes/<year>/<month>/<phone-name-hash>/
	 * @param array $files raw $_FILES style array
	 * @param string $name submitter name
	 * @param string $phone digits only phone number
	 * @return array<int, string> paths relative to the uploads folder
	 */
	private static function storePhotos($files, $name, $phone)
	{
		$photos = array_filter(self::normalizeFiles($files['photos'] ?? []), fn($photo) => ($photo['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_OK);

		if (! $photos) return [];

		$uploads = wp_upload_dir();
		$base_dir = trailingslashit($uploads['basedir']) . self::UPLOAD_FOLDER;

		self::protectFolder($base_dir);

		$folder = self::UPLOAD_FOLDER . '/' . wp_date('Y/m') . '/' . self::folderName($name, $phone);
		$target_dir = trailingslashit($uploads['basedir']) . $folder;

		if (! wp_mkdir_p($target_dir)) return [];

		$stored = [];

		foreach (array_slice($photos, 0, self::MAX_FILES) as $photo) {
			$filename = self::storePhoto($photo, $target_dir);

			if ($filename) $stored[] = $folder . '/' . $filename;
		}

		return $stored;
	}

	/**
	 * Validate a single upload by its real content and move it, never trusting the sent mime type
	 * @param array $photo single normalized $_FILES entry
	 * @param string $target_dir absolute destination folder
	 * @return string stored file name, empty when the file was rejected
	 */
	private static function storePhoto($photo, $target_dir)
	{
		if (! isset($photo['error']) || $photo['error'] !== UPLOAD_ERR_OK) return '';
		if (empty($photo['tmp_name']) || ! is_uploaded_file($photo['tmp_name'])) return '';
		if (empty($photo['size']) || $photo['size'] > self::MAX_FILE_SIZE) return '';

		$extension = strtolower((string) pathinfo((string) $photo['name'], PATHINFO_EXTENSION));

		if (! isset(self::ALLOWED_TYPES[$extension])) return '';

		$image = @getimagesize($photo['tmp_name']);

		if (! $image || $image[2] !== self::ALLOWED_TYPES[$extension]) return '';

		$mime = function_exists('finfo_open') ? finfo_file(finfo_open(FILEINFO_MIME_TYPE), $photo['tmp_name']) : ($image['mime'] ?? '');

		if (! in_array($mime, ['image/jpeg', 'image/png', 'image/webp'], true)) return '';

		$filename = wp_generate_password(16, false, false) . '.' . ($extension === 'jpeg' ? 'jpg' : $extension);

		if (! move_uploaded_file($photo['tmp_name'], trailingslashit($target_dir) . $filename)) return '';

		chmod(trailingslashit($target_dir) . $filename, 0644);

		return $filename;
	}

	/**
	 * php has two shapes for multi file inputs, flatten both into a list of single files
	 * @param array $files
	 * @return array<int, array>
	 */
	private static function normalizeFiles($files)
	{
		if (! $files || ! isset($files['name'])) return [];

		if (! is_array($files['name'])) return [$files];

		$normalized = [];

		foreach (array_keys($files['name']) as $index) {
			$normalized[] = ['name' => $files['name'][$index], 'type' => $files['type'][$index], 'tmp_name' => $files['tmp_name'][$index], 'error' => $files['error'][$index], 'size' => $files['size'][$index]];
		}

		return $normalized;
	}

	/**
	 * Folder is named after the submitter, the random suffix keeps the path unguessable
	 * @param string $name
	 * @param string $phone digits only phone number
	 * @return string
	 */
	private static function folderName($name, $phone)
	{
		$person = sanitize_title($name) ?: 'client';
		$number = $phone ?: 'no-phone';

		return $number . '-' . $person . '-' . wp_generate_password(8, false, false);
	}

	/**
	 * Block directory listing and script execution inside the quotes folder
	 * @param string $dir absolute path of the quotes folder
	 * @return void
	 */
	private static function protectFolder($dir)
	{
		if (! wp_mkdir_p($dir)) return;

		$htaccess = trailingslashit($dir) . '.htaccess';

		if (! file_exists($htaccess)) {
			$rules = "Options -Indexes\n\n<FilesMatch \"(?i)\\.(php|phtml|phar|php[0-9]|cgi|pl|py|sh|s?html?|xhtml|svg|js)$\">\n\tRequire all denied\n</FilesMatch>\n";
			file_put_contents($htaccess, $rules);
		}

		$index = trailingslashit($dir) . 'index.php';

		if (! file_exists($index)) file_put_contents($index, "<?php\n// Silence is golden.\n");
	}

	/**
	 * @param string $date
	 * @return bool
	 */
	private static function isValidDate($date)
	{
		$parsed = \DateTime::createFromFormat('Y-m-d', $date);

		return $parsed && $parsed->format('Y-m-d') === $date;
	}

	/**
	 * Email the request to the site owner
	 * @param array $data stored values
	 * @return void
	 */
	private static function notify($data)
	{
		$to = get_option('receiver_form_email') ?: get_option('email_address') ?: get_option('admin_email');

		if (! is_email($to)) return;

		$subject = sprintf(__('New quote request from %s', 'orange-county-handy'), $data['_name']);
		$headers = ['Content-Type: text/html; charset=UTF-8'];

		if (is_email($data['_email'])) $headers[] = 'Reply-To: ' . $data['_name'] . ' <' . $data['_email'] . '>';

		wp_mail($to, $subject, Templates::getEmail('quote-form', $data), $headers);
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
			if (! array_key_exists($key, $_SERVER)) continue;

			foreach (explode(',', $_SERVER[$key]) as $ip) {
				$ip = trim($ip);
				if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) return $ip;
			}
		}

		return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
	}
}
