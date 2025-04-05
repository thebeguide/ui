import type { HeliosAttributeMeta } from "../.."
import type { MenuCategoryProps } from "./MenuCategory.types"

export const meta: HeliosAttributeMeta<MenuCategoryProps> = {
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
		type: "HeliosChildrenType",
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
