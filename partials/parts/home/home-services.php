<?php

/**
 * Home Services — every published service card in a slider
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$services = get_posts(['post_type' => 'service', 'posts_per_page' => -1, 'orderby' => 'menu_order title', 'order' => 'ASC', 'fields' => 'ids']);
$items = array_map(fn($id) => ['service' => $id, 'class' => 'h-full px-3 py-6'], $services);

Templates::getPart('card-slider', ['id' => 'home-services', 'title' => get_field('home_services_title') ?: __('Our Services', 'orange-county-handy'), 'card' => 'service', 'items' => $items, 'per_view' => 2, 'per_view_lg' => 4]);
