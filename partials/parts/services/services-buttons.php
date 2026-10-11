<?php

/**
 * Services Buttons — fast quote + call or text, shared by the service heroes
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$on_yellow = ! empty(get_query_var('args', [])['on_yellow']);

$quote_url = Templates::getPageUrl('get-quote');
$phone_number = get_option('phone_number');

if (! $quote_url && ! $phone_number) return;
?>

<div class="flex items-center gap-2">
	<?php if ($quote_url) : ?>
		<a href="<?php echo esc_url($quote_url); ?>" class="primary-btn text-center <?php echo $on_yellow ? 'md:!border-cynBorderHover md:!bg-cynWhite' : ''; ?>">
			<?php esc_html_e('get a fast quote', 'orange-county-handy'); ?>
		</a>
	<?php endif; ?>
	<?php if ($phone_number) : ?>
		<a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone_number)); ?>" class="secondary-btn text-center">
			<?php echo esc_html(sprintf(__('Call or Text: %s', 'orange-county-handy'), $phone_number)); ?>
		</a>
	<?php endif; ?>
</div>