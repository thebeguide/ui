import type { HeliosAttributeMeta } from "../.."
import type { DatePickerProps } from "./DatePicker.types"

export const meta: HeliosAttributeMeta<DatePickerProps> = {
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
