import type { HeliosAttributeMeta } from "../.."
import type { DonutProps } from "./Donut.types"

export const meta: HeliosAttributeMeta<DonutProps> = {
	_patterns: [
		{
			id: "ui-donut-default",
			description: "default",
			content: `<Donut size={DONUT_SIZE} percentage={PERCENTAGE} color={COLOR}/>`,
		},
	],
	_status: "stable",
	_category: "core",
	children: {
		type: "HeliosChildrenType",
		isOptional: true,
	},
	color: {
		type: "HeliosColors",
	},
	percentage: {
		type: "number",
		default: 0,
	},
	size: {
		type: "DonutSizeType",
	},
}
