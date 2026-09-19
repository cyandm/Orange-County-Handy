<?php

/**
 * Custom admin statuses for form post types (quote / contact)
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class FormStatuses
{

	/**
	 * @return array<string, array{default: string, migrate_option: string, filter: string, statuses: array<string, string>}>
	 */
	private static function configs()
	{
		return [
			'quote_form' => [
				'default' => 'quote-unread',
				'seen' => 'quote-under-review',
				'migrate_option' => 'cyn_quote_status_migrated',
				'filter' => 'quote_status',
				'statuses' => [
					'quote-unread' => __('Unread', 'orange-county-handy'),
					'quote-under-review' => __('Under Review', 'orange-county-handy'),
					'quote-coordinated' => __('Reviewed & Coordinated', 'orange-county-handy'),
					'quote-completed' => __('Completed', 'orange-county-handy'),
					'quote-cancelled' => __('Cancelled', 'orange-county-handy'),
				],
			],
			'contact_form' => [
				'default' => 'contact-unread',
				'seen' => 'contact-awaiting',
				'migrate_option' => 'cyn_contact_status_migrated',
				'filter' => 'contact_status',
				'statuses' => [
					'contact-unread' => __('Unread', 'orange-county-handy'),
					'contact-awaiting' => __('Awaiting Response', 'orange-county-handy'),
					'contact-contacted' => __('Reviewed & Contacted', 'orange-county-handy'),
					'contact-no-answer' => __('No Answer', 'orange-county-handy'),
					'contact-spam' => __('Spam', 'orange-county-handy'),
				],
			],
		];
	}

	public static function init()
	{
		add_action('init', [__CLASS__, 'register'], 20);
		add_action('admin_init', [__CLASS__, 'migrateLegacy']);
		add_action('admin_footer-post.php', [__CLASS__, 'statusDropdownScript']);
		add_action('admin_footer-post-new.php', [__CLASS__, 'statusDropdownScript']);
		add_action('admin_footer-edit.php', [__CLASS__, 'bulkEditScript']);
		add_action('restrict_manage_posts', [__CLASS__, 'filterDropdown']);
		add_filter('parse_query', [__CLASS__, 'filterQuery']);

		foreach (array_keys(self::configs()) as $post_type) {
			add_filter('views_edit-' . $post_type, fn($views) => self::views($views, $post_type));
			add_filter('bulk_actions-edit-' . $post_type, fn($actions) => self::bulkActions($actions, $post_type));
			add_filter('handle_bulk_actions-edit-' . $post_type, fn($redirect, $action, $ids) => self::handleBulkActions($redirect, $action, $ids, $post_type), 10, 3);
		}
	}

	/**
	 * @param string $post_type
	 * @return array|null
	 */
	public static function config($post_type)
	{
		return self::configs()[$post_type] ?? null;
	}

	/**
	 * @param string $post_type
	 * @return string
	 */
	public static function defaultStatus($post_type)
	{
		return self::configs()[$post_type]['default'] ?? 'private';
	}

	/**
	 * @param string $post_type
	 * @return array<string, string>
	 */
	public static function statuses($post_type)
	{
		return self::configs()[$post_type]['statuses'] ?? [];
	}

	/**
	 * @param string $post_type
	 * @param string $status
	 * @return string
	 */
	public static function label($post_type, $status)
	{
		$statuses = self::statuses($post_type);

		if (isset($statuses[$status])) return $statuses[$status];
		if ($status === 'private') return $statuses[self::defaultStatus($post_type)] ?? ucfirst($status);

		return ucfirst((string) $status);
	}

	/**
	 * When admin opens an unread submission, move it to the first working status
	 * @param int $post_id
	 * @return void
	 */
	public static function markSeen($post_id)
	{
		$post = get_post($post_id);

		if (! $post) return;

		$config = self::config($post->post_type);

		if (! $config || empty($config['seen'])) return;
		if ($post->post_status !== $config['default'] && $post->post_status !== 'private') return;

		wp_update_post(['ID' => (int) $post_id, 'post_status' => $config['seen']]);
	}

	public static function register()
	{
		foreach (self::configs() as $config) {
			foreach ($config['statuses'] as $slug => $label) {
				register_post_status($slug, [
					'label' => $label,
					'label_count' => _n_noop($label . ' <span class="count">(%s)</span>', $label . ' <span class="count">(%s)</span>', 'orange-county-handy'),
					'public' => false,
					'internal' => false,
					'protected' => true,
					'private' => true,
					'show_in_admin_all_list' => true,
					'show_in_admin_status_list' => true,
					'exclude_from_search' => true,
				]);
			}
		}
	}

	public static function migrateLegacy()
	{
		foreach (self::configs() as $post_type => $config) {
			if (get_option($config['migrate_option'])) continue;

			$ids = get_posts(['post_type' => $post_type, 'post_status' => 'private', 'posts_per_page' => -1, 'fields' => 'ids', 'no_found_rows' => true]);

			foreach ($ids as $id) {
				wp_update_post(['ID' => (int) $id, 'post_status' => $config['default']]);
			}

			update_option($config['migrate_option'], 1, false);
		}
	}

	public static function statusDropdownScript()
	{
		global $post;

		if (! $post) return;

		$config = self::config($post->post_type);

		if (! $config) return;

		$current = $post->post_status === 'private' ? $config['default'] : $post->post_status;
		$statuses = [];

		foreach ($config['statuses'] as $slug => $label) {
			$statuses[] = ['value' => $slug, 'label' => $label];
		}
		?>
		<script>
			jQuery(function ($) {
				var statuses = <?php echo wp_json_encode($statuses); ?>;
				var current = <?php echo wp_json_encode($current); ?>;
				var $select = $('#post-status-select select#post_status');
				if (!$select.length) return;
				$select.empty();
				statuses.forEach(function (status) {
					$select.append($('<option/>', { value: status.value, text: status.label }));
				});
				$select.val(current);
				$('#post-status-display').text($select.find('option:selected').text());
				$('#visibility').closest('.misc-pub-section').hide();
				$('#publish').val(<?php echo wp_json_encode(__('Update', 'orange-county-handy')); ?>);
			});
		</script>
		<?php
	}

	public static function bulkEditScript()
	{
		$screen = get_current_screen();

		if (! $screen) return;

		$config = self::config($screen->post_type);

		if (! $config) return;

		$statuses = [];

		foreach ($config['statuses'] as $slug => $label) {
			$statuses[] = ['value' => $slug, 'label' => $label];
		}
		?>
		<script>
			jQuery(function ($) {
				var statuses = <?php echo wp_json_encode($statuses); ?>;
				var $status = $('select[name="_status"]');
				if (!$status.length) return;
				$status.find('option').not('[value="-1"]').remove();
				statuses.forEach(function (status) {
					$status.append($('<option/>', { value: status.value, text: status.label }));
				});
			});
		</script>
		<?php
	}

	/**
	 * @param array $views
	 * @param string $post_type
	 * @return array
	 */
	public static function views($views, $post_type)
	{
		$config = self::config($post_type);

		if (! $config) return $views;

		unset($views['publish'], $views['private'], $views['mine']);

		$counts = (array) wp_count_posts($post_type);
		$total = (int) ($counts['private'] ?? 0);

		foreach (array_keys($config['statuses']) as $slug) {
			$total += (int) ($counts[$slug] ?? 0);
		}

		$current = sanitize_key($_GET['post_status'] ?? '');
		$base = admin_url('edit.php?post_type=' . $post_type);

		$views['all'] = sprintf('<a href="%1$s"%2$s>%3$s <span class="count">(%4$d)</span></a>', esc_url($base), $current === '' ? ' class="current"' : '', esc_html__('All', 'orange-county-handy'), $total);

		foreach ($config['statuses'] as $slug => $label) {
			$count = (int) ($counts[$slug] ?? 0);
			if ($slug === $config['default']) $count += (int) ($counts['private'] ?? 0);

			$views[$slug] = sprintf('<a href="%1$s"%2$s>%3$s <span class="count">(%4$d)</span></a>', esc_url(add_query_arg('post_status', $slug, $base)), $current === $slug ? ' class="current"' : '', esc_html($label), $count);
		}

		return $views;
	}

	public static function filterDropdown($post_type)
	{
		$config = self::config($post_type);

		if (! $config) return;

		$current = sanitize_key($_GET[$config['filter']] ?? '');
		?>
		<select name="<?php echo esc_attr($config['filter']); ?>">
			<option value=""><?php esc_html_e('All statuses', 'orange-county-handy'); ?></option>
			<?php foreach ($config['statuses'] as $slug => $label) : ?>
				<option value="<?php echo esc_attr($slug); ?>" <?php selected($current, $slug); ?>>
					<?php echo esc_html($label); ?>
				</option>
			<?php endforeach; ?>
		</select>
		<?php
	}

	public static function filterQuery($query)
	{
		if (! is_admin() || ! $query->is_main_query()) return;

		$post_type = $query->get('post_type') ?: '';
		$config = self::config($post_type);

		if (! $config) return;

		$status = sanitize_key($_GET[$config['filter']] ?? '');

		if ($status && isset($config['statuses'][$status])) {
			$query->set('post_status', $status);
			return;
		}

		$requested = sanitize_key($_GET['post_status'] ?? '');

		if (in_array($requested, ['trash', 'draft'], true)) return;

		if ($requested === '' || $requested === 'all') {
			$query->set('post_status', array_merge(array_keys($config['statuses']), ['private']));
		}
	}

	/**
	 * @param array $actions
	 * @param string $post_type
	 * @return array
	 */
	public static function bulkActions($actions, $post_type)
	{
		foreach (self::statuses($post_type) as $slug => $label) {
			$actions['mark_' . $slug] = sprintf(__('Mark as %s', 'orange-county-handy'), $label);
		}

		return $actions;
	}

	/**
	 * @param string $redirect
	 * @param string $action
	 * @param array $post_ids
	 * @param string $post_type
	 * @return string
	 */
	public static function handleBulkActions($redirect, $action, $post_ids, $post_type)
	{
		if (! str_starts_with($action, 'mark_')) return $redirect;

		$status = substr($action, 5);
		$statuses = self::statuses($post_type);

		if (! isset($statuses[$status])) return $redirect;

		foreach ($post_ids as $post_id) {
			if (get_post_type($post_id) !== $post_type) continue;
			wp_update_post(['ID' => (int) $post_id, 'post_status' => $status]);
		}

		return $redirect;
	}
}
