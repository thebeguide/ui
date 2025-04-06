import type { MouseEventHandler } from "react"
import type { ThebeIconType, ThebeSizeType, ThebeColors } from "../.."

export interface PillProps {
	color: ThebeColors
	icon?: ThebeIconType
	isDark?: boolean
	isLabelHidden?: boolean
	isMono?: boolean
	isRounded?: boolean
	label: string
	onClick?: MouseEventHandler<HTMLDivElement>
	size?: ThebeSizeType
}
