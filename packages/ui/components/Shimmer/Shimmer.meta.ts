import type { ThebeAttributeMeta } from "../.."
import type { ShimmerProps } from "./Shimmer.types"

export const meta: ThebeAttributeMeta<ShimmerProps> = {
	_patterns: [
		{
			id: "ui-shimmer-default",
			description: "default",
			content: `<Shimmer height={16} width={256}/>`,
		},
	],
	_status: "stable",
	_category: "pattern",
	height: {
		type: "number",
	},
	isRounded: {
		type: "boolean",
		isOptional: true,
	},
	paddingTop: {
		type: "number",
		isOptional: true,
	},
	paddingBottom: {
		type: "number",
		isOptional: true,
	},
	width: {
		type: "number",
	},
}
