import type { HeliosAttributeMeta } from "../.."
import type { HeadingBaseProps } from "./Heading.types"

export const meta: HeliosAttributeMeta<HeadingBaseProps> = {
	_patterns: [
		{
			id: "ui-heading-default",
			description: "default",
			content: `<Heading level={1}>{CHILDREN}</Heading>`,
		},
	],
	_extends: ['Omit<BaseTextProps, "type">', "HTMLAttributes<HTMLHeadingElement>"],
	_status: "stable",
	_category: "content",
	level: {
		type: "0 | 1 | 2 | 3 | 4 | 5 | 6",
	},
}
