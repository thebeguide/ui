import type { HeliosAttributeMeta } from "../.."
import type { RadioProps } from "./Radio.types"

export const meta: HeliosAttributeMeta<RadioProps> = {
	_patterns: [
		{
			id: "ui-radio-default",
			description: "default",
			content: `<Radio label={RADIO_LABEL} intent={INTENT} onChange={ON_RADIO_CHANGE} value="radio-01" isDisabled={IS_DISABLED} state={RADIO}/>`,
		},
	],
	_status: "stable",
	_category: "core",
	intent: {
		type: "HeliosIntentionType",
	},
	isDisabled: {
		type: "boolean",
		isOptional: true,
	},
	isSmall: {
		type: "boolean",
		isOptional: true,
	},
	label: {
		type: "string",
	},
	onChange: {
		type: "(event?: ChangeEvent) => Promise<void> | void",
		isOptional: true,
	},
	state: {
		type: "string",
	},
	value: {
		type: "string",
	},
}
