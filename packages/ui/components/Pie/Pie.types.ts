import type { ThebeColors } from "../.."

export interface PieItem {
	name?: string
	value: number
}

export interface PieProps {
	color: ThebeColors
	data: Array<PieItem>
	size: number
}
