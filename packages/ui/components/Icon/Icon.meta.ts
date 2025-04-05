import type { HeliosAttributeMeta } from "../.."
import type { IconProps } from "./Icon.types"

export const meta: HeliosAttributeMeta<IconProps> = {
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
		type: "HeliosIconType",
	},
	emphasis: {
		type: "HeliosEmphasisType",
		isOptional: true,
	},
	size: {
		type: "number",
	},
}
