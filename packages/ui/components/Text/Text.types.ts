import type { HTMLAttributes } from "react"
import type { HeliosEmphasisType } from "../.."

export interface TextBaseProps {
	emphasis?: HeliosEmphasisType
	fontFamily?: "sans" | "serif" | "mono"
	fontStyle?: "italic" | "normal" | "oblique"
	fontWeight?: "thin" | "extra-light" | "light" | "normal" | "medium" | "semibold" | "bold" | "extra-bold" | "black"
	isBalanced?: boolean
	isEllipsis?: boolean
	isNonSelectable?: boolean
	lineClamp?: 1 | 2 | 3
	textAlign?: "left" | "right" | "center" | "justify"
	textDecoration?: "delete" | "overline" | "underline" | "capitalize" | "lowercase" | "uppercase"
	type: "micro" | "tiny" | "small" | "paragraph" | "div"
	whiteSpace?: "pre" | "pre-line" | "pre-wrap" | "nowrap"
	wordWrap?: "break-word"
}

export type TextProps = TextBaseProps & Omit<HTMLAttributes<HTMLDivElement | HTMLParagraphElement>, "color" | "results">
