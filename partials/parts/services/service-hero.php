<?php

/**
 * Service Hero — yellow band with title, subtitle and featured image, cut by a curve at the bottom
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$subtitle = get_field('service_hero_subtitle');
$has_image = has_post_thumbnail();
$two_tone_raw = get_field('service_hero_two_tone');
$two_tone = $has_image && ($two_tone_raw === null || $two_tone_raw === '' ? true : (bool) $two_tone_raw);
$yellow_split = max(30, min(90, (int) (get_field('service_hero_yellow_split') ?: 60)));
$before_start = max(0, min(100, (int) round(($yellow_split - 50) * 2)));
$hero_style = $two_tone ? '--service-hero-yellow-split:' . $yellow_split . '%;--service-hero-before-start:' . $before_start . '%' : '';
?>

<section id="service-hero" class="relative" <?php echo $hero_style ? 'style="' . esc_attr($hero_style) . '"' : ''; ?>>

	<div class="overflow-hidden md:absolute md:inset-0 md:block md:h-auto <?php echo $has_image ? 'relative h-[203px]' : 'hidden'; ?>">
		<span class="absolute inset-0 bg-cynYellow <?php echo $two_tone ? 'xl:bg-[linear-gradient(to_right,var(--color-cynYellow)_var(--service-hero-yellow-split),var(--color-cynYellowLight)_var(--service-hero-yellow-split))]' : ''; ?>" aria-hidden="true"></span>
		<?php if ($has_image) : ?>
			<div class="container relative h-full">
				<div class="absolute isolate end-4 top-0 h-48 w-72 md:bottom-6 md:h-auto md:w-1/2 lg:bottom-8 <?php echo $two_tone ? "before:absolute before:top-0 before:-bottom-[11px] before:start-[var(--service-hero-before-start)] before:-end-[100vw] before:-z-10 before:bg-cynYellowLight before:content-[''] md:before:-bottom-6 lg:before:-bottom-8 xl:before:hidden" : ''; ?>">
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
				<div class="text-xs lg:text-base font-medium lg:font-normal text-cynTextBlack">
					<?php echo wp_kses_post($subtitle); ?>
				</div>
			<?php endif; ?>
		</div>
		<?php Templates::getPart('services/services-buttons', ['on_yellow' => true]); ?>
	</div>

</section>