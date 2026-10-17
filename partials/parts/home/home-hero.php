<?php

/**
 * Home Hero — title with a highlighted word, text and buttons beside a fading image
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$image_id = (int) get_field('home_hero_image');
$title = get_field('home_hero_title') ?: __('Your trusted handyman services in orange county', 'orange-county-handy');
$highlight = get_field('home_hero_highlight') ?: __('handyman', 'orange-county-handy');
$text = get_field('home_hero_text') ?: __('Your trusted partner for premium home maintenance across Orange County. We deliver top-tier handyman services, custom carpentry, drywall, painting, plumbing, electrical work, and flawless door and cabinet installations.', 'orange-county-handy');

$title_html = esc_html($title);
if ($highlight) $title_html = preg_replace('/' . preg_quote(esc_html($highlight), '/') . '/i', '<span class="text-cynYellow">$0</span>', $title_html, 1);
?>

<section id="home-hero" class="relative overflow-hidden lg:bg-cynBG">

	<?php if ($image_id) : ?>
		<div class="relative h-64 w-full bg-cynBG lg:absolute lg:inset-y-0 lg:end-0 lg:h-auto lg:w-[57%]">
			<?php echo wp_get_attachment_image($image_id, 'full', false, ['class' => 'size-full object-cover', 'alt' => esc_attr($title), 'fetchpriority' => 'high']); ?>
			<span class="absolute inset-y-0 start-0 hidden w-64 bg-linear-to-r from-cynBG to-cynBG/0 lg:block" aria-hidden="true"></span>
		</div>
	<?php endif; ?>

	<div class="container relative flex flex-col gap-3 pt-3 lg:gap-5 lg:pt-10 lg:pb-32">
		<div class="flex flex-col gap-1 lg:max-w-[620px] lg:gap-0">
			<h1 class="text-2xl lg:text-4xl font-extrabold leading-8 lg:leading-[52px] text-cynTextBlack capitalize">
				<?php echo wp_kses($title_html, ['span' => ['class' => []]]); ?>
			</h1>
			<?php if ($text) : ?>
				<div class="text-xs lg:text-xl font-medium text-cynTextBlack">
					<?php echo wp_kses_post($text); ?>
				</div>
			<?php endif; ?>
		</div>
		<?php Templates::getPart('services/services-buttons', ['on_yellow' => false]); ?>
	</div>

</section>