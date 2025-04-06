import { getFlexUtility, getSafeFlexProps } from "../Flex/Flex.utils"
import { getClasses } from "@thebeguide/utils/classnames"
import styles from "./Navigation.module.css"
import type { FC } from "react"
import type { NavigationProps } from "./Navigation.types"

export const Navigation: FC<NavigationProps> = (props) => {
	const mainFlexClasses: string = getFlexUtility({ ...props, isYCentered: true, paddingX: 8 })
	const navigationClasses: string = getClasses(mainFlexClasses, styles.navigation, {
		["thebe-ui-bg"]: true,
	})
	const safeProps = getSafeFlexProps(props)

	return (
		<nav {...safeProps} className={navigationClasses} data-component="Navigation">
			{props.children}
		</nav>
	)
}
