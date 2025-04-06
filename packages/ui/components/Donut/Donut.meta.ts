import type { ThebeAttributeMeta } from "../.."
import type { DonutProps } from "./Donut.types"

export const meta: ThebeAttributeMeta<DonutProps> = {
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
		type: "ReactNode",
		isOptional: true,
	},
	color: {
		type: "ThebeColors",
	},
	percentage: {
		type: "number",
		default: 0,
	},
	size: {
		type: "DonutSizeType",
	},
}
