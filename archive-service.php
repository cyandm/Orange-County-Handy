<?php

/**
 * Services Archive
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

get_header(); ?>

<?php Templates::getPart('breadcrumb'); ?>

<main id="services-archive" class="flex flex-col gap-10 lg:gap-16">

	<?php Templates::getPart('services/services-hero'); ?>
	<?php Templates::getPart('services/services-grid'); ?>
	<?php Templates::getPart('services/services-faq'); ?>

</main>

<?php get_footer(); ?>
