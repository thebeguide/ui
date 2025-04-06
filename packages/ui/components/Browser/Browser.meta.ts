import type { ThebeAttributeMeta } from "../.."
import type { BrowserProps } from "./Browser.types"

export const meta: ThebeAttributeMeta<BrowserProps> = {
	_patterns: [
		{
			id: "ui-browser-default",
			description: "default",
			content: "<Browser width={480}>{CHILDREN}</Browser>",
		},
	],
	_status: "experimental",
	_category: "layout",
	children: {
		type: "ReactNode",
		isOptional: true,
	},
	height: {
		type: "number",
		isOptional: true,
	},
	url: {
		type: "string",
		isOptional: true,
	},
	width: {
		type: "number",
		isOptional: true,
	},
}
