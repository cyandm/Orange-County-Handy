<?php

/**
 * Services Grid — every published service as a link card
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$services = get_posts(['post_type' => 'service', 'posts_per_page' => -1, 'orderby' => 'menu_order title', 'order' => 'ASC']);

if (! $services) return;

$title = get_option('services_grid_title') ?: __('what we can help with', 'orange-county-handy');
?>

<section id="services-grid" class="container flex flex-col gap-3 lg:gap-6">

	<h2 class="text-center text-xl lg:text-3xl font-extrabold capitalize text-cynTextBlack">
		<?php echo esc_html($title); ?>
	</h2>

	<div class="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3">
		<?php foreach ($services as $i => $service) : ?>
			<?php Templates::getCard('service', ['service' => $service->ID, 'class' => 'p-8 ' . ($i % 3 === 0 ? 'max-lg:col-span-2' : '')]); ?>
		<?php endforeach; ?>
	</div>

</section>
