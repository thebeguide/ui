import type { ChangeEventHandler } from "react"
import { HeliosIntentionType } from "../.."

export interface BaseCheckboxProps {
	description?: string
	intent: HeliosIntentionType
	isChecked?: boolean
	isDisabled?: boolean
	isLabelHidden?: boolean
	isRequired?: boolean
	isSmall?: boolean
	label: string
	onChange?: ChangeEventHandler<HTMLInputElement>
	isVertical?: boolean
}

export interface CheckboxProps extends BaseCheckboxProps {}
