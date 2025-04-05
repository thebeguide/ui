import type { ReactNode } from "react"

export interface TabsProps {
	active?: number
	items: Array<string>
	sections: Array<ReactNode>
}
