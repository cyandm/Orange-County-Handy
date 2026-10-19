<?php

/**
 * Customizer control: Telegram test button
 * Loaded only from customize_register (needs WP_Customize_Control)
 * @package CyanTheme
 */

namespace Cyan\Theme\Classes;

class TelegramTestControl extends \WP_Customize_Control {

	public $type = 'cyn_telegram_test';

	public function render_content() {
		?>
		<?php if ( ! empty( $this->label ) ) : ?>
			<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
		<?php endif; ?>
		<?php if ( ! empty( $this->description ) ) : ?>
			<span class="description customize-control-description"><?php echo esc_html( $this->description ); ?></span>
		<?php endif; ?>
		<p style="margin: 8px 0 0;">
			<button type="button" class="button button-secondary" id="cyn-telegram-test-btn">
				<?php esc_html_e( 'Send test message', 'orange-county-handy' ); ?>
			</button>
		</p>
		<p id="cyn-telegram-test-result" style="margin: 8px 0 0;" aria-live="polite"></p>
		<?php
	}
}
