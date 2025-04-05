import type { HeliosAttributeMeta } from "../.."
import type { TimestampProps } from "./Timestamp.types"

export const meta: HeliosAttributeMeta<TimestampProps> = {
	_patterns: [
		{
			id: "ui-timestamp-default",
			description: "default",
			content: `<Timestamp date={DATE} fromNow={false} format={DATE_FORMAT}/>`,
		},
	],
	_status: "nominal",
	_category: "content",
	date: { type: "string", isOptional: true },
	format: { type: "string", isOptional: true, default: "MMMM D, YYYY" },
	fromNow: { type: "boolean", isOptional: true },
	text: { type: "string", isOptional: true },
}
