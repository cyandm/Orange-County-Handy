<?php

use Cyan\Theme\Helpers\Templates;

// Get args passed from Templates::getPart (term_ids = faq_cat, faq_place = slug of faq_place)
$args = get_query_var('args', []);
$term_ids = $args['term_ids'] ?? [];
$faq_place = $args['faq_place'] ?? '';

$query_args = [
    'post_type' => 'faq',
    'posts_per_page' => -1,
    'fields' => 'ids',
    'orderby' => 'menu_order title',
    'order' => 'ASC',
];

$tax_queries = [];

if (!empty($term_ids)) {
    $tax_queries[] = [
        'taxonomy' => 'faq_cat',
        'field' => 'term_id',
        'terms' => $term_ids,
    ];
}

if (!empty($faq_place)) {
    $tax_queries[] = [
        'taxonomy' => 'faq_place',
        'field' => 'slug',
        'terms' => $faq_place,
    ];
}

if (count($tax_queries) === 1) {
    $query_args['tax_query'] = $tax_queries;
} elseif (count($tax_queries) > 1) {
    $query_args['tax_query'] = array_merge(['relation' => 'AND'], $tax_queries);
}

$faq_group = get_posts($query_args);

if (empty($faq_group))
    return;

?>

<div class="py-9 px-6 divide-y divide-cynYellow/10">

    <?php foreach ($faq_group as $index => $faq_id) : ?>
        <?php Templates::getCard('faq', ['post-id' => $faq_id]) ?>
    <?php endforeach; ?>
</div>