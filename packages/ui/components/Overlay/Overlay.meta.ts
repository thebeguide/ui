import type { ThebeAttributeMeta } from "../.."
import type { OverlayProps } from "./Overlay.types"

export const meta: ThebeAttributeMeta<OverlayProps> = {
	_patterns: [
		{
			id: "ui-overlay-default",
			description: "default",
			content: `<Overlay isOpen={IS_OPEN} isCentered={IS_CENTERED} onClose={ON_TOGGLE_OPEN}>{CHILDREN}</Overlay>`,
		},
	],
	_status: "stable",
	_category: "core",
	children: {
		type: "ReactNode",
	},
	isCentered: {
		type: "boolean",
		isOptional: true,
	},
	isOpen: {
		type: "boolean",
	},
	onClose: {
		type: "() => void",
	},
}
