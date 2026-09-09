<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfRelationshipFields extends AcfField
{

	/**
	 * Add a link field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'return_format' => 'array',
	 *		'width' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addLink($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('link', $name, $label, $this->withPassthroughAttributes([
			'return_format' => $additionalAttributes['return_format'] ?? 'array',
			'width' => $additionalAttributes['width'] ?? '',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a post object field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'post_type' => '',
	 *		'label' => '',
	 *		'name' => '',
	 *		'taxonomy' => '',
	 *		'allow_null' => 0,
	 *		'multiple' => 0,
	 *		'return_format' => 'id',
	 *		'width' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addPostObject($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('post_object', $name, $label, $this->withPassthroughAttributes([
			'post_type' => $additionalAttributes['post_type'] ?? '',
			'label' => $label,
			'name' => $name,
			'taxonomy' => $additionalAttributes['taxonomy'] ?? '',
			'allow_null' => $additionalAttributes['allow_null'] ?? 0,
			'multiple' => $additionalAttributes['multiple'] ?? 0,
			'return_format' => $additionalAttributes['return_format'] ?? 'id',
			'width' => $additionalAttributes['width'] ?? '',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a page link field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'width' => '',
	 *		'post_type' => '',
	 *		'post_status' => '',
	 *		'allow_null' => 0,
	 *		'multiple' => 0,
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addPageLink($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('page_link', $name, $label, $this->withPassthroughAttributes([
			'width' => $additionalAttributes['width'] ?? '',
			'post_type' => $additionalAttributes['post_type'] ?? '',
			'post_status' => $additionalAttributes['post_status'] ?? '',
			'allow_null' => $additionalAttributes['allow_null'] ?? 0,
			'multiple' => $additionalAttributes['multiple'] ?? 0,
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
	 *		'create_terms' => 0,
	 *		'save_terms' => 0,
	 *		'load_terms' => 0,
	 *		'return_format' => 'id',
	 *		'field_type' => 'multi_select',
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
			'create_terms' => $additionalAttributes['create_terms'] ?? 0,
			'save_terms' => $additionalAttributes['save_terms'] ?? 0,
			'load_terms' => $additionalAttributes['load_terms'] ?? 0,
			'return_format' => $additionalAttributes['return_format'] ?? 'id',
			'field_type' => $additionalAttributes['field_type'] ?? 'multi_select',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a user picker field.
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'role' => '', // array of role slugs or '' for any
	 *		'multiple' => 0, // 1 to allow selecting multiple users
	 *		'allow_null' => 0,
	 *		'return_format' => 'id', // 'id' | 'array' | 'object'
	 *		'width' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addUser($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('user', $name, $label, $this->withPassthroughAttributes([
			'role' => $additionalAttributes['role'] ?? '',
			'multiple' => $additionalAttributes['multiple'] ?? 0,
			'allow_null' => $additionalAttributes['allow_null'] ?? 0,
			'return_format' => $additionalAttributes['return_format'] ?? 'id',
			'width' => $additionalAttributes['width'] ?? '',
		], $additionalAttributes), $id);
	}
}
