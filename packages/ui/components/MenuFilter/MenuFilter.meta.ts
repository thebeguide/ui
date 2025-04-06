import type { ThebeAttributeMeta } from "../.."
import type { MenuFilterProps } from "./MenuFilter.types"

export const meta: ThebeAttributeMeta<MenuFilterProps> = {
	_patterns: [
		{
			id: "ui-menu-filter-default",
			description: "default",
			content: `<div>{CHILDREN}</div>`,
		},
	],
	_status: "experimental",
	_category: "layout",
	onChange: {
		type: "(event?: ChangeEvent<HTMLInputElement>) => void",
	},
	onClear: {
		type: "ThebeOnClickType",
		isOptional: true,
	},
	value: {
		type: "string",
	},
}
