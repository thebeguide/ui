import type { ThebeAttributeMeta } from "../.."
import type { MainProps } from "./Main.types"

export const meta: ThebeAttributeMeta<MainProps> = {
	_patterns: [
		{
			id: "ui-main-default",
			description: "default",
			content: `<Main>{CHILDREN}</Main>`,
		},
	],
	_status: "nominal",
	_category: "layout",
	children: { type: "ReactNode" },
}
