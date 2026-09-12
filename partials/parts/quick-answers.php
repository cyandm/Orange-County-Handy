<?php

/**
 * Quick Answers — short FAQ cards
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$args = get_query_var('args', []);
$faq_place = $args['faq_place'] ?? '';
$limit = $args['limit'] ?? 4;

$query_args = ['post_type' => 'faq', 'posts_per_page' => $limit, 'orderby' => 'menu_order title', 'order' => 'ASC'];

$answers = $faq_place ? get_posts(array_merge($query_args, ['tax_query' => [['taxonomy' => 'faq_place', 'field' => 'slug', 'terms' => $faq_place]]])) : [];
if (! $answers) $answers = get_posts($query_args);
if (! $answers) return;

$title = get_field('contact_quick_answers_title') ?: __('Quick Answers', 'orange-county-handy');
$faqs_url = get_post_type_archive_link('faq');
?>

<section id="quick-answers" class="container flex flex-col items-center gap-3 lg:gap-5">

	<h2 class="text-xl lg:text-2xl font-bold capitalize text-cynTextBlack">
		<?php echo esc_html($title); ?>
	</h2>

	<div class="flex w-full flex-col items-center gap-5">

		<div class="grid w-full grid-cols-2 gap-x-3 gap-y-2 lg:flex lg:gap-3 lg:rounded-2xl lg:bg-cynBG lg:p-3">
			<?php foreach ($answers as $answer) : ?>
				<div class="flex flex-col gap-1 rounded-lg border border-cynBorder bg-cynBG p-2 lg:flex-1 lg:flex-row lg:items-start lg:gap-3 lg:rounded-2xl lg:border-0">
					<i class="flex size-6 shrink-0 items-center justify-center rounded-lg text-cynYellow lg:size-8 [&_svg]:size-6 [&_svg]:stroke-[1.5]" aria-hidden="true">
						<?php Icon::print('Messages,-Chat-7'); ?>
					</i>
					<div class="flex flex-col gap-1 lg:gap-0">
						<h3 class="text-base font-semibold text-cynTextBlack">
							<?php echo esc_html($answer->post_title); ?>
						</h3>
						<p class="text-xs font-medium text-cynTextGray">
							<?php echo esc_html(wp_trim_words(wp_strip_all_tags($answer->post_content), 18)); ?>
						</p>
					</div>
				</div>
			<?php endforeach; ?>
		</div>

		<?php if ($faqs_url) : ?>
			<a href="<?php echo esc_url($faqs_url); ?>" class="primary-btn">
				<?php esc_html_e('view all FAQs', 'orange-county-handy'); ?>
			</a>
		<?php endif; ?>

	</div>

</section>
