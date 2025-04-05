import type { HeliosAttributeMeta } from "../.."
import type { BaseToggleProps } from "./Toggle.types"

export const meta: HeliosAttributeMeta<BaseToggleProps> = {
	_patterns: [
		{
			id: "ui-toggle-default",
			description: "default",
			content: `<Toggle isChecked={IS_CHECKED} intent={INTENT} isDisabled={IS_DISABLED} label="Suicide Burn" onChange={FUNCTION}/>`,
		},
		{
			id: "ui-toggle-small",
			description: "default",
			content: `<Toggle intent={INTENT} isChecked={IS_CHECKED} isSmall={true} isDisabled={IS_DISABLED} label="Suicide Burn" onChange={FUNCTION}/>`,
		},
	],
	_status: "stable",
	_category: "core",
	_extends: ["BaseCheckboxProps"],
}
