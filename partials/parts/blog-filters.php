<?php

/**
 * Blog Archive Header — title, search and category chips
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$args = get_query_var('args', []);
$title = $args['title'] ?? '';

$categories = get_categories(['hide_empty' => true]);
$posts_page_id = (int) get_option('page_for_posts');
$archive_pages = $posts_page_id ? [] : get_pages(['meta_key' => '_wp_page_template', 'meta_value' => 'archive.php', 'number' => 1]);
$static_front = get_option('show_on_front') === 'page';
$blog_url = $posts_page_id ? get_permalink($posts_page_id) : ($archive_pages ? get_permalink($archive_pages[0]) : home_url($static_front ? '/?post_type=post' : '/'));
$current_cat = is_category() ? (int) get_queried_object_id() : 0;
$is_all = !is_category() && !is_tag() && !is_tax();
?>

<section class="container flex flex-col gap-2.5">

	<h1 class="text-center text-xl font-bold text-cynTextBlack">
		<?php echo esc_html($title); ?>
	</h1>

	<div class="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">

		<form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>" class="lg:max-w-96 lg:flex-1">
			<label for="blog-search" class="primary-input">
				<i aria-hidden="true">
					<?php Icon::print('Search,-Loupe'); ?>
				</i>
				<input id="blog-search" type="search" name="s" value="<?php echo esc_attr(get_search_query()); ?>" placeholder="<?php esc_attr_e('search articles...', 'orange-county-handy'); ?>">
			</label>
			<input type="hidden" name="search-type" value="post">
		</form>

		<?php if ($categories) : ?>
			<div class="flex flex-wrap items-center gap-1 lg:ms-auto">

				<a href="<?php echo esc_url($blog_url); ?>" class="<?php echo $is_all ? 'primary-btn' : 'tertiary-btn'; ?> whitespace-nowrap">
					<?php esc_html_e('All', 'orange-county-handy'); ?>
				</a>

				<?php foreach ($categories as $category) : ?>
					<a href="<?php echo esc_url(get_category_link($category)); ?>" class="<?php echo $current_cat === (int) $category->term_id ? 'primary-btn' : 'tertiary-btn'; ?> whitespace-nowrap">
						<?php echo esc_html($category->name); ?>
					</a>
				<?php endforeach; ?>

			</div>
		<?php endif; ?>

	</div>

</section>
