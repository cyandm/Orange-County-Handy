<?php

/**
 * Contact Aside — quote CTA, phone, work hours and socials
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

$title = get_field('contact_aside_title') ?: __('Looking for a project estimate?', 'orange-county-handy');
$text = get_field('contact_aside_text') ?: __('Tell us what you need, share a few details and request a free quote directly.', 'orange-county-handy');

$quote_url = Templates::getPageUrl('get-quote');
$phone_number = get_option('phone_number');
$work_hours = get_option('work_hours');

$socials = array_values(array_filter([
	['url' => get_option('instagram_link'), 'icon' => 'Instagram', 'label' => __('Instagram', 'orange-county-handy')],
	['url' => get_option('facebook_link'), 'icon' => 'Facebook', 'label' => __('Facebook', 'orange-county-handy')],
	['url' => get_option('linkedin_link'), 'icon' => 'Linkedin', 'label' => __('LinkedIn', 'orange-county-handy')],
	['url' => get_option('whatsapp_number'), 'icon' => 'Whatsup', 'label' => __('WhatsApp', 'orange-county-handy')],
	['url' => get_option('twitter_link'), 'file' => 'x.svg', 'label' => __('X', 'orange-county-handy')],
], fn($social) => ! empty($social['url'])));
?>

<div class="flex w-full shrink-0 flex-col gap-6 rounded-2xl bg-cynBlack p-6 lg:w-96">

	<div class="flex flex-col gap-3">
		<p class="text-2xl font-bold capitalize text-cynTextWhite">
			<?php echo esc_html($title); ?>
		</p>
		<p class="text-base font-medium capitalize text-cynTextWhite">
			<?php echo esc_html($text); ?>
		</p>
	</div>

	<?php if ($quote_url) : ?>
		<a href="<?php echo esc_url($quote_url); ?>" class="primary-btn text-center">
			<?php esc_html_e('get a free quote', 'orange-county-handy'); ?>
		</a>
	<?php endif; ?>

	<?php if ($phone_number) : ?>

		<div class="flex items-center gap-5">
			<span class="h-px flex-1 bg-cynTextWhite" aria-hidden="true"></span>
			<span class="text-base font-medium capitalize text-cynTextWhite">
				<?php esc_html_e('or', 'orange-county-handy'); ?>
			</span>
			<span class="h-px flex-1 bg-cynTextWhite" aria-hidden="true"></span>
		</div>

		<div class="flex flex-col gap-1">
			<p class="text-xl font-bold capitalize text-cynTextWhite">
				<?php esc_html_e('prefer to talk?', 'orange-county-handy'); ?>
			</p>
			<p class="text-base font-medium capitalize text-cynTextWhite">
				<?php esc_html_e('call or text', 'orange-county-handy'); ?>
			</p>
			<a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone_number)); ?>" class="text-xl font-bold text-cynYellow transition-all duration-300 hover:text-cynYellowLight">
				<?php echo esc_html($phone_number); ?>
			</a>
		</div>

	<?php endif; ?>

	<?php if ($work_hours || $socials) : ?>

		<span class="h-px w-full bg-cynTextWhite" aria-hidden="true"></span>

		<div class="flex flex-col gap-5">

			<?php if ($work_hours) : ?>
				<div class="flex flex-col gap-2.5">
					<p class="text-base font-medium capitalize text-cynTextWhite">
						<?php esc_html_e('work hours', 'orange-county-handy'); ?>
					</p>
					<p class="text-sm font-normal capitalize leading-7 text-cynTextWhite">
						<?php echo esc_html($work_hours); ?>
					</p>
				</div>
			<?php endif; ?>

			<?php if ($socials) : ?>
				<div class="flex flex-col gap-2.5">
					<p class="text-base font-medium capitalize text-cynTextWhite">
						<?php esc_html_e('follow us', 'orange-county-handy'); ?>
					</p>
					<div class="flex items-center gap-4">
						<?php foreach ($socials as $social) : ?>
							<a href="<?php echo esc_url($social['url']); ?>" target="_blank" rel="noopener noreferrer" class="flex size-6 items-center justify-center text-cynTextWhite transition-all duration-300 hover:text-cynYellow [&_svg]:stroke-[1.5]" aria-label="<?php echo esc_attr($social['label']); ?>">
								<?php echo empty($social['icon']) ? file_get_contents(THEME_ASSETS_DIR . '/icon/' . $social['file']) : Icon::get($social['icon']); ?>
							</a>
						<?php endforeach; ?>
					</div>
				</div>
			<?php endif; ?>

		</div>

	<?php endif; ?>

</div>
