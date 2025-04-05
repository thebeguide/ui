import { type FC } from "react"
import styles from "./InputLabel.module.css"
import { getClasses } from "@heliosgraphics/utils/classnames"
import type { InputLabelProps } from "./InputLabel.types"

export const InputLabel: FC<InputLabelProps> = ({ id, label, isDisabled, isHidden }) => {
	if (isHidden || !label) return null

	const inputLabelClasses: string = getClasses(styles.inputLabel, {
		[styles.inputLabelDisabled]: isDisabled,
	})

	return (
		<label className={inputLabelClasses} htmlFor={id}>
			{label}
		</label>
	)
}
