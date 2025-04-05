import type { ChangeEvent } from "react"

export interface TextareaProps {
	autoComplete?: boolean
	autoFocus?: boolean
	helperText?: string
	isDisabled?: boolean
	isLabelHidden?: boolean
	label: string
	maxLength?: number
	name?: string
	onChange: (_event?: ChangeEvent<HTMLTextAreaElement>) => unknown
	placeholder?: string
	rows?: number
	value?: string
}
