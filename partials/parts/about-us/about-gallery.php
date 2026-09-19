<?php

/**
 * About Us — on the job gallery
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$title = get_field('about_gallery_title') ?: __('On the Job With Orange County Handy', 'orange-county-handy');
$ids = [];
for ($i = 1; $i <= 8; $i++) {
	$id = (int) get_field("about_gallery_{$i}");
	if ($id) $ids[] = $id;
}

if (! $ids) return;

$nav_btn = 'size-12 shrink-0 items-center justify-center rounded-[30px] bg-cynYellow text-cynTextBlack outline outline-1 -outline-offset-1 outline-cynYellow transition-all duration-300';
?>

<section class="container flex flex-col gap-3 lg:gap-6">

	<h2 class="text-center text-lg font-extrabold capitalize text-cynTextBlack lg:text-3xl">
		<?php echo esc_html($title); ?>
	</h2>

	<div class="flex flex-col items-center gap-3 lg:gap-6">

		<div class="flex w-full items-center gap-3">

			<button type="button" class="about-gallery-prev relative z-10 hidden <?php echo esc_attr($nav_btn); ?> lg:flex" aria-label="<?php esc_attr_e('Previous photos', 'orange-county-handy'); ?>">
				<i class="size-3 flex items-center justify-center rotate-180 [&_svg]:size-full [&_svg]:stroke-[1.5]">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>

			<div class="about-gallery-track min-w-0 flex-1 overflow-hidden">
				<swiper-container class="about-gallery-swiper w-full" init="false">
					<?php foreach ($ids as $image_id) : ?>
						<?php $full = wp_get_attachment_image_url($image_id, 'full'); ?>
						<swiper-slide class="!h-auto">
							<a href="<?php echo esc_url($full); ?>" class="about-gallery-lightbox about-gallery-slide block w-full cursor-pointer overflow-hidden rounded-lg lg:rounded-xl">
								<?php echo wp_get_attachment_image($image_id, 'large', false, ['class' => 'about-gallery-slide__img w-full object-cover pointer-events-none', 'alt' => esc_attr(get_post_meta($image_id, '_wp_attachment_image_alt', true) ?: $title)]); ?>
							</a>
						</swiper-slide>
					<?php endforeach; ?>
				</swiper-container>
			</div>

			<button type="button" class="about-gallery-next relative z-10 hidden <?php echo esc_attr($nav_btn); ?> lg:flex" aria-label="<?php esc_attr_e('Next photos', 'orange-county-handy'); ?>">
				<i class="size-3 flex items-center justify-center [&_svg]:size-full [&_svg]:stroke-[1.5]">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>

		</div>

		<div class="flex items-center gap-3 lg:hidden">
			<button type="button" class="about-gallery-prev flex <?php echo esc_attr($nav_btn); ?>" aria-label="<?php esc_attr_e('Previous photos', 'orange-county-handy'); ?>">
				<i class="size-3 flex items-center justify-center rotate-180 [&_svg]:size-full [&_svg]:stroke-[1.5]">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>
			<button type="button" class="about-gallery-next flex <?php echo esc_attr($nav_btn); ?>" aria-label="<?php esc_attr_e('Next photos', 'orange-county-handy'); ?>">
				<i class="size-3 flex items-center justify-center [&_svg]:size-full [&_svg]:stroke-[1.5]">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>
		</div>

		<div class="about-gallery-pagination flex items-center justify-center gap-1"></div>

	</div>

</section>
