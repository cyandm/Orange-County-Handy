<?php

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

defined('ABSPATH') || exit;

global $wp_query;

$search_type = empty($_GET['search-type']) ? 'all' : $_GET['search-type'];

?>

<?php get_header() ?>

<?php Templates::getPart('breadcrumb'); ?>

<main id="search-page" class="flex flex-col">

</main>

<?php get_footer() ?>