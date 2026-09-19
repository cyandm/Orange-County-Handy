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
		add_filter('acf/load_field/name=service_icon', [__CLASS__, 'loadServiceIconField']);
	}

	/**
	 * Keep only the saved icon in choices; the rest load 10-at-a-time via AJAX
	 * @param array $field
	 * @return array
	 */
	public static function loadServiceIconField($field)
	{
		$value = $field['value'] ?? '';
		if ($value === '' && ! empty($field['default_value'])) {
			$value = $field['default_value'];
		}
		$field['choices'] = $value ? [$value => $value] : [];
		$field['ui'] = 1;
		$field['ajax'] = 1;

		return $field;
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
		self::forServices();

		//Taxonomies

		//Page Templates
		self::forContactPage();
		self::forAboutUsPage();

		//Menu Items

	}

	private static function forAboutUsPage()
	{
		$acfGroup = new AcfGroup();

		$acfGroup->layoutFields->addTab('about_intro_tab', 'Intro');
		$acfGroup->contentFields->addImage('about_intro_main', 'Main Image', ['width' => '33%', 'return_format' => 'id']);
		$acfGroup->advanceFields->addColorPicker('about_intro_accent_color', 'Accent Color', ['width' => '33%', 'default_value' => '#F4C400']);
		$acfGroup->contentFields->addImage('about_intro_side', 'Side Image', ['width' => '33%', 'return_format' => 'id']);
		$acfGroup->basicFields->addText('about_intro_title', 'Title', ['default_value' => 'Meet the Craftsman Behind Orange County Handy']);
		$acfGroup->basicFields->addTextarea('about_intro_text', 'Body Text', ['rows' => '4', 'default_value' => "Orange County Handy isn’t built around call centers, random contractors, or complicated processes.\nIt’s built around hands-on work and personal service.\nFrom the first conversation to the final details, the goal has always been simple:"]);
		$acfGroup->basicFields->addTextarea('about_intro_emphasis', 'Emphasis Text', ['rows' => '2', 'default_value' => 'understand what needs to be done, do it carefully, and make the whole process easier for the homeowner.']);
		$acfGroup->basicFields->addTextarea('about_intro_quote', 'Cursive Quote', ['rows' => '3', 'default_value' => "One point of contact.\nClear communication.\nWork done with care."]);

		$acfGroup->layoutFields->addTab('about_values_tab', 'Values');
		$acfGroup->basicFields->addText('about_values_label', 'Label', ['width' => '50%', 'default_value' => "WHAT WE’RE BUILT ON"]);
		$acfGroup->basicFields->addText('about_values_title', 'Title', ['width' => '50%', 'default_value' => 'The values behind every job.']);
		for ($i = 1; $i <= 4; $i++) {
			$acfGroup->basicFields->addText("about_value_{$i}_title", "Value {$i} Title", ['width' => '50%']);
			$acfGroup->basicFields->addText("about_value_{$i}_text", "Value {$i} Text", ['width' => '50%']);
		}

		$acfGroup->layoutFields->addTab('about_story_tab', 'Our Story');
		$acfGroup->basicFields->addText('about_story_label', 'Label', ['width' => '50%', 'default_value' => 'OUR STORY']);
		$acfGroup->basicFields->addText('about_story_title', 'Title', ['width' => '50%', 'default_value' => 'Built One Project at a Time.']);
		$acfGroup->basicFields->addTextarea('about_story_text', 'Intro Text', ['rows' => '4', 'default_value' => 'Orange County Handy grew from a simple idea: make home repairs and improvements easier for homeowners. With a focus on dependable service, clear communication, and careful workmanship, the business has grown through the trust of the people it serves.']);
		for ($i = 1; $i <= 4; $i++) {
			$acfGroup->basicFields->addText("about_story_{$i}_title", "Step {$i} Title", ['width' => '50%']);
			$acfGroup->basicFields->addTextarea("about_story_{$i}_text", "Step {$i} Text", ['rows' => '3', 'width' => '50%']);
		}

		$acfGroup->layoutFields->addTab('about_gallery_tab', 'Gallery');
		$acfGroup->basicFields->addText('about_gallery_title', 'Title', ['default_value' => 'On the Job With Orange County Handy']);
		for ($i = 1; $i <= 16; $i++) {
			$acfGroup->contentFields->addImage("about_gallery_{$i}", "Photo {$i}", ['width' => '25%', 'return_format' => 'id']);
		}

		$acfGroup->setLocation('page_template', '==', 'templates/about-us.php');
		$acfGroup->register('AboutUs');
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

	private static function forServices()
	{
		$acfGroup = new AcfGroup();

		$acfGroup->choiceFields->addSelect('service_icon', 'Icon', [
			'choices' => [],
			'ui' => 1,
			'ajax' => 1,
			'allow_null' => 1,
			'default_value' => 'Tools,-Settings',
			'return_format' => 'value',
			'instructions' => 'Search icons — results load 10 at a time.',
		]);

		$acfGroup->setLocation('post_type', '==', 'service');
		$acfGroup->register('Service');
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
