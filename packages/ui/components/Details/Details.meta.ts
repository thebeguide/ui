import type { HeliosAttributeMeta } from "../.."
import type { DetailsProps } from "./Details.types"

export const meta: HeliosAttributeMeta<DetailsProps> = {
	_patterns: [
		{
			id: "ui-details-default",
			description: "default",
			content: `<Details title="Details" isOpen={IS_OPEN}>{CHILDREN}</Details>`,
		},
	],
	_status: "nominal",
	_category: "core",
	children: {
		type: "HeliosChildrenType",
	},
	isOpen: {
		type: "boolean",
		isOptional: true,
	},
	title: {
		type: "string",
	},
}
