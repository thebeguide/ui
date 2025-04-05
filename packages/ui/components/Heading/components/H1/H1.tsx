import type { FC } from "react"
import type { H1Props } from "./H1.types"

export const H1: FC<H1Props> = (props) => {
	return <h1 {...props} className={`h1 ${props.className}`} data-component="Heading.H1" />
}
