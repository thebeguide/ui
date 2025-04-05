import { MouseEventHandler } from "react"
import type { HeliosIconType, HeliosColors } from "../.."

export interface TileProps {
	color: HeliosColors
	colorAccent?: HeliosColors
	icon: HeliosIconType
	iconAccent?: HeliosIconType
	isRound?: boolean
	isRounded?: boolean
	onClick?: MouseEventHandler<HTMLDivElement>
	size: number
	text?: string
}
