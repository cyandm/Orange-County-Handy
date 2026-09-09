<?php

use Cyan\Theme\Helpers\Icon;

$logo_footer = get_option('logo_footer');
$phone_number = get_option('phone_number');
$service_areas = get_option('service_areas');
$instagram_link = get_option('instagram_link');
$email_address = get_option('email_address');
$copyright_text = get_option('copyright_text');

$menu_class = 'flex flex-col gap-1.5 text-sm font-normal text-cynTextWhite [&>li>a]:transition-all [&>li>a]:duration-300 [&>li>a]:hover:text-cynYellow [&>li[aria-current=page]>a]:text-cynYellow';
$bottom_menu_class = "flex flex-wrap items-center gap-4 lg:gap-10 text-sm font-normal text-cynTextWhite [&>li]:flex [&>li]:items-center [&>li]:gap-4 lg:[&>li]:gap-10 [&>li]:before:content-['|'] [&>li]:before:text-cynTextWhite/40 [&>li>a]:transition-all [&>li>a]:duration-300 [&>li>a]:hover:text-cynYellow";

$has_contact = $phone_number || $service_areas || $instagram_link || $email_address;
?>

<section class="container mb-3 lg:mb-6">

	<div class="rounded-lg lg:rounded-2xl bg-cynBlack px-6">

		<div class="flex flex-col lg:flex-row lg:justify-between gap-10 border-b border-cynTextWhite/20 pt-3 pb-8 lg:pt-10 lg:pb-7">

			<div class="logo shrink-0 [&_img]:w-36 lg:[&_img]:w-48 [&_img]:h-auto [&_img]:object-contain">
				<?php if ($logo_footer) : ?>
					<img src="<?php echo esc_url($logo_footer); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
				<?php else : ?>
					<?php the_custom_logo(); ?>
				<?php endif; ?>
			</div>

			<div class="flex gap-14">
				<?php wp_nav_menu(['menu_class' => $menu_class, 'depth' => 1, 'theme_location' => 'footer-menu-col-1', 'container' => 'ul', 'fallback_cb' => false]); ?>
				<?php wp_nav_menu(['menu_class' => $menu_class, 'depth' => 1, 'theme_location' => 'footer-menu-col-2', 'container' => 'ul', 'fallback_cb' => false]); ?>
			</div>

			<?php if ($has_contact) : ?>
				<div class="flex flex-col gap-5">

					<?php if ($phone_number || $service_areas) : ?>
						<div class="flex gap-14">

							<?php if ($phone_number) : ?>
								<div class="flex flex-col gap-2.5">
									<span class="text-base font-medium text-cynTextWhite">
										<?php esc_html_e('Our Numbers', 'orange-county-handy'); ?>
									</span>
									<a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone_number)); ?>" class="text-sm font-normal text-cynTextWhite transition-all duration-300 hover:text-cynYellow">
										<?php echo esc_html($phone_number); ?>
									</a>
								</div>
							<?php endif; ?>

							<?php if ($service_areas) : ?>
								<div class="flex flex-col gap-2.5">
									<span class="text-base font-medium text-cynTextWhite">
										<?php esc_html_e('Service Areas', 'orange-county-handy'); ?>
									</span>
									<p class="text-sm font-normal text-cynTextWhite">
										<?php echo esc_html($service_areas); ?>
									</p>
								</div>
							<?php endif; ?>

						</div>
					<?php endif; ?>

					<?php if ($instagram_link || $email_address) : ?>
						<div class="flex flex-col gap-2.5">

							<?php if ($instagram_link) : ?>
								<a href="https://instagram.com/<?php echo esc_url($instagram_link); ?>" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm font-normal text-cynTextWhite transition-all duration-300 hover:text-cynYellow">
									<i class="size-5 shrink-0 flex items-center justify-center [&_svg]:stroke-[1.5]">
										<?php Icon::print('Instagram'); ?>
									</i>
									<span class="truncate">
										<?php echo esc_html($instagram_link); ?>
									</span>
								</a>
							<?php endif; ?>

							<?php if ($email_address) : ?>
								<a href="mailto:<?php echo esc_attr($email_address); ?>" class="flex items-center gap-2 text-sm font-normal text-cynTextWhite transition-all duration-300 hover:text-cynYellow">
									<i class="size-5 shrink-0 flex items-center justify-center [&_svg]:stroke-[1.5]">
										<?php Icon::print('Mail,-Email,-Letter-12'); ?>
									</i>
									<span class="truncate">
										<?php echo esc_html($email_address); ?>
									</span>
								</a>
							<?php endif; ?>

						</div>
					<?php endif; ?>

				</div>
			<?php endif; ?>

		</div>

		<div class="flex flex-wrap items-center gap-4 lg:gap-10 py-3">
			<p class="text-sm font-normal text-cynTextWhite">
				<?php echo esc_html($copyright_text ?: sprintf(__('© Copyright %s | All Rights Reserved.', 'orange-county-handy'), date_i18n('Y'))); ?>
			</p>
			<?php wp_nav_menu(['menu_class' => $bottom_menu_class, 'depth' => 1, 'theme_location' => 'footer-menu-bottom', 'container' => 'ul', 'fallback_cb' => false]); ?>
		</div>

	</div>

</section>
