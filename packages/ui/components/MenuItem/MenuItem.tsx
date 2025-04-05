"use client"

import { FC } from "react"
import { Flex, Pill, Text } from "../.."
import { getClasses } from "@heliosgraphics/utils"
import styles from "./MenuItem.module.css"
import type { MenuItemProps } from "./MenuItem.types"

export const MenuItem: FC<MenuItemProps> = ({
	isActive,
	title,
	label,
	labelIcon,
	labelHidden,
	labelColor = "aqua",
}) => {
	const menuItemClasses: string = getClasses(styles.menuItem, {
		[styles.menuItemActive]: isActive,
	})

	const onMenuClick = () => {
		const isMenuActive: boolean = globalThis.location.hash === "#ui-menu"

		if (isMenuActive) globalThis.location.hash = "#ui"
	}

	return (
		<Flex
			className={menuItemClasses}
			data-component="MenuItem"
			onClick={onMenuClick}
			isBetween={true}
			gap={4}
			isYCentered={true}
		>
			<Text type="small" fontWeight="medium" isEllipsis={true}>
				{title}
			</Text>
			{label && <Pill label={label} color={labelColor} isLabelHidden={labelHidden} size="tiny" icon={labelIcon} />}
		</Flex>
	)
}
