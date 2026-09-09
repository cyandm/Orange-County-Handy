<?php

/**
 * Templates helper
 * for every folder on partial you must create a function
 * @package CyanTheme
 */

namespace Cyan\Theme\Helpers;

class Templates
{

	public static function getPart($partial, $args = [])
	{
		if (! empty($args) && is_array($args)) {
			set_query_var('args', $args);
		}
		get_template_part('partials/parts/' . $partial);
	}

	public static function getCard($partial, $args = [])
	{
		if (! empty($args) && is_array($args)) {
			set_query_var('args', $args);
		}
		get_template_part('partials/cards/' . $partial);
	}

	/**
	 * get permalink of the page assigned to a page template
	 * @param string $template template file name without extension, e.g. 'get-quote'
	 * @param string $fallback url used when no page has the template assigned
	 * @return string
	 */
	public static function getPageUrl($template, $fallback = '')
	{
		$page_ids = get_posts(['post_type' => 'page', 'meta_key' => '_wp_page_template', 'meta_value' => 'templates/' . $template . '.php', 'numberposts' => 1, 'fields' => 'ids']);

		return $page_ids ? get_permalink($page_ids[0]) : $fallback;
	}
}
