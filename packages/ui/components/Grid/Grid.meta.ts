import type { HeliosAttributeMeta } from "../.."
import type { GridProps } from "./Grid.types"

export const meta: HeliosAttributeMeta<GridProps> = {
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
		type: "HeliosChildrenType",
	},
	isResponsive: {
		type: "boolean",
		isOptional: true,
	},
}
