import type { MouseEventHandler } from "react"
import type { HeliosIconType, HeliosSizeType, HeliosColors } from "../.."

export interface PillProps {
	color: HeliosColors
	icon?: HeliosIconType
	isDark?: boolean
	isLabelHidden?: boolean
	isMono?: boolean
	isRounded?: boolean
	label: string
	onClick?: MouseEventHandler<HTMLDivElement>
	size?: HeliosSizeType
}
