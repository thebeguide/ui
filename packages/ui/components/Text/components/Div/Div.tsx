import type { DivProps } from "./Div.types"
import type { FC } from "react"

export const Div: FC<DivProps> = (props) => {
	return <div {...props} className={`p ${props.className}`} data-component="Text.Div" />
}
