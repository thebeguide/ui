import type { HeliosIconType, HeliosIntentionType } from "../.."

export interface ConfirmProps {
	cancelText: string
	confirmText: string
	description?: string
	icon?: HeliosIconType
	intent: HeliosIntentionType
	isOpen: boolean
	onCancel: (_?: unknown) => Promise<void> | void
	onConfirm: (_?: unknown) => Promise<void> | void
	title: string
}
