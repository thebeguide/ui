"use client"

import { useId } from "react"
import { getClasses } from "@thebeguide/utils/classnames"
import { Text } from "../.."
import styles from "./Toggle.module.css"
import type { FC } from "react"
import type { ToggleProps } from "./Toggle.types"

export const Toggle: FC<ToggleProps> = ({
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
	const toggleClasses = getClasses(styles.toggle, {
		[styles.toggleAdvise]: intent === "advise",
		[styles.toggleAutomation]: intent === "automation",
		[styles.toggleConfirmation]: intent === "confirmation",
		[styles.toggleDanger]: intent === "danger",
		[styles.toggleHighlight]: intent === "highlight",
		[styles.toggleQuestion]: intent === "question",
		[styles.toggleSilent]: intent === "silent",
		[styles.toggleSuccess]: intent === "success",
		[styles.toggleWarning]: intent === "warning",
		[styles.toggleDisabled]: isDisabled,
		[styles.toggleSmall]: isSmall,
	})

	const toggleLabelClasses = getClasses(styles.toggle__toggleLabel, "flex flex-y-center gap-4 flex-wrap")

	return (
		<div className={toggleClasses}>
			<label className={toggleLabelClasses} htmlFor={toggleId}>
				<input
					type="checkbox"
					checked={isChecked}
					onChange={onChange}
					required={isRequired}
					disabled={isDisabled}
					id={toggleId}
				/>
				<span className={styles.toggle__toggleMark} />
				{!isLabelHidden && (
					<Text type={isSmall ? "tiny" : "small"} fontWeight="medium" emphasis={isDisabled ? "tertiary" : "primary"}>
						{label}
					</Text>
				)}
			</label>
		</div>
	)
}
