import type { HeliosAttributeMeta } from "../.."
import type { TileProps } from "./Tile.types"

export const meta: HeliosAttributeMeta<TileProps> = {
	_patterns: [
		{
			id: "ui-tile-default",
			description: "default",
			content: `<Tile color={COLOR} icon={ICON} iconAccent={ICON_ACCENT} size={64} isRound={IS_ROUND} isRounded={IS_ROUNDED} colorAccent={COLOR_ACCENT}/>`,
		},
	],
	_status: "stable",
	_category: "pattern",
	color: { type: "HeliosColors" },
	colorAccent: { type: "HeliosColors", isOptional: true },
	icon: { type: "HeliosIconType" },
	iconAccent: { type: "HeliosIconType", isOptional: true },
	isRound: { type: "boolean", isOptional: true },
	isRounded: { type: "boolean", isOptional: true },
	onClick: { type: "HeliosOnClickType", isOptional: true },
	size: { type: "number" },
	text: { type: "string", isOptional: true },
}
