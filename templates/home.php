<?php /* Template Name: Home */ ?>

<?php

use Cyan\Theme\Helpers\Templates;

get_header(); ?>

<main id="home" class="flex flex-col gap-10 lg:gap-16 -mt-2 md:-mt-6">

	<?php Templates::getPart('home/home-hero'); ?>
	<?php Templates::getPart('home/home-features'); ?>
	<?php Templates::getPart('home/home-services'); ?>
	<?php Templates::getPart('home/home-reviews'); ?>
	<?php Templates::getPart('home/home-about'); ?>
	<?php Templates::getPart('home/home-quote'); ?>
	<?php Templates::getPart('home/home-steps'); ?>
	<?php Templates::getPart('home/home-faq'); ?>

</main>

<?php get_footer(); ?>