<?php
/**
 * Theme icons from assets/icon/icons.json
 * @package CyanTheme
 */

namespace Cyan\Theme\Helpers;

class Icon
{
	private static $icons;
	private static $by_name;

	/**
	 * Load icons.json once and index by name
	 * @return void
	 */
	private static function load()
	{
		if (self::$by_name !== null) return;

		$path = THEME_DIR . '/assets/icon/icons.json';
		$json = file_exists($path) ? json_decode((string) file_get_contents($path), true) : null;
		$list = is_array($json['icons'] ?? null) ? $json['icons'] : [];

		self::$icons = $list;
		self::$by_name = [];

		foreach ($list as $icon) {
			if (empty($icon['name'])) continue;
			self::$by_name[$icon['name']] = $icon['content'] ?? '';
		}
	}

	/**
	 * @param string $icon_id
	 * @return string
	 */
	public static function get($icon_id)
	{
		self::load();
		$icon_id = str_replace(' ', '-', (string) $icon_id);

		return self::$by_name[$icon_id] ?? '';
	}

	/**
	 * @param string $icon_id
	 * @return void
	 */
	public static function print($icon_id)
	{
		echo self::get($icon_id);
	}

	/**
	 * @param string $icon_id
	 * @return bool
	 */
	public static function exists($icon_id)
	{
		self::load();
		$icon_id = str_replace(' ', '-', (string) $icon_id);

		return isset(self::$by_name[$icon_id]);
	}

	/**
	 * Paginated icon search for admin picker (10 per page by default)
	 * @param string $search
	 * @param int $page
	 * @param int $per_page
	 * @return array{items: array<int, array{name: string, svg: string}>, more: bool}
	 */
	public static function search($search = '', $page = 1, $per_page = 10)
	{
		self::load();

		$search = strtolower(trim((string) $search));
		$page = max(1, (int) $page);
		$per_page = max(1, min(50, (int) $per_page));
		$names = array_keys(self::$by_name);

		if ($search !== '') {
			$names = array_values(array_filter($names, fn($name) => str_contains(strtolower($name), $search)));
		}

		natcasesort($names);
		$names = array_values($names);
		$total = count($names);
		$offset = ($page - 1) * $per_page;
		$slice = array_slice($names, $offset, $per_page);
		$items = [];

		foreach ($slice as $name) {
			$items[] = ['name' => $name, 'svg' => self::$by_name[$name]];
		}

		return [
			'items' => $items,
			'more' => ($offset + $per_page) < $total,
		];
	}
}
