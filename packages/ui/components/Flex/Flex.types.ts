import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react"
import type { HeliosScale, HeliosRadius } from "../.."
import type { RefObject } from "react"

export type ResponsiveScaleType = HeliosScale | [HeliosScale, HeliosScale, HeliosScale]
export type ResponsiveRadiusType = HeliosRadius | [HeliosRadius, HeliosRadius, HeliosRadius]

export interface FlexBaseProps {
	children?: ReactNode
	className?: string
	elevation?: "small" | "medium" | "large"
	gap?: HeliosScale
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
	paddingX?: HeliosScale
	paddingY?: HeliosScale
	ref?: RefObject<HTMLDivElement>
	withBackground?: boolean
	withRadius?: ResponsiveRadiusType
	xAlign?: "start" | "end" | "center"
	yAlign?: "start" | "end" | "baseline"
}

export type FlexProps = FlexBaseProps & Omit<HTMLAttributes<HTMLDivElement>, "color" | "results">
