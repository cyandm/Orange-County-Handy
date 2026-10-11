<?php

/**
 * Service Hero — yellow band with title, subtitle and featured image, cut by a curve at the bottom
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$subtitle = get_field('service_hero_subtitle');
$has_image = has_post_thumbnail();
?>

<section id="service-hero" class="relative">

	<div class="overflow-hidden md:absolute md:inset-0 md:block md:h-auto <?php echo $has_image ? 'relative h-[203px]' : 'hidden'; ?>">
		<span class="absolute inset-0 bg-cynYellow <?php echo $has_image ? 'xl:bg-linear-to-r xl:from-cynYellow xl:from-60% xl:to-cynYellowLight xl:to-60% 2xl:bg-none' : ''; ?>" aria-hidden="true"></span>
		<?php if ($has_image) : ?>
			<div class="container relative h-full">
				<div class="absolute isolate end-4 top-0 h-48 w-72 before:absolute before:top-0 before:-bottom-[11px] before:start-[22%] before:-end-[100vw] before:-z-10 before:bg-cynYellowLight before:content-[''] md:bottom-6 md:h-auto md:w-1/2 md:before:-bottom-6 md:before:start-[20%] lg:bottom-8 lg:before:-bottom-8 xl:before:hidden 2xl:before:block 2xl:before:start-[40%]">
					<?php the_post_thumbnail('large', ['class' => 'size-full object-contain object-right-top', 'alt' => esc_attr(get_the_title())]); ?>
				</div>
			</div>
		<?php endif; ?>
		<svg class="absolute inset-x-0 bottom-0 h-[47px] w-full text-cynBgBase md:h-[72px] lg:h-[101px]" viewBox="0 0 1280 101" preserveAspectRatio="none" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 101C0 101 387.989 0.454 641 0.552C893.239 0.65 1280 101 1280 101H0Z" />
		</svg>
	</div>

	<div class="container relative flex flex-col gap-3 md:gap-5 md:pt-12 md:pb-28 lg:gap-6 lg:pt-16 lg:pb-40 <?php echo $has_image ? 'pt-6' : ''; ?>">
		<div class="flex flex-col gap-1 md:w-1/2 lg:gap-0">
			<h1 class="text-2xl lg:text-4xl font-extrabold leading-8 lg:leading-[52px] text-cynTextBlack">
				<?php the_title(); ?>
			</h1>
			<?php if ($subtitle) : ?>
				<p class="text-xs lg:text-base font-medium lg:font-normal text-cynTextBlack">
					<?php echo esc_html($subtitle); ?>
				</p>
			<?php endif; ?>
		</div>
		<?php Templates::getPart('services/services-buttons', ['on_yellow' => true]); ?>
	</div>

</section>