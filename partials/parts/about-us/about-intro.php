<?php

/**
 * About Us — intro / meet the craftsman
 * @package CyanTheme
 */

$main_id = get_field('about_intro_main');
$accent_color = get_field('about_intro_accent_color') ?: '#F4C400';
$side_id = get_field('about_intro_side');
$title = get_field('about_intro_title') ?: __('Meet the Craftsman Behind Orange County Handy', 'orange-county-handy');
$text = get_field('about_intro_text') ?: __("Orange County Handy isn’t built around call centers, random contractors, or complicated processes.\nIt’s built around hands-on work and personal service.\nFrom the first conversation to the final details, the goal has always been simple:", 'orange-county-handy');
$emphasis = get_field('about_intro_emphasis') ?: __('understand what needs to be done, do it carefully, and make the whole process easier for the homeowner.', 'orange-county-handy');
$quote = get_field('about_intro_quote') ?: __("One point of contact.\nClear communication.\nWork done with care.", 'orange-county-handy');
?>

<section class="container flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">

	<div class="relative w-full shrink-0 pb-8 pe-5 lg:w-[33%] lg:pb-10 lg:pe-6">
		<?php if ($main_id) : ?>
			<div class="overflow-hidden rounded-2xl">
				<?php echo wp_get_attachment_image((int) $main_id, 'large', false, ['class' => 'w-full h-72 sm:h-96 lg:h-80 object-cover', 'alt' => esc_attr($title)]); ?>
			</div>
		<?php endif; ?>

		<div class="absolute end-0 bottom-6 z-10 translate-x-1 translate-y-2 lg:translate-x-2 lg:translate-y-3">
			<div class="relative rounded-2xl shadow-[0_4px_9px_rgba(0,0,0,0.10),0_15px_15px_rgba(0,0,0,0.09)]">
				<div class="relative h-40 w-[calc(8rem+15px)] overflow-hidden rounded-2xl lg:h-44 lg:w-[calc(9rem+15px)]">
					<div class="absolute start-0 top-0 h-40 w-32 rounded-2xl lg:h-44 lg:w-36" style="background-color: <?php echo esc_attr($accent_color); ?>" aria-hidden="true"></div>
					<?php if ($side_id) : ?>
						<div class="absolute start-[15px] top-0 h-40 w-32 overflow-hidden rounded-e-2xl lg:h-44 lg:w-36">
							<?php echo wp_get_attachment_image((int) $side_id, 'medium', false, ['class' => 'size-full object-cover', 'alt' => '']); ?>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-1 flex-col items-center gap-4 text-center lg:items-start lg:text-start">

		<div class="flex flex-col gap-2">
			<h1 class="text-xl font-extrabold text-cynTextBlack lg:max-w-96 lg:text-3xl lg:leading-10">
				<?php echo esc_html($title); ?>
			</h1>
			<p class="text-sm font-normal text-cynTextBlack lg:text-base">
				<?php echo nl2br(esc_html($text)); ?>
				<span class="font-semibold">
					<?php echo esc_html($emphasis); ?>
				</span>
			</p>
		</div>

		<p class="font-cursive text-xl font-normal leading-6 text-cynTextBlack">
			<?php echo nl2br(esc_html($quote)); ?>
		</p>

		<svg class="w-[181px]" width="181" height="18" viewBox="0 0 181 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path d="M2.00053 15.1404C2.00053 15.1404 54.4336 4.11962 88.3515 2.35365C123.315 0.533275 178.073 6.33774 178.073 6.33774" stroke="url(#about-intro-underline)" stroke-width="4" stroke-linecap="round" />
			<defs>
				<linearGradient id="about-intro-underline" x1="1.57876" y1="15.6616" x2="179.012" y2="7.19189" gradientUnits="userSpaceOnUse">
					<stop stop-color="#F8ECBB" />
					<stop offset="1" stop-color="#F4C400" />
				</linearGradient>
			</defs>
		</svg>

	</div>

</section>
