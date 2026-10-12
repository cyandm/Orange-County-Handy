<?php

/**
 * Service Help Card — one job a service covers, collapsible below lg
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$args = get_query_var('args', []);
$key = $args['key'] ?? '';
$title = $args['title'] ?? '';
$text = $args['text'] ?? '';

if (! $title) return;
?>

<div class="flex flex-col rounded-2xl border border-cynBorder bg-cynBG transition-all duration-300 hover:shadow-[0_4px_9px_0_rgba(0,0,0,0.08)]">

	<button type="button" class="accordion-button flex w-full cursor-pointer items-center gap-2 p-3 text-start lg:pointer-events-none lg:pt-6 <?php echo $text ? '' : 'lg:pb-6'; ?>" data-accordion-target="<?php echo esc_attr($key); ?>" data-accordion-icon-rotate="180" aria-expanded="false" <?php echo $text ? '' : 'disabled'; ?>>
		<span class="size-2.5 shrink-0 rounded-full bg-cynYellow" aria-hidden="true"></span>
		<span class="flex min-h-10 flex-1 items-center text-sm lg:min-h-0 lg:text-base font-semibold text-cynTextBlack">
			<?php echo esc_html($title); ?>
		</span>
		<?php if ($text) : ?>
			<i class="accordion-icon size-5 flex shrink-0 items-center justify-center text-cynTextBlack transition-transform duration-300 lg:hidden [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
				<?php Icon::print('Arrow-28'); ?>
			</i>
		<?php endif; ?>
	</button>

	<?php if ($text) : ?>
		<div class="grid grid-rows-[0fr] !mt-0 transition-all duration-500 lg:!grid-rows-[1fr]" data-accordion-content="<?php echo esc_attr($key); ?>">
			<div class="overflow-hidden">
				<div class="px-3 pb-3 text-sm font-medium text-cynTextBlack lg:pb-6">
					<?php echo wp_kses_post($text); ?>
				</div>
			</div>
		</div>
	<?php endif; ?>

</div>