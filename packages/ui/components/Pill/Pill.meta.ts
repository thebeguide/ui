import type { HeliosAttributeMeta } from "../.."
import type { PillProps } from "./Pill.types"

export const meta: HeliosAttributeMeta<PillProps> = {
	_patterns: [
		{
			id: "ui-pill-default",
			description: "default",
			content: `<Pill label={PILL_LABEL} color={COLOR}/>`,
		},
	],
	_status: "stable",
	_category: "core",
	color: {
		type: "HeliosColors",
		default: "gray",
	},
	icon: {
		type: "HeliosIconType",
		isOptional: true,
	},
	isDark: {
		type: "HeliosIntentionType",
		isOptional: true,
	},
	isLabelHidden: {
		type: "(event?: unknown) => void",
		isOptional: true,
	},
	isMono: {
		type: "string",
		isOptional: true,
	},
	isRounded: {
		type: "string",
		isOptional: true,
	},
	onClick: {
		type: "HeliosOnClickType",
		isOptional: true,
	},
	label: {
		type: "string",
		isOptional: true,
	},
	size: {
		type: "HeliosSizeType",
		isOptional: true,
		default: "normal",
	},
}
