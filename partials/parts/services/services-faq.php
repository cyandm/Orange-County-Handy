<?php

/**
 * Services FAQ — accordion of common questions next to a quote CTA
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$query_args = ['post_type' => 'faq', 'posts_per_page' => 6, 'orderby' => 'menu_order title', 'order' => 'ASC', 'fields' => 'ids'];

$faq_ids = get_posts(array_merge($query_args, ['tax_query' => [['taxonomy' => 'faq_place', 'field' => 'slug', 'terms' => 'services']]]));
if (! $faq_ids) $faq_ids = get_posts($query_args);

$title = get_option('services_faq_title') ?: __('Frequently Asked Questions', 'orange-county-handy');
$cta_title = get_option('services_cta_title') ?: __('Have a List of Jobs That Need to be done?', 'orange-county-handy');
$cta_text = get_option('services_cta_text') ?: __('Tell us what needs taking care of and we’ll help you get it sorted.', 'orange-county-handy');

$quote_url = Templates::getPageUrl('get-quote');
$phone_number = get_option('phone_number');
?>

<section id="services-faq" class="container flex flex-col gap-3 lg:gap-6">

	<h2 class="text-center text-xl lg:text-3xl font-extrabold capitalize text-cynTextBlack">
		<?php echo esc_html($title); ?>
	</h2>

	<div class="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">

		<?php if ($faq_ids) : ?>
			<div class="flex flex-1 flex-col gap-6 rounded-xl border border-cynBorder bg-cynBG p-6 shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] lg:rounded-2xl lg:shadow-none">
				<?php foreach ($faq_ids as $i => $faq_id) : ?>
					<?php Templates::getCard('faq-accordion', ['faq-id' => $faq_id, 'open' => $i === 0]); ?>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>

		<div class="flex w-full shrink-0 flex-col justify-between gap-6 rounded-2xl bg-cynBlack p-6 lg:w-96 lg:self-stretch">

			<div class="flex flex-col gap-3">
				<p class="text-xl lg:text-2xl font-bold capitalize text-cynTextWhite">
					<?php echo esc_html($cta_title); ?>
				</p>
				<p class="text-sm lg:text-base font-medium capitalize text-cynTextWhite">
					<?php echo esc_html($cta_text); ?>
				</p>
			</div>

			<div class="flex flex-col gap-3">
				<?php if ($quote_url) : ?>
					<a href="<?php echo esc_url($quote_url); ?>" class="primary-btn text-center">
						<?php esc_html_e('Get a Free Quote', 'orange-county-handy'); ?>
					</a>
				<?php endif; ?>
				<?php if ($phone_number) : ?>
					<a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone_number)); ?>" class="secondary-btn flex flex-col items-center border border-cynYellow text-center">
						<span>
							<?php esc_html_e('Call or Text', 'orange-county-handy'); ?>
						</span>
						<span>
							<?php echo esc_html($phone_number); ?>
						</span>
					</a>
				<?php endif; ?>
			</div>

		</div>

	</div>

</section>
