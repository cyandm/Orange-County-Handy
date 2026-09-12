<?php

/**
 * Pagination
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$args = get_query_var('args', []);
$query = $args['query'] ?? $GLOBALS['wp_query'];
$total = (int) $query->max_num_pages;

if ($total < 2) return;

$paged = max(1, (int) ($args['paged'] ?? get_query_var('paged')));
$links = paginate_links(['total' => $total, 'current' => $paged, 'mid_size' => 1, 'end_size' => 1, 'prev_next' => false]);

if (! $links) return;

$links = str_replace('&hellip;', '. . .', $links);
$nav_class = 'flex size-10 shrink-0 items-center justify-center rounded-lg border border-cynBorder bg-cynWhite transition-all duration-300 [&_i]:flex [&_i]:size-6 [&_i]:items-center [&_i]:justify-center [&_i_svg]:stroke-[1.5]';
?>

<nav class="container flex justify-center" aria-label="<?php esc_attr_e('Posts navigation', 'orange-county-handy'); ?>">
	<div class="flex items-center gap-2 [&_.page-numbers]:flex [&_.page-numbers]:size-10 [&_.page-numbers]:shrink-0 [&_.page-numbers]:items-center [&_.page-numbers]:justify-center [&_.page-numbers]:rounded-lg [&_.page-numbers]:bg-cynWhite [&_.page-numbers]:text-sm [&_.page-numbers]:font-medium [&_.page-numbers]:leading-5 [&_.page-numbers]:text-cynTextBlack [&_.page-numbers]:transition-all [&_.page-numbers]:duration-300 [&_a.page-numbers:hover]:bg-cynYellow [&_.page-numbers.current]:bg-cynYellow [&_.page-numbers.dots]:bg-transparent">

		<?php if ($paged > 1) : ?>
			<a href="<?php echo esc_url(get_pagenum_link($paged - 1)); ?>" class="<?php echo esc_attr($nav_class); ?> text-cynTextBlack hover:border-cynBorderHover" aria-label="<?php esc_attr_e('Previous page', 'orange-county-handy'); ?>">
				<i class="rotate-90" aria-hidden="true">
					<?php Icon::print('Arrow-28'); ?>
				</i>
			</a>
		<?php else : ?>
			<span class="<?php echo esc_attr($nav_class); ?> pointer-events-none text-cynBorder" aria-hidden="true">
				<i class="rotate-90">
					<?php Icon::print('Arrow-28'); ?>
				</i>
			</span>
		<?php endif; ?>

		<?php echo $links; ?>

		<?php if ($paged < $total) : ?>
			<a href="<?php echo esc_url(get_pagenum_link($paged + 1)); ?>" class="<?php echo esc_attr($nav_class); ?> text-cynTextBlack hover:border-cynBorderHover" aria-label="<?php esc_attr_e('Next page', 'orange-county-handy'); ?>">
				<i class="-rotate-90" aria-hidden="true">
					<?php Icon::print('Arrow-28'); ?>
				</i>
			</a>
		<?php else : ?>
			<span class="<?php echo esc_attr($nav_class); ?> pointer-events-none text-cynBorder" aria-hidden="true">
				<i class="-rotate-90">
					<?php Icon::print('Arrow-28'); ?>
				</i>
			</span>
		<?php endif; ?>

	</div>
</nav>
