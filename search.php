<?php

/**
 * Search results
 *
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

defined('ABSPATH') || exit;

global $wp_query;

$search_type = isset($_GET['search-type']) ? sanitize_text_field(wp_unslash($_GET['search-type'])) : 'all';
$is_blog_search = $search_type === 'post';
$query_term = get_search_query();
$paged = max(1, (int) get_query_var('paged'));

$title = $query_term
	? sprintf(__('Search results for “%s”', 'orange-county-handy'), $query_term)
	: __('Search', 'orange-county-handy');

get_header(); ?>

<?php Templates::getPart('breadcrumb'); ?>

<main id="search-page" class="flex flex-col gap-6">

	<?php if ($is_blog_search) : ?>
		<?php Templates::getPart('blog-filters', ['title' => $title]); ?>
	<?php else : ?>
		<section class="container">
			<h1 class="text-center text-xl font-bold text-cynTextBlack">
				<?php echo esc_html($title); ?>
			</h1>
		</section>
	<?php endif; ?>

	<?php if (have_posts()) : ?>

		<div class="flex flex-col gap-5">

			<div class="container grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-3">
				<?php while (have_posts()) : the_post(); ?>
					<?php if (get_post_type() === 'post') Templates::getCard('blog'); ?>
				<?php endwhile; ?>
			</div>

			<?php Templates::getPart('pagination', ['query' => $wp_query, 'paged' => $paged]); ?>

		</div>

	<?php else : ?>

		<div class="container flex flex-col items-center gap-2 py-10 text-center lg:py-16">
			<p class="text-base lg:text-lg font-semibold text-cynTextBlack">
				<?php echo $query_term ? esc_html(sprintf(__('No results for “%s”', 'orange-county-handy'), $query_term)) : esc_html__('No results found', 'orange-county-handy'); ?>
			</p>
			<p class="max-w-md text-sm lg:text-base font-normal text-cynTextGray">
				<?php esc_html_e('Nothing matched your search. Try another keyword, or browse all articles.', 'orange-county-handy'); ?>
			</p>
			<?php if ($is_blog_search) : ?>
				<?php
				$posts_page_id = (int) get_option('page_for_posts');
				$blog_url = $posts_page_id ? get_permalink($posts_page_id) : home_url('/');
				?>
				<a href="<?php echo esc_url($blog_url); ?>" class="primary-btn mt-2">
					<?php esc_html_e('Browse all articles', 'orange-county-handy'); ?>
				</a>
			<?php endif; ?>
		</div>

	<?php endif; ?>

</main>

<?php get_footer(); ?>
