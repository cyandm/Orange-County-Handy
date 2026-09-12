<?php

/**
 * ACF Class
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

use Cyan\Theme\Helpers\Validators;
use Cyan\Theme\Helpers\ACF\AcfGroup;


class ACF
{

	public static function init()
	{
		$isDev = ENVIRONMENT === 'development';
		$isDev ? null : add_filter('acf/settings/show_admin', '__return_false', 100);

		if (! function_exists('acf_add_local_field_group')) {
			return;
		}


		add_action('acf/include_fields', [__CLASS__, 'registerAllACF']);
	}

	/**
	 * Register all ACF fields for the individual post types, taxonomies, page templates, and menu items
	 * @return void
	 */
	public static function registerAllACF()
	{
		//PostTypes
		self::forReviews();
		self::forPosts();

		//Taxonomies

		//Page Templates
		self::forContactPage();

		//Menu Items

	}

	private static function forContactPage()
	{

		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		$acfGroup->basicFields->addText('contact_form_title', 'Form Title', ['width' => '50%', 'placeholder' => 'send us a message']);
		$acfGroup->basicFields->addText('contact_form_subtitle', 'Form Subtitle', ['width' => '50%', 'placeholder' => 'fill out the form below and we’ll get back to you as soon as possible']);
		$acfGroup->basicFields->addTextarea('contact_form_subjects', 'Form Subjects', ['rows' => '4', 'placeholder' => "General Question\nRequest a Quote\nSchedule a Service\nSomething Else"]);
		$acfGroup->basicFields->addText('contact_aside_title', 'Quote Box Title', ['width' => '50%', 'placeholder' => 'Looking for a project estimate?']);
		$acfGroup->basicFields->addText('contact_aside_text', 'Quote Box Text', ['width' => '50%', 'placeholder' => 'Tell us what you need, share a few details and request a free quote directly.']);
		$acfGroup->basicFields->addText('contact_quick_answers_title', 'Quick Answers Title', ['placeholder' => 'Quick Answers']);

		//location
		$acfGroup->setLocation('page_template', '==', 'templates/contact-us.php');


		// register group
		$acfGroup->register('Contact Page');
	}

	private static function forPosts()
	{

		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		$acfGroup->relationshipFields->addPostObject('post_faqs', 'FAQs', ['post_type' => ['faq'], 'multiple' => 1, 'allow_null' => 1, 'return_format' => 'id', 'width' => '50%']);
		$acfGroup->relationshipFields->addPostObject('related_services', 'Related Services', ['post_type' => ['service'], 'multiple' => 1, 'allow_null' => 1, 'return_format' => 'id', 'width' => '50%']);

		//location
		$acfGroup->setLocation('post_type', '==', 'post');


		// register group
		$acfGroup->register('Blog Post');
	}

	private static function forReviews()
	{

		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		$acfGroup->basicFields->addText('reviewer_name', 'Reviewer Name', ['aria-label' => 'Reviewer Name', 'width' => '50%', 'required' => true, 'placeholder' => 'Enter Reviewer Name']);
		$acfGroup->basicFields->addNumber('rating', 'Rating', ['aria-label' => 'Rating', 'width' => '50%', 'required' => true, 'placeholder' => 'Enter Rating', 'min' => '1', 'max' => '5']);

		//location
		$acfGroup->setLocation('post_type', '==', 'review');


		// register group
		$acfGroup->register('Review');
	}
}
