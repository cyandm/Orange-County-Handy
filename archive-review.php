<?php

/**
 * Reviews Archive
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

/* htmx load more request, return only the new cards and the refreshed button */

if (! empty($_SERVER['HTTP_HX_REQUEST'])) {

	while (have_posts()) : the_post();
		Templates::getCard('review');
	endwhile;

	Templates::getPart('reviews-load-more', ['oob' => true]);

	return;
}

get_header();

$title = get_option('reviews_archive_title') ?: __('trusted by local home owners', 'orange-county-handy');
$subtitle = get_option('reviews_archive_subtitle');
?>

<?php Templates::getPart('breadcrumb'); ?>

<main id="reviews-archive" class="flex flex-col gap-3 md:gap-6">

	<div class="container flex flex-col items-center gap-0.5 text-center lg:gap-2">
		<h1 class="text-xl lg:text-3xl font-extrabold capitalize text-cynTextBlack">
			<?php echo esc_html($title); ?>
		</h1>
		<?php if ($subtitle) : ?>
			<p class="text-sm lg:text-base font-normal text-cynTextBlack">
				<?php echo esc_html($subtitle); ?>
			</p>
		<?php endif; ?>
	</div>

	<?php Templates::getPart('review-stats'); ?>

	<?php if (have_posts()) : ?>

		<div class="container max-md:mt-3">
			<div id="reviews-grid" class="columns-2 gap-3 lg:columns-4">
				<?php while (have_posts()) : the_post(); ?>
					<?php Templates::getCard('review'); ?>
				<?php endwhile; ?>
			</div>
		</div>

		<?php Templates::getPart('reviews-load-more'); ?>

	<?php else : ?>

		<p class="container text-center text-sm lg:text-base font-normal text-cynTextGray">
			<?php esc_html_e('No reviews have been published yet.', 'orange-county-handy'); ?>
		</p>

	<?php endif; ?>

</main>

<?php get_footer(); ?>