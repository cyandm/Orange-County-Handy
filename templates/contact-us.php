<?php /* Template Name: Contact Us */ ?>

<?php

use Cyan\Theme\Helpers\Templates;

get_header(); ?>

<?php Templates::getPart('breadcrumb'); ?>

<main id="contact-us" class="flex flex-col gap-10 lg:gap-16">

	<div class="container flex flex-col items-stretch gap-3 lg:flex-row">
		<?php Templates::getPart('contact-form'); ?>
		<?php Templates::getPart('contact-aside'); ?>
	</div>

	<?php Templates::getPart('quick-answers', ['faq_place' => 'contact']); ?>

</main>

<?php get_footer(); ?>
