<?php
/*
Template Name: Single
Description: A template for displaying a single post type.
More information at https://developer.wordpress.org/themes/templates/template-hierarchy/#single-hierarchy
*/

use Cyan\Theme\Helpers\Templates;
?>
<?php get_header(); ?>

<main class="single">

	<section>
		<?php Templates::getPart('breadcrumb'); ?>
	</section>

	<section class="container">
		<div class="text-cynBlack [&_a]:text-cynBlue [&_a]:font-normal [&_h2]:text-2xl [&_h2]:my-4 [&_h3]:text-xl [&_h3]:my-4 [&_h4]:text-xl [&_h4]:my-4 [&_p]:text-base [&_p]:font-light [&_p]:leading-8 [&_p]:my-4 [&_img]:w-full [&_img]:max-h-96 [&_img]:object-cover [&_blockquote]:bg-[#E5E5E5] [&_blockquote]:px-2 [&_blockquote]:my-4 [&_blockquote]:text-base [&_blockquote]:font-medium">
			<?php the_content(); ?>
		</div>
	</section>

</main>

<?php get_footer();
