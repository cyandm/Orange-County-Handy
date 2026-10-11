<?php

/**
 * About Us — on the job gallery
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$ids = [];
for ($i = 1; $i <= 8; $i++) {
	$id = (int) get_field("about_gallery_{$i}");
	if ($id) $ids[] = $id;
}

$title = get_field('about_gallery_title') ?: __('On the Job With Orange County Handy', 'orange-county-handy');

Templates::getPart('gallery-slider', ['ids' => $ids, 'title' => $title, 'gray' => true]);
