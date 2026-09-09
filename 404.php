<?php
/*
Description: A template for displaying a 404 error page.
More information at https://developer.wordpress.org/themes/templates/template-hierarchy/#404-not-found-hierarchy
*/

use Cyan\Theme\Helpers\Templates;

defined('ABSPATH') || exit;

?>

<?php get_header(); ?>

<?php Templates::getPart('breadcrumb'); ?>

<main class="container flex flex-col items-center gap-5 lg:gap-6">

	<img src="<?= get_template_directory_uri(); ?>/assets/image/404.webp" alt="<?php echo esc_attr__('Page not found', 'orange-county-handy'); ?>" class="w-56 lg:w-[410px] h-auto object-contain" loading="lazy">

	<div class="flex flex-col items-center gap-3 text-center">

		<h1 class="text-2xl font-bold text-cynTextBlack">
			<?php esc_html_e('Looks Like This Page Needs a Little Fixing.', 'orange-county-handy'); ?>
		</h1>

		<p class="max-w-3xl text-sm lg:text-base font-medium text-cynTextGray">
			<?php esc_html_e('The page you’re looking for may have moved, been removed, or never existed. No worries — we can get you back on track.', 'orange-county-handy'); ?>
		</p>

		<a href="<?php echo esc_url(home_url('/')); ?>" class="primary-btn">
			<?php esc_html_e('back to Home', 'orange-county-handy'); ?>
		</a>

	</div>

</main>

<?php get_footer();
