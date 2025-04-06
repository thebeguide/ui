import type { ReactNode } from "react"
import type { ThebeColors } from "../.."

export type DonutSizeType = 32 | 48 | 64 | 96 | 128

export interface DonutProps {
	children?: ReactNode
	color: ThebeColors
	percentage: number
	size: DonutSizeType
}
