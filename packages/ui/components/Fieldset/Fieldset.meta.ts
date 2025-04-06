import type { ThebeAttributeMeta } from "../.."
import type { FieldsetProps } from "./Fieldset.types"

export const meta: ThebeAttributeMeta<FieldsetProps> = {
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
		type: "ReactNode",
	},
	legend: {
		type: "string",
	},
}
