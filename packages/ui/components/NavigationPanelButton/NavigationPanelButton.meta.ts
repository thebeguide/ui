import type { ThebeAttributeMeta } from "../.."
import type { NavigationPanelButtonProps } from "./NavigationPanelButton.types"

export const meta: ThebeAttributeMeta<NavigationPanelButtonProps> = {
	_patterns: [
		{
			id: "ui-navigation-panel-button-default",
			description: "default",
			content: `<div>{CHILDREN}</div>`,
		},
	],
	_status: "experimental",
	_category: "layout",
}
