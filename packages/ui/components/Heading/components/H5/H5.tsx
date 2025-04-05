import type { FC } from "react"
import type { H5Props } from "./H5.types"

export const H5: FC<H5Props> = (props) => {
	return <h5 {...props} className={`h5 ${props.className}`} data-component="Heading.H5" />
}
