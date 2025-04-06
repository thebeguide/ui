import type { ThebeIconType, ThebeIntentionType } from "../.."

export interface ConfirmProps {
	cancelText: string
	confirmText: string
	description?: string
	icon?: ThebeIconType
	intent: ThebeIntentionType
	isOpen: boolean
	onCancel: (_?: unknown) => Promise<void> | void
	onConfirm: (_?: unknown) => Promise<void> | void
	title: string
}
