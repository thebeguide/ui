"use client"

import { useId } from "react"
import { getClasses } from "@heliosgraphics/utils/classnames"
import { Flex, Icon, Text } from "../.."
import styles from "./Checkbox.module.css"
import type { FC } from "react"
import type { CheckboxProps } from "./Checkbox.types"

export const Checkbox: FC<CheckboxProps> = ({
	isChecked,
	isVertical,
	isLabelHidden = false,
	isSmall,
	description,
	isDisabled,
	intent,
	onChange,
	label,
}) => {
	const checkboxId: string = useId()
	const checkboxClasses = getClasses(styles.checkbox, {
		[styles.checkboxAdvise]: intent === "advise",
		[styles.checkboxAutomation]: intent === "automation",
		[styles.checkboxConfirmation]: intent === "confirmation",
		[styles.checkboxDanger]: intent === "danger",
		[styles.checkboxHighlight]: intent === "highlight",
		[styles.checkboxQuestion]: intent === "question",
		[styles.checkboxSilent]: intent === "silent",
		[styles.checkboxSuccess]: intent === "success",
		[styles.checkboxWarning]: intent === "warning",
		[styles.checkboxDisabled]: isDisabled,
		[styles.checkboxSmall]: isSmall,
	})

	const checkboxLabelClasses = getClasses(styles.checkbox__checkboxLabel, "flex gap-4", {
		"flex-x-center flex-column": isVertical,
		"flex-y-center": !isVertical,
	})

	return (
		<div className={checkboxClasses}>
			<label className={checkboxLabelClasses} htmlFor={checkboxId}>
				<span className={styles.checkbox__mark}>
					<input type="checkbox" checked={isChecked} onChange={onChange} disabled={isDisabled} id={checkboxId} />
					<Icon icon="check" size={isSmall ? 14 : 18} className={styles.checkbox__checkboxIcon} />
					<div className={styles.checkbox__checkboxMark} />
				</span>
				{!isLabelHidden && (
					<Flex isColumn={true}>
						<Text type={isSmall ? "tiny" : "small"} fontWeight="medium" emphasis={isDisabled ? "tertiary" : "primary"}>
							{label}
						</Text>
						{description && (
							<Text type="tiny" emphasis="secondary">
								{description}
							</Text>
						)}
					</Flex>
				)}
			</label>
		</div>
	)
}
