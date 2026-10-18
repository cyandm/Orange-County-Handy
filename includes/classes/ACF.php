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
		self::forHomePage();
		self::forContactPage();
		self::forAboutUsPage();

		//Menu Items

	}

	private static function forHomePage()
	{
		$acfGroup = new AcfGroup();

		$acfGroup->layoutFields->addTab('home_hero_tab', 'Hero');
		$acfGroup->contentFields->addImage('home_hero_image', 'Image', ['width' => '33%', 'return_format' => 'id']);
		$acfGroup->basicFields->addText('home_hero_title', 'Title', ['width' => '67%', 'placeholder' => 'Your trusted handyman services in orange county']);
		$acfGroup->basicFields->addText('home_hero_highlight', 'Highlighted Word', ['width' => '33%', 'placeholder' => 'handyman', 'instructions' => 'Part of the title shown in yellow.']);
		$acfGroup->contentFields->addTextEditor('home_hero_text', 'Text', ['width' => '67%', 'media_upload' => 0]);

		$acfGroup->layoutFields->addTab('home_features_tab', 'Why Choose Us');
		$acfGroup->basicFields->addText('home_features_title', 'Title (mobile)', ['placeholder' => 'why Choose us for Handyman services?']);
		for ($i = 1; $i <= 3; $i++) {
			$acfGroup->basicFields->addText("home_feature_{$i}_title", "Feature {$i}", ['width' => '33%']);
		}

		$acfGroup->layoutFields->addTab('home_sliders_tab', 'Services & Reviews');
		$acfGroup->basicFields->addText('home_services_title', 'Services Title', ['width' => '50%', 'placeholder' => 'Our Services']);
		$acfGroup->basicFields->addText('home_reviews_title', 'Reviews Title', ['width' => '50%', 'placeholder' => 'Trusted by Local Homeowners']);

		$acfGroup->layoutFields->addTab('home_about_tab', 'About');
		$acfGroup->basicFields->addText('home_about_title', 'Title', ['placeholder' => 'Meet Orange County Handy']);
		$acfGroup->contentFields->addTextEditor('home_about_text', 'Text', ['media_upload' => 0]);
		for ($i = 1; $i <= 3; $i++) {
			$acfGroup->basicFields->addText("home_about_badge_{$i}", "Badge {$i}", ['width' => '33%']);
		}
		for ($i = 1; $i <= 3; $i++) {
			$acfGroup->contentFields->addImage("home_about_image_{$i}", "Photo {$i}", ['width' => '33%', 'return_format' => 'id']);
		}

		$acfGroup->layoutFields->addTab('home_quote_tab', 'Fast Quote');
		$acfGroup->contentFields->addImage('home_quote_image', 'Image', ['width' => '33%', 'return_format' => 'id']);
		$acfGroup->basicFields->addText('home_quote_title', 'Title', ['width' => '67%', 'placeholder' => 'get a fast quote']);
		$acfGroup->contentFields->addTextEditor('home_quote_note', 'Note', ['media_upload' => 0]);

		$acfGroup->layoutFields->addTab('home_steps_tab', 'How It Works');
		$acfGroup->basicFields->addText('home_steps_title', 'Title', ['placeholder' => 'how it works']);
		for ($i = 1; $i <= 3; $i++) {
			$acfGroup->basicFields->addText("home_step_{$i}_title", "Step {$i} Title", ['width' => '50%']);
			$acfGroup->contentFields->addTextEditor("home_step_{$i}_text", "Step {$i} Text", ['width' => '50%', 'media_upload' => 0]);
		}

		$acfGroup->layoutFields->addTab('home_faq_tab', 'FAQ');
		$acfGroup->relationshipFields->addPostObject('home_faqs', 'FAQs', ['post_type' => ['faq'], 'multiple' => 1, 'allow_null' => 1, 'return_format' => 'id', 'instructions' => 'Empty shows the FAQs placed on "home".']);
		$acfGroup->basicFields->addText('home_faq_cta_title', 'CTA Title', ['width' => '50%', 'placeholder' => 'still have a question?']);
		$acfGroup->contentFields->addTextEditor('home_faq_cta_text', 'CTA Text', ['width' => '50%', 'media_upload' => 0]);

		$acfGroup->setLocation('page_template', '==', 'templates/home.php');
		$acfGroup->register('Home');
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
			$acfGroup->contentFields->addTextEditor("about_value_{$i}_text", "Value {$i} Text", ['width' => '50%', 'media_upload' => 0]);
		}

		$acfGroup->layoutFields->addTab('about_story_tab', 'Our Story');
		$acfGroup->basicFields->addText('about_story_label', 'Label', ['width' => '50%', 'default_value' => 'OUR STORY']);
		$acfGroup->basicFields->addText('about_story_title', 'Title', ['width' => '50%', 'default_value' => 'Built One Project at a Time.']);
		$acfGroup->contentFields->addTextEditor('about_story_text', 'Intro Text', ['media_upload' => 0, 'default_value' => 'Orange County Handy grew from a simple idea: make home repairs and improvements easier for homeowners. With a focus on dependable service, clear communication, and careful workmanship, the business has grown through the trust of the people it serves.']);
		for ($i = 1; $i <= 4; $i++) {
			$acfGroup->basicFields->addText("about_story_{$i}_title", "Step {$i} Title", ['width' => '50%']);
			$acfGroup->contentFields->addTextEditor("about_story_{$i}_text", "Step {$i} Text", ['width' => '50%', 'media_upload' => 0]);
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
		$acfGroup->contentFields->addTextEditor('contact_form_subtitle', 'Form Subtitle', ['width' => '50%', 'media_upload' => 0]);
		$acfGroup->basicFields->addTextarea('contact_form_subjects', 'Form Subjects', ['rows' => '4', 'placeholder' => "General Question\nRequest a Quote\nSchedule a Service\nSomething Else"]);
		$acfGroup->basicFields->addText('contact_aside_title', 'Quote Box Title', ['width' => '50%', 'placeholder' => 'Looking for a project estimate?']);
		$acfGroup->contentFields->addTextEditor('contact_aside_text', 'Quote Box Text', ['width' => '50%', 'media_upload' => 0]);
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

		$acfGroup->layoutFields->addTab('service_general_tab', 'General');
		$acfGroup->choiceFields->addSelect('service_icon', 'Icon', [
			'choices' => [],
			'ui' => 1,
			'ajax' => 1,
			'allow_null' => 1,
			'default_value' => 'Tools,-Settings',
			'return_format' => 'value',
			'instructions' => 'Search icons — results load 10 at a time.',
		]);
		$acfGroup->contentFields->addTextEditor('service_hero_subtitle', 'Hero Subtitle', ['media_upload' => 0, 'instructions' => 'The hero image is the featured image.', 'placeholder' => 'From everyday repairs to installations and odd jobs, we take care of the projects around your home with careful, dependable workmanship.']);
		$acfGroup->choiceFields->addBoolean('service_hero_two_tone', 'Two-tone Yellow', ['default_value' => 1, 'ui_on_text' => 'On', 'ui_off_text' => 'Off', 'instructions' => 'Off = solid yellow. On = yellow + light yellow split (set below).', 'width' => '30%']);
		$acfGroup->basicFields->addRange('service_hero_yellow_split', 'Hero Yellow Split', ['default_value' => 60, 'min' => 30, 'max' => 90, 'step' => 1, 'append' => '%', 'width' => '70%', 'instructions' => 'How far solid yellow extends from the left before light yellow. Default 60%.', 'conditional_logic' => [[['field' => 'acf_true_false_service_hero_two_tone_', 'operator' => '==', 'value' => '1']]]]);

		$acfGroup->layoutFields->addTab('service_help_tab', 'What We Help With');
		$acfGroup->basicFields->addText('service_help_title', 'Title', ['placeholder' => 'what we can help with']);
		for ($i = 1; $i <= 8; $i++) {
			$acfGroup->basicFields->addText("service_help_{$i}_title", "Card {$i} Title", ['width' => '50%']);
			$acfGroup->contentFields->addTextEditor("service_help_{$i}_text", "Card {$i} Text", ['width' => '50%', 'media_upload' => 0]);
		}

		$acfGroup->layoutFields->addTab('service_about_tab', 'About');
		$acfGroup->contentFields->addImage('service_about_image', 'Image', ['width' => '33%', 'return_format' => 'id']);
		$acfGroup->basicFields->addText('service_about_title', 'Title', ['width' => '67%', 'placeholder' => 'Falls back to the service title']);
		$acfGroup->contentFields->addTextEditor('service_about_text', 'Text', ['media_upload' => 0]);

		$acfGroup->layoutFields->addTab('service_gallery_tab', 'Recent Projects');
		$acfGroup->basicFields->addText('service_gallery_title', 'Title', ['placeholder' => 'Recent Projects']);
		for ($i = 1; $i <= 8; $i++) {
			$acfGroup->contentFields->addImage("service_gallery_{$i}", "Photo {$i}", ['width' => '25%', 'return_format' => 'id']);
		}

		$acfGroup->layoutFields->addTab('service_faq_tab', 'FAQ');
		$acfGroup->relationshipFields->addPostObject('service_faqs', 'FAQs', ['post_type' => ['faq'], 'multiple' => 1, 'allow_null' => 1, 'return_format' => 'id', 'instructions' => 'Empty shows the FAQs placed on "services".']);

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
