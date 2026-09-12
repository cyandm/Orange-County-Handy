<?php

/**
 * Get a Quote — four step wizard + summary + success
 * @package CyanTheme
 */

use Cyan\Theme\Classes\QuoteForm;
use Cyan\Theme\Helpers\Icon;

$services = get_posts(['post_type' => 'service', 'posts_per_page' => -1, 'orderby' => 'menu_order title', 'order' => 'ASC']);

if (! $services) return;

$steps = [__('Service', 'orange-county-handy'), __('Details', 'orange-county-handy'), __('Timeline', 'orange-county-handy'), __('contact', 'orange-county-handy')];
$timeframes = QuoteForm::timeframes();
$property_types = QuoteForm::propertyTypes();
$contact_methods = QuoteForm::contactMethods();

$service_card = 'flex h-full w-full cursor-pointer flex-col items-center gap-1 rounded-lg border border-cynBorder bg-cynWhite p-1 transition-all duration-300 hover:border-cynBorderHover peer-checked:border-cynYellow peer-checked:bg-cynYellowLight peer-checked:shadow-[0_9px_8px_0_rgba(0,0,0,0.10)] lg:items-start lg:gap-2 lg:rounded-2xl lg:p-2';
$time_card = 'flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-cynBorder bg-cynWhite p-2 text-center transition-all duration-300 hover:border-cynBorderHover peer-checked:border-cynYellow peer-checked:bg-cynYellowLight peer-checked:shadow-[0_8px_9px_0_rgba(0,0,0,0.10)] lg:rounded-2xl';
$contact_card = 'flex h-full w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-lg border border-cynBorder bg-cynWhite px-2 py-3 transition-all duration-300 hover:border-cynBorderHover peer-checked:border-cynYellow peer-checked:bg-cynYellowLight peer-checked:shadow-[0_9px_8px_0_rgba(0,0,0,0.10)] lg:rounded-2xl';
$circle_class = 'flex size-5 shrink-0 items-center justify-center rounded-full bg-cynBorder text-[10px] font-semibold text-cynTextWhite transition-all duration-300 group-data-[state=active]:bg-cynYellow group-data-[state=active]:text-cynTextBlack group-data-[state=done]:bg-cynYellow group-data-[state=done]:text-cynTextBlack lg:size-7 lg:text-sm';
$form_url = rest_url('cyn/v1/quote_form');
?>

<div id="quote_wizard" class="mx-auto w-full max-w-[900px]">

	<form id="quote_form" action="<?php echo esc_url($form_url); ?>" method="post" enctype="multipart/form-data" hx-post="<?php echo esc_url($form_url); ?>" hx-encoding="multipart/form-data" hx-headers='{"X-WP-Nonce":"<?php echo esc_attr(wp_create_nonce('wp_rest')); ?>"}' hx-swap="none" hx-disabled-elt="find button[type=submit]" class="flex flex-col gap-5 rounded-2xl bg-cynBG p-3">

		<div data-quote-progress class="flex flex-col gap-3">

			<p class="text-sm font-normal text-cynTextBlack" data-step-label data-step-template="<?php echo esc_attr(sprintf(__('step %1$s of %2$s • %3$s', 'orange-county-handy'), '{current}', count($steps), '{name}')); ?>">
				<?php echo esc_html(sprintf(__('step %1$s of %2$s • %3$s', 'orange-county-handy'), 1, count($steps), __('SERVICE', 'orange-county-handy'))); ?>
			</p>

			<div class="flex items-center gap-1 lg:gap-2">
				<?php foreach ($steps as $index => $step) : ?>
					<?php if ($index) : ?>
						<span class="h-0.5 w-4 shrink-0 bg-cynBorder transition-all duration-300 data-[state=done]:bg-cynYellow lg:w-auto lg:flex-1" data-step-line="<?php echo esc_attr($index); ?>" data-state="todo"></span>
					<?php endif; ?>
					<span class="group flex items-center gap-1 lg:gap-2" data-step-item="<?php echo esc_attr($index + 1); ?>" data-state="<?php echo $index ? 'todo' : 'active'; ?>">
						<span class="<?php echo esc_attr($circle_class); ?>">
							<span class="group-data-[state=done]:hidden">
								<?php echo esc_html($index + 1); ?>
							</span>
							<i class="hidden size-4 items-center justify-center group-data-[state=done]:flex lg:size-5 [&_svg]:size-full [&_svg]:stroke-[2]" aria-hidden="true">
								<?php Icon::print('Done,-Check'); ?>
							</i>
						</span>
						<span class="text-xs font-normal text-cynTextBlack lg:text-sm">
							<?php echo esc_html($step); ?>
						</span>
					</span>
				<?php endforeach; ?>
			</div>

		</div>

		<div data-quote-step data-step-name="<?php esc_attr_e('SERVICE', 'orange-county-handy'); ?>" class="flex flex-col gap-3 px-0 lg:px-0">

			<p class="text-sm font-medium text-cynTextBlack lg:text-base">
				<?php esc_html_e('What can we help you with?', 'orange-county-handy'); ?>
			</p>

			<div class="grid grid-cols-4 gap-1 lg:grid-cols-4 lg:gap-3">
				<?php foreach ($services as $service) : ?>
					<label class="flex min-h-16 lg:min-h-0">
						<input type="radio" name="service" value="<?php echo esc_attr($service->ID); ?>" data-label="<?php echo esc_attr($service->post_title); ?>" class="peer sr-only" required>
						<span class="<?php echo esc_attr($service_card); ?>">
							<?php if (has_post_thumbnail($service)) : ?>
								<?php echo get_the_post_thumbnail($service, 'thumbnail', ['class' => 'size-4 object-contain lg:size-6', 'alt' => esc_attr($service->post_title)]); ?>
							<?php else : ?>
								<i class="size-4 flex shrink-0 items-center justify-center text-cynTextBlack lg:size-6 [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
									<?php Icon::print('Tools,-Settings'); ?>
								</i>
							<?php endif; ?>
							<span class="text-center text-[10px] font-medium text-cynTextBlack lg:text-start lg:text-sm">
								<?php echo esc_html($service->post_title); ?>
							</span>
						</span>
					</label>
				<?php endforeach; ?>
			</div>

		</div>

		<div data-quote-step data-step-name="<?php esc_attr_e('DETAILS', 'orange-county-handy'); ?>" class="flex flex-col gap-3 lg:gap-5" hidden>

			<div class="flex flex-col gap-1">
				<p class="text-sm font-medium text-cynTextBlack lg:text-base">
					<?php esc_html_e('Tell us about your project', 'orange-county-handy'); ?>
				</p>
				<p class="text-xs font-normal text-cynTextBlack lg:text-sm">
					<?php esc_html_e('The more detail you can provide, the easier it is for us to understand what you need.', 'orange-county-handy'); ?>
				</p>
			</div>

			<div class="flex flex-col gap-3">

				<div class="grid gap-3 lg:grid-cols-2">

					<div class="flex flex-col gap-3">
						<label for="quote-zip" class="text-sm font-normal text-cynTextBlack">
							<?php esc_html_e('zip code', 'orange-county-handy'); ?>
						</label>
						<label class="secondary-input" for="quote-zip">
							<input id="quote-zip" name="zip" type="text" inputmode="numeric" pattern="\d{5}(-\d{4})?" maxlength="10" autocomplete="postal-code" placeholder="<?php esc_attr_e('e.g. 92660', 'orange-county-handy'); ?>" class="placeholder:text-xs lg:placeholder:text-sm" required>
						</label>
					</div>

					<div class="flex flex-col gap-3">
						<label for="quote-property-type" class="text-sm font-normal text-cynTextBlack">
							<?php esc_html_e('Property Type', 'orange-county-handy'); ?>
						</label>
						<label class="secondary-input relative !p-0" for="quote-property-type">
							<select id="quote-property-type" name="property_type" class="!px-4 !py-2.5 !pe-11 text-xs lg:text-sm" required>
								<option value="">
									<?php esc_html_e('Where is the project located?', 'orange-county-handy'); ?>
								</option>
								<?php foreach ($property_types as $value => $label) : ?>
									<option value="<?php echo esc_attr($value); ?>" data-label="<?php echo esc_attr($label); ?>">
										<?php echo esc_html($label); ?>
									</option>
								<?php endforeach; ?>
							</select>
							<i class="absolute end-4 top-1/2 -translate-y-1/2 text-cynTextBlack" aria-hidden="true">
								<?php Icon::print('Arrow-28'); ?>
							</i>
						</label>
					</div>

				</div>

				<div class="flex flex-col gap-2">
					<label for="quote-description" class="text-sm font-normal text-cynTextBlack">
						<?php esc_html_e('What would you like us to help with?', 'orange-county-handy'); ?>
					</label>
					<label class="secondary-input items-start min-h-36 lg:min-h-24" for="quote-description">
						<textarea id="quote-description" name="description" rows="5" maxlength="5000" class="resize-none placeholder:text-xs lg:placeholder:text-sm" placeholder="<?php esc_attr_e('Tell us what needs to be repaired, installed, replaced or improved. Include any details you think would help us understand the project.', 'orange-county-handy'); ?>"></textarea>
					</label>
				</div>

				<div class="flex flex-col gap-2 lg:gap-3">

					<span class="text-sm font-normal text-cynTextBlack">
						<?php esc_html_e('Add photos of your project (optional)', 'orange-county-handy'); ?>
					</span>

					<label id="quote-dropzone" for="quote-photos" class="flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-2xl border border-cynBorder bg-cynBgBase px-6 py-4 transition-all duration-300 hover:border-cynBorderHover data-[state=over]:border-cynYellow data-[state=over]:bg-cynYellowLight">
						<input id="quote-photos" name="photos[]" type="file" accept="image/jpeg,image/png,image/webp" multiple class="sr-only" data-remove-label="<?php esc_attr_e('Remove photo', 'orange-county-handy'); ?>">
						<span class="flex items-start gap-2">
							<i class="size-10 flex shrink-0 items-center justify-center text-cynTextBlack [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
								<?php Icon::print('cloud-upload'); ?>
							</i>
							<span class="flex flex-col">
								<span class="text-sm font-normal text-cynTextGray">
									<?php esc_html_e('Drag & drop photos here', 'orange-county-handy'); ?>
								</span>
								<span class="text-xs font-normal text-cynBorder">
									<?php esc_html_e('JPG, PNG or WEBP · Up to 10 MB each', 'orange-county-handy'); ?>
								</span>
							</span>
						</span>
					</label>

					<div id="quote-photos-preview" class="hidden grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3"></div>

				</div>

			</div>

		</div>

		<div data-quote-step data-step-name="<?php esc_attr_e('TIMELINE', 'orange-county-handy'); ?>" class="flex flex-col gap-3 lg:gap-5" hidden>

			<div class="flex flex-col gap-1">
				<p class="text-sm font-medium text-cynTextBlack lg:text-base">
					<?php esc_html_e('When would you like this taken care of?', 'orange-county-handy'); ?>
				</p>
				<p class="text-xs font-normal text-cynTextBlack lg:text-sm">
					<?php esc_html_e('Choose the option that best matches your timeline. An exact date isn’t required.', 'orange-county-handy'); ?>
				</p>
			</div>

			<div class="flex flex-col gap-3">

				<div class="flex flex-col gap-2 lg:gap-2">

					<span class="text-sm font-normal text-cynTextBlack">
						<?php esc_html_e('preferred timeframe', 'orange-county-handy'); ?>
					</span>

					<div class="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3">
						<?php foreach ($timeframes as $value => $timeframe) : ?>
							<label class="flex min-h-28 lg:min-h-32">
								<input type="radio" name="timeframe" value="<?php echo esc_attr($value); ?>" data-label="<?php echo esc_attr($timeframe['title']); ?>" class="peer sr-only" required>
								<span class="<?php echo esc_attr($time_card); ?>">
									<span class="text-sm font-medium text-cynTextBlack lg:text-base">
										<?php echo esc_html($timeframe['title']); ?>
									</span>
									<span class="text-xs font-normal text-cynTextGray lg:text-sm">
										<?php echo esc_html($timeframe['text']); ?>
									</span>
								</span>
							</label>
						<?php endforeach; ?>
					</div>

				</div>

				<div class="flex flex-col gap-2 lg:gap-2">
					<label for="quote-date" class="text-sm font-normal text-cynTextBlack">
						<?php esc_html_e('preferred date (optional)', 'orange-county-handy'); ?>
					</label>
					<label class="secondary-input !bg-cynWhite !pe-0" for="quote-date">
						<input id="quote-date" name="preferred_date" type="date" min="<?php echo esc_attr(wp_date('Y-m-d')); ?>">
						<i class="!size-auto border-s border-cynBorder px-4 py-1.5 text-cynTextBlack [&_svg]:size-6" aria-hidden="true">
							<?php Icon::print('Calendar,-Schedule'); ?>
						</i>
					</label>
				</div>

				<div class="flex flex-col gap-2">
					<label for="quote-notes" class="text-sm font-normal text-cynTextBlack">
						<?php esc_html_e('Additional Scheduling Notes', 'orange-county-handy'); ?>
					</label>
					<label class="secondary-input items-start min-h-24" for="quote-notes">
						<textarea id="quote-notes" name="notes" rows="4" maxlength="2000" class="resize-none" placeholder="<?php esc_attr_e('Let us know about any days or times that work particularly well for you.', 'orange-county-handy'); ?>"></textarea>
					</label>
				</div>

			</div>

		</div>

		<div data-quote-step data-step-name="<?php esc_attr_e('CONTACT', 'orange-county-handy'); ?>" class="flex flex-col gap-3 lg:gap-5" hidden>

			<div class="flex flex-col gap-1">
				<p class="text-sm font-medium text-cynTextBlack lg:text-base">
					<?php esc_html_e('How can we reach you?', 'orange-county-handy'); ?>
				</p>
				<p class="text-xs font-normal text-cynTextBlack lg:text-sm">
					<?php esc_html_e('Add your contact details so we can follow up about your project.', 'orange-county-handy'); ?>
				</p>
			</div>

			<div class="flex flex-col gap-3 lg:gap-5">

				<div class="grid gap-3 lg:grid-cols-2">

					<div class="flex flex-col gap-3">
						<label for="quote-first-name" class="text-sm font-normal text-cynTextBlack">
							<?php esc_html_e('First Name', 'orange-county-handy'); ?>
						</label>
						<label class="secondary-input" for="quote-first-name">
							<input id="quote-first-name" name="first_name" type="text" autocomplete="given-name" placeholder="<?php esc_attr_e('Enter Your First Name', 'orange-county-handy'); ?>" required>
						</label>
					</div>

					<div class="flex flex-col gap-3">
						<label for="quote-last-name" class="text-sm font-normal text-cynTextBlack">
							<?php esc_html_e('Last Name', 'orange-county-handy'); ?>
						</label>
						<label class="secondary-input" for="quote-last-name">
							<input id="quote-last-name" name="last_name" type="text" autocomplete="family-name" placeholder="<?php esc_attr_e('Enter Your Last Name', 'orange-county-handy'); ?>">
						</label>
					</div>

					<div class="flex flex-col gap-3">
						<label for="quote-email" class="text-sm font-normal text-cynTextBlack">
							<?php esc_html_e('Email', 'orange-county-handy'); ?>
						</label>
						<label class="secondary-input" for="quote-email">
							<input id="quote-email" name="email" type="email" autocomplete="email" placeholder="<?php esc_attr_e('Enter Your Email', 'orange-county-handy'); ?>" required>
						</label>
					</div>

					<div class="flex flex-col gap-3">
						<label for="quote-phone" class="text-sm font-normal text-cynTextBlack">
							<?php esc_html_e('Phone number (optional)', 'orange-county-handy'); ?>
						</label>
						<label class="secondary-input" for="quote-phone">
							<input id="quote-phone" name="phone" type="tel" autocomplete="tel" placeholder="<?php esc_attr_e('Enter Your Phone number', 'orange-county-handy'); ?>">
						</label>
					</div>

				</div>

				<div class="flex flex-col gap-3">

					<span class="text-sm font-normal text-cynTextBlack">
						<?php esc_html_e('Preferred Contact Method', 'orange-county-handy'); ?>
					</span>

					<div class="grid grid-cols-1 gap-3 lg:grid-cols-3">
						<?php foreach ($contact_methods as $value => $method) : ?>
							<label class="flex">
								<input type="radio" name="contact_method" value="<?php echo esc_attr($value); ?>" data-label="<?php echo esc_attr($method['title']); ?>" class="peer sr-only" required>
								<span class="<?php echo esc_attr($contact_card); ?>">
									<i class="size-6 flex shrink-0 items-center justify-center text-cynTextBlack [&_svg]:size-full [&_svg]:stroke-[1.5]" aria-hidden="true">
										<?php Icon::print($method['icon']); ?>
									</i>
									<span class="text-sm font-normal text-cynTextBlack lg:text-base">
										<?php echo esc_html($method['title']); ?>
									</span>
								</span>
							</label>
						<?php endforeach; ?>
					</div>

				</div>

			</div>

		</div>

		<div data-quote-summary class="flex flex-col gap-3 lg:gap-5" hidden>

			<div class="flex flex-col gap-1 lg:gap-3">
				<p class="text-base font-medium text-cynTextBlack">
					<?php esc_html_e('Request Summary', 'orange-county-handy'); ?>
				</p>
				<p class="text-sm font-normal text-cynTextBlack">
					<?php esc_html_e('Review Your Request before submitting', 'orange-county-handy'); ?>
				</p>
			</div>

			<div class="flex flex-col gap-4 lg:gap-3">
				<?php
				$summary_rows = [
					['key' => 'service', 'label' => __('Service', 'orange-county-handy')],
					['key' => 'zip', 'label' => __('zip code', 'orange-county-handy')],
					['key' => 'property', 'label' => __('Property Type', 'orange-county-handy')],
					['key' => 'description', 'label' => __('Project Description', 'orange-county-handy')],
					['key' => 'timeframe', 'label' => __('Timeline', 'orange-county-handy')],
					['key' => 'contact', 'label' => __('Contact Method', 'orange-county-handy')],
				];
				foreach ($summary_rows as $row) :
				?>
					<div class="flex items-start justify-between gap-3">
						<span class="w-40 shrink-0 text-sm font-medium text-cynTextGray lg:text-base">
							<?php echo esc_html($row['label']); ?>
						</span>
						<span class="flex-1 text-sm font-normal text-cynTextBlack lg:max-w-96" data-summary="<?php echo esc_attr($row['key']); ?>"></span>
					</div>
				<?php endforeach; ?>
			</div>

			<div id="quote-summary-photos" class="hidden grid-cols-2 gap-2 lg:flex lg:grid-cols-none lg:gap-3"></div>

		</div>

		<div data-quote-actions class="flex flex-col items-end gap-2">

			<div class="flex items-center gap-2">

				<button type="button" data-quote-prev class="tertiary-btn hover:border-cynBlack" hidden>
					<?php esc_html_e('go back', 'orange-county-handy'); ?>
				</button>

				<button type="button" data-quote-next class="primary-btn">
					<?php esc_html_e('continue', 'orange-county-handy'); ?>
				</button>

				<button type="submit" data-quote-submit class="submit-form-btn primary-btn" hidden>
					<span class="submit-form-btn__idle">
						<?php esc_html_e('Request My Free Quote', 'orange-county-handy'); ?>
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

			</div>

			<p id="quote_form_result" class="w-full rounded-lg px-3 py-2 text-sm font-medium" role="status" aria-live="polite" hidden></p>

		</div>

	</form>

	<div id="quote_success" class="relative flex flex-col gap-3 lg:mx-auto lg:max-w-[490px]" hidden>

		<div class="relative flex items-center gap-3 rounded-e-lg border-s-4 border-cynYellow bg-cynYellowLight px-5 py-1">
			<span class="flex size-6 shrink-0 items-center justify-center rounded-full bg-cynYellow" aria-hidden="true">
				<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M4.22684 6.1058L10.332 0L11.2718 0.939149L4.22684 7.9841L0 3.75726L0.939149 2.81811L4.22684 6.1058Z" fill="white" />
				</svg>
			</span>
			<p class="text-base font-medium text-cynTextBlack lg:text-xl">
				<?php esc_html_e('Request submitted successfully', 'orange-county-handy'); ?>
			</p>
		</div>

		<div class="flex flex-col gap-6 rounded-2xl bg-cynBG p-3">
			<div class="flex flex-col gap-3">
				<p class="text-base font-medium text-cynTextBlack">
					<?php esc_html_e('Thanks! We’ve Got Your Request.', 'orange-county-handy'); ?>
				</p>
				<p class="text-sm font-normal text-cynTextBlack">
					<?php esc_html_e('Your project details have been sent to Orange County Handy. We’ll review everything and get back to you as soon as possible.', 'orange-county-handy'); ?>
				</p>
			</div>
			<div class="flex justify-end">
				<a href="<?php echo esc_url(home_url('/')); ?>" class="primary-btn">
					<?php esc_html_e('Back to Home', 'orange-county-handy'); ?>
				</a>
			</div>
		</div>

	</div>

</div>
