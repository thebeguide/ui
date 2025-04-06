import { getClasses } from "@thebeguide/utils/classnames"
import styles from "./H0.module.css"
import type { FC } from "react"
import type { H0Props } from "./H0.types"

export const H0: FC<H0Props> = (props) => {
	const h0Classes: string = getClasses(props.className, "h1", styles.h0)

	return <h1 {...props} className={h0Classes} data-component="Heading.H0" />
}
