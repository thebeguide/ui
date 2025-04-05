import type { FC } from "react"
import type { MicroProps } from "./Micro.types"

export const Micro: FC<MicroProps> = (props) => {
	return <small {...props} className={`micro ${props.className}`} data-component="Text.Micro" />
}
