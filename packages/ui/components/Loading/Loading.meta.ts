import type { HeliosAttributeMeta } from "../.."
import type { LoadingProps } from "./Loading.types"

export const meta: HeliosAttributeMeta<LoadingProps> = {
	_patterns: [
		{
			id: "ui-loading-default",
			description: "default",
			content: `<Loading emphasis={EMPHASIS} size={20}/>`,
		},
	],
	_status: "stable",
	_category: "core",
	className: { type: "string", isOptional: true },
	size: { type: "10 | 20 | 40" },
	emphasis: {
		type: "HeliosEmphasisType",
		isOptional: true,
	},
}
