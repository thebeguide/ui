import type { HeliosAttributeMeta } from "../.."
import type { SetupProps } from "./Setup.types"

export const meta: HeliosAttributeMeta<SetupProps> = {
	_patterns: [
		{
			id: "ui-setup-default",
			description: "default",
			content: `<Setup/>`,
		},
	],
	_status: "stable",
	_category: "layout",
}
