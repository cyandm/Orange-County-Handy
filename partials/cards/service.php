<?php

/**
 * Service Card — icon, title and arrow linking to the service, args: service (post), class (padding / layout extras)
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$args = get_query_var('args', []);
$service = get_post($args['service'] ?? 0);

if (! $service) return;

$icon = get_field('service_icon', $service->ID) ?: 'Tools,-Settings';
?>

<a href="<?php echo esc_url(get_permalink($service)); ?>" class="group flex flex-col justify-between gap-5 rounded-2xl border border-cynWhite bg-cynYellowLight transition-all duration-300 hover:bg-cynYellow hover:shadow-[0_4px_9px_0_rgba(0,0,0,0.08)] <?php echo esc_attr($args['class'] ?? ''); ?>">
	<i class="size-10 flex shrink-0 items-center justify-center text-cynTextBlack lg:size-[50px] [&_svg]:size-full [&_svg]:stroke-2" aria-hidden="true">
		<?php Icon::print($icon); ?>
	</i>
	<span class="flex items-center justify-between gap-2">
		<span class="text-sm lg:text-base font-semibold text-cynTextBlack">
			<?php echo esc_html($service->post_title); ?>
		</span>
		<i class="size-6 flex shrink-0 items-center justify-center text-cynTextBlack [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
			<?php Icon::print('Arrow-23'); ?>
		</i>
	</span>
</a>
