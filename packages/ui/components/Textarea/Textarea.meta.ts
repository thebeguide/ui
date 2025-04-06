import type { ThebeAttributeMeta } from "../.."
import type { TextareaProps } from "./Textarea.types"

export const meta: ThebeAttributeMeta<TextareaProps> = {
	_patterns: [
		{
			id: "ui-textarea-default",
			description: "default",
			content: `<Textarea onChange={ON_TEXTAREA_CHANGE} value={TEXTAREA} placeholder={TEXTAREA_PLACEHOLDER} isDisabled={IS_DISABLED} label={TEXTAREA_LABEL} helperText={HELPER_TEXT}/>`,
		},
	],
	_status: "stable",
	_category: "core",
	autoComplete: { type: "boolean", isOptional: true },
	autoFocus: { type: "boolean", isOptional: true },
	helperText: { type: "string", isOptional: true },
	isDisabled: { type: "boolean", isOptional: true },
	isLabelHidden: { type: "boolean", isOptional: true },
	label: { type: "string" },
	maxLength: { type: "number", isOptional: true },
	name: { type: "string", isOptional: true },
	onChange: { type: "(_event?: ChangeEvent<HTMLTextAreaElement>) => unknown" },
	placeholder: { type: "string", isOptional: true },
	rows: { type: "number", isOptional: true },
	value: { type: "string", isOptional: true },
}
