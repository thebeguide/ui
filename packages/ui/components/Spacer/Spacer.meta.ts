import type { ThebeAttributeMeta } from "../.."
import type { SpacerProps } from "./Spacer.types"

export const meta: ThebeAttributeMeta<SpacerProps> = {
	_patterns: [
		{
			id: "ui-spacer-default",
			description: "default",
			content: `<Spacer gap={GAP}/>`,
		},
	],
	_status: "stable",
	_category: "core",
	gap: {
		type: "number",
	},
}
