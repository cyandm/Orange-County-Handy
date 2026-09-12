<?php

/**
 * Reviews Stats Bar
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

global $wpdb;

/* every value below is calculated from the published reviews themselves */
$data = $wpdb->get_row("SELECT COUNT(*) AS total, AVG(pm.meta_value + 0) AS average, SUM(pm.meta_value + 0 >= 4) AS satisfied FROM {$wpdb->postmeta} pm INNER JOIN {$wpdb->posts} p ON p.ID = pm.post_id WHERE pm.meta_key = 'rating' AND p.post_type = 'review' AND p.post_status = 'publish'");

$total = (int) ($data->total ?? 0);
$average = $total ? number_format((float) $data->average, 1) : '';
$satisfaction = $total ? round((int) $data->satisfied / $total * 100) : 0;
$thumbtack_hires = get_option('reviews_thumbtack_hires');

$stats = [];

if ($average) $stats[] = ['icon' => 'Star', 'value' => $average, 'suffix' => '/5', 'label' => __('Average Rating', 'orange-county-handy'), 'rating' => $average];
if ($total) $stats[] = ['icon' => 'Messages,-Chat', 'value' => number_format_i18n($total), 'label' => __('Happy customers all around orange county', 'orange-county-handy')];
if ($satisfaction) $stats[] = ['icon' => 'Thumbs-up,-Like', 'value' => $satisfaction . '%', 'label' => __('customer satisfaction rate', 'orange-county-handy')];
if ($thumbtack_hires) $stats[] = ['icon' => 'Medal,-Prize,-Reward', 'value' => '+' . $thumbtack_hires, 'label' => __('Hires on Thumbtack', 'orange-county-handy')];

if (! $stats) return;
?>

<section id="reviews-stats">

	<div class="container hidden lg:block">
		<div class="flex items-stretch gap-3 rounded-2xl bg-cynBG p-3 shadow-[0_4px_9px_0_rgba(0,0,0,0.08)]">
			<?php foreach ($stats as $stat) : ?>
				<div class="flex flex-1 items-center justify-center gap-3 rounded-2xl px-4 py-8">
					<i class="flex size-8.5 shrink-0 items-center justify-center rounded-lg bg-cynYellowLight text-cynYellow [&_svg]:size-6 [&_svg]:stroke-[1.5]">
						<?php Icon::print($stat['icon']); ?>
					</i>
					<div class="flex flex-col">
						<div class="flex items-baseline">
							<span class="text-xl font-semibold text-cynTextBlack">
								<?php echo esc_html($stat['value']); ?>
							</span>
							<?php if (! empty($stat['suffix'])) : ?>
								<span class="text-xs font-semibold text-cynTextGray">
									<?php echo esc_html($stat['suffix']); ?>
								</span>
							<?php endif; ?>
						</div>
						<?php if (! empty($stat['rating'])) Templates::getPart('rating-stars', ['rating' => $stat['rating'], 'size' => 'size-3']); ?>
						<span class="text-xs font-normal text-cynTextGray">
							<?php echo esc_html($stat['label']); ?>
						</span>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>

	<div class="overflow-hidden bg-cynBG py-4 lg:hidden">
		<div class="flex w-max items-center gap-5 will-change-transform" data-marquee>
			<?php foreach ($stats as $stat) : ?>
				<div class="flex shrink-0 items-center gap-1">
					<span class="size-2.5 shrink-0 rounded-full bg-cynYellow" aria-hidden="true"></span>
					<span class="text-xs font-semibold whitespace-nowrap text-cynTextBlack">
						<?php echo esc_html($stat['value'] . ($stat['suffix'] ?? '') . ' ' . $stat['label']); ?>
					</span>
				</div>
			<?php endforeach; ?>
		</div>
	</div>

</section>