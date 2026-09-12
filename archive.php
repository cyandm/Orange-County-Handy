<?php
/*
Template Name: Archive
Description: A template for displaying an archive of post types
More information at https://developer.wordpress.org/themes/templates/template-hierarchy/#archive-hierarchy

*/

use Cyan\Theme\Helpers\Templates;

/* the same layout serves the blog archive, the category and tag archives, and a page using this template */

$paged = max(1, (int) get_query_var('paged'), (int) get_query_var('page'));
$is_page_template = is_page();
$query = $is_page_template ? new WP_Query(['post_type' => 'post', 'posts_per_page' => 9, 'paged' => $paged]) : $GLOBALS['wp_query'];

$title = get_option('blog_archive_title') ?: __('Explore Our Latest Tips', 'orange-county-handy');
if (is_category() || is_tag() || is_tax()) $title = single_term_title('', false);

get_header(); ?>

<?php Templates::getPart('breadcrumb'); ?>

<main id="blog-archive" class="flex flex-col gap-6">

	<?php Templates::getPart('blog-filters', ['title' => $title]); ?>

	<?php if ($query->have_posts()) : ?>

		<div class="flex flex-col gap-5">

			<div class="container grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-3">
				<?php while ($query->have_posts()) : $query->the_post(); ?>
					<?php Templates::getCard('blog'); ?>
				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>
			</div>

			<?php Templates::getPart('pagination', ['query' => $query, 'paged' => $paged]); ?>

		</div>

	<?php else : ?>

		<p class="container text-center text-sm lg:text-base font-normal text-cynTextGray">
			<?php esc_html_e('No articles have been published yet.', 'orange-county-handy'); ?>
		</p>

	<?php endif; ?>

</main>

<?php get_footer(); ?>
