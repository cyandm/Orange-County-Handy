<?php

/**
 * Service About — title and description beside an image
 * @package CyanTheme
 */

$text = get_field('service_about_text');

if (! $text) return;

$title = get_field('service_about_title') ?: get_the_title();
$image_id = (int) get_field('service_about_image');
?>

<section id="service-about" class="container">

	<div class="relative flex flex-col gap-3 overflow-hidden lg:rounded-2xl lg:bg-cynBgBase lg:px-[30px] lg:py-14">

		<?php if ($image_id) : ?>
			<div class="relative h-64 w-full overflow-hidden rounded-2xl lg:absolute lg:inset-y-0 lg:end-0 lg:h-full lg:w-[53%] lg:rounded-none">
				<?php echo wp_get_attachment_image($image_id, 'large', false, ['class' => 'size-full object-cover', 'alt' => esc_attr($title)]); ?>
				<span class="absolute inset-y-0 start-0 hidden w-64 bg-gradient-to-r from-cynBgBase to-transparent lg:block" aria-hidden="true"></span>
			</div>
		<?php endif; ?>

		<div class="relative flex flex-col gap-3 lg:w-[53%] lg:gap-5">
			<h2 class="text-xl lg:text-3xl font-extrabold lg:leading-14 text-cynYellow">
				<?php echo esc_html($title); ?>
			</h2>
			<p class="text-base font-medium text-cynTextBlack">
				<?php echo esc_html($text); ?>
			</p>
		</div>

	</div>

</section>