<?php

/**
 * Floating Contact — fixed support button that opens a bubble with the phone number, copy and call
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$phone_number = get_option('phone_number');

if (! $phone_number) return;

$action_btn = 'size-6 flex shrink-0 items-center justify-center rounded-sm border border-cynBorder bg-cynBgBase text-cynTextBlack transition-all duration-300 hover:bg-cynYellow hover:border-cynYellow data-[copied]:bg-cynYellow data-[copied]:border-cynYellow [&_svg]:size-4 [&_svg]:stroke-[1.2]';
?>

<div id="floating-contact" class="group fixed start-3 bottom-3 z-40 lg:start-6 lg:bottom-6">

	<div id="floating-contact-panel" class="invisible absolute start-0 bottom-full mb-3 flex w-56 translate-y-2 flex-col gap-1 rounded-3xl border border-cynBorder bg-cynBG px-2.5 py-4 opacity-0 transition-all duration-300 group-data-[open]:visible group-data-[open]:translate-y-0 group-data-[open]:opacity-100">
		<span class="absolute start-[26px] -bottom-1.5 size-3 rotate-45 border-e border-b border-cynBorder bg-cynBG" aria-hidden="true"></span>
		<span class="text-base font-medium text-cynTextBlack">
			<?php esc_html_e('contact us', 'orange-county-handy'); ?>
		</span>
		<div class="flex items-center justify-between gap-2 rounded-lg bg-cynBlack p-2.5">
			<span class="text-base font-medium text-cynTextWhite" dir="ltr">
				<?php echo esc_html($phone_number); ?>
			</span>
			<div class="flex items-center gap-1">
				<button type="button" class="group/copy relative <?php echo esc_attr($action_btn); ?>" data-copy="<?php echo esc_attr($phone_number); ?>" aria-label="<?php esc_attr_e('Copy phone number', 'orange-county-handy'); ?>">
					<i class="flex items-center justify-center transition-all duration-300 group-data-[copied]/copy:scale-0 group-data-[copied]/copy:rotate-90 group-data-[copied]/copy:opacity-0" aria-hidden="true">
						<?php Icon::print('copy-paste-select-add-plus'); ?>
					</i>
					<i class="absolute inset-0 flex scale-0 -rotate-90 items-center justify-center opacity-0 transition-all duration-300 group-data-[copied]/copy:scale-100 group-data-[copied]/copy:rotate-0 group-data-[copied]/copy:opacity-100 [&_svg]:!size-3.5" aria-hidden="true">
						<?php echo file_get_contents(THEME_ASSETS_DIR . '/icon/check.svg'); ?>
					</i>
				</button>
				<a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone_number)); ?>" class="<?php echo esc_attr($action_btn); ?>" aria-label="<?php esc_attr_e('Call us', 'orange-county-handy'); ?>">
					<?php Icon::print('Phone,-Call-11'); ?>
				</a>
			</div>
		</div>
	</div>

	<button type="button" class="relative isolate flex size-13 cursor-pointer items-center justify-center rounded-full bg-cynYellow text-cynTextBlack shadow-[0_4px_9px_0_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-105 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-cynYellow before:animate-pulse-ring group-data-[open]:before:animate-none group-data-[open]:before:opacity-0" aria-expanded="false" aria-controls="floating-contact-panel" aria-label="<?php esc_attr_e('Contact us', 'orange-county-handy'); ?>" data-floating-toggle>
		<i class="size-7 flex items-center justify-center [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
			<?php Icon::print('Headphones,-Customer,-support'); ?>
		</i>
	</button>

</div>
