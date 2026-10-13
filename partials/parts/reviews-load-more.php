<?php

/**
 * Reviews Load More
 * @package CyanTheme
 */

global $wp_query;

$args = get_query_var('args', []);

$oob = ! empty($args['oob']);
$paged = max(1, (int) get_query_var('paged'));
$next_url = $paged < (int) $wp_query->max_num_pages ? get_pagenum_link($paged + 1) : '';
?>

<div id="reviews-load-more" class="container flex justify-center" <?php echo $oob ? 'hx-swap-oob="true"' : ''; ?>>
	<?php if ($next_url) : ?>
		<button type="button" class="primary-btn group relative disabled:cursor-wait" hx-get="<?php echo esc_url($next_url); ?>" hx-target="#reviews-grid" hx-swap="beforeend" hx-disabled-elt="this">
			<span class="group-disabled:invisible">
				<?php esc_html_e('load more reviews', 'orange-county-handy'); ?>
			</span>
			<span class="absolute inset-0 hidden items-center justify-center group-disabled:flex">
				<span>
					<?php esc_html_e('loading', 'orange-county-handy'); ?>
				</span>
				<span class="loading-dots" aria-hidden="true"><span>.</span><span>.</span><span>.</span></span>
			</span>
		</button>
	<?php endif; ?>
</div>
