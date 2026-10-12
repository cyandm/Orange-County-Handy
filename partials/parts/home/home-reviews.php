<?php

/**
 * Home Reviews — latest review cards in a slider
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$reviews = get_posts(['post_type' => 'review', 'posts_per_page' => 8, 'fields' => 'ids']);
$items = array_map(fn($id) => ['post' => $id, 'class' => 'h-full !mb-0 !animate-none'], $reviews);

Templates::getPart('card-slider', ['id' => 'home-reviews', 'title' => get_field('home_reviews_title') ?: __('Trusted by Local Homeowners', 'orange-county-handy'), 'card' => 'review', 'items' => $items, 'per_view' => 2, 'per_view_lg' => 4]);
