<?php

/**
 * Blog Card
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$category = get_the_category()[0] ?? null;
$read_time = max(1, (int) ceil(str_word_count(wp_strip_all_tags(get_the_content())) / 200));
?>

<a href="<?php the_permalink(); ?>" class="group flex flex-col overflow-hidden rounded-2xl bg-cynBG transition-all duration-300 hover:shadow-[0_9px_8px_0_rgba(0,0,0,0.10)]">

	<?php if (has_post_thumbnail()) : ?>
		<?php the_post_thumbnail('large', ['class' => 'w-full h-44 object-cover', 'alt' => esc_attr(get_the_title())]); ?>
	<?php endif; ?>

	<div class="flex flex-col gap-5 p-3">

		<div class="flex flex-col gap-2">

			<?php if ($category) : ?>
				<span class="w-fit rounded-lg bg-cynYellowLight/30 px-2.5 py-1 text-[10px] font-semibold text-cynYellow">
					<?php echo esc_html($category->name); ?>
				</span>
			<?php endif; ?>

			<div class="flex flex-col gap-0.5">
				<h2 class="line-clamp-2 text-base font-bold text-cynTextBlack transition-all duration-300 group-hover:text-cynYellow">
					<?php the_title(); ?>
				</h2>
				<p class="line-clamp-3 text-xs font-medium text-cynTextGray">
					<?php echo esc_html(get_the_excerpt()); ?>
				</p>
			</div>

		</div>

		<div class="flex items-center justify-between px-1">

			<span class="flex items-center gap-2 text-xs font-medium text-cynTextGray">
				<i class="size-4 flex shrink-0 items-center justify-center [&_svg]:stroke-[1.5]" aria-hidden="true">
					<?php Icon::print('Alarm,-Clock,-Time,-Timer-3'); ?>
				</i>
				<span>
					<?php echo esc_html(sprintf(__('%d min read', 'orange-county-handy'), $read_time)); ?>
				</span>
			</span>

			<i class="size-5 flex shrink-0 items-center justify-center text-cynTextGray transition-all duration-300 group-hover:text-cynTextBlack [&_svg]:stroke-[1.5]" aria-hidden="true">
				<?php Icon::print('Arrow-23'); ?>
			</i>

		</div>

	</div>

</a>
