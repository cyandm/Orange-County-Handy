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

		//Taxonomies

		//Page Templates

		//Menu Items

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
