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
	}


	public static function register( $wp_customize ) {
		self::$wpCustomize = $wp_customize;
		self::registerPanelCustomCode();
		self::registerPanelInformation();
	}

	private static function addControl( $section, $type, $id, $label, $description = '' ) {

		self::$wpCustomize->add_setting(
			$id,
			[ 'type' => 'option' ]
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

		self::addControl('social_section', 'text', 'instagram_link', 'Instagram URL');
		self::addControl('social_section', 'text', 'whatsapp_number', 'WhatsApp Link');
		self::addControl('social_section', 'text', 'twitter_link', 'X (Twitter) URL');
		self::addControl('social_section', 'text', 'facebook_link', 'Facebook URL');
		self::addControl('social_section', 'text', 'linkedin_link', 'LinkedIn URL');

		self::addControl('address_section', 'text', 'phone_number', 'Phone Number');
		self::addControl('address_section', 'text', 'phone_number_support', 'Support Phone Number');
		self::addControl('address_section', 'text', 'email_address', 'Email');
		self::addControl('address_section', 'text', 'service_areas', 'Service Areas');
		self::addControl('address_section', 'text', 'copyright_text', 'Copyright Text');

		self::addControl('logo_section', 'file', 'logo_mobile_menu', 'Mobile Menu Logo');
		self::addControl('logo_section', 'file', 'logo_footer', 'Footer Logo');

		self::addControl('reviews_section', 'text', 'reviews_archive_title', 'Archive Title');
		self::addControl('reviews_section', 'text', 'reviews_archive_subtitle', 'Archive Subtitle');
		self::addControl('reviews_section', 'text', 'reviews_thumbtack_hires', 'Hires on Thumbtack', 'Entered manually, e.g. 231+');
	}
}
