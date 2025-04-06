import { Div } from "./components/Div/Div"
import { getClasses } from "@thebeguide/utils/classnames"
import { getTypographyUtility } from "./Text.utils"
import { P } from "./components/P/P"
import { Small } from "./components/Small/Small"
import { Tiny } from "./components/Tiny/Tiny"
import { type FC } from "react"
import styles from "./Text.module.css"
import type { TextProps } from "./Text.types"
import { Micro } from "./components/Micro/Micro"

export const Text: FC<TextProps> = (props) => {
	const textClasses: string = getClasses(props.className, styles.text, {
		[styles.textPrimary]: props.emphasis === "primary",
		[styles.textSecondary]: props.emphasis === "secondary",
		[styles.textTertiary]: props.emphasis === "tertiary",
	})

	const utility: string = getTypographyUtility({
		...props,
		className: textClasses,
	})
	const lineClampStyle: object | undefined = props.lineClamp
		? {
				display: "-webkit-box",
				WebkitLineClamp: props.lineClamp,
				WebkitBoxOrient: "vertical",
				overflow: "hidden",
			}
		: undefined

	const baseTextProps: Omit<TextProps, "type"> = {
		onClick: props.onClick,
		children: props.children,
		style: lineClampStyle,
		className: utility,
	}

	switch (props.type) {
		case "div":
			return <Div {...baseTextProps} />
		case "paragraph":
			return <P {...baseTextProps} />
		case "small":
			return <Small {...baseTextProps} />
		case "tiny":
			return <Tiny {...baseTextProps} />
		case "micro":
			return <Micro {...baseTextProps} />
		default:
			return <Div {...baseTextProps} />
	}
}
