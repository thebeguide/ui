"use client"

import { getClasses } from "@thebeguide/utils/classnames"
import { Text } from "../.."
import { useId, useRef, useEffect } from "react"
import { InputLabel } from "../shared/InputLabel/InputLabel"
import styles from "./Textarea.module.css"
import type { FC } from "react"
import type { TextareaProps } from "./Textarea.types"

export const Textarea: FC<TextareaProps> = (props) => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null)
	const { autoComplete, helperText, isDisabled, isLabelHidden, ...goodProps } = props

	const htmlFor: string = useId()
	const textareaClasses: string = getClasses(styles.textarea, "flex flex-column", {
		[styles.textareaDisabled]: props.isDisabled,
	})

	const onInput = () => {
		if (textareaRef?.current) {
			textareaRef.current.style.height = "auto"
			textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
		}
	}

	// TODO no longer necessary <3
	useEffect(() => {
		if (textareaRef?.current) {
			onInput()
		}

		setTimeout(() => onInput(), 100)
	}, [props.value])

	return (
		<div className={textareaClasses}>
			{!props.isLabelHidden && (
				<InputLabel id={htmlFor} label={props.label} isDisabled={isDisabled} isHidden={isLabelHidden} />
			)}
			<textarea
				{...goodProps}
				ref={textareaRef}
				id={htmlFor}
				rows={goodProps.rows ?? 4}
				onInput={onInput}
				onLoad={onInput}
				disabled={isDisabled}
			/>
			{!!props.helperText && (
				<Text type="tiny" emphasis="tertiary" className={styles.input__helper}>
					{props.helperText}
				</Text>
			)}
		</div>
	)
}
