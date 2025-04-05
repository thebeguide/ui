import type { HeliosAttributeMeta } from "../.."
import type { DropdownProps } from "./Dropdown.types"

export const meta: HeliosAttributeMeta<DropdownProps> = {
	_patterns: [
		{
			id: "ui-dropdown-buttongroup",
			description: "dropdown",
			content: `<Dropdown items={RESULT_LIST_ITEMS} isDisabled={IS_DISABLED} position={POSITION}><Button value="Dropdown Example" intent={INTENT} icon={ICON} size={SIZE} /></Dropdown>`,
		},
	],
	_status: "stable",
	_category: "pattern",
	children: {
		type: "ReactElement<unknown>",
	},
	items: {
		type: "Array<ResultItem>",
	},
	isHidden: {
		type: "boolean",
		description: "Change this boolean value to conditionally hide a visible Dropdown.",
		isOptional: true,
	},
	isDisabled: {
		type: "boolean",
		description: "Dropdown won't be triggered on click.",
		isOptional: true,
	},
	position: {
		type: "HeliosPositionType",
		isOptional: true,
		default: "bottom-left",
	},
}
