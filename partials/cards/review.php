<?php

/**
 * Review Card
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$reviewer_name = get_field('reviewer_name') ?: get_the_title();
$rating = (int) get_field('rating');
$initial = mb_strtoupper(mb_substr(trim(wp_strip_all_tags($reviewer_name)), 0, 1));
$content = wp_strip_all_tags(get_the_content());
?>

<div class="mb-3 flex animate-fade-in-up break-inside-avoid cursor-pointer flex-col gap-2 rounded-2xl bg-cynBG p-3 transition-all duration-300 hover:shadow-[0_4px_9px_0_rgba(0,0,0,0.08)] lg:gap-3">

	<h2 class="text-sm lg:text-base font-semibold text-cynTextBlack">
		<?php the_title('&ldquo;', '&rdquo;'); ?>
	</h2>

	<?php if ($content) : ?>
		<p class="text-xs lg:text-sm font-normal leading-5 lg:leading-6 text-cynTextGray">
			<?php echo esc_html($content); ?>
		</p>
	<?php endif; ?>

	<?php Templates::getPart('rating-stars', ['rating' => $rating, 'size' => 'size-5']); ?>

	<div class="flex items-center gap-3">
		<span class="flex size-7.5 lg:size-10 shrink-0 items-center justify-center rounded-full bg-cynYellow text-sm lg:text-base font-normal text-cynTextWhite" aria-hidden="true">
			<?php echo esc_html($initial); ?>
		</span>
		<div class="flex flex-col gap-1 lg:gap-2">
			<span class="text-xs lg:text-sm font-normal text-cynTextBlack">
				<?php echo esc_html($reviewer_name); ?>
			</span>
			<time class="text-xs lg:text-sm font-normal text-cynTextGray" datetime="<?php echo esc_attr(get_the_date('c')); ?>">
				<?php echo esc_html(get_the_date('Y.m.d')); ?>
			</time>
		</div>
	</div>

</div>