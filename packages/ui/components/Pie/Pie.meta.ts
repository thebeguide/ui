import type { ThebeAttributeMeta } from "../.."
import type { PieProps } from "./Pie.types"

export const meta: ThebeAttributeMeta<PieProps> = {
	_patterns: [
		{
			id: "ui-pie-default",
			description: "default",
			content: `<Pie size={64} data={PIE_ITEMS} color={COLOR} />`,
		},
	],
	_status: "experimental",
	_category: "core",
	color: {
		type: "ThebeColors",
	},
	data: {
		type: "Array<PieItem>",
	},
	size: {
		type: "number",
	},
}
