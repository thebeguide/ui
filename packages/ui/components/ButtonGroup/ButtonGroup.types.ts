import type { ReactNode } from "react"

export interface ButtonGroupProps {
	align?: "left" | "center" | "right" | "join"
	className?: string
	children: ReactNode
	isVertical?: boolean
}
