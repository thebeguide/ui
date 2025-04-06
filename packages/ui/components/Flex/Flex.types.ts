import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react"
import type { ThebeScale, ThebeRadius } from "../.."
import type { RefObject } from "react"

export type ResponsiveScaleType = ThebeScale | [ThebeScale, ThebeScale, ThebeScale]
export type ResponsiveRadiusType = ThebeRadius | [ThebeRadius, ThebeRadius, ThebeRadius]

export interface FlexBaseProps {
	children?: ReactNode
	className?: string
	elevation?: "small" | "medium" | "large"
	gap?: ThebeScale
	grow?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
	isAround?: boolean
	isBetween?: boolean
	isCentered?: boolean
	isColumn?: boolean
	isFullWidth?: boolean
	isInline?: boolean
	isNoWrap?: boolean
	isStretch?: boolean
	isWrapping?: boolean
	isXCentered?: boolean
	isYCentered?: boolean
	onClick?: MouseEventHandler<HTMLDivElement>
	padding?: ResponsiveScaleType
	paddingX?: ThebeScale
	paddingY?: ThebeScale
	ref?: RefObject<HTMLDivElement>
	withBackground?: boolean
	withRadius?: ResponsiveRadiusType
	xAlign?: "start" | "end" | "center"
	yAlign?: "start" | "end" | "baseline"
}

export type FlexProps = FlexBaseProps & Omit<HTMLAttributes<HTMLDivElement>, "color" | "results">
