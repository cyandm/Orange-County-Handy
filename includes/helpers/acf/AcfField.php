<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfField {

	public static $fields;

	public function __construct() {
		self::$fields = [];
	}

	/**
	 * Merge passthrough keys (e.g. conditional_logic) from caller attributes into field args.
	 *
	 * @param array<string, mixed> $args
	 * @param array<string, mixed> $additionalAttributes
	 * @param list<string> $keys
	 * @return array<string, mixed>
	 */
	protected function withPassthroughAttributes( array $args, array $additionalAttributes, array $keys = [ 'conditional_logic' ] ): array {
		foreach ( $keys as $key ) {
			if ( array_key_exists( $key, $additionalAttributes ) ) {
				$args[ $key ] = $additionalAttributes[ $key ];
			}
		}

		return $args;
	}

	protected function addField( $type, $name, $label, $additionalAttributes = [], $id = '' ) {
		$field = [ 
			'key' => 'acf_' . $type . '_' . $name . '_' . $id,
			'label' => $label,
			'name' => $name,
			'type' => $type,
			'instructions' => '',
			'required' => $additionalAttributes['required'] ?? 0,
			'conditional_logic' => 0,
			'wrapper' => [ 
				'width' => $additionalAttributes['width'] ?? '',
				'class' => '',
				'id' => '',
			],
		];

		// Merge additional attributes
		$field = array_merge( $field, $additionalAttributes );


		array_push( self::$fields, $field );


	}

}


