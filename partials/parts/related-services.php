<?php

/**
 * Related Services — service links picked for this post
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$services = get_query_var('args', [])['services'] ?? [];

if (! $services) return;
?>

<div class="flex flex-col gap-3 lg:gap-6 lg:rounded-2xl lg:bg-cynBG lg:p-6">

	<h2 class="text-xl lg:text-2xl font-bold capitalize text-cynTextBlack">
		<?php esc_html_e('Related Services', 'orange-county-handy'); ?>
	</h2>

	<div class="flex flex-col gap-2 lg:gap-5">
		<?php foreach ($services as $service_id) : ?>
			<a href="<?php echo esc_url(get_permalink($service_id)); ?>" class="group flex items-center justify-between gap-2 rounded-2xl border border-cynWhite bg-cynYellowLight px-3 py-6 transition-all duration-300 hover:border-cynYellow">
				<span class="text-base font-semibold text-cynTextBlack">
					<?php echo esc_html(get_the_title($service_id)); ?>
				</span>
				<i class="size-6 flex shrink-0 items-center justify-center text-cynTextBlack transition-all duration-300 [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
					<?php Icon::print('Arrow-23'); ?>
				</i>
			</a>
		<?php endforeach; ?>
	</div>

</div>
