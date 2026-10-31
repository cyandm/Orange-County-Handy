<?php

/**
 * Services Buttons — quote CTA + call or text, shared by heroes
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$args = get_query_var('args', []);
$on_yellow = ! empty($args['on_yellow']);
$fast_quote = ! empty($args['fast_quote']);

$quote_url = Templates::getPageUrl('get-quote');
$phone_number = get_option('phone_number');

if (! $quote_url && ! $phone_number) return;

$btn_class = 'primary-btn text-center' . ($on_yellow ? ' md:!border-cynBorderHover md:!bg-cynWhite' : '') . ($fast_quote ? ' cursor-pointer' : '');
?>

<div class="flex items-center gap-2">
	<?php if ($quote_url) : ?>
		<?php if ($fast_quote) : ?>
			<button type="button" modal-opener data-modal-name="fast-quote-modal" class="<?php echo esc_attr($btn_class); ?>">
				<?php esc_html_e('get a fast quote', 'orange-county-handy'); ?>
			</button>
		<?php else : ?>
			<a href="<?php echo esc_url($quote_url); ?>" class="<?php echo esc_attr($btn_class); ?>">
				<?php esc_html_e('get a quote', 'orange-county-handy'); ?>
			</a>
		<?php endif; ?>
	<?php endif; ?>
	<?php if ($phone_number) : ?>
		<a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone_number)); ?>" class="secondary-btn text-center">
			<?php echo esc_html(sprintf(__('Call or Text: %s', 'orange-county-handy'), $phone_number)); ?>
		</a>
	<?php endif; ?>
</div>
