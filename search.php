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
					<?php
					$type = get_post_type();
					if ($type === 'post') {
						Templates::getCard('blog');
					} elseif ($type === 'service') {
						Templates::getCard('service', ['service' => get_the_ID(), 'class' => 'p-8']);
					} else {
						?>
						<a href="<?php the_permalink(); ?>" class="flex flex-col gap-2 rounded-2xl bg-cynBG p-5 transition-all duration-300 hover:shadow-[0_9px_8px_0_rgba(0,0,0,0.10)]">
							<span class="w-fit rounded-lg bg-cynYellowLight/30 px-2.5 py-1 text-[10px] font-semibold uppercase text-cynYellow">
								<?php
								$pto = get_post_type_object($type);
								echo esc_html($pto->labels->singular_name ?? $type);
								?>
							</span>
							<span class="text-base font-semibold text-cynTextBlack">
								<?php the_title(); ?>
							</span>
							<?php if (has_excerpt() || get_the_content()) : ?>
								<span class="text-sm font-normal text-cynTextGray line-clamp-3">
									<?php echo esc_html(wp_trim_words(get_the_excerpt() ?: wp_strip_all_tags(get_the_content()), 24)); ?>
								</span>
							<?php endif; ?>
						</a>
						<?php
					}
					?>
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
				<?php echo $is_blog_search
					? esc_html__('Nothing matched your search. Try another keyword, or browse all articles.', 'orange-county-handy')
					: esc_html__('Nothing matched your search. Try another keyword.', 'orange-county-handy'); ?>
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
