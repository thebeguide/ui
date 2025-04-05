import type { MouseEventHandler } from "react"

export interface BreadCrumbItem {
	isActive?: boolean
	name: string
	href: string
	onClick?: MouseEventHandler<HTMLAnchorElement>
}

export interface BreadcrumbProps {
	items: Array<BreadCrumbItem>
}
