import type { MouseEvent, MouseEventHandler, SyntheticEvent } from "react"
import type { ThebeIntentionType, ThebeIconType, ThebeSizeType } from "../.."

export interface ButtonProps {
	accept?: string
	flair?: number
	icon?: ThebeIconType
	iconLeft?: ThebeIconType
	iconRight?: ThebeIconType
	intent: ThebeIntentionType
	isDisabled?: boolean
	isIconOnly?: boolean
	isLoading?: boolean
	isRounded?: boolean
	multiple?: boolean
	onChange?: (event?: MouseEvent | SyntheticEvent) => Promise<void> | void
	onClick?: MouseEventHandler<HTMLDivElement>
	size?: ThebeSizeType
	tabIndex?: number
	type?: "button" | "submit" | "file"
	value: string
}
