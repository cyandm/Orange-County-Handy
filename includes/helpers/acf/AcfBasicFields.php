<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfBasicFields extends AcfField
{


	/**
	 * Add a text field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'required' => 0,
	 *		'width' => '',
	 *		'aria-label' => '',
	 *		'default_value' => '',
	 *		'maxlength' => '',
	 *		'placeholder' => '',
	 *		'prepend' => '',
	 *		'append' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addText($name, $label, $additionalAttributes = [], $id = '')
	{
		$this->addField('text', $name, $label, $this->withPassthroughAttributes([
			'required' => $additionalAttributes['required'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
			'aria-label' => $additionalAttributes['aria-label'] ?? '',
			'default_value' => $additionalAttributes['default_value'] ?? '',
			'maxlength' => $additionalAttributes['maxlength'] ?? '',
			'placeholder' => $additionalAttributes['placeholder'] ?? '',
			'prepend' => $additionalAttributes['prepend'] ?? '',
			'append' => $additionalAttributes['append'] ?? '',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a textarea field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'required' => 0,
	 *		'width' => '',
	 *		'default_value' => '',
	 *		'placeholder' => '',
	 *		'maxlength' => '',
	 *		'rows' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addTextarea($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('textarea', $name, $label, $this->withPassthroughAttributes([
			'required' => $additionalAttributes['required'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
			'default_value' => $additionalAttributes['default_value'] ?? '',
			'placeholder' => $additionalAttributes['placeholder'] ?? '',
			'maxlength' => $additionalAttributes['maxlength'] ?? '',
			'rows' => $additionalAttributes['rows'] ?? '',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a number field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'required' => 0,
	 *		'width' => '',
	 *		'aria-label' => '',
	 *		'default_value' => '',
	 *		'min' => '',
	 *		'max' => '',
	 *		'placeholder' => '',
	 *		'step' => '',
	 *		'prepend' => '',
	 *		'append' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addNumber($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('number', $name, $label, $this->withPassthroughAttributes([
			'required' => $additionalAttributes['required'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
			'aria-label' => $additionalAttributes['aria-label'] ?? '',
			'default_value' => $additionalAttributes['default_value'] ?? '',
			'min' => $additionalAttributes['min'] ?? '',
			'max' => $additionalAttributes['max'] ?? '',
			'placeholder' => $additionalAttributes['placeholder'] ?? '',
			'step' => $additionalAttributes['step'] ?? '',
			'prepend' => $additionalAttributes['prepend'] ?? '',
			'append' => $additionalAttributes['append'] ?? '',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a range field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'required' => 0,
	 *		'width' => '',
	 *		'default_value' => '',
	 *		'min' => '',
	 *		'max' => '',
	 *		'step' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addRange($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('range', $name, $label, $this->withPassthroughAttributes([
			'required' => $additionalAttributes['required'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
			'default_value' => $additionalAttributes['default_value'] ?? '',
			'min' => $additionalAttributes['min'] ?? '',
			'max' => $additionalAttributes['max'] ?? '',
			'step' => $additionalAttributes['step'] ?? '',
		], $additionalAttributes), $id);
	}

	/**
	 * Add an email field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'required' => 0,
	 *		'width' => '',
	 *		'default_value' => '',
	 *		'placeholder' => 'info@example.com',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addEmail($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('email', $name, $label, $this->withPassthroughAttributes([
			'required' => $additionalAttributes['required'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
			'default_value' => $additionalAttributes['default_value'] ?? '',
			'placeholder' => $additionalAttributes['placeholder'] ?? 'info@example.com',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a url field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'required' => 0,
	 *		'width' => '',
	 *		'aria-label' => '',
	 *		'default_value' => '',
	 *		'maxlength' => '',
	 *		'placeholder' => '',
	 *		'prepend' => '',
	 *		'append' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addUrl($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('url', $name, $label, $this->withPassthroughAttributes([
			'required' => $additionalAttributes['required'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
			'aria-label' => $additionalAttributes['aria-label'] ?? '',
			'default_value' => $additionalAttributes['default_value'] ?? '',
			'maxlength' => $additionalAttributes['maxlength'] ?? '',
			'placeholder' => $additionalAttributes['placeholder'] ?? '',
			'prepend' => $additionalAttributes['prepend'] ?? '',
			'append' => $additionalAttributes['append'] ?? '',
		], $additionalAttributes), $id);
	}
	/**
	 * Add a password field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'required' => 0,
	 *		'width' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addPassword($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('password', $name, $label, $this->withPassthroughAttributes([
			'required' => $additionalAttributes['required'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
		], $additionalAttributes), $id);
	}
}
