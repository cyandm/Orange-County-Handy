<?php
/**
 * Mobile Header
 * @package CyanThemeSetup
 */

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

$quote_url = Templates::getPageUrl('get-quote');
$search_url = add_query_arg(['s' => '', 'search-type' => 'all'], home_url('/'));
$logo_mobile_menu = get_option('logo_mobile_menu');
$instagram_link = get_option('instagram_link');
$whatsapp_number = get_option('whatsapp_number');
$twitter_link = get_option('twitter_link');
$facebook_link = get_option('facebook_link');
$linkedin_link = get_option('linkedin_link');
$has_socials = $instagram_link || $whatsapp_number || $twitter_link || $facebook_link || $linkedin_link;
?>

<section id="mobile-header" class="relative z-50 border-b border-cynBorder bg-cynBG">
	<div class="container flex justify-between items-center py-3">

		<div class="flex items-center gap-3">
			<button type="button" class="flex size-10 items-center justify-center rounded-lg bg-cynBG text-cynTextBlack cursor-pointer transition-all duration-300" modal-opener data-modal-name="menu-modal" aria-label="<?php esc_attr_e('Open menu', 'orange-county-handy'); ?>">
				<i class="size-6 flex items-center justify-center [&_svg]:stroke-[1.5]">
					<?php Icon::print('menu-burger-square-6'); ?>
				</i>
			</button>

			<div class="logo flex items-center [&_img]:w-20 [&_img]:h-auto [&_img]:object-contain">
				<?php the_custom_logo(); ?>
			</div>
		</div>

		<div class="flex items-center gap-2">
			<a href="<?php echo esc_url($search_url); ?>" class="flex size-10 items-center justify-center rounded-lg border border-cynBorder bg-cynBgBase text-cynTextGray transition-all duration-300" aria-label="<?php esc_attr_e('Search', 'orange-county-handy'); ?>">
				<i class="size-6 flex items-center justify-center [&_svg]:stroke-[1.5]">
					<?php Icon::print('Search,-Loupe'); ?>
				</i>
			</a>

			<?php if ($quote_url) : ?>
				<a href="<?php echo esc_url($quote_url); ?>" class="flex size-10 items-center justify-center rounded-lg border border-cynYellow bg-cynYellow text-cynTextBlack transition-all duration-300" aria-label="<?php esc_attr_e('Get a quote', 'orange-county-handy'); ?>">
					<i class="size-6 flex items-center justify-center [&_svg]:stroke-[1.5]">
						<?php Icon::print('Phone,-Call-11'); ?>
					</i>
				</a>
			<?php endif; ?>
		</div>

	</div>
</section>

<section class="mobile-menu-scroll h-screen bg-cynBG p-5 w-0 fixed inset-0 z-[60] opacity-0 pointer-events-none overflow-y-auto data-[active='true']:w-full data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto duration-500" modal data-modal-name="menu-modal" data-modal-layer="drawer" data-active="false">

	<div class="flex justify-between items-center">
		<button type="button" class="flex items-center gap-1 text-cynTextBlack cursor-pointer" modal-closer data-modal-name="menu-modal" aria-label="<?php esc_attr_e('Close menu', 'orange-county-handy'); ?>">
			<i class="size-8 flex items-center justify-center rotate-180 [&_svg]:stroke-[1.5]">
				<?php Icon::print('Arrow,-Forward'); ?>
			</i>
			<span class="text-sm font-medium">
				<?php esc_html_e('Close', 'orange-county-handy'); ?>
			</span>
		</button>

		<?php if ($logo_mobile_menu) : ?>
			<div class="logo flex items-center [&_img]:w-20 [&_img]:h-auto">
				<img src="<?php echo esc_url($logo_mobile_menu); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" class="w-full h-auto object-contain">
			</div>
		<?php else : ?>
			<div class="logo flex items-center [&_img]:w-20 [&_img]:h-auto [&_img]:object-contain">
				<?php the_custom_logo(); ?>
			</div>
		<?php endif; ?>
	</div>

	<div class="mt-2.5">
		<?php wp_nav_menu([
			'menu_id' => 'mobile-menu',
			'menu_class' => 'gap-0.5 [&>li]:border-t [&>li]:border-cynBorder [&>li]:first:border-t-0 flex-col text-cynTextBlack [&_li_a]:flex [&_li_a]:py-3 [&_li_a]:w-full text-base font-medium [&_li_ul]:px-3',
			'depth' => '3',
			'theme_location' => 'mobile-menu',
			'container' => 'ul',
		]); ?>
	</div>

	<?php if ($has_socials) : ?>
		<div class="flex gap-2 flex-col text-cynTextBlack text-sm font-medium mt-8 mb-12">
			<p class="text-sm font-semibold">
				<?php esc_html_e('Social media', 'orange-county-handy'); ?>
			</p>

			<div class="flex gap-3">
				<?php if ($whatsapp_number) : ?>
					<a href="<?php echo esc_url($whatsapp_number); ?>" class="bg-cynBgBase rounded-xl p-2 flex items-center" aria-label="<?php esc_attr_e('WhatsApp', 'orange-county-handy'); ?>">
						<i class="size-6 flex items-center justify-center [&_svg]:stroke-[1.5]">
							<?php Icon::print('Whatsup'); ?>
						</i>
					</a>
				<?php endif; ?>

				<?php if ($instagram_link) : ?>
					<a href="<?php echo esc_url($instagram_link); ?>" class="bg-cynBgBase rounded-xl p-2 flex items-center" aria-label="<?php esc_attr_e('Instagram', 'orange-county-handy'); ?>">
						<i class="size-6 flex items-center justify-center [&_svg]:stroke-[1.5]">
							<?php Icon::print('Instagram'); ?>
						</i>
					</a>
				<?php endif; ?>

				<?php if ($facebook_link) : ?>
					<a href="<?php echo esc_url($facebook_link); ?>" class="bg-cynBgBase rounded-xl p-2 flex items-center" aria-label="<?php esc_attr_e('Facebook', 'orange-county-handy'); ?>">
						<i class="size-6 flex items-center justify-center [&_svg]:stroke-[1.5]">
							<?php Icon::print('Facebook'); ?>
						</i>
					</a>
				<?php endif; ?>

				<?php if ($twitter_link) : ?>
					<a href="<?php echo esc_url($twitter_link); ?>" class="bg-cynBgBase rounded-xl p-2 flex items-center justify-center size-10" aria-label="<?php esc_attr_e('X', 'orange-county-handy'); ?>">
						<i class="size-5 flex items-center justify-center p-0.5">
							<?php echo file_get_contents(THEME_DIR . '/assets/icon/x.svg'); ?>
						</i>
					</a>
				<?php endif; ?>

				<?php if ($linkedin_link) : ?>
					<a href="<?php echo esc_url($linkedin_link); ?>" class="bg-cynBgBase rounded-xl p-2 flex items-center" aria-label="<?php esc_attr_e('LinkedIn', 'orange-county-handy'); ?>">
						<i class="size-6 flex items-center justify-center [&_svg]:stroke-[1.5]">
							<?php Icon::print('Linkedin'); ?>
						</i>
					</a>
				<?php endif; ?>
			</div>
		</div>
	<?php endif; ?>

</section>
