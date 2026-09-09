<?php

/**
 * The template for displaying single blog posts
 * 
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;

$current_post_id = get_the_ID();
$categories = get_the_category();
$tags = get_the_tags();

$related_args = [
    'post_type' => 'post',
    'posts_per_page' => 12,
    'post__not_in' => [$current_post_id],
];

if (!empty($categories)) {
    $related_args['category__in'] = wp_list_pluck($categories, 'term_id');
} elseif ($tags && !empty($tags)) {
    $related_args['tag__in'] = wp_list_pluck(array_values($tags), 'term_id');
}

$related_posts_query = new WP_Query($related_args);

get_header(); ?>

<?php Templates::getPart('breadcrumb'); ?>

<main class="single-post">

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

            <section class="container flex flex-col gap-2 mb-5">

                <div class="text-cynBlack/50 text-xs font-medium flex gap-2 items-center"><?php the_category('|'); ?></div>

                <h1 class="text-3xl text-cynBlack leading-11"><?php the_title(); ?></h1>

                <img src="<?= get_template_directory_uri(); ?>/assets/image/zigzag.svg" alt="zigzag" class="w-32">

                <div class="flex gap-4 items-center mt-2">

                    <div class="flex flex-row gap-1 items-center justify-center">

                        <?= get_avatar('', '', '', '', ['class' => 'size-6 rounded-full']); ?>
                        <span class="text-cynBlack/50 text-xs font-semibold"><?php the_author(); ?></span>

                    </div>

                    <div class="flex flex-row gap-1 items-center justify-center">

                        <i class="size-6 text-cynBlack/50">
                            <?php Icon::print('calendar-schedule-1-1') ?>
                        </i>
                        <span class="text-cynBlack/50 text-xs font-semibold"><?= get_the_date(); ?></span>

                    </div>

                </div>

                <div class="flex justify-between p-6 rounded-3xl bg-cynWhite border border-cynBlack/10 mt-2 items-center">

                    <div class="flex items-center">
                        <i class="size-6 text-cynBlack cursor-pointer stroke-[1.5]" id="shareBtn">
                            <?php Icon::print('Share-2') ?>
                        </i>
                    </div>

                    <div class="flex items-center gap-2">

                        <span class="text-cynBlack text-base font-medium"><?= get_comments_number(); ?></span>

                        <i class="size-6 text-cynBlack stroke-[1.5]">
                            <?php Icon::print('Chat,-Messages,-Bubble-6') ?>
                        </i>

                    </div>

                </div>
            </section>

            <section class="container single-post-content">

                <div class="w-full">
                    <?php the_post_thumbnail('full', ['class' => 'w-full h-[320px] md:h-[460px] lg:h-[770px] object-cover object-center']) ?>
                </div>

                <div class="text-cynBlack [&_a]:text-cynBlue [&_a]:font-normal [&_h2]:text-2xl [&_h2]:my-4 [&_h3]:text-xl [&_h3]:my-4 [&_h4]:text-xl [&_h4]:my-4 [&_p]:text-base [&_p]:font-light [&_p]:leading-8 [&_p]:my-4 [&_img]:w-full [&_img]:max-h-96 [&_img]:object-cover [&_blockquote]:bg-[#E5E5E5] [&_blockquote]:px-2 [&_blockquote]:my-4 [&_blockquote]:text-base [&_blockquote]:font-medium">
                    <?php the_content(); ?>
                </div>

            </section>

            <!-- Comments Section -->
            <?php if (comments_open() || get_comments_number()) : ?>
                <section class="container comments-section mt-5">
                    <?php Templates::getPart('comment'); ?>
                </section>
            <?php endif; ?>

            <!-- Related Posts Section -->
            <section class="flex flex-col gap-3 my-14">

                <div class="container">
                    <p class="text-2xl text-cynBlack leading-11"><?php _e('شاید بپسندید', 'orange-county-handy'); ?></p>
                </div>

                <?php if ($related_posts_query->have_posts()) : ?>
                    <div class="relative">
                        <swiper-container class="w-full" slides-per-view="1.25" centered-slides="true" breakpoints='{ "640":  { "slidesPerView": 2.15 }, "768":  { "slidesPerView": 2.15 }, "1024": { "slidesPerView": 3.25 }, "1280": { "slidesPerView": 4, "centeredSlides": false }}' loop="true" autoplay="true" pagination="false" navigation="true" navigation-next-el="#relatedPostsNext" navigation-prev-el="#relatedPostsPrev">
                            <?php while ($related_posts_query->have_posts()) : $related_posts_query->the_post(); ?>
                                <swiper-slide>
                                    <?php Templates::getCard('blog'); ?>
                                </swiper-slide>
                            <?php endwhile; ?>
                        </swiper-container>

                        <div class="flex justify-between items-center absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 pointer-events-none z-10">

                            <button id="relatedPostsPrev" class="bg-cynBlack p-1 cursor-pointer rounded-full pointer-events-auto">
                                <div class="text-white size-7 stroke-[1.5]">
                                    <?php icon::print('Arrow,-Right') ?>
                                </div>
                            </button>

                            <button id="relatedPostsNext" class="bg-cynBlack p-1 cursor-pointer rounded-full pointer-events-auto">
                                <div class="text-white size-7 stroke-[1.5]">
                                    <?php icon::print('Left-1') ?>
                                </div>
                            </button>

                        </div>

                    <?php endif; ?>

            </section>

    <?php endwhile;
    endif; ?>

</main>

<?php get_footer();
