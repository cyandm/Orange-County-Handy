<?php

/**
 * Customize
 * this class is used to register customize in theme
 * @package CyanTheme
 */

namespace Cyan\Theme\Classes;

class Customize {

	private static $wpCustomize;

	public static function init() {
		add_action( 'customize_register', [ __CLASS__, 'register' ] );
		add_action( 'customize_controls_enqueue_scripts', [ __CLASS__, 'enqueueControls' ] );
	}

	public static function enqueueControls() {
		wp_register_script( 'cyn-customize-telegram', false, [ 'customize-controls', 'jquery' ], THEME_VERSION, true );
		wp_enqueue_script( 'cyn-customize-telegram' );
		wp_localize_script( 'cyn-customize-telegram', 'cynTelegramCustomize', [
			'restUrl' => esc_url_raw( rest_url( 'cyn/v1/telegram/test' ) ),
			'nonce' => wp_create_nonce( 'wp_rest' ),
			'sending' => __( 'Sending…', 'orange-county-handy' ),
			'success' => __( 'Test message sent. Check Telegram.', 'orange-county-handy' ),
			'failed' => __( 'Test failed.', 'orange-county-handy' ),
			'missing' => __( 'Enter Bot Token and User ID first.', 'orange-county-handy' ),
		] );
		wp_add_inline_script( 'cyn-customize-telegram', <<<'JS'
(function ($) {
	function val(id) {
		try { return String(wp.customize(id)() || '').trim(); } catch (e) { return ''; }
	}
	$(document).on('click', '#cyn-telegram-test-btn', function (e) {
		e.preventDefault();
		var $btn = $(this);
		var $result = $('#cyn-telegram-test-result');
		var token = val('telegram_bot_token');
		var chatId = val('telegram_user_id');
		if (!token || !chatId) {
			$result.css('color', '#b32d2e').text(cynTelegramCustomize.missing);
			return;
		}
		$btn.prop('disabled', true);
		$result.css('color', '#1d2327').text(cynTelegramCustomize.sending);
		$.ajax({
			url: cynTelegramCustomize.restUrl,
			method: 'POST',
			beforeSend: function (xhr) { xhr.setRequestHeader('X-WP-Nonce', cynTelegramCustomize.nonce); },
			data: { token: token, chat_id: chatId },
		}).done(function (res) {
			$result.css('color', '#00a32a').text((res && res.message) || cynTelegramCustomize.success);
		}).fail(function (xhr) {
			var msg = (xhr.responseJSON && (xhr.responseJSON.message || xhr.responseJSON.error)) || cynTelegramCustomize.failed;
			$result.css('color', '#b32d2e').text(msg);
		}).always(function () {
			$btn.prop('disabled', false);
		});
	});
})(jQuery);
JS
		);
	}


	public static function register( $wp_customize ) {
		self::$wpCustomize = $wp_customize;
		self::registerPanelCustomCode();
		self::registerPanelInformation();
	}

	private static function addControl( $section, $type, $id, $label, $description = '' ) {

		$sanitize = 'sanitize_text_field';
		if ( $type === 'textarea' ) {
			$sanitize = str_contains( $id, '_code_' ) ? static fn( $value ) => is_string( $value ) ? $value : '' : 'sanitize_textarea_field';
		} elseif ( $type === 'file' ) {
			$sanitize = 'esc_url_raw';
		} elseif ( str_contains( $id, 'email' ) ) {
			$sanitize = 'sanitize_email';
		}

		self::$wpCustomize->add_setting(
			$id,
			[ 'type' => 'option', 'sanitize_callback' => $sanitize ]
		);


		if ( $type == "file" ) {
			self::$wpCustomize->add_control(
				new \WP_Customize_Upload_Control(
					self::$wpCustomize,
					$id,
					[ 
						'label' => $label,
						'section' => $section,
						'settings' => $id,
						'description' => $description,
					]
				)
			);
		}

		if ( $type != 'file' ) {
			self::$wpCustomize->add_control(
				$id,
				[ 
					'label' => $label,
					'section' => $section,
					'settings' => $id,
					'type' => $type,
					'description' => $description,
				]
			);
		}
	}

	private static function registerPanelCustomCode() {
		self::$wpCustomize->add_panel(
			'custom_code',
			[ 
				'title' => 'تنظیمات کدهای سفارشی',
				'priority' => 1
			]
		);

		self::$wpCustomize->add_section(
			'head_section',
			[ 
				'title' => 'داخل تگ head',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);


		for ( $i = 1; $i <= 10; $i++ ) {
			self::addControl( 'head_section', 'textarea', "cyn_head_code_$i", "کد سفارشی $i" );
		}

		self::$wpCustomize->add_section(
			'start_body_section',
			[ 
				'title' => 'ابتدای تگ body',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);

		for ( $i = 1; $i <= 10; $i++ ) {
			self::addControl( 'start_body_section', 'textarea', "cyn_start_body_code_$i", "کد سفارشی $i" );
		}


		self::$wpCustomize->add_section(
			'end_body_section',
			[ 
				'title' => 'انتهای تگ body',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);

		for ( $i = 1; $i <= 10; $i++ ) {
			self::addControl( 'end_body_section', 'textarea', "cyn_end_body_code_$i", "کد سفارشی $i" );
		}
	}

	private static function registerPanelInformation() {
		self::$wpCustomize->add_panel('information', ['title' => 'Site Information', 'priority' => 1]);

		self::$wpCustomize->add_section('social_section', ['title' => 'Social Media', 'priority' => 1, 'panel' => 'information']);
		self::$wpCustomize->add_section('address_section', ['title' => 'Contact Info', 'priority' => 1, 'panel' => 'information']);
		self::$wpCustomize->add_section('logo_section', ['title' => 'Other Logos', 'priority' => 1, 'panel' => 'information']);
		self::$wpCustomize->add_section('reviews_section', ['title' => 'Reviews Archive', 'priority' => 1, 'panel' => 'information']);
		self::$wpCustomize->add_section('blog_section', ['title' => 'Blog Archive', 'priority' => 1, 'panel' => 'information']);
		self::$wpCustomize->add_section('services_section', ['title' => 'Services Archive', 'priority' => 1, 'panel' => 'information']);
		self::$wpCustomize->add_section('faq_section', ['title' => 'FAQ Section', 'priority' => 1, 'panel' => 'information']);

		self::addControl('social_section', 'text', 'instagram_link', 'Instagram URL');
		self::addControl('social_section', 'text', 'whatsapp_number', 'WhatsApp Link');
		self::addControl('social_section', 'text', 'twitter_link', 'X (Twitter) URL');
		self::addControl('social_section', 'text', 'facebook_link', 'Facebook URL');
		self::addControl('social_section', 'text', 'linkedin_link', 'LinkedIn URL');

		self::addControl('address_section', 'text', 'phone_number', 'Phone Number');
		self::addControl('address_section', 'text', 'phone_number_support', 'Support Phone Number');
		self::addControl('address_section', 'text', 'email_address', 'Email');
		self::addControl('address_section', 'text', 'receiver_form_email', 'Forms Recipient', 'Contact and quote form submissions are sent here, falls back to the Email above');
		self::addControl('address_section', 'text', 'telegram_bot_token', 'Telegram Bot Token', 'From @BotFather. When both token and User ID are set, every form submission is also sent to Telegram.');
		self::addControl('address_section', 'text', 'telegram_user_id', 'Telegram User ID', 'Numeric chat ID that receives notifications. Start a chat with your bot first so it can message you.');
		self::$wpCustomize->add_setting('telegram_test_button', ['type' => 'option', 'default' => '', 'sanitize_callback' => '__return_empty_string']);
		self::$wpCustomize->add_control(new TelegramTestControl(self::$wpCustomize, 'telegram_test_button', [
			'label' => __('Telegram test', 'orange-county-handy'),
			'description' => __('Sends a test message with the Token and User ID currently entered above (Publish not required).', 'orange-county-handy'),
			'section' => 'address_section',
			'settings' => 'telegram_test_button',
		]));
		self::addControl('address_section', 'text', 'service_areas', 'Service Areas');
		self::addControl('address_section', 'text', 'work_hours', 'Work Hours', 'e.g. Mon - Sat: 7:00 AM - 7:00 PM');
		self::addControl('address_section', 'text', 'copyright_text', 'Copyright Text');

		self::addControl('logo_section', 'file', 'logo_mobile_menu', 'Mobile Menu Logo');
		self::addControl('logo_section', 'file', 'logo_footer', 'Footer Logo');

		self::addControl('reviews_section', 'text', 'reviews_archive_title', 'Archive Title');
		self::addControl('reviews_section', 'text', 'reviews_archive_subtitle', 'Archive Subtitle');
		self::addControl('reviews_section', 'text', 'reviews_thumbtack_hires', 'Hires on Thumbtack', 'Entered manually, e.g. 231+');

		self::addControl('blog_section', 'text', 'blog_archive_title', 'Archive Title', 'Shown on the blog archive, category and tag pages use the term name');

		self::addControl('services_section', 'text', 'services_archive_title', 'Archive Title');
		self::addControl('services_section', 'textarea', 'services_archive_text', 'Archive Text');
		self::addControl('services_section', 'file', 'services_archive_image', 'Hero Image');
		self::addControl('services_section', 'text', 'services_grid_title', 'Services Title');

		self::addControl('faq_section', 'text', 'faq_section_title', 'FAQ Title', 'Default title, pages can override it');
		self::addControl('faq_section', 'text', 'faq_cta_title', 'CTA Title');
		self::addControl('faq_section', 'textarea', 'faq_cta_text', 'CTA Text');
	}
}

/**
 * Customizer control: Telegram test button
 */
class TelegramTestControl extends \WP_Customize_Control {

	public $type = 'cyn_telegram_test';

	public function render_content() {
		?>
		<?php if ( ! empty( $this->label ) ) : ?>
			<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
		<?php endif; ?>
		<?php if ( ! empty( $this->description ) ) : ?>
			<span class="description customize-control-description"><?php echo esc_html( $this->description ); ?></span>
		<?php endif; ?>
		<p style="margin: 8px 0 0;">
			<button type="button" class="button button-secondary" id="cyn-telegram-test-btn">
				<?php esc_html_e( 'Send test message', 'orange-county-handy' ); ?>
			</button>
		</p>
		<p id="cyn-telegram-test-result" style="margin: 8px 0 0;" aria-live="polite"></p>
		<?php
	}
}
