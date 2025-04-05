import type { HeliosAttributeMeta } from "../.."
import type { FieldsetProps } from "./Fieldset.types"

export const meta: HeliosAttributeMeta<FieldsetProps> = {
	_patterns: [
		{
			id: "ui-fieldset-default",
			description: "default",
			content: `<Fieldset legend="User Details">{CHILDREN}</Fieldset>`,
		},
	],
	_status: "experimental",
	_category: "core",
	children: {
		type: "HeliosChildrenType",
	},
	legend: {
		type: "string",
	},
}
