import { MouseEventHandler } from "react"
import type { ThebeIconType, ThebeColors } from "../.."

export interface TileProps {
	color: ThebeColors
	colorAccent?: ThebeColors
	icon: ThebeIconType
	iconAccent?: ThebeIconType
	isRound?: boolean
	isRounded?: boolean
	onClick?: MouseEventHandler<HTMLDivElement>
	size: number
	text?: string
}
