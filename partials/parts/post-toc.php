<?php

/**
 * In This Article — table of contents built from the post headings
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$items = get_query_var('args', [])['items'] ?? [];

if (! $items) return;
?>

<div class="flex flex-col gap-5 rounded-2xl bg-cynBG p-3 lg:p-6">

	<button type="button" class="accordion-button flex items-center justify-between gap-3 border-b border-cynYellow pb-2 text-start lg:pointer-events-none" data-accordion-target="post-toc" data-accordion-icon-rotate="180" aria-expanded="true">
		<span class="text-base lg:text-2xl font-bold capitalize text-cynTextBlack">
			<?php esc_html_e('in this article:', 'orange-county-handy'); ?>
		</span>
		<i class="accordion-icon size-5 flex shrink-0 rotate-180 items-center justify-center text-cynTextBlack transition-transform duration-300 lg:hidden [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
			<?php Icon::print('Arrow-28'); ?>
		</i>
	</button>

	<div class="grid grid-rows-[1fr] transition-all duration-500 lg:!grid-rows-[1fr]" data-accordion-content="post-toc">
		<div class="overflow-hidden">
			<ol class="flex list-none flex-col gap-5">
				<?php foreach ($items as $index => $item) : ?>
					<li>
						<a href="#<?php echo esc_attr($item['id']); ?>" class="group flex items-center justify-between gap-3 capitalize transition-all duration-300">
							<span class="text-base lg:text-xl">
								<span class="font-bold text-cynYellow">
									<?php echo esc_html(sprintf('%02d.', $index + 1)); ?>
								</span>
								<span class="font-medium text-cynTextBlack transition-all duration-300 group-hover:text-cynYellow">
									<?php echo esc_html($item['title']); ?>
								</span>
							</span>
							<i class="size-5 flex shrink-0 -rotate-90 items-center justify-center text-cynTextBlack lg:hidden [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
								<?php Icon::print('Arrow-28'); ?>
							</i>
						</a>
					</li>
				<?php endforeach; ?>
			</ol>
		</div>
	</div>

</div>
