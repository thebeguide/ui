import type { ThebeAttributeMeta } from "../.."
import type { InputProps } from "./Input.types"

export const meta: ThebeAttributeMeta<InputProps> = {
	_patterns: [
		{
			id: "ui-input-default",
			description: "default",
			content: `<Input value={TEXT_VALUE} isDisabled={IS_DISABLED} isLoading={IS_LOADING} label={TEXT_LABEL} onChange={ON_TEXT_CHANGE} placeholder="hello@acme.com"/>`,
		},
	],
	_status: "stable",
	_category: "core",
	autoComplete: { type: '"new-password" | "username" | "current-password"', isOptional: true },
	autoFocus: { type: "boolean", isOptional: true },
	className: { type: "string", isOptional: true },
	helperText: { type: "string", isOptional: true },
	id: { type: "string", isOptional: true },
	isDisabled: { type: "boolean", isOptional: true },
	isLabelHidden: { type: "boolean", isOptional: true },
	isLoading: { type: "boolean", isOptional: true },
	isRequired: { type: "boolean", isOptional: true },
	label: { type: "string" },
	maxLength: { type: "number", isOptional: true },
	name: { type: "string", isOptional: true },
	onBlur: { type: "(event?: FocusEvent<HTMLInputElement>) => unknown", isOptional: true },
	onChange: { type: "(event?: ChangeEvent<HTMLInputElement>) => unknown", isOptional: true },
	onClear: { type: "ThebeOnClickType", isOptional: true },
	onFocus: { type: "(event?: FocusEvent<HTMLInputElement>) => unknown", isOptional: true },
	onKeyDown: { type: "(event?: KeyboardEvent) => unknown", isOptional: true },
	onKeyUp: { type: "string", isOptional: true },
	placeholder: { type: "string", isOptional: true },
	results: { type: "Array<ResultItem>", isOptional: true },
	showResults: { type: "boolean", isOptional: true },
	type: { type: '"text" | "email" | "date" | "time" | "password"', isOptional: true, default: "text" },
	value: { type: "string" },
}
