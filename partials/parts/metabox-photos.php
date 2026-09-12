<?php

/**
 * Quote Photos Metabox
 * photos live outside the media library, so they are rendered from their stored paths
 *
 * @package CyanTheme
 */

use Cyan\Theme\Classes\QuoteForm;

defined('ABSPATH') || exit;

global $post;

$photos = (array) get_post_meta($post->ID, '_photos', true);
$photos = array_filter($photos);

if (! $photos) return;
?>

<div class="metabox-container" style="padding: 10px;">

    <p style="margin: 0 0 8px; font-weight: 600; font-size: 14px;">
        <?php echo esc_html(sprintf(__('Photos (%d)', 'orange-county-handy'), count($photos))); ?>
    </p>

    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <?php foreach ($photos as $photo) : ?>
            <a href="<?php echo esc_url(QuoteForm::photoUrl($photo)); ?>" target="_blank" rel="noopener noreferrer" style="display: block; border: 1px solid #ddd; border-radius: 6px; overflow: hidden;">
                <img src="<?php echo esc_url(QuoteForm::photoUrl($photo)); ?>" alt="<?php esc_attr_e('Project photo', 'orange-county-handy'); ?>" style="display: block; width: 160px; height: 120px; object-fit: cover;">
            </a>
        <?php endforeach; ?>
    </div>

</div>
