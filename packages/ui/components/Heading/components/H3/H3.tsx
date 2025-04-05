import type { FC } from "react"
import type { H3Props } from "./H3.types"

export const H3: FC<H3Props> = (props) => {
	return <h3 {...props} className={`h3 ${props.className}`} data-component="Heading.H3" />
}
