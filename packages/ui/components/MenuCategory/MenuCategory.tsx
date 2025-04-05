"use client"

import { useState, type FC } from "react"
import { Button, ButtonGroup, Flex, Text } from "../.."
import { getClasses } from "@heliosgraphics/utils"
import styles from "./MenuCategory.module.css"
import type { MenuCategoryProps } from "./MenuCategory.types"

export const MenuCategory: FC<MenuCategoryProps> = ({ category, children, isFolder, isFolderClosed }) => {
	const [isOpen, setOpen] = useState<boolean>(!isFolderClosed)
	const onToggle = () => setOpen(!isOpen)

	const menuCategoryClasses = getClasses(styles.menuCategory, {
		[styles.menuCategoryFolder]: category,
		[styles.menuCategoryPlain]: !category,
	})

	const showHeader: boolean = Boolean(category || isFolder)

	return (
		<Flex isColumn={true} isXCentered={true} data-component="MenuCategory" className={menuCategoryClasses}>
			{showHeader && (
				<Flex
					isBetween={true}
					isYCentered={true}
					gap={4}
					className={styles.menuCategoryTitle}
					onClick={isFolder ? onToggle : undefined}
				>
					<Text type="tiny" emphasis="secondary" fontWeight="medium" isNonSelectable={true}>
						{category}
					</Text>
					{isFolder && (
						<ButtonGroup>
							<Button
								intent="silent"
								value="Toggle Category"
								size="tiny"
								isIconOnly={true}
								icon={isOpen ? "minus" : "plus"}
							/>
						</ButtonGroup>
					)}
				</Flex>
			)}
			{isOpen && (
				<Flex isColumn={true} gap={1} className={styles.menuCategoryItems}>
					{children}
				</Flex>
			)}
		</Flex>
	)
}
