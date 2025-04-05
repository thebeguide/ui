import type { ResultItem } from "../.."
import type { KeyboardEventHandler, MouseEventHandler, FocusEventHandler, ChangeEventHandler } from "react"

export interface InputProps {
	autoComplete?: "new-password" | "username" | "current-password"
	autoFocus?: boolean
	className?: string
	helperText?: string
	id?: string
	isDisabled?: boolean
	isLabelHidden?: boolean
	isLoading?: boolean
	isRequired?: boolean
	label: string
	maxLength?: number
	name?: string
	onBlur?: FocusEventHandler<HTMLInputElement>
	onChange?: ChangeEventHandler<HTMLInputElement>
	onClear?: MouseEventHandler<HTMLDivElement>
	onFocus?: FocusEventHandler<HTMLInputElement>
	onKeyDown?: KeyboardEventHandler
	onKeyUp?: KeyboardEventHandler
	placeholder?: string
	results?: Array<ResultItem>
	showResults?: boolean
	type?: "text" | "email" | "date" | "time" | "password"
	value?: string
}
