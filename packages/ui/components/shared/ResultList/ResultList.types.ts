import type { Ref, MouseEventHandler } from "react"
import type { HeliosIconType } from "../../.."

export interface ResultItem {
	description?: string
	icon?: HeliosIconType
	isActive?: boolean
	isDisabled?: boolean
	name: string
	onClick?: MouseEventHandler
	ref?: Ref<HTMLOListElement>
	type?: "separator" | "checkbox"
}

export interface ResultListProps {
	items?: Array<ResultItem>
	isHidden?: boolean
}
