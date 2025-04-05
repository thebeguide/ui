import type { HeliosAttributeMeta } from "../.."
import type { TabsProps } from "./Tabs.types"

export const meta: HeliosAttributeMeta<TabsProps> = {
	_patterns: [
		{
			id: "ui-tabs-default",
			description: "default",
			content: `<Tabs items={TAB_ITEMS} sections={TAB_SECTIONS}/>`,
		},
	],
	_status: "experimental",
	_category: "layout",
	active: {
		type: "number",
		isOptional: true,
	},
	items: {
		type: "Array<string>",
	},
	sections: {
		type: "Array<ReactNode>",
	},
}
