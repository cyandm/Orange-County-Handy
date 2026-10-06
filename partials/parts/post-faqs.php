<?php

/**
 * Post FAQs — accordion of the FAQs picked for this post
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$faqs = get_query_var('args', [])['faqs'] ?? [];

if (! $faqs) return;
?>

<div id="post-faqs" class="flex flex-col gap-3 border-t border-cynBorder pt-5">

	<h2 class="text-base font-bold text-cynTextBlack">
		<?php esc_html_e('Frequently Asked Questions', 'orange-county-handy'); ?>
	</h2>

	<div class="flex flex-col gap-6 rounded-2xl bg-cynBG p-6">
		<?php foreach ($faqs as $faq_id) : ?>
			<?php Templates::getCard('faq-accordion', ['faq-id' => $faq_id]); ?>
		<?php endforeach; ?>
	</div>

</div>
