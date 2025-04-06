import type { ThebeAttributeMeta } from "../.."
import type { ClockProps } from "./Clock.types"

export const meta: ThebeAttributeMeta<ClockProps> = {
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
