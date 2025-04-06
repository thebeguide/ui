import type { ThebeAttributeMeta } from "../.."
import type { GridProps } from "./Grid.types"

export const meta: ThebeAttributeMeta<GridProps> = {
	_patterns: [
		{
			id: "ui-grid-default",
			description: "default",
			content: `<Grid columns={4}>{CHILDREN}</Grid>`,
		},
	],
	_status: "experimental",
	_category: "core",
	columns: {
		type: "number",
	},
	children: {
		type: "ReactNode",
	},
	isResponsive: {
		type: "boolean",
		isOptional: true,
	},
}
