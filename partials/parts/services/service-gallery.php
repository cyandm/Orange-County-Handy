<?php

/**
 * Service Gallery — recent projects for this service
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$ids = [];
for ($i = 1; $i <= 8; $i++) {
	$id = (int) get_field("service_gallery_{$i}");
	if ($id) $ids[] = $id;
}

$title = get_field('service_gallery_title') ?: __('Recent Projects', 'orange-county-handy');

Templates::getPart('gallery-slider', ['ids' => $ids, 'title' => $title, 'title_size' => 'text-xl']);
