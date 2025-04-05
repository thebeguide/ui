import type { ReactNode } from "react"

export interface DialogProps {
	children: ReactNode
	isCentered?: boolean
	isNarrow?: boolean
	isOpen?: boolean
	noPadding?: boolean
	onClose: (_?: unknown) => Promise<void> | void
	title?: string
}
