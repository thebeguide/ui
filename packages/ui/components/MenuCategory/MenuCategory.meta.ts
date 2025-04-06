import type { ThebeAttributeMeta } from "../.."
import type { MenuCategoryProps } from "./MenuCategory.types"

export const meta: ThebeAttributeMeta<MenuCategoryProps> = {
	_patterns: [
		{
			id: "ui-menu-category-default",
			description: "default",
			content: `<div>{CHILDREN}</div>`,
		},
	],
	_status: "experimental",
	_category: "layout",
	category: {
		type: "string",
		isOptional: true,
	},
	children: {
		type: "ReactNode",
	},
	isFolder: {
		type: "boolean",
		isOptional: true,
	},
	isFolderClosed: {
		type: "boolean",
		isOptional: true,
		default: "false",
	},
}
