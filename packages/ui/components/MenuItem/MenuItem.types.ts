import type { HeliosColors, HeliosIconType } from "../.."

export interface MenuItemProps {
	isActive?: boolean
	label?: string
	labelColor?: HeliosColors
	labelHidden?: boolean
	labelIcon?: HeliosIconType
	title: string
}
