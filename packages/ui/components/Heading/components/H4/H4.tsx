import type { FC } from "react"
import type { H4Props } from "./H4.types"

export const H4: FC<H4Props> = (props) => {
	return <h4 {...props} className={`h4 ${props.className}`} data-component="Heading.H4" />
}
