import type { ThebeAttributeMeta } from "../.."
import type { ColumnBaseProps } from "./Column.types"

export const meta: ThebeAttributeMeta<ColumnBaseProps> = {
	_patterns: [
		{
			id: "ui-column-default",
			description: "default",
			content: "<Column width={480}>{CHILDREN}</Column>",
		},
	],
	_status: "stable",
	_category: "layout",
	_extends: ["FlexProps"],
	isColumnCentered: {
		type: "boolean",
		isOptional: true,
	},
	width: {
		type: "number",
	},
}
