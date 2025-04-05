import type { HeliosAttributeMeta } from "../.."
import type { ButtonProps } from "./Button.types"

export const meta: HeliosAttributeMeta<ButtonProps> = {
	_patterns: [
		{
			id: "ui-button-default",
			description: "default",
			content: '<Button intent={INTENT} value="Button" icon={ICON}/>',
		},
	],
	_status: "stable",
	_category: "core",
	accept: {
		type: "string",
		isOptional: true,
	},
	flair: {
		type: "number",
		isOptional: true,
	},
	icon: {
		type: "HeliosIconType",
		isOptional: true,
	},
	iconLeft: {
		type: "HeliosIconType",
		isOptional: true,
		alias: "icon",
	},
	iconRight: {
		type: "HeliosIconType",
		isOptional: true,
	},
	intent: {
		type: "HeliosIntentionType",
	},
	isDisabled: {
		type: "boolean",
		isOptional: true,
	},
	isIconOnly: {
		type: "boolean",
		isOptional: true,
	},
	isLoading: {
		type: "boolean",
		isOptional: true,
	},
	isRounded: {
		type: "boolean",
		isOptional: true,
	},
	multiple: {
		type: "boolean",
		isOptional: true,
	},
	onChange: {
		type: "(event?: MouseEvent | SyntheticEvent) => Promise<void> | void",
		isOptional: true,
	},
	onClick: {
		type: "HeliosOnClickType",
		isOptional: true,
	},
	size: {
		type: '"normal" | "small" | "tiny"',
		isOptional: true,
		default: "normal",
	},
	tabIndex: {
		type: "number",
		isOptional: true,
	},
	type: {
		type: '"button" | "submit" | "file',
		isOptional: true,
		default: "button",
	},
	value: {
		type: "string",
	},
}
