import type { ThebeAttributeMeta } from "../.."
import type { MarkdownProps } from "./Markdown.types"

export const meta: ThebeAttributeMeta<MarkdownProps> = {
	_patterns: [
		{
			id: "ui-markdown-default",
			description: "default",
			content: `<Markdown text={MARKDOWN}/>`,
		},
	],
	_status: "stable",
	_category: "content",
	isNonSelectable: {
		type: "boolean",
		isOptional: true,
	},
	text: {
		type: "string",
	},
}
