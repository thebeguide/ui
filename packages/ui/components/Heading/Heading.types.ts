import type { HTMLAttributes } from "react"
import type { TextBaseProps } from "../.."

export interface HeadingBaseProps {
	level: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export type HeadingProps = HeadingBaseProps & Omit<TextBaseProps, "type"> & HTMLAttributes<HTMLHeadingElement>
