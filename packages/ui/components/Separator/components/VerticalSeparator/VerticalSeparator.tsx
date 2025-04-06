import { getClasses } from "@thebeguide/utils/classnames"
import { HRMarkup } from "../HRMarkup/HRMarkup"
import styles from "./VerticalSeparator.module.css"
import type { FC } from "react"
import type { SeparatorProps } from "../../../Separator/Separator.types"

export const VerticalSeparator: FC<SeparatorProps> = ({ isLight, height, lineStyle }) => {
	const hrClassNames: string = getClasses(styles.verticalSeparator, {
		[styles.verticalSeparatorLight]: isLight,
		[styles.verticalSeparatorDashed]: lineStyle === "dashed",
		[styles.verticalSeparatorDotted]: lineStyle === "dotted",
	})

	const verticalStyle = {
		height: !!height ? `${height ?? 0}px` : "auto",
	}

	return <HRMarkup style={verticalStyle} className={hrClassNames} />
}
