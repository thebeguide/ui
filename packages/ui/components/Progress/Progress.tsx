import styles from "./Progress.module.css"
import type { FC } from "react"
import type { ProgressProps } from "./Progress.types"
import { getClasses } from "@thebeguide/utils"

export const Progress: FC<ProgressProps> = ({ isSmall, max = 100, value = 0 }) => {
	const progressClasses: string = getClasses(styles.progress, {
		[styles.progressSmall]: isSmall,
	})

	return <progress className={progressClasses} max={max} value={value} />
}
