import type { FC } from "react"
import type { H2Props } from "./H2.types"

export const H2: FC<H2Props> = (props) => {
	return <h2 {...props} className={`h2 ${props.className}`} data-component="Heading.H2" />
}
