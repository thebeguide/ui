import type { HeliosAttributeMeta } from "../.."
import type { AlertProps } from "./Alert.types"

export const meta: HeliosAttributeMeta<AlertProps> = {
	_patterns: [
		{
			id: "ui-alert-default",
			description: "default",
			content: "<Alert intent={INTENT} onClose={FUNCTION}>{INTENT_PARAGRAPH}</Alert>",
		},
		{
			id: "ui-alert-title",
			description: "with title and icon",
			content: "<Alert intent={INTENT} icon={ICON} title={INTENT_TITLE} onClose={FUNCTION}>{INTENT_PARAGRAPH}</Alert>",
		},
	],
	_status: "stable",
	_category: "pattern",
	children: {
		type: "HeliosChildrenType",
	},
	icon: {
		type: "HeliosIconType",
		description: "icon before title",
		isOptional: true,
	},
	intent: {
		type: "HeliosIntentionType",
	},
	onClose: {
		type: "Function",
		description: "top right close fn",
		isOptional: true,
	},
	title: {
		type: "string",
		isOptional: true,
	},
}
