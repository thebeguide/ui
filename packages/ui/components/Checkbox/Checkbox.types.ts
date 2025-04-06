import type { ChangeEventHandler } from "react"
import { ThebeIntentionType } from "../.."

export interface BaseCheckboxProps {
	description?: string
	intent: ThebeIntentionType
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
