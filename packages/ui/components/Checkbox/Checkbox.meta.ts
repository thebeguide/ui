import type { HeliosAttributeMeta } from "../.."
import type { CheckboxProps } from "./Checkbox.types"

export const meta: HeliosAttributeMeta<CheckboxProps> = {
	_patterns: [
		{
			id: "ui-checkbox-default",
			description: "default",
			content: "<Checkbox isChecked={IS_CHECKED} intent={INTENT} label={CHECKBOX_LABEL} onChange={FUNCTION} />",
		},
		{
			id: "ui-checkbox-default",
			description: "vertical with description",
			content:
				"<Checkbox isChecked={IS_CHECKED} intent={INTENT} isDisabled={IS_DISABLED} label={CHECKBOX_LABEL} onChange={FUNCTION} description={INTENT_PARAGRAPH} isVertical={true}/>",
		},
	],
	_status: "stable",
	_category: "core",
	description: {
		type: "string",
		isOptional: true,
	},
	intent: {
		type: "HeliosIntentionType",
	},
	isChecked: {
		type: "boolean",
		isOptional: true,
	},
	isDisabled: {
		type: "boolean",
		isOptional: true,
	},
	isLabelHidden: {
		type: "boolean",
		isOptional: true,
	},
	isRequired: {
		type: "boolean",
		isOptional: true,
	},
	isSmall: {
		type: "boolean",
		isOptional: true,
	},
	isVertical: {
		type: "boolean",
		isOptional: true,
	},
	label: {
		type: "string",
	},
	onChange: {
		type: "(event?: ChangeEvent) => void",
		isOptional: true,
	},
}
