import type { ThebeAttributeMeta } from "../../.."
import type { ResultListProps } from "./ResultList.types"

export const meta: ThebeAttributeMeta<ResultListProps> = {
	_status: "internal",
	_category: "core",
	_patterns: [],
	items: {
		type: "Array<ResultItem>",
		isOptional: true,
	},
	isHidden: {
		type: "boolean",
		isOptional: true,
	},
}
