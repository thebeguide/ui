import type { ThebeAttributeMeta } from "../.."
import type { MasonryProps } from "./Masonry.types"

export const meta: ThebeAttributeMeta<MasonryProps> = {
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
		type: "ReactNode",
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
