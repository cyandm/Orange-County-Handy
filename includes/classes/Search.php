<?php

/**
 * Search: filter by search-type (all / shop / blog).
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
	 * Filter search query by search-type (all / product / post).
	 *
	 * @param \WP_Query $query
	 */
	public static function filterByType($query)
	{
		if (is_admin() || ! $query->is_main_query() || ! $query->is_search()) {
			return;
		}
		$type = isset($_GET['search-type']) ? sanitize_text_field(wp_unslash($_GET['search-type'])) : '';
		if ($type === 'product') {
			$query->set('post_type', 'product');
		} elseif ($type === 'post') {
			$query->set('post_type', 'post');
		} else {
			// "All": only products and blog; products first, then posts
			$query->set('post_type', ['product', 'post']);
			$query->set('orderby', 'post_type');
			$query->set('order', 'DESC');
		}
	}
}
