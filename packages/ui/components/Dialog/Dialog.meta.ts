import type { ThebeAttributeMeta } from "../.."
import type { DialogProps } from "./Dialog.types"

export const meta: ThebeAttributeMeta<DialogProps> = {
	_patterns: [
		{
			id: "ui-dialog-default",
			description: "default dialog",
			content: `<Dialog isOpen={IS_OPEN} onClose={ON_TOGGLE_OPEN} title="Hello World" isNarrow={IS_NARROW} isCentered={IS_CENTERED}>{CHILDREN}</Dialog>`,
		},
		{
			id: "ui-dialog-no-padding",
			description: "default dialog without content padding",
			content: `<Dialog isOpen={IS_OPEN} onClose={ON_TOGGLE_OPEN} title="Hello World" isNarrow={IS_NARROW} isCentered={IS_CENTERED} noPadding={true}>{CHILDREN}</Dialog>`,
		},
	],
	_status: "stable",
	_category: "pattern",
	children: {
		type: "ReactNode",
	},
	isOpen: {
		type: "boolean",
		isOptional: true,
	},
	isCentered: {
		type: "boolean",
		isOptional: true,
	},
	isNarrow: {
		type: "boolean",
		isOptional: true,
	},
	noPadding: {
		type: "boolean",
		description: "Removes padding from the Dialog content.",
		isOptional: true,
	},
	onClose: {
		type: "(_?: unknown) => Promise<void> | void",
	},
	title: {
		type: "string",
		isOptional: true,
	},
}
