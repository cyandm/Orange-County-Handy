<?php

/**
 * Search: filter by search-type (all / post / service).
 *
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class Search
{

	public static function init()
	{
		add_action('pre_get_posts', [__CLASS__, 'filterByType']);
		add_action('pre_get_posts', [__CLASS__, 'searchPerPage'], 20);
	}

	/**
	 * Search results per page.
	 *
	 * @param \WP_Query $query
	 */
	public static function searchPerPage($query)
	{
		if (is_admin() || ! $query->is_main_query() || ! $query->is_search()) {
			return;
		}
		$query->set('posts_per_page', 8);
	}

	/**
	 * Filter search query by search-type (all / post / service).
	 *
	 * @param \WP_Query $query
	 */
	public static function filterByType($query)
	{
		if (is_admin() || ! $query->is_main_query() || ! $query->is_search()) {
			return;
		}

		$type = isset($_GET['search-type']) ? sanitize_text_field(wp_unslash($_GET['search-type'])) : '';

		if ($type === 'post') {
			$query->set('post_type', 'post');
			return;
		}

		if ($type === 'service') {
			$query->set('post_type', 'service');
			return;
		}

		// "All" (header search): site content types that should be discoverable
		$query->set('post_type', ['post', 'service', 'page', 'faq']);
	}
}
