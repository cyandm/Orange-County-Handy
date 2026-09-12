<?php

/**
 * The template for displaying single blog posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

the_post();

$category = get_the_category()[0] ?? null;
$read_time = max(1, (int) ceil(str_word_count(wp_strip_all_tags(get_the_content())) / 200));
/* hand picked first, otherwise the FAQs placed on the blog and the newest services */
$faq_ids = array_filter((array) get_field('post_faqs'));
if (! $faq_ids) $faq_ids = get_posts(['post_type' => 'faq', 'posts_per_page' => -1, 'fields' => 'ids', 'orderby' => 'menu_order title', 'order' => 'ASC', 'tax_query' => [['taxonomy' => 'faq_place', 'field' => 'slug', 'terms' => 'single-blog']]]);

$service_ids = array_filter((array) get_field('related_services'));
if (! $service_ids) $service_ids = get_posts(['post_type' => 'service', 'posts_per_page' => 3, 'fields' => 'ids']);

/* headings become anchors so the sidebar can jump to them */
$toc = [];
$content = preg_replace_callback('/<h2([^>]*)>(.*?)<\/h2>/is', function ($heading) use (&$toc) {
	$id = 'section-' . (count($toc) + 1);
	$toc[] = ['id' => $id, 'title' => wp_strip_all_tags($heading[2])];

	return '<h2 id="' . esc_attr($id) . '"' . preg_replace('/\s*id=("|\')[^"\']*\1/i', '', $heading[1]) . '>' . $heading[2] . '</h2>';
}, apply_filters('the_content', get_the_content()));

if ($faq_ids) $toc[] = ['id' => 'post-faqs', 'title' => __('FAQs', 'orange-county-handy')];

$related_args = ['post_type' => 'post', 'posts_per_page' => 5, 'post__not_in' => [get_the_ID()], 'ignore_sticky_posts' => true];
if ($category) $related_args['category__in'] = [$category->term_id];

$related_posts = new WP_Query($related_args);

get_header(); ?>

<?php Templates::getPart('breadcrumb'); ?>

<main id="single-post">

	<div class="container flex flex-col gap-11 lg:grid lg:grid-cols-[minmax(0,1fr)_384px] lg:grid-rows-[auto_auto_auto_1fr] lg:items-start lg:gap-3">

		<div class="lg:col-start-2 lg:row-start-1">
			<?php Templates::getPart('post-toc', ['items' => $toc]); ?>
		</div>

		<article class="flex flex-col gap-5 lg:col-start-1 lg:row-start-1 lg:row-span-4">

			<div class="flex flex-col gap-3 lg:gap-6">

				<div class="flex flex-col gap-5 lg:max-w-[498px]">

					<div class="flex flex-col gap-2">

						<?php if ($category) : ?>
							<span class="w-fit rounded-lg bg-cynYellowLight/30 px-2.5 py-1 text-[10px] font-semibold text-cynYellow">
								<?php echo esc_html($category->name); ?>
							</span>
						<?php endif; ?>

						<div class="flex flex-col gap-3">
							<h1 class="text-xl lg:text-2xl font-bold text-cynTextBlack">
								<?php the_title(); ?>
							</h1>
							<?php if (has_excerpt()) : ?>
								<p class="text-xs font-medium text-cynTextGray">
									<?php echo esc_html(get_the_excerpt()); ?>
								</p>
							<?php endif; ?>
						</div>

					</div>

					<div class="flex items-center gap-5 text-xs font-medium text-cynTextGray">

						<span class="flex items-center gap-2">
							<i class="size-4 flex shrink-0 items-center justify-center [&_svg]:size-full" aria-hidden="true">
								<?php Icon::print('Calendar,-Dates,-Check-in,-Check-out'); ?>
							</i>
							<span>
								<?php echo esc_html(get_the_date()); ?>
							</span>
						</span>

						<span class="flex items-center gap-2">
							<i class="size-4 flex shrink-0 items-center justify-center [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
								<?php Icon::print('Alarm,-Clock,-Time,-Timer-3'); ?>
							</i>
							<span>
								<?php echo esc_html(sprintf(__('%d min read', 'orange-county-handy'), $read_time)); ?>
							</span>
						</span>

					</div>

				</div>

				<?php if (has_post_thumbnail()) : ?>
					<?php the_post_thumbnail('large', ['class' => 'w-full h-32 lg:h-80 rounded-2xl object-cover', 'alt' => esc_attr(get_the_title())]); ?>
				<?php endif; ?>

			</div>

			<div class="flex flex-col gap-3 [&_a]:text-cynBlue [&_h2]:border-t [&_h2]:border-cynBorder [&_h2]:pt-5 [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-cynTextBlack [&>h2:first-child]:border-t-0 [&>h2:first-child]:pt-0 [&_h3]:text-sm [&_h3]:font-medium [&_h3]:text-cynTextBlack [&_h4]:text-sm [&_h4]:font-medium [&_h4]:text-cynTextBlack [&_p]:text-sm [&_p]:font-medium [&_p]:text-cynTextGray [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ps-5 [&_ol]:ps-5 [&_li]:text-xs [&_li]:font-medium [&_li]:text-cynTextGray [&_img]:w-full [&_img]:rounded-2xl [&_img]:object-cover [&_blockquote]:rounded-2xl [&_blockquote]:bg-cynBG [&_blockquote]:p-4 [&_blockquote]:text-sm [&_blockquote]:font-medium">
				<?php echo $content; ?>
			</div>

			<?php Templates::getPart('post-faqs', ['faqs' => $faq_ids]); ?>

		</article>

		<?php if ($related_posts->have_posts()) : ?>
			<div class="lg:col-start-2 lg:row-start-2">
				<?php Templates::getPart('related-posts', ['query' => $related_posts]); ?>
			</div>
		<?php endif; ?>

		<?php if ($service_ids) : ?>
			<div class="lg:col-start-2 lg:row-start-3">
				<?php Templates::getPart('related-services', ['services' => $service_ids]); ?>
			</div>
		<?php endif; ?>

	</div>

</main>

<?php get_footer();
