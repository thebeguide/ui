import type { ReactNode } from "react"
import type { HeliosColors } from "../.."

export type DonutSizeType = 32 | 48 | 64 | 96 | 128

export interface DonutProps {
	children?: ReactNode
	color: HeliosColors
	percentage: number
	size: DonutSizeType
}
