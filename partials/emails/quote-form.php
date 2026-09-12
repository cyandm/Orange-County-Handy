<?php

/**
 * Quote Request Notification Email
 * plain html with inline styles, email clients ignore the theme stylesheet
 * @package CyanTheme
 */

use Cyan\Theme\Classes\QuoteForm;

$args = get_query_var('args', []);

$name = $args['_name'] ?? '';
$email = $args['_email'] ?? '';
$phone = $args['_phone'] ?? '';
$description = $args['_description'] ?? '';
$notes = $args['_notes'] ?? '';
$photos = array_filter((array) ($args['_photos'] ?? []));
$edit_url = $args['edit_url'] ?? '';

$rows = array_filter([
	['label' => __('Name', 'orange-county-handy'), 'value' => $name, 'href' => ''],
	['label' => __('Email', 'orange-county-handy'), 'value' => $email, 'href' => $email ? 'mailto:' . $email : ''],
	['label' => __('Phone', 'orange-county-handy'), 'value' => $phone, 'href' => $phone ? 'tel:' . preg_replace('/[^0-9+]/', '', $phone) : ''],
	['label' => __('Preferred Contact', 'orange-county-handy'), 'value' => $args['_contact_method'] ?? '', 'href' => ''],
	['label' => __('Service', 'orange-county-handy'), 'value' => $args['_service'] ?? '', 'href' => ''],
	['label' => __('Zip Code', 'orange-county-handy'), 'value' => $args['_zip'] ?? '', 'href' => ''],
	['label' => __('Property Type', 'orange-county-handy'), 'value' => $args['_property_type'] ?? '', 'href' => ''],
	['label' => __('Timeframe', 'orange-county-handy'), 'value' => $args['_timeframe'] ?? '', 'href' => ''],
	['label' => __('Preferred Date', 'orange-county-handy'), 'value' => $args['_preferred_date'] ?? '', 'href' => ''],
	['label' => __('Received', 'orange-county-handy'), 'value' => wp_date('M j, Y — H:i'), 'href' => ''],
], fn($row) => ! empty($row['value']));
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php esc_html_e('New quote request', 'orange-county-handy'); ?></title>
</head>

<body style="margin:0; padding:0; background-color:#f9f9f9;">

	<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f9f9f9; padding:24px 12px;">
		<tr>
			<td align="center">

				<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px; background-color:#ffffff; border-radius:16px; overflow:hidden; font-family:'Poppins', Arial, Helvetica, sans-serif;">

					<tr>
						<td style="background-color:#151515; padding:24px;">
							<p style="margin:0; font-size:12px; font-weight:400; color:#f4c400; text-transform:uppercase; letter-spacing:1px;">
								<?php echo esc_html(get_bloginfo('name')); ?>
							</p>
							<p style="margin:6px 0 0; font-size:22px; font-weight:700; color:#ffffff;">
								<?php esc_html_e('New quote request', 'orange-county-handy'); ?>
							</p>
						</td>
					</tr>

					<tr>
						<td style="padding:24px;">

							<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
								<?php foreach ($rows as $row) : ?>
									<tr>
										<td style="padding:10px 0; border-bottom:1px solid #d3d3d3; font-size:13px; font-weight:400; color:#5b5b5b; width:140px; vertical-align:top;">
											<?php echo esc_html($row['label']); ?>
										</td>
										<td style="padding:10px 0; border-bottom:1px solid #d3d3d3; font-size:14px; font-weight:600; color:#151515; vertical-align:top;">
											<?php if ($row['href']) : ?>
												<a href="<?php echo esc_url($row['href']); ?>" style="color:#151515; text-decoration:none;">
													<?php echo esc_html($row['value']); ?>
												</a>
											<?php else : ?>
												<?php echo esc_html($row['value']); ?>
											<?php endif; ?>
										</td>
									</tr>
								<?php endforeach; ?>
							</table>

							<?php if ($description) : ?>
								<p style="margin:24px 0 8px; font-size:13px; font-weight:400; color:#5b5b5b;">
									<?php esc_html_e('Project', 'orange-county-handy'); ?>
								</p>
								<div style="padding:16px; background-color:#f9f9f9; border:1px solid #d3d3d3; border-radius:12px; font-size:14px; font-weight:400; line-height:24px; color:#151515;">
									<?php echo wp_kses_post(nl2br(esc_html($description))); ?>
								</div>
							<?php endif; ?>

							<?php if ($notes) : ?>
								<p style="margin:24px 0 8px; font-size:13px; font-weight:400; color:#5b5b5b;">
									<?php esc_html_e('Scheduling Notes', 'orange-county-handy'); ?>
								</p>
								<div style="padding:16px; background-color:#f9f9f9; border:1px solid #d3d3d3; border-radius:12px; font-size:14px; font-weight:400; line-height:24px; color:#151515;">
									<?php echo wp_kses_post(nl2br(esc_html($notes))); ?>
								</div>
							<?php endif; ?>

							<?php if ($photos) : ?>
								<p style="margin:24px 0 8px; font-size:13px; font-weight:400; color:#5b5b5b;">
									<?php echo esc_html(sprintf(__('Photos (%d)', 'orange-county-handy'), count($photos))); ?>
								</p>
								<table role="presentation" cellpadding="0" cellspacing="0" border="0">
									<tr>
										<?php foreach ($photos as $photo) : ?>
											<td style="padding:0 8px 8px 0;">
												<a href="<?php echo esc_url(QuoteForm::photoUrl($photo)); ?>">
													<img src="<?php echo esc_url(QuoteForm::photoUrl($photo)); ?>" alt="<?php esc_attr_e('Project photo', 'orange-county-handy'); ?>" width="130" style="display:block; width:130px; height:100px; object-fit:cover; border-radius:12px; border:1px solid #d3d3d3;">
												</a>
											</td>
										<?php endforeach; ?>
									</tr>
								</table>
							<?php endif; ?>

							<?php if ($edit_url) : ?>
								<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;">
									<tr>
										<td style="background-color:#f4c400; border-radius:8px;">
											<a href="<?php echo esc_url($edit_url); ?>" style="display:inline-block; padding:10px 20px; font-size:14px; font-weight:600; color:#151515; text-decoration:none;">
												<?php esc_html_e('View in dashboard', 'orange-county-handy'); ?>
											</a>
										</td>
									</tr>
								</table>
							<?php endif; ?>

						</td>
					</tr>

					<tr>
						<td style="padding:16px 24px; background-color:#f9f9f9; border-top:1px solid #d3d3d3;">
							<p style="margin:0; font-size:12px; font-weight:400; color:#5b5b5b;">
								<?php printf(esc_html__('Sent from the quote form on %s', 'orange-county-handy'), '<a href="' . esc_url(home_url('/')) . '" style="color:#5b5b5b;">' . esc_html(wp_parse_url(home_url(), PHP_URL_HOST)) . '</a>'); ?>
							</p>
						</td>
					</tr>

				</table>

			</td>
		</tr>
	</table>

</body>

</html>
