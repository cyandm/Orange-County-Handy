<?php

/**
 * Header for wordpress theme
 * its must include only head and body tags
 * header templates located in /partials/header/
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;

$render_template = $args['render_template'] ?? true;
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>

<body <?php body_class('overflow-x-hidden bg-cynBgBase'); ?>>
	<?php wp_body_open(); ?>

	<?php if ($render_template) : ?>
		<div class="icon hidden size-6" id="chevron-down">
			<?php Icon::print('Arrow-28'); ?>
		</div>

		<header class="mb-2 md:mb-6 bg-cynBG">
			<div class="hidden lg:block">
				<?php Templates::getPart('desktop-header'); ?>
			</div>
			<div class="lg:hidden">
				<?php Templates::getPart('mobile-header'); ?>
			</div>
		</header>
	<?php endif; ?>