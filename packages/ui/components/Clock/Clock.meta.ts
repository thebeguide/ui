import type { HeliosAttributeMeta } from "../.."
import type { ClockProps } from "./Clock.types"

export const meta: HeliosAttributeMeta<ClockProps> = {
	_patterns: [
		{
			id: "ui-clock-default",
			description: "default",
			content: "<Clock />",
		},
	],
	_status: "experimental",
	_category: "core",
}
