import type { TextProps } from "./Text.types"
import type { HeadingProps } from "../Heading/Heading.types"

export const _getFontWeight = (fw: TextProps["fontWeight"]): string => {
	switch (fw) {
		case "thin":
			return "fw-thin"
		case "extra-light":
			return "fw-extra-light"
		case "light":
			return "fw-light"
		case "normal":
			return "fw-normal"
		case "medium":
			return "fw-medium"
		case "semibold":
			return "fw-semi-bold"
		case "bold":
			return "fw-bold"
		case "extra-bold":
			return "fw-extra-bold"
		case "black":
			return "fw-black"

		default:
			return ""
	}
}

export const getTypographyUtility = (props: TextProps | HeadingProps): string => {
	const typoClasses: Array<string> = []

	const fontFamily = props.fontFamily ? props.fontFamily : "sans"
	const fontWeight = _getFontWeight(props.fontWeight)

	typoClasses.push(fontFamily)
	typoClasses.push(fontWeight)

	if (props.className) typoClasses.push(props.className)
	if (props.fontStyle) typoClasses.push(props.fontStyle)
	if (props.isBalanced) typoClasses.push("text-balanced")
	if (props.isEllipsis) typoClasses.push("ellipsis")
	if (props.isNonSelectable) typoClasses.push("non-selectable")
	if (props.textAlign) typoClasses.push(props.textAlign)
	if (props.textDecoration) typoClasses.push(props.textDecoration)
	if (props.whiteSpace) typoClasses.push(props.whiteSpace)
	if (props.wordWrap) typoClasses.push(props.wordWrap)

	return typoClasses.join(" ")
}
