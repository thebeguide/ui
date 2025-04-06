import type { ThebeAttributeMeta } from "../.."
import type { IconProps } from "./Icon.types"

export const meta: ThebeAttributeMeta<IconProps> = {
	_patterns: [
		{
			id: "ui-icon-default",
			description: "default",
			content: `<Icon icon={ICON} size={SCALE} emphasis={EMPHASIS}/>`,
		},
	],
	_status: "nominal",
	_category: "core",
	className: {
		type: "string",
		isOptional: true,
	},
	icon: {
		type: "ThebeIconType",
	},
	emphasis: {
		type: "ThebeEmphasisType",
		isOptional: true,
	},
	size: {
		type: "number",
	},
}
