<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfChoiceFields extends AcfField
{
	/**
	 * Add a select field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'choices' => '',
	 *		'width' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addSelect($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('select', $name, $label, $this->withPassthroughAttributes([
			'choices' => $additionalAttributes['choices'] ?? '',
			'width' => $additionalAttributes['width'] ?? '',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a checkbox field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'choices' => '',
	 *		'width' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addCheckbox($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('checkbox', $name, $label, $this->withPassthroughAttributes([
			'choices' => $additionalAttributes['choices'] ?? '',
			'width' => $additionalAttributes['width'] ?? '',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a radio field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'choices' => '',
	 *		'width' => '',
	 *		'layout' => 'vertical',
	 *		'default_value' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addRadio($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('radio', $name, $label, $this->withPassthroughAttributes([
			'choices' => $additionalAttributes['choices'] ?? '',
			'width' => $additionalAttributes['width'] ?? '',
			'layout' => $additionalAttributes['layout'] ?? 'vertical',
			'default_value' => $additionalAttributes['default_value'] ?? '',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a boolean field (toggle/switch)
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'width' => '',
	 *		'message' => '', // Text shown next to toggle
	 *		'default_value' => 0, // 0 or 1
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addBoolean($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('true_false', $name, $label, $this->withPassthroughAttributes([
			'width' => $additionalAttributes['width'] ?? '',
			'message' => $additionalAttributes['message'] ?? '',
			'default_value' => $additionalAttributes['default_value'] ?? 0,
			'ui' => 1, // Show as toggle switch
			'ui_on_text' => $additionalAttributes['ui_on_text'] ?? '',
			'ui_off_text' => $additionalAttributes['ui_off_text'] ?? '',
		], $additionalAttributes), $id);
	}
}
