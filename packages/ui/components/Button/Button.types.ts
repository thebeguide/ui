import type { MouseEvent, MouseEventHandler, SyntheticEvent } from "react"
import type { HeliosIntentionType, HeliosIconType, HeliosSizeType } from "../.."

export interface ButtonProps {
	accept?: string
	flair?: number
	icon?: HeliosIconType
	iconLeft?: HeliosIconType
	iconRight?: HeliosIconType
	intent: HeliosIntentionType
	isDisabled?: boolean
	isIconOnly?: boolean
	isLoading?: boolean
	isRounded?: boolean
	multiple?: boolean
	onChange?: (event?: MouseEvent | SyntheticEvent) => Promise<void> | void
	onClick?: MouseEventHandler<HTMLDivElement>
	size?: HeliosSizeType
	tabIndex?: number
	type?: "button" | "submit" | "file"
	value: string
}
