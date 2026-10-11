<?php

/**
 * Service Help — what we can help with, up to 8 cards
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$cards = [];
for ($i = 1; $i <= 8; $i++) {
	$card_title = get_field("service_help_{$i}_title");
	if ($card_title) $cards[] = ['key' => 'service-help-' . $i, 'title' => $card_title, 'text' => get_field("service_help_{$i}_text")];
}

if (! $cards) return;

$title = get_field('service_help_title') ?: __('what we can help with', 'orange-county-handy');
?>

<section id="service-help" class="container relative flex flex-col gap-3 md:-mt-10 lg:-mt-14 lg:gap-6">
	
	<h2 class="text-center text-xl lg:text-3xl font-extrabold capitalize text-cynTextBlack">
		<?php echo esc_html($title); ?>
	</h2>

	<div class="grid grid-cols-2 items-start gap-2 lg:grid-cols-4 lg:items-stretch lg:gap-3">
		<?php foreach ($cards as $card) : ?>
			<?php Templates::getCard('service-help', $card); ?>
		<?php endforeach; ?>
	</div>

</section>