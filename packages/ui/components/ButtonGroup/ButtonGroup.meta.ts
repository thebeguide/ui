import type { HeliosAttributeMeta } from "../.."
import type { ButtonGroupProps } from "./ButtonGroup.types"

export const meta: HeliosAttributeMeta<ButtonGroupProps> = {
	_patterns: [
		{
			id: "ui-actions-submit",
			description: "submit a form",
			content:
				'<ButtonGroup align="right"><Button intent="silent" value="Cancel"/><Button intent="advise" icon="send" value="Submit"/></ButtonGroup>',
		},
	],
	_status: "stable",
	_category: "core",
	align: {
		type: '"left" | "center" | "right" | "join"',
		isOptional: true,
		default: "left",
	},
	className: {
		type: "string",
		isOptional: true,
	},
	children: {
		type: "HeliosChildrenType",
	},
	isVertical: {
		type: "boolean",
		isOptional: true,
	},
}
