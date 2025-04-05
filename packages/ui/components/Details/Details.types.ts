import type { ReactNode } from "react"

export interface DetailsProps {
	children: ReactNode
	isOpen?: boolean
	title: string
}
