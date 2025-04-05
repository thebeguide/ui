"use client"

import { FC } from "react"
import { Button, ButtonGroup } from "../.."
import styles from "./NavigationPanelButton.module.css"
import type { NavigationPanelButtonProps } from "./NavigationPanelButton.types"

export const NavigationPanelButton: FC<NavigationPanelButtonProps> = () => {
	return (
		<ButtonGroup className={styles.navigationPanelButton}>
			<a href="#ui-menu">
				<Button value="Open Menu" intent="silent" icon="bars" isIconOnly={true} />
			</a>
		</ButtonGroup>
	)
}
