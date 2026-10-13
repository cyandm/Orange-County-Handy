<?php

/**
 * Home Quote — fast quote form (service, zip, phone) sent with htmx as a quote_form request
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

$quote_url = Templates::getPageUrl('get-quote');

if (! $quote_url) return;

$services = get_posts(['post_type' => 'service', 'posts_per_page' => -1, 'orderby' => 'menu_order title', 'order' => 'ASC']);
$image_id = (int) get_field('home_quote_image');
$title = get_field('home_quote_title') ?: __('get a fast quote', 'orange-county-handy');
$note = get_field('home_quote_note') ?: __('Have photos or more details to share? Use our full quote form.', 'orange-county-handy');

$form_url = rest_url('cyn/v1/quote_form/fast');
?>

<section id="home-quote" class="container">

	<div class="relative flex flex-col overflow-hidden bg-cynBgGray max-lg:-mx-4 lg:rounded-2xl lg:p-6">

		<?php if ($image_id) : ?>
			<div class="relative h-56 w-full lg:absolute lg:inset-y-0 lg:end-0 lg:h-auto lg:w-[44%]">
				<?php echo wp_get_attachment_image($image_id, 'large', false, ['class' => 'size-full object-cover', 'alt' => esc_attr($title)]); ?>
				<span class="absolute inset-x-0 bottom-0 h-8 bg-linear-to-b from-cynBgGray/0 to-cynBgGray lg:inset-x-auto lg:inset-y-0 lg:start-0 lg:h-auto lg:w-16 lg:bg-linear-to-r lg:from-cynBgGray lg:to-cynBgGray/0" aria-hidden="true"></span>
			</div>
		<?php endif; ?>

		<div class="relative flex flex-col gap-2 p-3 pb-6 lg:w-1/2 lg:p-0">

			<h2 class="text-center text-xl lg:text-start lg:text-2xl font-bold capitalize text-cynTextBlack">
				<?php echo esc_html($title); ?>
			</h2>

			<form
				id="home_quote_form"
				action="<?php echo esc_url($form_url); ?>"
				method="post"
				hx-post="<?php echo esc_url($form_url); ?>"
				hx-headers='{"X-WP-Nonce":"<?php echo esc_attr(wp_create_nonce('wp_rest')); ?>"}'
				hx-swap="none"
				hx-disabled-elt="find button[type=submit]"
				hx-on::before-request="const btn = event.target.querySelector('button[type=submit]'); if (btn) btn.classList.add('is-loading'); const result = document.querySelector('#home_quote_result'); if (result) { result.hidden = true; result.textContent = ''; }"
				hx-on::after-request="const btn = event.target.querySelector('button[type=submit]'); if (btn) btn.classList.remove('is-loading'); const result = document.querySelector('#home_quote_result'); if (!result) return; const ok = event.detail.successful; let msg = ''; try { const data = JSON.parse(event.detail.xhr.responseText); msg = data.message || data.error || ''; } catch (e) { msg = ''; } if (!msg) msg = ok ? '<?php echo esc_js(__('Thanks! Your request has been sent, we will call you shortly.', 'orange-county-handy')); ?>' : '<?php echo esc_js(__('Something went wrong. Please try again.', 'orange-county-handy')); ?>'; result.textContent = msg; result.classList.toggle('bg-cynYellow', ok); result.classList.toggle('bg-cynRed', !ok); result.classList.toggle('text-cynTextBlack', ok); result.classList.toggle('text-cynTextWhite', !ok); result.hidden = false; if (ok) event.target.reset();"
				class="flex flex-col gap-3 rounded-lg bg-cynBG p-2.5">

				<div class="flex flex-col gap-2">

					<?php if ($services) : ?>
						<label class="secondary-input relative !p-0" for="home-quote-service">
							<select id="home-quote-service" name="service" class="!px-4 !py-2.5 !pe-11 text-sm" required>
								<option value="">
									<?php esc_html_e('What can we help you with?', 'orange-county-handy'); ?>
								</option>
								<?php foreach ($services as $service) : ?>
									<option value="<?php echo esc_attr($service->ID); ?>">
										<?php echo esc_html($service->post_title); ?>
									</option>
								<?php endforeach; ?>
							</select>
							<i class="absolute end-4 top-1/2 -translate-y-1/2 text-cynTextGray" aria-hidden="true">
								<?php Icon::print('Arrow-28'); ?>
							</i>
						</label>
					<?php endif; ?>

					<div class="flex items-center gap-2">
						<label class="secondary-input min-w-0 flex-1 lg:max-w-64" for="home-quote-zip">
							<input id="home-quote-zip" name="zip" type="text" inputmode="numeric" pattern="\d{5}(-\d{4})?" maxlength="10" autocomplete="postal-code" placeholder="<?php esc_attr_e('zip code', 'orange-county-handy'); ?>" aria-label="<?php esc_attr_e('zip code', 'orange-county-handy'); ?>" required>
						</label>
						<label class="secondary-input min-w-0 flex-1" for="home-quote-phone">
							<input id="home-quote-phone" name="phone" type="tel" autocomplete="tel" placeholder="<?php esc_attr_e('phone number', 'orange-county-handy'); ?>" aria-label="<?php esc_attr_e('phone number', 'orange-county-handy'); ?>" required>
						</label>
					</div>

					<div class="px-2 text-xs font-normal text-cynTextBlack">
						<?php echo wp_kses_post($note); ?>
					</div>

				</div>

				<div class="flex items-center gap-2">
					<button type="submit" class="submit-form-btn primary-btn">
						<span class="submit-form-btn__idle">
							<?php esc_html_e('Request my Quote', 'orange-county-handy'); ?>
						</span>
						<span class="submit-form-btn__loading items-center gap-2">
							<i class="size-5 flex animate-spin items-center justify-center [&_svg]:size-full [&_svg]:stroke-[1.5]">
								<?php Icon::print('Rotate,-Refresh,-Loading'); ?>
							</i>
							<span>
								<?php esc_html_e('sending...', 'orange-county-handy'); ?>
							</span>
						</span>
					</button>
					<a href="<?php echo esc_url($quote_url); ?>" class="tertiary-btn !border-cynBorderHover">
						<?php esc_html_e('full quote form', 'orange-county-handy'); ?>
					</a>
				</div>

				<p id="home_quote_result" class="rounded-lg px-3 py-2 text-sm font-medium" role="status" aria-live="polite" hidden></p>

			</form>

		</div>

	</div>

</section>