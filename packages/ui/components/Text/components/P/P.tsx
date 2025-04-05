import type { FC } from "react"
import type { PProps } from "./P.types"

export const P: FC<PProps> = (props) => {
	return <p {...props} className={`p ${props.className}`} data-component="Text.P" />
}
