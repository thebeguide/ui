import type { ThebeAttributeMeta } from "../.."
import type { DotProps } from "./Dot.types"

export const meta: ThebeAttributeMeta<DotProps> = {
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
		type: "ThebeColors",
		default: "blue",
	},
	colorAccent: {
		type: "ThebeColors",
		isOptional: true,
	},
	size: {
		type: "ThebeScale",
		default: 8,
	},
}
