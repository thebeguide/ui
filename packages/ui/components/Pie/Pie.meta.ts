import type { HeliosAttributeMeta } from "../.."
import type { PieProps } from "./Pie.types"

export const meta: HeliosAttributeMeta<PieProps> = {
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
		type: "HeliosColors",
	},
	data: {
		type: "Array<PieItem>",
	},
	size: {
		type: "number",
	},
}
