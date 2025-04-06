import type { ThebeAttributeMeta } from "../.."
import type { DatePickerProps } from "./DatePicker.types"

export const meta: ThebeAttributeMeta<DatePickerProps> = {
	_patterns: [
		{
			id: "ui-datepicker-default",
			description: "default",
			content: `<DatePicker/>`,
		},
	],
	_status: "experimental",
	_category: "core",
	date: {
		type: "string",
		isOptional: true,
	},
}
