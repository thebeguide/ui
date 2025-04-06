import type { ThebeAttributeMeta } from "../.."
import type { TextBaseProps } from "./Text.types"

export const meta: ThebeAttributeMeta<TextBaseProps> = {
	_patterns: [
		{
			id: "ui-text-default",
			description: "default",
			content: `<Text type='paragraph' emphasis={EMPHASIS}>{TEXT}</Text>`,
		},
	],
	_status: "stable",
	_category: "content",
	_extends: ["HTMLAttributes<HTMLDivElement | HTMLParagraphElement>"],
	emphasis: { type: "ThebeEmphasisType", isOptional: true },
	fontFamily: { type: '"sans" | "serif" | "mono"', isOptional: true },
	fontStyle: { type: '"italic" | "normal" | "oblique"', isOptional: true },
	fontWeight: {
		type: '"thin" | "extra-light" | "light" | "normal" | "medium" | "semibold" | "bold" | "extra-bold" | "black"',
		isOptional: true,
	},
	isBalanced: { type: "boolean", isOptional: true },
	isEllipsis: { type: "boolean", isOptional: true },
	isNonSelectable: { type: "boolean", isOptional: true },
	lineClamp: { type: "1 | 2 | 3", isOptional: true },
	textAlign: { type: '"left" | "right" | "center" | "justify"', isOptional: true },
	textDecoration: {
		type: '"delete" | "overline" | "underline" | "capitalize" | "lowercase" | "uppercase"',
		isOptional: true,
	},
	type: { type: '"tiny" | "small" | "paragraph" | "div"' },
	whiteSpace: { type: '"pre" | "pre-line" | "pre-wrap" | "nowrap"', isOptional: true },
	wordWrap: { type: '"break-word"', isOptional: true },
}
