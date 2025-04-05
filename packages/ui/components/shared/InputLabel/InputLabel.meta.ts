import type { HeliosAttributeMeta } from "../../.."
import type { InputLabelProps } from "./InputLabel.types"

export const meta: HeliosAttributeMeta<InputLabelProps> = {
	_status: "internal",
	_patterns: [],
	_category: "core",
	label: {
		type: "string",
	},
	id: {
		type: "string",
	},
	isDisabled: {
		type: "boolean",
		isOptional: true,
	},
	isHidden: {
		type: "boolean",
		isOptional: true,
	},
}
