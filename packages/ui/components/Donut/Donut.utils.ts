import type { DonutSizeType } from "./Donut.types"

export const getDonutBorderSize = (size: DonutSizeType = 32): number => {
	if (size === 32) return 4
	if (size === 48) return 6
	if (size === 64) return 8
	if (size === 96) return 10
	if (size === 128) return 12

	return 16
}
