<?php

/**
 * Register
 * this class is used to register post type, taxonomy, term and page in theme
 * you must be added to validators after register menus, post type, taxonomy, term and page
 * @package CyanTheme
 */

namespace Cyan\Theme\Classes;

class Register
{
	public static function init()
	{
		add_action('init', [__CLASS__, 'registerPostType']);
		add_action('init', [__CLASS__, 'registerTaxonomy']);
		add_action('init', [__CLASS__, 'registerTerm']);
		add_action('init', [__CLASS__, 'registerPage']);

		add_action('after_setup_theme', [__CLASS__, 'registerMenus']);
		add_filter('nav_menu_css_class', [__CLASS__, 'addMenuClasses'], 10, 4);

		add_action('template_redirect', [__CLASS__, 'redirectSingleReview']);
		add_action('template_redirect', [__CLASS__, 'redirectReviewsSlug']);
		add_action('pre_get_posts', [__CLASS__, 'setReviewArchiveQuery']);
		add_action('pre_get_posts', [__CLASS__, 'setBlogArchiveQuery']);
	}

	/**
	 * reviews have no single view, send them back to the archive
	 * @return void
	 */
	public static function redirectSingleReview()
	{
		if (! is_singular('review')) return;

		wp_safe_redirect(get_post_type_archive_link('review'), 301);
		exit;
	}

	/**
	 * /reviews is the plural people guess, the archive itself lives on /review
	 * @return void
	 */
	public static function redirectReviewsSlug()
	{
		if (! is_404()) return;

		$path = trim((string) wp_parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
		$home = trim((string) wp_parse_url(home_url(), PHP_URL_PATH), '/');

		if ($home && str_starts_with($path, $home)) $path = trim(substr($path, strlen($home)), '/');
		if ($path !== 'reviews' && ! str_starts_with($path, 'reviews/')) return;

		wp_safe_redirect(home_url('/review' . substr($path, strlen('reviews')) . '/'), 301);
		exit;
	}

	/**
	 * @param \WP_Query $query
	 * @return void
	 */
	public static function setReviewArchiveQuery($query)
	{
		if (is_admin() || ! $query->is_main_query() || ! $query->is_post_type_archive('review')) return;

		$query->set('posts_per_page', 12);
	}

	/**
	 * the blog grid is three by three
	 * @param \WP_Query $query
	 * @return void
	 */
	public static function setBlogArchiveQuery($query)
	{
		if (is_admin() || ! $query->is_main_query()) return;
		if (! $query->is_home() && ! $query->is_category() && ! $query->is_tag()) return;

		$query->set('posts_per_page', 9);
	}

	/**
	 * register menus
	 * after register menus, you can use get_nav_menu_locations() to get the menu locations
	 * @return void
	 */
	public static function registerMenus()
	{
		register_nav_menus([
			'header-menu' => 'Header Menu',
			'footer-menu-col-1' => 'Footer Menu Column 1',
			'footer-menu-col-2' => 'Footer Menu Column 2',
			'footer-menu-bottom' => 'Footer Bottom Menu',
			'mobile-menu' => 'Mobile Menu',
		]);
	}

	/**
	 * Add custom classes to menu items
	 * @param array $classes Array of CSS classes
	 * @param object $item Menu item object
	 * @param object $args Menu arguments
	 * @param int $depth Depth of menu item
	 * @return array Modified classes array
	 */
	public static function addMenuClasses($classes, $item, $args, $depth)
	{
		// Add custom class only to first level menu items (depth === 0)
		if (isset($args->theme_location)) {
			if ($args->theme_location === 'header-menu' && $depth === 0) {
				$classes[] = '';
			}
		}

		return $classes;
	}

	public static function registerPostType()
	{
		self::makePostType('contact_form', 'Contact Form', 'Contact Form', 'dashicons-phone', ['title']);
		self::makePostType('quote_form', 'Quote Request', 'Quote Requests', 'dashicons-clipboard', ['title'], false, false, false);
		self::makePostType('faq', 'FAQ', 'FAQ', 'dashicons-editor-help', ['title', 'editor']);
		self::makePostType('review', 'Review', 'Reviews', 'dashicons-admin-comments', ['title', 'editor']);
		self::makePostType('service', 'Service', 'Services', 'dashicons-hammer', ['title', 'editor', 'thumbnail', 'page-attributes']);
	}

	public static function registerTaxonomy()
	{
		self::makeTaxonomy('faq_cat', 'FAQ Category', 'FAQ Categories', ['faq']);
		self::makeTaxonomy('faq_place', 'FAQ Place', 'FAQ Places', ['faq']);
	}

	/**
	 * register term
	 * this terms can not be removed
	 * @return void
	 */
	public static function registerTerm()
	{

		// wp_insert_term( 'دسته بندی جدید', 'category' );
	}

	/**
	 * register page
	 * this pages can not be removed
	 * @return void
	 */
	public static function registerPage()
	{
		// self::makePage('home', 'خانه');
		// self::makePage('about-us', 'درباره ما');
		// self::makePage('contact-us', 'تماس با ما');
	}

	private static function makePostType($slug, $singular_name, $plural_name, $icon, $supports = ['title', 'thumbnail'], $search_include = true, $has_single = true, $has_archive = true)
	{
		$labels = [
			'name' => $plural_name,
			'singular_name' => $singular_name,
			'menu_name' => $plural_name,
			'name_admin_bar' => $singular_name,
			'add_new' => 'Add ' . $singular_name,
			'add_new_item' => 'Add ' . $singular_name . ' New',
			'new_item' => $singular_name . ' New',
			'edit_item' => 'Edit ' . $singular_name,
			'view_item' => 'View ' . $singular_name,
			'all_items' => 'All ' . $plural_name,
			'search_items' => 'Search ' . $singular_name,
			'not_found' => $singular_name . ' Not Found',
			'not_found_in_trash' => $singular_name . ' Not Found in Trash'
		];

		$args = [
			'labels' => $labels,
			'public' => true,
			'publicly_queryable' => $has_single,
			'show_ui' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'rewrite' => $has_single ? ['slug' => $slug] : false,
			'exclude_from_search' => ! $search_include,
			'has_archive' => $has_archive,
			'hierarchical' => false,
			'menu_position' => null,
			'menu_icon' => $icon,
			'supports' => $supports,

		];

		register_post_type($slug, $args);
	}

	private static function makeTaxonomy($slug, $singular_name, $plural_name, $post_types, $hierarchical = false)
	{
		$labels = [
			'name' => $plural_name,
			'menu_name' => $plural_name,
			'all_items' => 'All ' . $plural_name,
			'add_new_item' => 'Add ' . $singular_name . ' New',
		];

		$args = [
			'labels' => $labels,
			'hierarchical' => $hierarchical,
			'show_ui' => true,
			'show_admin_column' => true,
			'rewrite' => ['slug' => $slug],
			'query_var' => true,
			'show_in_rest' => true,
			'show_tagcloud' => true,
			'show_in_quick_edit' => true,
		];

		register_taxonomy($slug, $post_types, $args);
	}

	private static function makePage($slug, $title)
	{
		if (is_null(get_page_by_path($slug))) {
			wp_insert_post([
				'post_type' => 'page',
				'post_status' => 'publish',
				'post_title' => $title,
				'post_name' => $slug,
				'page_template' => 'templates/' . $slug . '.php'
			]);
		}
	}
}
