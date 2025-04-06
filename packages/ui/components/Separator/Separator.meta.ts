import type { ThebeAttributeMeta } from "../.."
import type { SeparatorProps } from "./Separator.types"

export const meta: ThebeAttributeMeta<SeparatorProps> = {
	_patterns: [
		{
			id: "ui-separator-default",
			description: "default",
			content: `<Separator/>`,
		},
		{
			id: "ui-separator-light-dashed",
			description: "with light dashed line",
			content: `<Separator lineStyle="dashed" isLight={true}/>`,
		},
	],
	_status: "stable",
	_category: "core",
	className: {
		type: "string",
		isOptional: true,
	},
	height: {
		type: "number",
		isOptional: true,
	},
	isLight: {
		type: "boolean",
		isOptional: true,
	},
	isVertical: {
		type: "boolean",
		isOptional: true,
	},
	lineStyle: {
		type: "dashed | dotted",
		isOptional: true,
	},
}
