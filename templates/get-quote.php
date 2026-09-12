<?php /* Template Name: Get Quote */ ?>

<?php

use Cyan\Theme\Helpers\Templates;

get_header(); ?>

<?php Templates::getPart('breadcrumb'); ?>

<main id="get-quote" class="flex flex-col gap-10 lg:gap-16">

	<div class="container">
		<?php Templates::getPart('quote-form'); ?>
	</div>

</main>

<?php get_footer(); ?>
