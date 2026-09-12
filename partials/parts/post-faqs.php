<?php

/**
 * Post FAQs — accordion of the FAQs picked for this post
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$faqs = get_query_var('args', [])['faqs'] ?? [];

if (! $faqs) return;
?>

<div id="post-faqs" class="flex flex-col gap-3 border-t border-cynBorder pt-5">

	<h2 class="text-base font-bold text-cynTextBlack">
		<?php esc_html_e('Frequently Asked Questions', 'orange-county-handy'); ?>
	</h2>

	<div class="flex flex-col gap-6 rounded-2xl bg-cynBG p-6">
		<?php foreach ($faqs as $faq_id) : ?>
			<?php $faq = get_post($faq_id); ?>
			<?php if (! $faq) continue; ?>
			<div class="flex flex-col border-b border-cynBgBase pb-3 last:border-0 last:pb-0">

				<button type="button" class="accordion-button flex items-center gap-3 text-start" data-accordion-target="faq-<?php echo esc_attr($faq_id); ?>" data-accordion-icon-rotate="180" aria-expanded="false">
					<i class="accordion-icon size-5 flex shrink-0 items-center justify-center text-cynTextBlack transition-transform duration-300 [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
						<?php Icon::print('Arrow-28'); ?>
					</i>
					<span class="text-base font-normal capitalize leading-6 text-cynTextBlack">
						<?php echo esc_html($faq->post_title); ?>
					</span>
				</button>

				<div class="grid grid-rows-[0fr] transition-all duration-500" data-accordion-content="faq-<?php echo esc_attr($faq_id); ?>">
					<div class="overflow-hidden">
						<div class="px-8 text-justify text-xs font-normal text-cynTextBlack/60">
							<?php echo wp_kses_post(wpautop($faq->post_content)); ?>
						</div>
					</div>
				</div>

			</div>
		<?php endforeach; ?>
	</div>

</div>
