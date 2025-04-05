import { getClasses } from "@heliosgraphics/utils/classnames"
import { Icon, Text, Flex } from "../.."
import styles from "./Tile.module.css"
import { useId, type FC } from "react"
import type { TileProps } from "./Tile.types"

export const Tile: FC<TileProps> = ({
	size,
	text,
	icon,
	onClick,
	iconAccent,
	color,
	colorAccent,
	isRounded,
	isRound,
}) => {
	const tileId: string = useId()
	const isLarge: boolean = size > 64

	const iconColor: string = `var(--ui-text-${color})`
	const tileColor: string = `var(--ui-bg-soft-${color})`
	const tileColorAccent: string = `hsla(var(--${colorAccent || color}-hue), var(--${colorAccent || color}-saturation), 50%, 0.15)`

	const tileClasses = getClasses(styles.tile, {
		[styles.tileLarge]: isLarge,
		["radius-normal"]: isRounded,
		["radius-max"]: isRound,
	})

	const tileSize = {
		color: iconColor,
		height: `${size}px`,
		minWidth: `${size}px`,
		width: `${size}px`,
	}

	const accentIconStyle = {
		color: tileColorAccent,
	}

	return (
		<Flex className={tileClasses} isCentered={true} isColumn={true} style={tileSize} onClick={onClick}>
			<svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} className={styles.tile__background}>
				<linearGradient id={tileId}>
					<stop stopColor={tileColor} offset="0%" />
					{colorAccent && <stop stopColor={tileColorAccent} offset="100%" />}
				</linearGradient>
				<rect fill={`url(#${tileId})`} x={0} y={0} width={size} height={size} rx={isRound ? size : isRounded ? 8 : 0} />
			</svg>
			<Icon icon={icon} size={size * 0.5} />
			{iconAccent && (
				<Flex style={accentIconStyle} isCentered={true}>
					<Icon icon={iconAccent} size={size * 1} className={styles.tile__iconAccent} />
				</Flex>
			)}
			{text && (
				<Text type={isLarge ? "small" : "tiny"} fontFamily="mono" lineClamp={1} textAlign="center">
					{text}
				</Text>
			)}
		</Flex>
	)
}
