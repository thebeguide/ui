import type { HeliosAttributeMeta } from "../.."
import type { DotProps } from "./Dot.types"

export const meta: HeliosAttributeMeta<DotProps> = {
	_patterns: [
		{
			id: "ui-dot-default",
			description: "default",
			content: `<Dot size={SCALE} color={COLOR}/>`,
		},
		{
			id: "ui-dot-accent",
			description: "with accent color",
			content: `<Dot size={SCALE} color={COLOR} colorAccent={COLOR_ACCENT}/>`,
		},
	],
	_status: "stable",
	_category: "core",
	color: {
		type: "HeliosColors",
		default: "blue",
	},
	colorAccent: {
		type: "HeliosColors",
		isOptional: true,
	},
	size: {
		type: "HeliosScale",
		default: 8,
	},
}
