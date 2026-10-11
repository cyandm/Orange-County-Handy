<?php

/**
 * Gallery Slider — centered photo swiper with lightbox, five on desktop and three below lg
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$args = get_query_var('args', []);
$ids = array_values(array_filter(array_map('intval', $args['ids'] ?? [])));
$title = $args['title'] ?? '';
$gray = ! empty($args['gray']);

if (! $ids) return;

$nav_btn = 'size-12 shrink-0 items-center justify-center rounded-[30px] bg-cynYellow text-cynTextBlack outline outline-1 -outline-offset-1 outline-cynYellow transition-all duration-300';
?>

<section class="gallery-slider <?php echo $gray ? 'gallery-slider--gray' : ''; ?> container flex flex-col gap-3 lg:gap-6">

	<?php if ($title) : ?>
		<h2 class="text-center <?php echo esc_attr($args['title_size'] ?? 'text-lg'); ?> font-extrabold capitalize text-cynTextBlack lg:text-3xl">
			<?php echo esc_html($title); ?>
		</h2>
	<?php endif; ?>

	<div class="flex flex-col items-center gap-3 lg:gap-6">

		<div class="flex w-full items-center gap-3">

			<button type="button" class="gallery-slider-prev relative z-10 hidden <?php echo esc_attr($nav_btn); ?> lg:flex" aria-label="<?php esc_attr_e('Previous photos', 'orange-county-handy'); ?>">
				<i class="size-3 flex items-center justify-center rotate-180 [&_svg]:size-full [&_svg]:stroke-[1.5]">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>

			<div class="gallery-slider-track min-w-0 flex-1 overflow-hidden lg:px-5 lg:pt-6 lg:pb-8">
				<swiper-container class="gallery-slider-swiper w-full" init="false">
					<?php foreach ($ids as $image_id) : ?>
						<?php $full = wp_get_attachment_image_url($image_id, 'full'); ?>
						<swiper-slide class="!h-auto">
							<a href="<?php echo esc_url($full); ?>" class="gallery-slider-lightbox gallery-slider-slide block w-full cursor-pointer overflow-hidden rounded-lg lg:rounded-xl lg:[.swiper-slide-active_&]:shadow-[0_3.5px_3.5px_0_rgba(0,0,0,0.25)]">
								<?php echo wp_get_attachment_image($image_id, 'large', false, ['class' => 'gallery-slider-slide__img w-full object-cover pointer-events-none rounded-lg lg:rounded-xl', 'alt' => esc_attr(get_post_meta($image_id, '_wp_attachment_image_alt', true) ?: $title)]); ?>
							</a>
						</swiper-slide>
					<?php endforeach; ?>
				</swiper-container>
			</div>

			<button type="button" class="gallery-slider-next relative z-10 hidden <?php echo esc_attr($nav_btn); ?> lg:flex" aria-label="<?php esc_attr_e('Next photos', 'orange-county-handy'); ?>">
				<i class="size-3 flex items-center justify-center [&_svg]:size-full [&_svg]:stroke-[1.5]">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>

		</div>

		<div class="flex items-center gap-3 lg:hidden">
			<button type="button" class="gallery-slider-prev flex <?php echo esc_attr($nav_btn); ?>" aria-label="<?php esc_attr_e('Previous photos', 'orange-county-handy'); ?>">
				<i class="size-3 flex items-center justify-center rotate-180 [&_svg]:size-full [&_svg]:stroke-[1.5]">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>
			<button type="button" class="gallery-slider-next flex <?php echo esc_attr($nav_btn); ?>" aria-label="<?php esc_attr_e('Next photos', 'orange-county-handy'); ?>">
				<i class="size-3 flex items-center justify-center [&_svg]:size-full [&_svg]:stroke-[1.5]">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>
		</div>

		<div class="gallery-slider-pagination hidden items-center justify-center gap-1 lg:flex"></div>

	</div>

</section>