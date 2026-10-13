<?php

/**
 * Home Features — three trust points, a dotted marquee bar on mobile and icon cards overlapping the hero on desktop
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$title = get_field('home_features_title') ?: __('why Choose us for Handyman services?', 'orange-county-handy');

$defaults = [
	1 => ['icon' => 'invoice-checkmark', 'title' => __('Free Estimates', 'orange-county-handy')],
	2 => ['icon' => 'builder-checkmark', 'title' => __('Craftsmanship Warranty', 'orange-county-handy')],
	3 => ['icon' => 'Shield,-Protected,-Checkmark', 'title' => __('Fully Insured', 'orange-county-handy')],
];

$features = [];
foreach ($defaults as $i => $feature) {
	$features[] = ['icon' => $feature['icon'], 'title' => get_field("home_feature_{$i}_title") ?: $feature['title']];
}
?>

<section id="home-features" class="container relative z-10 flex flex-col gap-3 lg:-mt-36">

	<h2 class="text-center text-xl font-extrabold capitalize text-cynTextBlack lg:sr-only">
		<?php echo esc_html($title); ?>
	</h2>

	<div class="-mx-4 overflow-hidden bg-cynBG py-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.08)] lg:hidden">
		<div class="flex w-max items-center gap-5 will-change-transform" data-marquee>
			<?php foreach ($features as $feature) : ?>
				<span class="flex shrink-0 items-center gap-1">
					<span class="size-2.5 shrink-0 rounded-full bg-cynYellow" aria-hidden="true"></span>
					<span class="text-xs font-semibold text-cynTextBlack">
						<?php echo esc_html($feature['title']); ?>
					</span>
				</span>
			<?php endforeach; ?>
		</div>
	</div>

	<div class="mx-auto hidden items-stretch gap-6 rounded-3xl bg-cynBG p-3 shadow-[0_4px_9px_0_rgba(0,0,0,0.08)] lg:flex">
		<?php foreach ($features as $feature) : ?>
			<div class="flex w-56 flex-col items-center justify-between gap-3.5 rounded-2xl border border-cynBorder p-6">
				<i class="size-6 flex shrink-0 items-center justify-center text-cynYellow [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
					<?php Icon::print($feature['icon']); ?>
				</i>
				<span class="text-center text-base font-semibold text-cynTextBlack min-h-12 flex items-center justify-center">
					<?php echo esc_html($feature['title']); ?>
				</span>
			</div>
		<?php endforeach; ?>
	</div>

</section>