import type { ResultItem, ThebePositionType } from "../.."
import type { ReactElement } from "react"

export interface DropdownProps {
	children: ReactElement<unknown>
	items: Array<ResultItem>
	isHidden?: boolean
	isDisabled?: boolean
	position?: ThebePositionType
}
