"use client"

import { useId } from "react"
import { getClasses } from "@heliosgraphics/utils/classnames"
import { Text } from "../.."
import styles from "./Switch.module.css"
import type { FC } from "react"
import type { SwitchProps } from "./Switch.types"

export const Switch: FC<SwitchProps> = ({
	isChecked,
	isSmall,
	isRequired,
	isDisabled,
	isLabelHidden = false,
	intent,
	onChange,
	label,
}) => {
	const toggleId: string = useId()
	const switchClasses = getClasses(styles.switch, {
		[styles.switchAdvise]: intent === "advise",
		[styles.switchAutomation]: intent === "automation",
		[styles.switchConfirmation]: intent === "confirmation",
		[styles.switchDanger]: intent === "danger",
		[styles.switchHighlight]: intent === "highlight",
		[styles.switchQuestion]: intent === "question",
		[styles.switchSilent]: intent === "silent",
		[styles.switchSuccess]: intent === "success",
		[styles.switchWarning]: intent === "warning",
		[styles.switchDisabled]: isDisabled,
		[styles.switchSmall]: isSmall,
	})

	const switchLabelClasses = getClasses(styles.switch__toggleLabel, "flex flex-y-center gap-4 flex-wrap")

	return (
		<div className={switchClasses}>
			<label className={switchLabelClasses} htmlFor={toggleId}>
				<input
					type="checkbox"
					checked={isChecked}
					onChange={onChange}
					required={isRequired}
					disabled={isDisabled}
					id={toggleId}
				/>
				<span className={styles.switch__switchMark} />
				{!isLabelHidden && (
					<Text type={isSmall ? "tiny" : "small"} fontWeight="medium" emphasis={isDisabled ? "tertiary" : "primary"}>
						{label}
					</Text>
				)}
			</label>
		</div>
	)
}
