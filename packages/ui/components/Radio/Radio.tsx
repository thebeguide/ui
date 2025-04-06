"use client"

import { getClasses } from "@heliosgraphics/utils/classnames"
import styles from "./Radio.module.css"
import { Text } from "../.."
import { type FC, useId } from "react"
import type { RadioProps } from "./Radio.types"

export const Radio: FC<RadioProps> = ({ isSmall, isDisabled, intent, onChange, value, state, label }) => {
	const radioId: string = useId()
	const radioClasses = getClasses(styles.radio, {
		[styles.radioAdvise]: intent === "advise",
		[styles.radioAutomation]: intent === "automation",
		[styles.radioConfirmation]: intent === "confirmation",
		[styles.radioDanger]: intent === "danger",
		[styles.radioHighlight]: intent === "highlight",
		[styles.radioQuestion]: intent === "question",
		[styles.radioSilent]: intent === "silent",
		[styles.radioSuccess]: intent === "success",
		[styles.radioWarning]: intent === "warning",
		[styles.radioDisabled]: isDisabled,
		[styles.radioSmall]: isSmall,
	})

	const radioLabelClasses = getClasses(styles.radio__radioLabel, "flex flex-y-center flex-wrap gap-4")

	return (
		<div className={radioClasses}>
			<label className={radioLabelClasses} htmlFor={radioId}>
				<input
					id={radioId}
					aria-checked={state === value}
					type="radio"
					name="radio"
					onChange={onChange}
					defaultChecked={state === value}
				/>
				<div className={styles.radio__radioMark} />
				{label && (
					<Text type={isSmall ? "tiny" : "small"} fontWeight="medium" emphasis={isDisabled ? "tertiary" : "primary"}>
						{label}
					</Text>
				)}
			</label>
		</div>
	)
}
