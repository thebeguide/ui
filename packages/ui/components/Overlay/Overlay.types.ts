import type { ReactNode } from "react"

export interface OverlayProps {
	children: ReactNode
	isCentered?: boolean
	isOpen: boolean
	onClose: () => void
}
