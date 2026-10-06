<?php

/**
 * Services Hero — archive intro with image, quote and call buttons
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$title = get_option('services_archive_title') ?: __('Our Services', 'orange-county-handy');
$text = get_option('services_archive_text') ?: __('From everyday repairs and maintenance to installations, painting, plumbing, electrical work, and custom woodwork, Orange County Handy is here to help you take care of the jobs on your list.', 'orange-county-handy');
$image = get_option('services_archive_image');

$quote_url = Templates::getPageUrl('get-quote');
$phone_number = get_option('phone_number');
?>

<section id="services-hero" class="relative overflow-hidden lg:bg-cynBG">

	<?php if ($image) : ?>
		<div class="relative w-full h-56 lg:absolute lg:inset-y-0 lg:end-0 lg:h-full lg:w-[55%]">
			<img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr($title); ?>" class="size-full object-cover">
			<span class="absolute inset-y-0 start-0 hidden w-64 bg-gradient-to-r from-cynBG to-transparent lg:block" aria-hidden="true"></span>
		</div>
	<?php endif; ?>

	<div class="container relative flex flex-col gap-3 pt-3 lg:gap-6 lg:py-20">

		<div class="flex flex-col gap-1 lg:w-1/2 lg:gap-0">
			<h1 class="text-2xl lg:text-4xl font-extrabold leading-8 lg:leading-[52px] text-cynTextBlack">
				<?php echo esc_html($title); ?>
			</h1>
			<p class="text-xs lg:text-xl font-medium lg:font-normal text-cynTextBlack">
				<?php echo esc_html($text); ?>
			</p>
		</div>

		<div class="flex items-center gap-2">
			<?php if ($quote_url) : ?>
				<a href="<?php echo esc_url($quote_url); ?>" class="primary-btn flex-1 text-center lg:flex-none">
					<?php esc_html_e('get a fast quote', 'orange-county-handy'); ?>
				</a>
			<?php endif; ?>
			<?php if ($phone_number) : ?>
				<a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone_number)); ?>" class="secondary-btn text-center">
					<?php echo esc_html(sprintf(__('Call or Text: %s', 'orange-county-handy'), $phone_number)); ?>
				</a>
			<?php endif; ?>
		</div>

	</div>

</section>
