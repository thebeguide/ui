import { getClasses } from "@heliosgraphics/utils/classnames"
import { HRMarkup } from "../HRMarkup/HRMarkup"
import styles from "./HorizontalSeparator.module.css"
import type { FC } from "react"
import type { SeparatorProps } from "../../../Separator/Separator.types"

export const HorizontalSeparator: FC<SeparatorProps> = ({ isLight, lineStyle, className }) => {
	const hrClassNames: string = getClasses(styles.horizontalSeparator, className, {
		[styles.horizontalSeparatorLight]: isLight,
		[styles.horizontalSeparatorDashed]: lineStyle === "dashed",
		[styles.horizontalSeparatorDotted]: lineStyle === "dotted",
	})

	return <HRMarkup className={hrClassNames} />
}
