<?php

/**
 * Metabox Template
 * Used to display meta information in admin
 * 
 * @package CyanTheme
 */

defined('ABSPATH') || exit;

global $post;

if (!isset($meta_group) || !is_array($meta_group)) {
    return;
}
?>

<div class="metabox-container" style="padding: 10px;">
    <table class="form-table" role="presentation">
        <tbody>
            <?php foreach ($meta_group as $meta) : ?>
                <?php
                $meta_name = isset($meta['name']) ? $meta['name'] : '';
                $meta_label = isset($meta['label']) ? $meta['label'] : '';
                $meta_value = get_post_meta($post->ID, $meta_name, true);
                ?>
                <tr>
                    <th scope="row">
                        <label style="font-weight: 600; font-size: 14px;">
                            <?php echo esc_html($meta_label); ?>
                        </label>
                    </th>
                    <td>
                        <?php if ($meta_name === '_message') : ?>
                            <div style="background: #f9f9f9; padding: 12px; border-radius: 4px; border: 1px solid #ddd; word-wrap: break-word; max-width: 600px;">
                                <?php echo esc_html($meta_value); ?>
                            </div>
                        <?php else : ?>
                            <div style="padding: 8px 12px; background: #f9f9f9; border-radius: 4px; border: 1px solid #ddd; display: inline-block; min-width: 250px;">
                                <?php echo esc_html($meta_value); ?>
                            </div>
                        <?php endif; ?>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>