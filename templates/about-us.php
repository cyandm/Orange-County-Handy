<?php /* Template Name: About Us */ ?>

<?php

use Cyan\Theme\Helpers\Templates;

get_header(); ?>

<?php Templates::getPart('breadcrumb'); ?>

<main id="about-us" class="flex flex-col gap-10 lg:gap-16">

	<?php Templates::getPart('about-us/about-intro'); ?>
	<?php Templates::getPart('about-us/about-values'); ?>
	<?php Templates::getPart('about-us/about-story'); ?>
	<?php Templates::getPart('about-us/about-gallery'); ?>

</main>

<?php get_footer(); ?>
