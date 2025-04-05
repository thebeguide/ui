import type { ReactNode } from "react"
import type { HeliosIconType, HeliosIntentionType } from "../.."

export interface AlertProps {
	children: ReactNode
	icon?: HeliosIconType
	intent: HeliosIntentionType
	onClose?: (event?: unknown) => void
	title?: string
}
