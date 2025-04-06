import type { ThebeColors, ThebeIconType } from "../.."

export interface MenuItemProps {
	isActive?: boolean
	label?: string
	labelColor?: ThebeColors
	labelHidden?: boolean
	labelIcon?: ThebeIconType
	title: string
}
