import type { ChangeEventHandler } from "react"

export type SelectItem = {
	name: string
	value: string
	isDisabled?: boolean
}

export interface SelectProps {
	isDisabled?: boolean
	isLabelHidden?: boolean
	isSmall?: boolean
	items: Array<SelectItem>
	label: string
	onChange: ChangeEventHandler<HTMLSelectElement>
	selectedValue?: string
}
