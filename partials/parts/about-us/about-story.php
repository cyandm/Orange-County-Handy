<?php

/**
 * About Us — our story timeline
 * @package CyanTheme
 */

$label = get_field('about_story_label') ?: __('OUR STORY', 'orange-county-handy');
$title = get_field('about_story_title') ?: __('Built One Project at a Time.', 'orange-county-handy');
$text = get_field('about_story_text') ?: __('Orange County Handy grew from a simple idea: make home repairs and improvements easier for homeowners. With a focus on dependable service, clear communication, and careful workmanship, the business has grown through the trust of the people it serves.', 'orange-county-handy');

$defaults = [
	1 => [
		'title' => __('01 — Where It Started', 'orange-county-handy'),
		'text' => __('Orange County Handy began with a hands-on approach to the everyday repairs and improvement projects homeowners needed done properly.', 'orange-county-handy'),
	],
	2 => [
		'title' => __('02 — Built Through Trust', 'orange-county-handy'),
		'text' => __('As more homeowners called back and referred others, the business continued to grow through dependable service, clear communication, and attention to detail.', 'orange-county-handy'),
	],
	3 => [
		'title' => __('03 — Expanding the Work', 'orange-county-handy'),
		'text' => __('Over time, the range of projects grew to include repairs, installations, maintenance, and finishing work across a variety of home needs.', 'orange-county-handy'),
	],
	4 => [
		'title' => __('04 — Where We Are Today', 'orange-county-handy'),
		'text' => __('Today, Orange County Handy continues to serve homeowners across Orange County with practical solutions, quality workmanship, and a personal approach to every job.', 'orange-county-handy'),
	],
];

$steps = [];
foreach ($defaults as $i => $default) {
	$steps[] = [
		'title' => get_field("about_story_{$i}_title") ?: $default['title'],
		'text' => get_field("about_story_{$i}_text") ?: $default['text'],
	];
}
?>

<section id="about-story" class="container flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">

	<div class="flex flex-col gap-3 lg:max-w-[620px]">
		<p class="text-base font-medium text-cynTextBlack lg:text-xl">
			<?php echo esc_html($label); ?>
		</p>
		<div class="flex flex-col gap-1 lg:gap-0">
			<h2 class="text-2xl font-extrabold text-cynTextBlack lg:text-4xl lg:leading-[52px]">
				<?php echo esc_html($title); ?>
			</h2>
			<p class="text-sm font-normal text-cynTextBlack lg:text-base">
				<?php echo esc_html($text); ?>
			</p>
		</div>
	</div>

	<div class="flex gap-6 lg:max-w-96 lg:gap-12">

		<div class="relative hidden w-1 shrink-0 self-stretch rounded-2xl bg-cynBorder lg:block lg:max-h-[260px]" aria-hidden="true">
			<span id="about-story-progress" class="absolute inset-x-0 top-0 rounded-2xl bg-cynYellow transition-all duration-300" style="height:20px"></span>
		</div>

		<div class="relative min-w-0 flex-1">
			<div id="about-story-scroll" class="scrollbar relative flex flex-col gap-10 lg:max-h-[260px] lg:gap-7 lg:snap-y lg:snap-mandatory lg:overflow-y-auto lg:pb-40">
				<span class="pointer-events-none absolute inset-y-1 start-[10px] w-1 -translate-x-1/2 rounded-2xl bg-cynBorder lg:hidden" aria-hidden="true"></span>

				<?php foreach ($steps as $index => $step) : ?>
					<div class="about-story-step relative flex gap-6 text-cynBorder transition-all duration-300 data-[state=active]:text-cynTextBlack lg:snap-start lg:text-cynTextBlack" data-index="<?php echo esc_attr((string) $index); ?>" data-state="<?php echo $index === 0 ? 'active' : 'idle'; ?>">
						<span class="about-story-dot relative z-10 mt-1 size-5 shrink-0 rounded-full bg-cynYellowLight transition-all duration-300 data-[state=active]:bg-cynYellow lg:hidden" data-state="<?php echo $index === 0 ? 'active' : 'idle'; ?>" aria-hidden="true"></span>
						<div class="flex flex-col gap-3">
							<h3 class="text-xl font-bold capitalize">
								<?php echo esc_html($step['title']); ?>
							</h3>
							<p class="text-base font-medium capitalize">
								<?php echo esc_html($step['text']); ?>
							</p>
						</div>
					</div>
				<?php endforeach; ?>
			</div>

			<div class="about-story-fade pointer-events-none absolute inset-x-0 bottom-0 hidden h-[70%] bg-gradient-to-b from-transparent to-cynBgBase transition-opacity duration-300 lg:block" aria-hidden="true"></div>
		</div>

	</div>

</section>
