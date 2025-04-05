import type { HeliosAttributeMeta } from "../.."
import type { SelectProps } from "./Select.types"

export const meta: HeliosAttributeMeta<SelectProps> = {
	_patterns: [
		{
			id: "ui-select-default",
			description: "default",
			content: `<Select label="Select Item" items={SELECT_ITEMS} onChange={ON_SELECT_ITEM}/>`,
		},
	],
	_status: "stable",
	_category: "core",
	isDisabled: {
		type: "boolean",
		isOptional: true,
	},
	isLabelHidden: {
		type: "boolean",
		isOptional: true,
	},
	isSmall: {
		type: "boolean",
		isOptional: true,
	},
	items: {
		type: "string",
	},
	label: {
		type: "string",
	},
	onChange: {
		type: "ChangeEventHandler<HTMLSelectElement>",
	},
	selectedValue: {
		type: "string",
		isOptional: true,
	},
}
