<?php

/**
 * Blog Card — compact variant used in the single post sidebar
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$category = get_the_category()[0] ?? null;
?>

<a href="<?php the_permalink(); ?>" class="group flex items-end gap-2.5">

	<?php if (has_post_thumbnail()) : ?>
		<?php the_post_thumbnail('thumbnail', ['class' => 'size-24 shrink-0 rounded-lg object-cover', 'alt' => esc_attr(get_the_title())]); ?>
	<?php endif; ?>

	<div class="flex min-w-0 flex-1 flex-col items-end gap-2">

		<div class="flex w-full flex-col gap-0.5">

			<?php if ($category) : ?>
				<span class="w-fit rounded-lg bg-cynYellowLight/30 px-2.5 py-1 text-[10px] font-semibold text-cynYellow">
					<?php echo esc_html($category->name); ?>
				</span>
			<?php endif; ?>

			<h3 class="line-clamp-2 text-xs font-medium text-cynTextBlack transition-all duration-300 group-hover:text-cynYellow">
				<?php the_title(); ?>
			</h3>

		</div>

		<span class="primary-btn inline-flex items-center gap-3 !py-1 !ps-4 !pe-2 !text-xs !font-medium">
			<span>
				<?php esc_html_e('read', 'orange-county-handy'); ?>
			</span>
			<i class="size-5 flex shrink-0 items-center justify-center [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
				<?php Icon::print('Arrow-23'); ?>
			</i>
		</span>

	</div>

</a>
