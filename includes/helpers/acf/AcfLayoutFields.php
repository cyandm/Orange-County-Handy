<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfLayoutFields extends AcfField
{
	/**
	 * Add a Group field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'layout' => 'block',
	 *		'sub_fields' => '',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addGroup($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('group', $name, $label, $this->withPassthroughAttributes([
			'layout' => $additionalAttributes['layout'] ?? 'block',
			'sub_fields' => $additionalAttributes['sub_fields'] ?? '',
		], $additionalAttributes), $id);
	}

	/**
	 * Add a Tab field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'placement' => 'top',
	 *		'endpoint' => 0,
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addTab($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('tab', $name, $label, $this->withPassthroughAttributes([
			'placement' => $additionalAttributes['placement'] ?? 'top',
			'endpoint' => $additionalAttributes['endpoint'] ?? 0,
		], $additionalAttributes), $id);
	}

	/**
	 * Add an Accordion field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'open' => 0,
	 *		'endpoint' => 0,
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addAccordion($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('accordion', $name, $label, $this->withPassthroughAttributes([
			'open' => $additionalAttributes['open'] ?? 0,
			'endpoint' => $additionalAttributes['endpoint'] ?? 0,
		], $additionalAttributes), $id);
	}

	/**
	 * Add a Message field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'message' => '',
	 *		'new_lines' => 'wpautop',
	 *		'conditional_logic' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addMessage($name, $label, $additionalAttributes = [], $id = '')
	{
		parent::addField('message', $name, $label, $this->withPassthroughAttributes([
			'message' => $additionalAttributes['message'] ?? '',
			'new_lines' => $additionalAttributes['new_lines'] ?? 'wpautop',
		], $additionalAttributes), $id);
	}
}
