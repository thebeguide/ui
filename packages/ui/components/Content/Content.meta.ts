import type { HeliosAttributeMeta } from "../.."
import type { ContentBaseProps } from "./Content.types"

export const meta: HeliosAttributeMeta<ContentBaseProps> = {
	_patterns: [
		{
			id: "ui-content-default",
			description: "default",
			content: `<Content>{CHILDREN}</Content>`,
		},
	],
	_extends: ["ColumnProps"],
	_status: "nominal",
	_category: "layout",
}
