import type { ThebeAttributeMeta } from "../.."
import type { SegmentsProps } from "./Segments.types"

export const meta: ThebeAttributeMeta<SegmentsProps> = {
	_patterns: [
		{
			id: "ui-segments-default",
			description: "default",
			content: `<Segments><Segments.Button title="First" isActive={true}/><Segments.Button title="Second"/></Segments>`,
		},
	],
	_status: "nominal",
	_category: "core",
	isFullWidth: {
		type: "boolean",
		isOptional: true,
	},
	children: {
		type: "ReactNode",
	},
}
