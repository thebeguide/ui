import type { ChangeEvent } from "react"
import type { HeliosIntentionType } from "../.."

export interface RadioProps {
	intent: HeliosIntentionType
	isDisabled?: boolean
	isSmall?: boolean
	label: string
	onChange?: (event?: ChangeEvent) => Promise<void> | void
	state: string
	value: string
}
