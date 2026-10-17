<?php

/**
 * Home Steps — how it works, big numbers half covered by a full-width shadowed band holding the step texts
 * @package CyanTheme
 */

$title = get_field('home_steps_title') ?: __('how it works', 'orange-county-handy');

$defaults = [
	1 => ['title' => __('Tell Us What You Need', 'orange-county-handy'), 'text' => __('Send a short description of the repair, installation or home project. Adding photos helps us understand the work faster.', 'orange-county-handy')],
	2 => ['title' => __('Receive a Clear Response', 'orange-county-handy'), 'text' => __('We review the details, confirm the service area and discuss the expected scope, scheduling and next steps.', 'orange-county-handy')],
	3 => ['title' => __('Get It Taken Care Of', 'orange-county-handy'), 'text' => __('Your handyman arrives prepared, completes the agreed work and leaves the area clean.', 'orange-county-handy')],
];

$band = "before:absolute before:inset-y-0 before:-inset-x-4 before:-z-10 before:bg-cynBgBase before:shadow-[0_-2.5px_3px_0_rgba(0,0,0,0.09)] before:content-[''] lg:before:-inset-x-[100vw] lg:before:shadow-[0_-8px_10px_0_rgba(0,0,0,0.06)]";
?>

<section id="home-steps" class="flex flex-col overflow-hidden">

	<h2 class="text-center text-xl lg:text-3xl font-extrabold capitalize text-cynTextBlack">
		<?php echo esc_html($title); ?>
	</h2>

	<div class="container grid lg:max-w-[1032px] lg:grid-cols-3">
		<?php foreach ($defaults as $i => $step) : ?>
			<div class="flex flex-col items-center">
				<span class="text-7xl lg:text-9xl font-semibold leading-none text-cynTextBlack">
					<?php echo esc_html(str_pad((string) $i, 2, '0', STR_PAD_LEFT)); ?>
				</span>
				<div class="relative isolate z-[1] -mt-7 flex w-full flex-1 flex-col items-center gap-2 pt-6 pb-8 text-center lg:-mt-[54px] lg:pt-10 lg:pb-16 <?php echo esc_attr($band); ?> <?php echo $i > 1 ? 'lg:before:hidden' : ''; ?>">
					<h3 class="max-w-44 text-base font-semibold text-cynTextBlack lg:max-w-36">
						<?php echo esc_html(get_field("home_step_{$i}_title") ?: $step['title']); ?>
					</h3>
					<div class="max-w-44 text-sm lg:text-xs font-normal text-cynTextBlack lg:max-w-36">
						<?php echo wp_kses_post(get_field("home_step_{$i}_text") ?: $step['text']); ?>
					</div>
				</div>
			</div>
		<?php endforeach; ?>
	</div>

</section>