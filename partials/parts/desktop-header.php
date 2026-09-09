<?php

/**
 * Desktop Header
 * @package CyanThemeSetup
 */

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

$quote_url = Templates::getPageUrl('get-quote');
?>

<section id="desktop-header" class="relative z-50 border-b border-cynBorder bg-cynBG">
	<div class="container flex justify-between items-center gap-8 py-3">

		<div class="logo shrink-0 [&_img]:w-[120px] [&_img]:h-auto [&_img]:object-contain">
			<?php the_custom_logo(); ?>
		</div>

		<div class="desktop-menu flex">
			<?php wp_nav_menu([
				'menu_id' => 'main-menu',
				'menu_class' => 'gap-10 text-base font-medium flex items-center text-cynTextBlack [&>li]:transition-all [&>li]:duration-300 [&>li>a]:transition-all [&>li>a]:duration-300 [&>li:hover>a]:text-cynYellow [&>li[aria-current=page]>a]:text-cynYellow [&>li>ul>li:hover>a]:text-cynYellow [&>li>ul>li>a]:transition-all [&>li>ul>li>a]:duration-300 [&_li_a_svg]:transition-transform [&_li_a_svg]:duration-300 [&>li:hover>a_svg]:rotate-180 [&>li>ul>li:hover>a_svg]:-rotate-90',
				'depth' => '3',
				'theme_location' => 'header-menu',
				'container' => 'ul',
			]); ?>
		</div>

		<div class="flex shrink-0 justify-end items-center gap-3">
			<form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>">
				<label for="desktop-header-search" class="primary-input w-40">
					<i aria-hidden="true">
						<?php Icon::print('Search,-Loupe'); ?>
					</i>
					<input id="desktop-header-search" type="search" name="s" value="<?php echo esc_attr(get_search_query()); ?>" placeholder="<?php echo esc_attr__('search', 'orange-county-handy'); ?>">
				</label>
				<input type="hidden" name="search-type" value="all">
			</form>

			<?php if ($quote_url) : ?>
				<a href="<?php echo esc_url($quote_url); ?>" class="primary-btn btn-have-icon">
					<i class="size-6 flex items-center justify-center [&_svg]:stroke-[1.5]">
						<?php Icon::print('Phone,-Call-11'); ?>
					</i>
					<span class="text-base font-normal whitespace-nowrap">
						<?php esc_html_e('get quote', 'orange-county-handy'); ?>
					</span>
				</a>
			<?php endif; ?>
		</div>

	</div>
</section>