<?php

/**
 * About Us — values banner
 * @package CyanTheme
 */

$label = get_field('about_values_label') ?: __('WHAT WE’RE BUILT ON', 'orange-county-handy');
$title = get_field('about_values_title') ?: __('The values behind every job.', 'orange-county-handy');

$defaults = [
	1 => ['title' => __('Hands-On Service', 'orange-county-handy'), 'text' => __('Personal attention from start to finish.', 'orange-county-handy')],
	2 => ['title' => __('Pride in the Details', 'orange-county-handy'), 'text' => __('Careful work, down to the last detail.', 'orange-county-handy')],
	3 => ['title' => __('Trust & Reliability', 'orange-county-handy'), 'text' => __('Clear, dependable, and straightforward.', 'orange-county-handy')],
	4 => ['title' => __('Local Commitment', 'orange-county-handy'), 'text' => __('Proudly serving Orange County homeowners.', 'orange-county-handy')],
];

$values = [];
foreach ($defaults as $i => $default) {
	$values[] = [
		'num' => str_pad((string) $i, 2, '0', STR_PAD_LEFT),
		'title' => get_field("about_value_{$i}_title") ?: $default['title'],
		'text' => get_field("about_value_{$i}_text") ?: $default['text'],
	];
}
?>

<section class="container">
	<div class="flex flex-col gap-10 rounded-2xl bg-cynBlack px-6 py-10 lg:flex-row lg:items-center lg:gap-10 lg:px-[60px] lg:py-10">

		<div class="flex flex-col gap-2 text-center lg:shrink-0 lg:text-start lg:max-w-64">
			<p class="text-sm font-normal text-cynYellow lg:text-base">
				<?php echo esc_html($label); ?>
			</p>
			<h2 class="text-2xl font-extrabold text-cynTextWhite lg:text-3xl lg:leading-10">
				<?php echo esc_html($title); ?>
			</h2>
		</div>

		<div class="flex flex-col items-center gap-7 lg:flex-1 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
			<?php foreach ($values as $value) : ?>
				<div class="flex w-full max-w-36 flex-col gap-2">
					<div class="border-b border-cynYellow pb-2">
						<span class="text-3xl font-extrabold leading-10 text-cynYellow">
							<?php echo esc_html($value['num']); ?>
						</span>
					</div>
					<div class="flex flex-col gap-1">
						<p class="text-base font-semibold text-cynTextWhite">
							<?php echo esc_html($value['title']); ?>
						</p>
						<p class="text-sm font-normal text-cynTextWhite">
							<?php echo esc_html($value['text']); ?>
						</p>
					</div>
				</div>
			<?php endforeach; ?>
		</div>

	</div>
</section>
