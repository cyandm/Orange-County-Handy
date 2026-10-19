<?php

/**
 * Form submission status + email delivery metabox
 * Expects $post_type in scope (quote_form | contact_form)
 *
 * @package CyanTheme
 */

use Cyan\Theme\Classes\FormStatuses;

defined('ABSPATH') || exit;

global $post;

$post_type = $post_type ?? ($post->post_type ?? '');
$statuses = FormStatuses::statuses($post_type);
$current = $post->post_status === 'private' ? FormStatuses::defaultStatus($post_type) : $post->post_status;
$email_sent = get_post_meta($post->ID, '_email_sent', true);
$email_error = (string) get_post_meta($post->ID, '_email_error', true);
$email_to = (string) get_post_meta($post->ID, '_email_to', true);
$email_sent_at = (string) get_post_meta($post->ID, '_email_sent_at', true);
$has_mail_meta = $email_sent !== '' || $email_error !== '';
$telegram_sent = get_post_meta($post->ID, '_telegram_sent', true);
$telegram_error = (string) get_post_meta($post->ID, '_telegram_error', true);
$telegram_chat = (string) get_post_meta($post->ID, '_telegram_chat_id', true);
$telegram_sent_at = (string) get_post_meta($post->ID, '_telegram_sent_at', true);
$has_telegram_meta = $telegram_sent !== '' || $telegram_error !== '';
?>

<div class="metabox-container form-status-metabox" style="padding: 12px 10px;">

	<?php wp_nonce_field('cyn_form_status_' . $post->ID, 'cyn_form_status_nonce'); ?>

	<p style="margin: 0 0 10px;">
		<label for="cyn_form_status" style="display:block; font-weight:600; margin-bottom:6px;">
			<?php esc_html_e('Request status', 'orange-county-handy'); ?>
		</label>
		<select name="cyn_form_status" id="cyn_form_status" style="width:100%; max-width:320px;">
			<?php foreach ($statuses as $slug => $label) : ?>
				<option value="<?php echo esc_attr($slug); ?>" <?php selected($current, $slug); ?>>
					<?php echo esc_html($label); ?>
				</option>
			<?php endforeach; ?>
		</select>
		<span style="display:block; margin-top:6px; color:#646970; font-size:12px;">
			<?php esc_html_e('You can change this manually (e.g. Under Review → Unread or Cancelled).', 'orange-county-handy'); ?>
		</span>
	</p>

	<hr style="margin: 14px 0;">

	<p style="margin: 0 0 8px; font-weight: 600;">
		<?php esc_html_e('Email notification', 'orange-county-handy'); ?>
	</p>

	<?php if (! $has_mail_meta) : ?>
		<p style="margin:0; color:#646970;">
			<?php esc_html_e('No email delivery information was recorded for this submission.', 'orange-county-handy'); ?>
		</p>
	<?php elseif ($email_sent === '1') : ?>
		<div style="background:#edfaef; border:1px solid #c3e6cb; border-radius:4px; padding:12px;">
			<p style="margin:0 0 6px; font-weight:600; color:#1e4620;">
				<?php esc_html_e('Email sent successfully', 'orange-county-handy'); ?>
			</p>
			<?php if ($email_to) : ?>
				<p style="margin:0; color:#1e4620;">
					<?php echo esc_html(sprintf(__('Sent to: %s', 'orange-county-handy'), $email_to)); ?>
				</p>
			<?php endif; ?>
			<?php if ($email_sent_at) : ?>
				<p style="margin:6px 0 0; color:#1e4620; font-size:12px;">
					<?php echo esc_html(sprintf(__('At: %s', 'orange-county-handy'), $email_sent_at)); ?>
				</p>
			<?php endif; ?>
		</div>
	<?php else : ?>
		<div style="background:#fcf0f1; border:1px solid #f1aeb5; border-radius:4px; padding:12px;">
			<p style="margin:0 0 6px; font-weight:600; color:#8a1f2a;">
				<?php esc_html_e('Email was not sent', 'orange-county-handy'); ?>
			</p>
			<?php if ($email_to) : ?>
				<p style="margin:0 0 6px; color:#8a1f2a;">
					<?php echo esc_html(sprintf(__('Intended recipient: %s', 'orange-county-handy'), $email_to)); ?>
				</p>
			<?php endif; ?>
			<p style="margin:0; color:#8a1f2a;">
				<strong><?php esc_html_e('Reason:', 'orange-county-handy'); ?></strong>
				<?php echo esc_html($email_error ?: __('Unknown error.', 'orange-county-handy')); ?>
			</p>
			<?php if ($email_sent_at) : ?>
				<p style="margin:6px 0 0; color:#8a1f2a; font-size:12px;">
					<?php echo esc_html(sprintf(__('Attempted at: %s', 'orange-county-handy'), $email_sent_at)); ?>
				</p>
			<?php endif; ?>
		</div>
	<?php endif; ?>

	<hr style="margin: 14px 0;">

	<p style="margin: 0 0 8px; font-weight: 600;">
		<?php esc_html_e('Telegram notification', 'orange-county-handy'); ?>
	</p>

	<?php if (! $has_telegram_meta) : ?>
		<p style="margin:0; color:#646970;">
			<?php esc_html_e('No Telegram delivery recorded (token/user ID not set, or not attempted).', 'orange-county-handy'); ?>
		</p>
	<?php elseif ($telegram_sent === '1') : ?>
		<div style="background:#edfaef; border:1px solid #c3e6cb; border-radius:4px; padding:12px;">
			<p style="margin:0 0 6px; font-weight:600; color:#1e4620;">
				<?php esc_html_e('Telegram message sent', 'orange-county-handy'); ?>
			</p>
			<?php if ($telegram_chat) : ?>
				<p style="margin:0; color:#1e4620;">
					<?php echo esc_html(sprintf(__('Chat ID: %s', 'orange-county-handy'), $telegram_chat)); ?>
				</p>
			<?php endif; ?>
			<?php if ($telegram_sent_at) : ?>
				<p style="margin:6px 0 0; color:#1e4620; font-size:12px;">
					<?php echo esc_html(sprintf(__('At: %s', 'orange-county-handy'), $telegram_sent_at)); ?>
				</p>
			<?php endif; ?>
		</div>
	<?php else : ?>
		<div style="background:#fcf0f1; border:1px solid #f1aeb5; border-radius:4px; padding:12px;">
			<p style="margin:0 0 6px; font-weight:600; color:#8a1f2a;">
				<?php esc_html_e('Telegram was not sent', 'orange-county-handy'); ?>
			</p>
			<?php if ($telegram_chat) : ?>
				<p style="margin:0 0 6px; color:#8a1f2a;">
					<?php echo esc_html(sprintf(__('Chat ID: %s', 'orange-county-handy'), $telegram_chat)); ?>
				</p>
			<?php endif; ?>
			<p style="margin:0; color:#8a1f2a;">
				<strong><?php esc_html_e('Reason:', 'orange-county-handy'); ?></strong>
				<?php echo esc_html($telegram_error ?: __('Unknown error.', 'orange-county-handy')); ?>
			</p>
			<?php if ($telegram_sent_at) : ?>
				<p style="margin:6px 0 0; color:#8a1f2a; font-size:12px;">
					<?php echo esc_html(sprintf(__('Attempted at: %s', 'orange-county-handy'), $telegram_sent_at)); ?>
				</p>
			<?php endif; ?>
		</div>
	<?php endif; ?>

</div>

<script>
	jQuery(function($) {
		var $side = $('#cyn_form_status');
		var $pub = $('#post-status-select select#post_status');
		if (!$side.length || !$pub.length) return;
		$side.on('change', function() {
			$pub.val(this.value).trigger('change');
			$('#post-status-display').text($side.find('option:selected').text());
		});
		$pub.on('change', function() {
			$side.val(this.value);
		});
	});
</script>