import type { HeliosAttributeMeta } from "../.."
import type { SpacerProps } from "./Spacer.types"

export const meta: HeliosAttributeMeta<SpacerProps> = {
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
