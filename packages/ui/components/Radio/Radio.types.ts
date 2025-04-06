import type { ChangeEvent } from "react"
import type { ThebeIntentionType } from "../.."

export interface RadioProps {
	intent: ThebeIntentionType
	isDisabled?: boolean
	isSmall?: boolean
	label: string
	onChange?: (event?: ChangeEvent) => Promise<void> | void
	state: string
	value: string
}
