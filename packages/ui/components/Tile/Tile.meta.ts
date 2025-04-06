import type { ThebeAttributeMeta } from "../.."
import type { TileProps } from "./Tile.types"

export const meta: ThebeAttributeMeta<TileProps> = {
	_patterns: [
		{
			id: "ui-tile-default",
			description: "default",
			content: `<Tile color={COLOR} icon={ICON} iconAccent={ICON_ACCENT} size={64} isRound={IS_ROUND} isRounded={IS_ROUNDED} colorAccent={COLOR_ACCENT}/>`,
		},
	],
	_status: "stable",
	_category: "pattern",
	color: { type: "ThebeColors" },
	colorAccent: { type: "ThebeColors", isOptional: true },
	icon: { type: "ThebeIconType" },
	iconAccent: { type: "ThebeIconType", isOptional: true },
	isRound: { type: "boolean", isOptional: true },
	isRounded: { type: "boolean", isOptional: true },
	onClick: { type: "ThebeOnClickType", isOptional: true },
	size: { type: "number" },
	text: { type: "string", isOptional: true },
}
