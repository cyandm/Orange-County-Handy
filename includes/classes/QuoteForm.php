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

	/** classic formats validated with getimagesize (extension => IMAGETYPE_*) */
	const ALLOWED_TYPES = [
		'jpg' => IMAGETYPE_JPEG,
		'jpeg' => IMAGETYPE_JPEG,
		'png' => IMAGETYPE_PNG,
		'webp' => IMAGETYPE_WEBP,
		'gif' => IMAGETYPE_GIF,
	];

	/** phone formats (iPhone HEIC/HEIF, Android AVIF) validated by file signature */
	const PHONE_TYPES = ['heic', 'heif', 'avif'];

	const ALLOWED_MIMES = [
		'image/jpeg',
		'image/png',
		'image/webp',
		'image/gif',
		'image/heic',
		'image/heif',
		'image/heic-sequence',
		'image/heif-sequence',
		'image/avif',
	];

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
			'phone' => ['title' => __('phone call', 'orange-county-handy'), 'icon' => 'Phone,-Call-11'],
			'text' => ['title' => __('Text Message', 'orange-county-handy'), 'icon' => 'Chat,-Messages-1'],
			'email' => ['title' => __('Email', 'orange-county-handy'), 'icon' => 'email-mail-letter'],
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
		$limited = self::rateLimitError('full');

		if ($limited) return $limited;

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
			'_source' => __('Full Quote Form', 'orange-county-handy'),
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

		$new_post = wp_insert_post(['post_type' => 'quote_form', 'post_title' => $name . ' — ' . $service->post_title, 'post_status' => FormStatuses::defaultStatus('quote_form'), 'meta_input' => $meta]);

		if (is_wp_error($new_post)) {
			self::deletePhotos($photos);
			return self::result(false, __('The request could not be sent. Please try again.', 'orange-county-handy'), 500);
		}

		self::recordSubmission('full');
		FormNotify::queue((int) $new_post, 'quote');

		return self::result(true, __('Thanks! Your request has been submitted. We will get back to you shortly.', 'orange-county-handy'), 200);
	}

	/**
	 * Validate, store and notify a fast quote request (service, zip and phone only)
	 * @param array $data raw (unslashed) form data
	 * @return array{success: bool, message: string, status: int}
	 */
	public static function submitFast($data)
	{
		$limited = self::rateLimitError('fast');

		if ($limited) return $limited;

		$service_id = isset($data['service']) ? (int) $data['service'] : 0;
		$service = $service_id ? get_post($service_id) : null;

		if (! $service || $service->post_type !== 'service' || $service->post_status !== 'publish') {
			return self::result(false, __('Please choose the service you need.', 'orange-county-handy'), 400);
		}

		$zip = isset($data['zip']) ? sanitize_text_field($data['zip']) : '';
		$phone = isset($data['phone']) ? sanitize_text_field($data['phone']) : '';
		$phone_digits = preg_replace('/\D/', '', $phone);

		if (! preg_match('/^\d{5}(-\d{4})?$/', $zip)) {
			return self::result(false, __('Please enter a valid zip code.', 'orange-county-handy'), 400);
		}

		if (strlen($phone_digits) < 10 || strlen($phone_digits) > 15) {
			return self::result(false, __('Please enter a valid phone number.', 'orange-county-handy'), 400);
		}

		$meta = ['_service' => $service->post_title, '_service_id' => $service->ID, '_zip' => $zip, '_phone' => $phone, '_source' => __('Fast Quote', 'orange-county-handy')];

		$new_post = wp_insert_post(['post_type' => 'quote_form', 'post_title' => $phone . ' — ' . $service->post_title, 'post_status' => FormStatuses::defaultStatus('quote_form'), 'meta_input' => $meta]);

		if (is_wp_error($new_post)) {
			return self::result(false, __('The request could not be sent. Please try again.', 'orange-county-handy'), 500);
		}

		self::recordSubmission('fast');
		FormNotify::queue((int) $new_post, 'quote');

		return self::result(true, __('Thanks! Your request has been submitted. We will call you shortly.', 'orange-county-handy'), 200);
	}

	/**
	 * Send email + Telegram for a stored quote (called from background queue)
	 * @param int $post_id
	 * @return void
	 */
	public static function deliverNotifications($post_id)
	{
		$post_id = (int) $post_id;
		$post = get_post($post_id);

		if (! $post || $post->post_type !== 'quote_form') return;

		$keys = ['_source', '_service', '_service_id', '_zip', '_property_type', '_description', '_timeframe', '_preferred_date', '_notes', '_name', '_email', '_phone', '_contact_method', '_photos'];
		$payload = ['edit_url' => admin_url('post.php?post=' . $post_id . '&action=edit')];

		foreach ($keys as $key) {
			$payload[$key] = get_post_meta($post_id, $key, true);
		}

		if (($payload['_name'] ?? '') === '' && ($payload['_phone'] ?? '') !== '') {
			$payload['_name'] = $payload['_phone'];
		}

		if (get_post_meta($post_id, '_email_sent', true) === '') {
			FormMail::applyResult($post_id, 'quote_form', self::notify($payload));
		}

		if (get_post_meta($post_id, '_telegram_sent', true) === '') {
			TelegramBot::applyResult($post_id, TelegramBot::notifyQuote($payload));
		}
	}

	/**
	 * Ip limits per form: a minimum interval and a maximum per hour, the fast and full forms are counted separately
	 * @param string $form 'full' or 'fast'
	 * @return array|null error result, null when the request is allowed
	 */
	private static function rateLimitError($form)
	{
		$ip_hash = self::rateKey($form);
		$last_time = get_transient('cyn_quote_last_' . $ip_hash);

		if ($last_time !== false && (time() - $last_time) < self::MIN_INTERVAL) {
			$wait = self::MIN_INTERVAL - (time() - $last_time);
			return self::result(false, sprintf(__('Please wait %d seconds before sending another request.', 'orange-county-handy'), $wait), 429);
		}

		$count_data = get_transient('cyn_quote_count_' . $ip_hash) ?: ['count' => 0, 'start' => time()];

		if ($count_data['count'] >= self::MAX_PER_HOUR) {
			return self::result(false, __('You have reached the sending limit for this hour. Please try again later.', 'orange-county-handy'), 429);
		}

		return null;
	}

	/**
	 * @param string $form 'full' or 'fast'
	 * @return void
	 */
	private static function recordSubmission($form)
	{
		$ip_hash = self::rateKey($form);
		$count_data = get_transient('cyn_quote_count_' . $ip_hash) ?: ['count' => 0, 'start' => time()];
		$count_data['count']++;

		set_transient('cyn_quote_last_' . $ip_hash, time(), self::MIN_INTERVAL);
		set_transient('cyn_quote_count_' . $ip_hash, $count_data, HOUR_IN_SECONDS);
	}

	/**
	 * @param string $form 'full' or 'fast'
	 * @return string
	 */
	private static function rateKey($form)
	{
		return md5($form . '|' . self::getClientIp());
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
	 * Absolute filesystem path of a stored photo (empty when missing / outside uploads)
	 * @param string $file path relative to the uploads folder
	 * @return string
	 */
	public static function photoPath($file)
	{
		$file = ltrim(str_replace('\\', '/', (string) $file), '/');
		if ($file === '' || str_contains($file, '..')) return '';

		// Only quote uploads — never arbitrary paths under wp-content/uploads
		if (! str_starts_with($file, self::UPLOAD_FOLDER . '/')) return '';

		$uploads = wp_upload_dir();
		$path = trailingslashit($uploads['basedir']) . $file;
		$real = realpath($path);
		$base = realpath(trailingslashit($uploads['basedir']) . self::UPLOAD_FOLDER);

		if (! $real || ! $base || ! is_file($real)) return '';

		$real = str_replace('\\', '/', $real);
		$base = rtrim(str_replace('\\', '/', $base), '/');

		if ($real !== $base && ! str_starts_with($real, $base . '/')) return '';

		return $real;
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
			$filename = self::storePhoto($photo, $target_dir, $name, $phone);

			if ($filename) $stored[] = $folder . '/' . $filename;
		}

		return $stored;
	}

	/**
	 * Remove uploaded quote photos (e.g. when the post insert fails)
	 * @param array<int, string> $paths paths relative to the uploads folder
	 * @return void
	 */
	private static function deletePhotos($paths)
	{
		if (! $paths) return;

		$uploads = wp_upload_dir();
		$base = trailingslashit($uploads['basedir']);

		foreach ($paths as $rel) {
			$abs = $base . ltrim((string) $rel, '/\\');
			if (is_file($abs)) wp_delete_file($abs);
		}
	}

	/**
	 * Validate a single upload by its real content and move it, never trusting the sent mime type
	 * @param array $photo single normalized $_FILES entry
	 * @param string $target_dir absolute destination folder
	 * @param string $name submitter name
	 * @param string $phone digits only phone number
	 * @return string stored file name, empty when the file was rejected
	 */
	private static function storePhoto($photo, $target_dir, $name = '', $phone = '')
	{
		if (! isset($photo['error']) || $photo['error'] !== UPLOAD_ERR_OK) return '';
		if (empty($photo['tmp_name']) || ! is_uploaded_file($photo['tmp_name'])) return '';
		if (empty($photo['size']) || $photo['size'] > self::MAX_FILE_SIZE) return '';

		$extension = strtolower((string) pathinfo((string) $photo['name'], PATHINFO_EXTENSION));
		$is_phone = in_array($extension, self::PHONE_TYPES, true);

		if (! isset(self::ALLOWED_TYPES[$extension]) && ! $is_phone) return '';

		$tmp = $photo['tmp_name'];
		$mime = '';

		if (function_exists('finfo_open')) {
			$finfo = finfo_open(FILEINFO_MIME_TYPE);
			if ($finfo) {
				$mime = (string) finfo_file($finfo, $tmp);
				finfo_close($finfo);
			}
		}

		if ($is_phone) {
			if (! self::isPhoneImage($tmp, $extension)) return '';
			if ($mime && ! in_array($mime, self::ALLOWED_MIMES, true) && $mime !== 'application/octet-stream') return '';
		} else {
			$image = @getimagesize($tmp);
			if (! $image || $image[2] !== self::ALLOWED_TYPES[$extension]) return '';
			if (! $mime) $mime = (string) ($image['mime'] ?? '');
			if (! in_array($mime, self::ALLOWED_MIMES, true)) return '';
		}

		$ext = $extension === 'jpeg' ? 'jpg' : $extension;
		$person = sanitize_title($name) ?: 'client';
		$number = preg_replace('/\D/', '', (string) $phone) ?: 'no-phone';
		$base = $person . '-' . $number . '-' . wp_generate_password(8, false, false);
		$dest_jpg = trailingslashit($target_dir) . $base . '.jpg';

		// Convert HEIC/HEIF to JPEG when Imagick supports it so admin/email clients can preview
		if (in_array($extension, ['heic', 'heif'], true) && self::convertHeicToJpeg($tmp, $dest_jpg)) {
			@unlink($tmp);
			chmod($dest_jpg, 0644);
			return $base . '.jpg';
		}

		$dest = trailingslashit($target_dir) . $base . '.' . $ext;

		if (! move_uploaded_file($tmp, $dest)) return '';

		chmod($dest, 0644);

		return $base . '.' . $ext;
	}

	/**
	 * Detect iPhone HEIC/HEIF and Android AVIF via ISO-BMFF ftyp brands (getimagesize usually cannot)
	 */
	private static function isPhoneImage($path, $extension)
	{
		$brands = $extension === 'avif'
			? ['avif', 'avis', 'avio', 'avci']
			: ['heic', 'heix', 'hevc', 'hevx', 'heim', 'heis', 'mif1', 'msf1'];

		return self::hasFtypBrand($path, $brands);
	}

	/** @param array<int, string> $brands */
	private static function hasFtypBrand($path, array $brands)
	{
		$fh = fopen($path, 'rb');
		if (! $fh) return false;

		$header = fread($fh, 64);
		fclose($fh);

		if (! is_string($header) || strlen($header) < 12 || substr($header, 4, 4) !== 'ftyp') return false;

		$chunk = substr($header, 8);

		foreach ($brands as $brand) {
			if (str_contains($chunk, $brand)) return true;
		}

		return false;
	}

	/** Convert HEIC/HEIF to JPEG when Imagick + HEIC decoder are available */
	private static function convertHeicToJpeg($tmp_path, $dest_path)
	{
		if (! extension_loaded('imagick') || ! class_exists('\Imagick')) return false;

		try {
			$formats = array_map('strtoupper', \Imagick::queryFormats('HEIC') ?: []);
			if (! in_array('HEIC', $formats, true)) return false;

			$image = new \Imagick($tmp_path);
			$image->setImageFormat('jpeg');
			$image->setImageCompressionQuality(88);
			$ok = $image->writeImage($dest_path);
			$image->clear();
			$image->destroy();

			return $ok && is_file($dest_path);
		} catch (\Throwable $e) {
			if (is_file($dest_path)) @unlink($dest_path);
			return false;
		}
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
	 * @return array{ok: bool, error: string, to: string}
	 */
	private static function notify($data)
	{
		$subject = sprintf(__('New quote request from %s', 'orange-county-handy'), $data['_name'] ?? '');
		$attachments = [];

		foreach ((array) ($data['_photos'] ?? []) as $photo) {
			$path = self::photoPath($photo);
			if ($path) $attachments[] = $path;
		}

		return FormMail::send(FormMail::recipient(), $subject, Templates::getEmail('quote-form', $data), $data['_name'] ?? '', $data['_email'] ?? '', $attachments);
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
