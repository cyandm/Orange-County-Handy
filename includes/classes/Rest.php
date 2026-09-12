<?php

/**
 * Rest API
 * this class is used to register rest routes and handle requests
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

use WP_REST_Request;
use WP_REST_Response;

class Rest
{

	protected static $namespace = 'cyn/v1';

	public static function init()
	{
		add_action('rest_api_init', [__CLASS__, 'registerRoutes']);
	}

	public static function registerRoutes()
	{
		self::makeRoute('/contact_form', 'POST', [__CLASS__, 'createForm']);
		self::makeRoute('/quote_form', 'POST', [__CLASS__, 'createQuote']);
	}

	public static function createQuote(WP_REST_Request $request)
	{
		$result = QuoteForm::submit($request->get_body_params(), $request->get_file_params());
		$body = $result['success'] ? ['message' => $result['message']] : ['error' => $result['message']];

		return new WP_REST_Response($body, $result['status']);
	}

	public static function createForm(WP_REST_Request $request)
	{
		$result = ContactForm::submit($request->get_body_params());
		$body = $result['success'] ? ['message' => $result['message']] : ['error' => $result['message']];

		return new WP_REST_Response($body, $result['status']);
	}

	/**
	 * make route
	 * @param string $route route path
	 * @param string $methods GET, POST, PUT, DELETE, etc.
	 * @param callable $callback callback function
	 * @param callable $permission_callback permission callback function
	 * @return void
	 */
	private static function makeRoute($route, $methods, $callback, $permission_callback = '__return_true')
	{
		register_rest_route(self::$namespace, $route, [
			'methods' => $methods,
			'callback' => $callback,
			'permission_callback' => $permission_callback
		]);
	}
}
