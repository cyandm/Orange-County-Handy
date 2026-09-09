<?php

/**
 * Rating Stars
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

$args = get_query_var('args', []);

$rating = max(0, min(5, (int) round((float) ($args['rating'] ?? 0))));
$size = $args['size'] ?? 'size-5';

if (! $rating) return;
?>

<div class="flex items-center" role="img" aria-label="<?php echo esc_attr(sprintf(__('Rated %d out of 5', 'orange-county-handy'), $rating)); ?>">
	<?php for ($star = 1; $star <= 5; $star++) : ?>
		<i class="<?php echo esc_attr($size); ?> flex items-center justify-center <?php echo $star <= $rating ? 'text-cynStars [&_svg_path]:fill-current' : 'text-cynBorder'; ?>" aria-hidden="true">
			<?php Icon::print('Star'); ?>
		</i>
	<?php endfor; ?>
</div>
