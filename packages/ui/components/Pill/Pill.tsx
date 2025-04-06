import { getClasses } from "@thebeguide/utils/classnames"
import { Flex, Text, ThebeSizeType, Icon } from "../.."
import styles from "./Pill.module.css"
import type { FC } from "react"
import type { PillProps } from "./Pill.types"

const PILL_ICON_SIZES: Record<ThebeSizeType, number> = {
	normal: 24,
	small: 16,
	tiny: 12,
}

export const Pill: FC<PillProps> = ({
	color = "gray",
	icon,
	onClick,
	isDark,
	isLabelHidden,
	isMono,
	isRounded,
	size = "normal",
	label,
}) => {
	const textColor: string = `var(--ui-text-${color})`
	const pillColor: string = `var(--ui-bg-soft-${color})`
	const textColorDark: string = `hsl(var(--${color}-hue), var(--${color}-saturation), 90%)`
	const pillColorDark: string = `hsl(var(--${color}-hue), var(--${color}-saturation), 40%)`

	const pillClass = getClasses("non-selectable break-word", styles.pill, {
		[styles.pillRounded]: isRounded,
		[`radius-small`]: !isRounded,
		[styles.pillNormal]: size === "normal",
		[styles.pillSmall]: size === "small",
		[styles.pillTiny]: size === "tiny",
		[styles.pillDark]: isDark,
		[styles.pillIconOnly]: !!icon && isLabelHidden,
	})
	const isSmall: boolean = size !== "normal"
	const pillTextSize = isSmall ? "tiny" : "small"

	return (
		<Flex
			className={pillClass}
			isCentered={true}
			onClick={onClick}
			style={{
				backgroundColor: isDark ? pillColorDark : pillColor,
				color: isDark ? textColorDark : textColor,
			}}
			gap={2}
		>
			{icon && <Icon size={PILL_ICON_SIZES[size]} icon={icon} />}
			{!isLabelHidden && (
				<Text type={pillTextSize} whiteSpace="nowrap" fontFamily={isMono ? "mono" : undefined} fontWeight="medium">
					{label}
				</Text>
			)}
		</Flex>
	)
}
