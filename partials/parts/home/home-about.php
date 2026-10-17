<?php

/**
 * Home About — intro card with trust badges and a fanned Swiper photo stack
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

$title = get_field('home_about_title') ?: __('Meet Orange County Handy', 'orange-county-handy');
$text = get_field('home_about_text') ?: __('Orange County Handy is built on reliable service, clear communication, and taking pride in every job.', 'orange-county-handy');
$about_url = Templates::getPageUrl('about-us');

$badges = [
	1 => ['icon' => 'star-favorite', 'title' => __('5 star customer feedback', 'orange-county-handy')],
	2 => ['icon' => 'calendar-house-checkamark', 'title' => __('fully insured', 'orange-county-handy')],
	3 => ['icon' => 'Alarm,-Clock,-Time,-Timer-3', 'title' => __('on time and reliable', 'orange-county-handy')],
];

$photos = array_values(array_filter([(int) get_field('home_about_image_1'), (int) get_field('home_about_image_2'), (int) get_field('home_about_image_3')]));
?>

<section id="home-about" class="container">

	<div class="flex flex-col items-center gap-6 overflow-hidden bg-cynBG px-3 pt-5 pb-10 shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] max-lg:-mx-4 lg:mx-auto lg:max-w-[880px] lg:flex-row lg:justify-between lg:gap-10 lg:rounded-2xl lg:px-[30px] lg:py-[38px]">

		<div class="flex flex-col items-center gap-3 text-center lg:max-w-[400px] lg:items-start lg:gap-5 lg:text-start">

			<div class="flex flex-col gap-2">
				<h2 class="text-xl lg:text-3xl font-bold lg:font-extrabold capitalize text-cynTextBlack">
					<?php echo esc_html($title); ?>
				</h2>
				<div class="text-sm lg:text-base font-normal text-cynTextBlack">
					<?php echo wp_kses_post($text); ?>
				</div>
			</div>

			<div class="flex items-center gap-2.5 lg:gap-5">
				<?php foreach ($badges as $i => $badge) : ?>
					<div class="flex items-center gap-2 text-start <?php echo $i < count($badges) ? 'border-e border-cynBorder pe-2.5 lg:pe-5' : ''; ?>">
						<i class="size-5.5 flex shrink-0 items-center justify-center text-cynYellow [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
							<?php Icon::print($badge['icon']); ?>
						</i>
						<span class="max-w-20 text-[10px] font-normal text-cynTextGray">
							<?php echo esc_html(get_field("home_about_badge_{$i}") ?: $badge['title']); ?>
						</span>
					</div>
				<?php endforeach; ?>
			</div>

			<?php if ($about_url) : ?>
				<a href="<?php echo esc_url($about_url); ?>" class="primary-btn">
					<?php esc_html_e('learn more about us', 'orange-county-handy'); ?>
				</a>
			<?php endif; ?>

		</div>

		<?php if ($photos) : ?>
			<div class="flex h-[270px] w-[330px] max-w-full shrink-0 items-center justify-center">
				<swiper-container class="home-about-photos h-60 w-52" init="false">
					<?php foreach ($photos as $photo_id) : ?>
						<swiper-slide class="overflow-hidden rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
							<?php echo wp_get_attachment_image($photo_id, 'medium_large', false, ['class' => 'size-full object-cover', 'alt' => esc_attr($title)]); ?>
						</swiper-slide>
					<?php endforeach; ?>
				</swiper-container>
			</div>
		<?php endif; ?>

	</div>

</section>