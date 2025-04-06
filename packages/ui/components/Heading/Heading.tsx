import { getTypographyUtility } from "../Text/Text.utils"
import { getClasses } from "@thebeguide/utils/classnames"
import { H0 } from "./components/H0/H0"
import { H1 } from "./components/H1/H1"
import { H2 } from "./components/H2/H2"
import { H3 } from "./components/H3/H3"
import { H4 } from "./components/H4/H4"
import { H5 } from "./components/H5/H5"
import { H6 } from "./components/H6/H6"
import styles from "./Heading.module.css"
import type { HeadingProps } from "./Heading.types"
import type { FC } from "react"

export const Heading: FC<HeadingProps> = (props) => {
	const headingClasses: string = getClasses(props.className, styles.heading, {
		[styles.headingPrimary]: props.emphasis === "primary",
		[styles.headingSecondary]: props.emphasis === "secondary",
		[styles.headingTertiary]: props.emphasis === "tertiary",
	})
	const utility: string = getTypographyUtility({
		...props,
		className: headingClasses,
	})
	const lineClampStyle: object | undefined = props.lineClamp
		? {
				display: "-webkit-box",
				WebkitLineClamp: props.lineClamp,
				WebkitBoxOrient: "vertical",
				overflow: "hidden",
			}
		: undefined

	const allProps: Omit<HeadingProps, "level"> = {
		onClick: props.onClick,
		children: props.children,
		style: lineClampStyle,
		className: utility,
	}

	switch (props.level) {
		case 0:
			return <H0 {...allProps} />
		case 1:
			return <H1 {...allProps} />
		case 2:
			return <H2 {...allProps} />
		case 3:
			return <H3 {...allProps} />
		case 4:
			return <H4 {...allProps} />
		case 5:
			return <H5 {...allProps} />
		case 6:
			return <H6 {...allProps} />
		default:
			null
	}

	return null
}
