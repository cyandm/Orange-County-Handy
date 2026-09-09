<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfContentFields extends AcfField
{

	/**
	 * Add an image field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'required' => 0,
	 *		'width' => '',
	 *		'return_format' => 'id',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addImage($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('image', $name, $label, $this->withPassthroughAttributes([
			'required' => $additionalAttributes['required'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
			'return_format' => $additionalAttributes['return_format'] ?? 'id',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a file field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'required' => 0,
	 *		'width' => '',
	 *		'return_format' => 'id',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addFile($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('file', $name, $label, $this->withPassthroughAttributes([
			'required' => $additionalAttributes['required'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
			'return_format' => $additionalAttributes['return_format'] ?? 'id',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a text editor field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'toolbar' => 'basic',
	 *		'media_upload' => 1,
	 *		'width' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addTextEditor($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('wysiwyg', $name, $label, $this->withPassthroughAttributes([
			'toolbar' => $additionalAttributes['toolbar'] ?? 'basic',
			'media_upload' => $additionalAttributes['media_upload'] ?? 1,
			'width' => $additionalAttributes['width'] ?? '',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a taxonomy field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'taxonomy' => '',
	 *		'width' => '',
	 *		'field_type' => 'checkbox',
	 *		'add_term' => 0,
	 *		'save_terms' => 0,
	 *		'load_terms' => 0,
	 *		'return_format' => 'id',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addTaxonomy($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('taxonomy', $name, $label, $this->withPassthroughAttributes([
			'taxonomy' => $additionalAttributes['taxonomy'] ?? '',
			'width' => $additionalAttributes['width'] ?? '',
			'field_type' => $additionalAttributes['field_type'] ?? 'checkbox',
			'add_term' => $additionalAttributes['add_term'] ?? 0,
			'save_terms' => $additionalAttributes['save_terms'] ?? 0,
			'load_terms' => $additionalAttributes['load_terms'] ?? 0,
			'return_format' => $additionalAttributes['return_format'] ?? 'id',
		], $additionalAttributes), $id);
	}
}
