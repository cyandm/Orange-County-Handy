<?php

/**
 * You May Also Like — related posts list next to a single post
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$query = get_query_var('args', [])['query'] ?? null;

if (! $query || ! $query->have_posts()) return;
?>

<div class="flex flex-col gap-3 lg:gap-6 lg:rounded-2xl lg:bg-cynBG lg:p-6">

	<h2 class="text-xl lg:text-2xl font-bold capitalize text-cynTextBlack">
		<?php esc_html_e('You may also like', 'orange-county-handy'); ?>
	</h2>

	<div class="flex flex-col gap-2 lg:gap-5">
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<div class="rounded-2xl bg-cynBG p-3 lg:rounded-none lg:bg-transparent lg:p-0">
				<?php Templates::getCard('blog-mini'); ?>
			</div>
		<?php endwhile; ?>
		<?php wp_reset_postdata(); ?>
	</div>

</div>
