<?php

/**
 * Card Slider — titled swiper of cards with side arrows on desktop, bottom arrows on mobile and bar pagination
 * args: id, title, card (partials/cards name), items (card args each, 'post' sets up postdata), per_view, per_view_lg
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

$args = get_query_var('args', []);
$items = $args['items'] ?? [];
$card = $args['card'] ?? '';
$title = $args['title'] ?? '';

if (! $items || ! $card) return;

$nav_btn = 'size-12 shrink-0 items-center justify-center rounded-[30px] bg-cynYellow text-cynTextBlack outline outline-1 -outline-offset-1 outline-cynYellow transition-all duration-300';
?>

<section <?php echo ! empty($args['id']) ? 'id="' . esc_attr($args['id']) . '"' : ''; ?> class="card-slider container flex flex-col gap-3 lg:gap-6" data-per-view="<?php echo esc_attr($args['per_view'] ?? 2); ?>" data-per-view-lg="<?php echo esc_attr($args['per_view_lg'] ?? 4); ?>">

	<?php if ($title) : ?>
		<h2 class="text-center text-xl lg:text-3xl font-extrabold capitalize text-cynTextBlack">
			<?php echo esc_html($title); ?>
		</h2>
	<?php endif; ?>

	<div class="flex flex-col items-center gap-3 lg:gap-6">

		<div class="flex w-full items-center gap-3">

			<button type="button" class="card-slider-prev hidden <?php echo esc_attr($nav_btn); ?> lg:flex" aria-label="<?php esc_attr_e('Previous', 'orange-county-handy'); ?>">
				<i class="size-4 flex items-center justify-center rotate-180 [&_svg]:size-full [&_svg]:stroke-2">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>

			<div class="min-w-0 flex-1 overflow-hidden">
				<swiper-container class="card-slider-swiper w-full" init="false">
					<?php foreach ($items as $item) : ?>
						<?php if (! empty($item['post'])) : ?>
							<?php $GLOBALS['post'] = get_post($item['post']); ?>
							<?php setup_postdata($GLOBALS['post']); ?>
						<?php endif; ?>
						<swiper-slide class="!h-auto">
							<?php Templates::getCard($card, $item); ?>
						</swiper-slide>
					<?php endforeach; ?>
					<?php wp_reset_postdata(); ?>
				</swiper-container>
			</div>

			<button type="button" class="card-slider-next hidden <?php echo esc_attr($nav_btn); ?> lg:flex" aria-label="<?php esc_attr_e('Next', 'orange-county-handy'); ?>">
				<i class="size-4 flex items-center justify-center [&_svg]:size-full [&_svg]:stroke-2">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>

		</div>

		<div class="flex items-center gap-3 lg:hidden">
			<button type="button" class="card-slider-prev flex <?php echo esc_attr($nav_btn); ?>" aria-label="<?php esc_attr_e('Previous', 'orange-county-handy'); ?>">
				<i class="size-4 flex items-center justify-center rotate-180 [&_svg]:size-full [&_svg]:stroke-2">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>
			<button type="button" class="card-slider-next flex <?php echo esc_attr($nav_btn); ?>" aria-label="<?php esc_attr_e('Next', 'orange-county-handy'); ?>">
				<i class="size-4 flex items-center justify-center [&_svg]:size-full [&_svg]:stroke-2">
					<?php Icon::print('Arrow,-Right'); ?>
				</i>
			</button>
		</div>

		<div class="card-slider-pagination hidden items-center justify-center gap-1 lg:flex"></div>

	</div>

</section>
