<?php

/**
 * FAQ Accordion Card — one collapsible question, driven by functions/accordion.js
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$args = get_query_var('args', []);
$faq = get_post($args['faq-id'] ?? 0);
$open = ! empty($args['open']);

if (! $faq) return;
?>

<div class="flex flex-col border-b border-cynBgBase pb-3 last:border-0 last:pb-0">

	<button type="button" class="accordion-button flex items-center gap-3 text-start" data-accordion-target="faq-<?php echo esc_attr($faq->ID); ?>" data-accordion-icon-rotate="180" aria-expanded="<?php echo $open ? 'true' : 'false'; ?>">
		<i class="accordion-icon size-5 flex shrink-0 items-center justify-center text-cynTextBlack transition-transform duration-300 [&_svg]:size-full [&_svg]:stroke-[1.5]" <?php echo $open ? 'style="transform:rotate(180deg)"' : ''; ?> aria-hidden="true">
			<?php Icon::print('Arrow-28'); ?>
		</i>
		<span class="text-sm lg:text-base font-normal capitalize leading-6 text-cynTextBlack">
			<?php echo esc_html($faq->post_title); ?>
		</span>
	</button>

	<div class="grid grid-rows-[0fr] transition-all duration-500 <?php echo $open ? 'mt-3' : ''; ?>" <?php echo $open ? 'style="grid-template-rows:1fr"' : ''; ?> data-accordion-content="faq-<?php echo esc_attr($faq->ID); ?>">
		<div class="overflow-hidden">
			<div class="px-8 text-justify text-xs font-normal text-cynTextBlack/60">
				<?php echo wp_kses_post(wpautop($faq->post_content)); ?>
			</div>
		</div>
	</div>

</div>
