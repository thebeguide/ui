import { ButtonGroupProps } from "./ButtonGroup.types"
import { getClasses } from "@thebeguide/utils/classnames"
import { Flex } from "../.."
import styles from "./ButtonGroup.module.css"
import type { FC } from "react"

export const ButtonGroup: FC<ButtonGroupProps> = ({ className, children, isVertical, align = "left" }) => {
	const buttonGroupClasses: string = getClasses(className, {
		[styles.buttonGroupLeft]: align === "left",
		[styles.buttonGroupCenter]: align === "center",
		[styles.buttonGroupRight]: align === "right",
		[styles.buttonGroupJoin]: align === "join",
		[styles.buttonGroupVertical]: isVertical,
		[styles.buttonGroupHorizontal]: !isVertical,
	})

	return (
		<Flex className={buttonGroupClasses} gap={4} isYCentered={true} data-component="ButtonGroup" isWrapping={true}>
			{children}
		</Flex>
	)
}
