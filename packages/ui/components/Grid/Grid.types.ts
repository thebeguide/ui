import type { ReactNode } from "react"

export interface GridProps {
	columns: number
	children: ReactNode
	isResponsive?: boolean
}
