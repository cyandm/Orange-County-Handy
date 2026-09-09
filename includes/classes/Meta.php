<?php

namespace Cyan\Theme\Classes;

use Cyan\Theme\Helpers\Templates;

class Meta
{
    /**
     * Post types that show an unread count badge in admin menu.
     * Add entries: post_type => ['read_meta' => 'meta_key_for_read_status']
     *
     * @var array<string, array{read_meta: string}>
     */
    protected static $unread_badge_config = [
        'contact_form' => ['read_meta' => '_read'],
        'order_form' => ['read_meta' => '_read'],
    ];

    public static function init()
    {
        add_action('add_meta_boxes', [__CLASS__, 'add_form_meta_box']);
        add_action('add_meta_boxes', [__CLASS__, 'add_order_form_meta_box']);
        add_filter('manage_contact_form_posts_columns', [__CLASS__, 'form_table_head']);
        add_action('manage_contact_form_posts_custom_column', [__CLASS__, 'form_table_column'], 10, 2);
        add_filter('manage_order_form_posts_columns', [__CLASS__, 'order_form_table_head']);
        add_action('manage_order_form_posts_custom_column', [__CLASS__, 'order_form_table_column'], 10, 2);
        add_action('add_meta_boxes', [__CLASS__, 'add_support_form_meta_box']);
        add_filter('manage_support_form_posts_columns', [__CLASS__, 'support_form_table_head']);
        add_action('manage_support_form_posts_custom_column', [__CLASS__, 'support_form_table_column'], 10, 2);
        add_action('load-post.php', [__CLASS__, 'markCurrentPostAsRead']);
        add_action('admin_menu', [__CLASS__, 'addUnreadCountToMenu'], 999);
    }

    public static function add_form_meta_box()
    {
        global $post;
        if ($post->post_type !== "contact_form")
            return;


        add_meta_box('form_information', 'اطلاعات فرم', function () {
            $meta_group = [

                [
                    'name' => '_name',
                    'label' => 'نام:',
                ],

                [
                    'name' => '_email',
                    'label' => 'ایمیل:',
                ],

                [
                    'name' => '_phone',
                    'label' => 'تلفن همراه:',
                ],

                [
                    'name' => '_message',
                    'label' => 'سوال:',
                ],
            ];

            include get_template_directory() . '/partials/parts/metabox.php';
        }, null, 'advanced', 'high');
    }

    public static function form_table_head($columns)
    {
        $columns['name'] = __('نام', 'cyn-dm');
        $columns['phone'] = __('تلفن همراه', 'cyn-dm');
        $columns['email'] = __('ایمیل', 'cyn-dm');
        $columns['message'] = __('سوال', 'cyn-dm');
        return $columns;
    }

    public static function form_table_column($column_name, $post_id)
    {
        if ($column_name == 'name') {

            echo get_post_meta($post_id, '_name', true);
        }

        if ($column_name == 'phone') {
            echo get_post_meta($post_id, '_phone', true);
        }

        if ($column_name == 'email') {
            echo get_post_meta($post_id, '_email', true);
        }

        if ($column_name == 'message') {
            echo get_post_meta($post_id, '_message', true);
        }
    }

    public static function add_order_form_meta_box()
    {
        global $post;
        if ($post->post_type !== 'order_form') {
            return;
        }
        add_meta_box('order_form_information', __('اطلاعات فرم سفارش', 'orange-county-handy'), function () {
            $meta_group = [
                ['name' => '_organization_name', 'label' => __('نام سازمان', 'orange-county-handy')],
                ['name' => '_product_type', 'label' => __('نوع کالا', 'orange-county-handy')],
                ['name' => '_quantity', 'label' => __('تعداد مورد نیاز', 'orange-county-handy')],
                ['name' => '_phone', 'label' => __('شماره تماس', 'orange-county-handy')],
            ];
            include get_template_directory() . '/partials/parts/metabox.php';
        }, null, 'advanced', 'high');
    }

    public static function order_form_table_head($columns)
    {
        $columns['organization_name'] = __('نام سازمان', 'orange-county-handy');
        $columns['product_type'] = __('نوع کالا', 'orange-county-handy');
        $columns['quantity'] = __('تعداد', 'orange-county-handy');
        $columns['phone'] = __('شماره تماس', 'orange-county-handy');
        return $columns;
    }

    public static function order_form_table_column($column_name, $post_id)
    {
        if ($column_name === 'organization_name') {
            echo esc_html(get_post_meta($post_id, '_organization_name', true));
        }
        if ($column_name === 'product_type') {
            echo esc_html(get_post_meta($post_id, '_product_type', true));
        }
        if ($column_name === 'quantity') {
            echo esc_html(get_post_meta($post_id, '_quantity', true));
        }
        if ($column_name === 'phone') {
            echo esc_html(get_post_meta($post_id, '_phone', true));
        }
    }

    public static function add_support_form_meta_box()
    {
        global $post;
        if ($post->post_type !== 'support_form') {
            return;
        }
        add_meta_box('support_form_information', __('اطلاعات فرم پشتیبانی', 'orange-county-handy'), function () {
            $meta_group = [
                ['name' => '_name', 'label' => __('نام', 'orange-county-handy')],
                ['name' => '_phone', 'label' => __('شماره تماس', 'orange-county-handy')],
                ['name' => '_message', 'label' => __('پیام', 'orange-county-handy')],
            ];
            include get_template_directory() . '/partials/parts/metabox.php';
        }, null, 'advanced', 'high');
    }

    public static function support_form_table_head($columns)
    {
        $columns['name'] = __('نام', 'orange-county-handy');
        $columns['phone'] = __('شماره تماس', 'orange-county-handy');
        $columns['message'] = __('پیام', 'orange-county-handy');
        return $columns;
    }

    public static function support_form_table_column($column_name, $post_id)
    {
        if ($column_name === 'name') {
            echo esc_html(get_post_meta($post_id, '_name', true));
        }
        if ($column_name === 'phone') {
            echo esc_html(get_post_meta($post_id, '_phone', true));
        }
        if ($column_name === 'message') {
            echo esc_html(get_post_meta($post_id, '_message', true));
        }
    }


    /**
     * Mark current post as read when admin opens it (for post types in unread_badge_config).
     */
    public static function markCurrentPostAsRead()
    {
        if (!isset($_GET['post']) || !current_user_can('edit_posts')) {
            return;
        }
        $post_id = (int) $_GET['post'];
        $post = get_post($post_id);
        if (!$post || !isset(self::$unread_badge_config[$post->post_type])) {
            return;
        }
        $read_meta = self::$unread_badge_config[$post->post_type]['read_meta'];
        update_post_meta($post_id, $read_meta, '1');
    }

    /**
     * Get count of unread items for a post type.
     *
     * @param string $post_type   Post type slug.
     * @param string $read_meta_key Meta key that stores read status (e.g. '_read').
     * @return int
     */
    public static function getUnreadCount($post_type, $read_meta_key = '_read')
    {
        $query = new \WP_Query([
            'post_type' => $post_type,
            'post_status' => 'any',
            'posts_per_page' => -1,
            'fields' => 'ids',
            'meta_query' => [
                'relation' => 'OR',
                ['key' => $read_meta_key, 'compare' => 'NOT EXISTS'],
                ['key' => $read_meta_key, 'value' => '1', 'compare' => '!='],
            ],
        ]);
        return $query->found_posts;
    }

    /**
     * Add unread count bubble to admin menu for all post types in unread_badge_config.
     */
    public static function addUnreadCountToMenu()
    {
        global $menu;
        foreach (self::$unread_badge_config as $post_type => $config) {
            $unread = self::getUnreadCount($post_type, $config['read_meta']);
            if ($unread <= 0) {
                continue;
            }
            $menu_slug = 'edit.php?post_type=' . $post_type;
            foreach ($menu as $i => $item) {
                if (isset($item[2]) && $item[2] === $menu_slug) {
                    $menu[$i][0] .= ' <span class="awaiting-mod count-' . esc_attr($unread) . '"><span class="count">' . (int) $unread . '</span></span>';
                    break;
                }
            }
        }
    }

    /**
     * Register a post type to show unread badge in admin menu.
     * Call from init or when registering post types.
     *
     * @param string $post_type   Post type slug.
     * @param string $read_meta_key Meta key for read status (default '_read').
     */
    public static function registerUnreadBadge($post_type, $read_meta_key = '_read')
    {
        self::$unread_badge_config[$post_type] = ['read_meta' => $read_meta_key];
    }
}
