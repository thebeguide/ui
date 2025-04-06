import type { ReactNode } from "react"
import type { ThebeIconType, ThebeIntentionType } from "../.."

export interface AlertProps {
	children: ReactNode
	icon?: ThebeIconType
	intent: ThebeIntentionType
	onClose?: (event?: unknown) => void
	title?: string
}
