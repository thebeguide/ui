import type { HeliosAttributeMeta } from "../.."
import type { NavigationBaseProps } from "./Navigation.types"

export const meta: HeliosAttributeMeta<NavigationBaseProps> = {
	_patterns: [
		{
			id: "ui-navigation-default",
			description: "default",
			content: `<div>{CHILDREN}</div>`,
		},
	],
	_status: "experimental",
	_category: "layout",
	_extends: ["FlexProps"],
	withGlass: {
		type: "string",
		isOptional: true,
	},
}
