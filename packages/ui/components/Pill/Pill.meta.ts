import type { ThebeAttributeMeta } from "../.."
import type { PillProps } from "./Pill.types"

export const meta: ThebeAttributeMeta<PillProps> = {
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
		type: "ThebeColors",
		default: "gray",
	},
	icon: {
		type: "ThebeIconType",
		isOptional: true,
	},
	isDark: {
		type: "ThebeIntentionType",
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
		type: "ThebeOnClickType",
		isOptional: true,
	},
	label: {
		type: "string",
		isOptional: true,
	},
	size: {
		type: "ThebeSizeType",
		isOptional: true,
		default: "normal",
	},
}
