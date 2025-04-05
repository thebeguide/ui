import type { ReactNode } from "react"

export interface MenuCategoryProps {
	category?: string
	children: ReactNode
	isFolder?: boolean
	isFolderClosed?: boolean
}
