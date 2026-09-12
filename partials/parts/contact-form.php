<?php

/**
 * Contact Form
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$title = get_field('contact_form_title') ?: __('send us a message', 'orange-county-handy');
$subtitle = get_field('contact_form_subtitle') ?: __('fill out the form below and we’ll get back to you as soon as possible', 'orange-county-handy');

$subjects = array_filter(array_map('trim', explode("\n", (string) get_field('contact_form_subjects'))));
if (! $subjects) $subjects = [__('General Question', 'orange-county-handy'), __('Request a Quote', 'orange-county-handy'), __('Schedule a Service', 'orange-county-handy'), __('Something Else', 'orange-county-handy')];

$fields = [
	['name' => 'first_name', 'type' => 'text', 'label' => __('First Name', 'orange-county-handy'), 'placeholder' => __('Enter Your First Name', 'orange-county-handy'), 'required' => true, 'autocomplete' => 'given-name'],
	['name' => 'last_name', 'type' => 'text', 'label' => __('Last Name', 'orange-county-handy'), 'placeholder' => __('Enter Your Last Name', 'orange-county-handy'), 'required' => false, 'autocomplete' => 'family-name'],
	['name' => 'email', 'type' => 'email', 'label' => __('Email', 'orange-county-handy'), 'placeholder' => __('Enter Your Email', 'orange-county-handy'), 'required' => true, 'autocomplete' => 'email'],
	['name' => 'phone', 'type' => 'tel', 'label' => __('Phone Number (optional)', 'orange-county-handy'), 'placeholder' => __('Enter Your Phone number', 'orange-county-handy'), 'required' => false, 'autocomplete' => 'tel'],
];

$form_url = rest_url('cyn/v1/contact_form');
?>

<section class="flex flex-1 flex-col gap-5 rounded-lg bg-cynBG p-2.5">

	<div class="flex flex-col gap-1">
		<h1 class="text-xl lg:text-2xl font-bold capitalize text-cynTextBlack">
			<?php echo esc_html($title); ?>
		</h1>
		<p class="text-sm font-normal text-cynTextGray">
			<?php echo esc_html($subtitle); ?>
		</p>
	</div>

	<form
		id="contact_form"
		action="<?php echo esc_url($form_url); ?>"
		method="post"
		hx-post="<?php echo esc_url($form_url); ?>"
		hx-headers='{"X-WP-Nonce":"<?php echo esc_attr(wp_create_nonce('wp_rest')); ?>"}'
		hx-swap="none"
		hx-disabled-elt="find button[type=submit]"
		hx-on::before-request="const btn = event.target.querySelector('button[type=submit]'); if (btn) btn.classList.add('is-loading'); const result = document.querySelector('#contact_form_result'); if (result) { result.hidden = true; result.textContent = ''; }"
		hx-on::after-request="const btn = event.target.querySelector('button[type=submit]'); if (btn) btn.classList.remove('is-loading'); const result = document.querySelector('#contact_form_result'); if (!result) return; const ok = event.detail.successful; let msg = ''; try { const data = JSON.parse(event.detail.xhr.responseText); msg = data.message || data.error || ''; } catch (e) { msg = ''; } if (!msg) msg = ok ? '<?php echo esc_js(__('Thanks! Your message has been sent.', 'orange-county-handy')); ?>' : '<?php echo esc_js(__('Something went wrong. Please try again.', 'orange-county-handy')); ?>'; result.textContent = msg; result.classList.toggle('bg-cynYellow', ok); result.classList.toggle('bg-cynRed', !ok); result.classList.toggle('text-cynTextBlack', ok); result.classList.toggle('text-cynTextWhite', !ok); result.hidden = false; if (ok) event.target.reset();"
		class="flex flex-col gap-4">

		<div class="flex flex-col gap-4 lg:gap-5">

			<div class="grid gap-4 lg:grid-cols-2 lg:gap-x-2 lg:gap-y-5">
				<?php foreach ($fields as $field) : ?>
					<div class="flex flex-col gap-2 lg:gap-3">
						<label for="contact-<?php echo esc_attr($field['name']); ?>" class="text-sm font-normal text-cynTextBlack">
							<?php echo esc_html($field['label']); ?>
						</label>
						<label class="secondary-input" for="contact-<?php echo esc_attr($field['name']); ?>">
							<input id="contact-<?php echo esc_attr($field['name']); ?>" name="<?php echo esc_attr($field['name']); ?>" type="<?php echo esc_attr($field['type']); ?>" placeholder="<?php echo esc_attr($field['placeholder']); ?>" autocomplete="<?php echo esc_attr($field['autocomplete']); ?>" <?php echo $field['required'] ? 'required' : ''; ?>>
						</label>
					</div>
				<?php endforeach; ?>
			</div>

			<div class="flex flex-col gap-2 lg:gap-3">
				<label for="contact-subject" class="text-sm font-normal text-cynTextBlack">
					<?php esc_html_e('What Are You Contacting Us About?', 'orange-county-handy'); ?>
				</label>
				<label class="secondary-input relative !p-0" for="contact-subject">
					<select id="contact-subject" name="subject" class="!px-4 !py-2.5 !pe-11" required>
						<option value="">
							<?php esc_html_e('Select an option', 'orange-county-handy'); ?>
						</option>
						<?php foreach ($subjects as $subject) : ?>
							<option value="<?php echo esc_attr($subject); ?>">
								<?php echo esc_html($subject); ?>
							</option>
						<?php endforeach; ?>
					</select>
					<i class="absolute end-4 top-1/2 -translate-y-1/2 text-cynTextBlack" aria-hidden="true">
						<?php Icon::print('Arrow-28'); ?>
					</i>
				</label>
			</div>

			<div class="flex flex-col gap-2 lg:gap-3">
				<label for="contact-message" class="text-sm font-normal text-cynTextBlack">
					<?php esc_html_e('Your Message', 'orange-county-handy'); ?>
				</label>
				<label class="secondary-input items-start" for="contact-message">
					<textarea id="contact-message" name="message" rows="4" maxlength="65525" class="resize-none" placeholder="<?php esc_attr_e('Type Your Message Here...', 'orange-county-handy'); ?>" required></textarea>
				</label>
			</div>

		</div>

		<p class="px-2 text-[10px] font-normal text-cynTextBlack">
			<?php esc_html_e('Your Information is Safe With Us. We Never Share Your Details', 'orange-county-handy'); ?>
		</p>

		<div class="flex flex-col gap-2">

			<button type="submit" class="submit-form-btn primary-btn self-start">
				<span class="submit-form-btn__idle">
					<?php esc_html_e('Send Message', 'orange-county-handy'); ?>
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

			<p id="contact_form_result" class="rounded-lg px-3 py-2 text-sm font-medium" role="status" aria-live="polite" hidden></p>

		</div>

	</form>

</section>
