import type { ReactNode } from "react"

export interface MasonryProps {
	children: ReactNode
	columns: [number, number, number]
	gap: [number, number, number]
	brakepoints: [number, number, number]
	useBalancedLayout?: boolean
}
