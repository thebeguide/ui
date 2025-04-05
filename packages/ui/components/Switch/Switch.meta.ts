import type { HeliosAttributeMeta } from "../.."
import type { BaseSwitchProps } from "./Switch.types"

export const meta: HeliosAttributeMeta<BaseSwitchProps> = {
	_patterns: [
		{
			id: "ui-switch-default",
			description: "default",
			content: `<Switch isChecked={IS_CHECKED} intent={INTENT} isDisabled={IS_DISABLED} label="Suicide Burn" onChange={FUNCTION}/>`,
		},
		{
			id: "ui-switch-small",
			description: "default",
			content: `<Switch isChecked={IS_CHECKED} intent={INTENT} isSmall={true} isDisabled={IS_DISABLED} label="Suicide Burn" onChange={FUNCTION}/>`,
		},
	],
	_status: "stable",
	_category: "core",
	_extends: ["BaseCheckboxProps"],
}
