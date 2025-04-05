import type { HeliosAttributeMeta } from "../.."
import type { MasonryProps } from "./Masonry.types"

export const meta: HeliosAttributeMeta<MasonryProps> = {
	_patterns: [
		{
			id: "ui-masonry-default",
			description: "default",
			content: `<Masonry columns={2}>{CHILDREN}</Masonry>`,
		},
	],
	_status: "experimental",
	_category: "layout",
	children: {
		type: "HeliosChildrenType",
	},
	brakepoints: {
		type: "[number, number, number]",
	},
	columns: {
		type: "[number, number, number]",
	},
	gap: {
		type: "[number, number, number]",
	},
	useBalancedLayout: {
		type: "boolean",
		isOptional: true,
	},
}
