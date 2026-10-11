<?php

/**
 * Single Service
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

get_header(); ?>

<?php Templates::getPart('breadcrumb'); ?>

<main id="single-service" class="flex flex-col gap-10 lg:gap-16">

	<?php while (have_posts()) : the_post(); ?>
		<?php Templates::getPart('services/service-hero'); ?>
		<?php Templates::getPart('services/service-help'); ?>
		<?php Templates::getPart('services/service-about'); ?>
		<?php Templates::getPart('services/service-gallery'); ?>
		<?php Templates::getPart('faq-section', ['faq_ids' => get_field('service_faqs') ?: [], 'faq_place' => 'services']); ?>
	<?php endwhile; ?>

</main>

<?php get_footer(); ?>