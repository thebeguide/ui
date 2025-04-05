import type { HeliosAttributeMeta } from "../.."
import type { ProgressProps } from "./Progress.types"

export const meta: HeliosAttributeMeta<ProgressProps> = {
	_patterns: [
		{
			id: "ui-progress-default",
			description: "default",
			content: `<Progress max={100} value={PERCENTAGE} />`,
		},
		{
			id: "ui-progress-short",
			description: "shorter or narrower version",
			content: `<Progress max={100} value={PERCENTAGE} isSmall={true} />`,
		},
	],
	_status: "nominal",
	_category: "core",
	isSmall: {
		type: "boolean",
		isOptional: true,
	},
	max: {
		type: "number",
		default: 100,
	},
	value: {
		type: "number",
		default: 0,
	},
}
