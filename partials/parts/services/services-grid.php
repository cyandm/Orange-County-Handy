<?php

/**
 * Services Grid — every published service as a link card
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

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
			<?php $icon = get_field('service_icon', $service->ID) ?: 'Tools,-Settings'; ?>
			<a href="<?php echo esc_url(get_permalink($service)); ?>" class="group flex flex-col justify-between gap-5 rounded-2xl border border-cynWhite bg-cynYellowLight p-8 transition-all duration-300 hover:bg-cynYellow hover:shadow-[0_4px_9px_0_rgba(0,0,0,0.08)] <?php echo $i % 3 === 0 ? 'max-lg:col-span-2' : ''; ?>">
				<i class="size-10 flex shrink-0 items-center justify-center text-cynTextBlack lg:size-[50px] [&_svg]:size-full [&_svg]:stroke-2" aria-hidden="true">
					<?php Icon::print($icon); ?>
				</i>
				<span class="flex items-center justify-between gap-2">
					<span class="text-sm lg:text-base font-semibold text-cynTextBlack">
						<?php echo esc_html($service->post_title); ?>
					</span>
					<i class="size-6 flex shrink-0 items-center justify-center text-cynTextBlack [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
						<?php Icon::print('Arrow-23'); ?>
					</i>
				</span>
			</a>
		<?php endforeach; ?>
	</div>

</section>
