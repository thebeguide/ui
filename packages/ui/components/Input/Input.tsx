import { useId, type FC } from "react"
import { getClasses } from "@heliosgraphics/utils/classnames"
import { Button, ButtonGroup, Loading, Text, Flex } from "../.."
import { InputLabel } from "../shared/InputLabel/InputLabel"
import { ResultList } from "../shared/ResultList/ResultList"
import styles from "./Input.module.css"
import type { InputProps } from "./Input.types"
import type { ResultItem } from "../.."

export const Input: FC<InputProps> = ({
	helperText,
	isDisabled,
	autoComplete,
	autoFocus,
	isLabelHidden,
	isLoading,
	isRequired,
	label,
	onBlur,
	onChange,
	onClear,
	onFocus,
	placeholder,
	results,
	showResults,
	type = "text",
	value,
}) => {
	const htmlFor: string = useId()

	const filteredItems: Array<ResultItem> =
		results
			?.filter((item) => {
				const lowerCaseItem: string = item.name.toLowerCase()
				const lowerCaseFilter: string | undefined = value?.toLowerCase()

				return lowerCaseFilter && lowerCaseItem.includes(lowerCaseFilter)
			})
			.filter(Boolean) || []

	const showingResults: boolean = Boolean(!!filteredItems?.length && showResults)

	const inputClasses: string = getClasses(styles.input, "relative flex flex-column", {
		[styles.inputDisabled]: isDisabled,
		[styles.inputShowingResults]: showingResults,
	})

	return (
		<div className={inputClasses}>
			<InputLabel id={htmlFor} label={label} isDisabled={isDisabled} isHidden={isLabelHidden} />
			<Flex className="grow-1">
				{onClear && !!value && (
					<ButtonGroup className={styles.input__clear}>
						<Button
							value="Clear"
							size="tiny"
							intent="silent"
							icon="x"
							onClick={onClear}
							isIconOnly={true}
							isRounded={true}
						/>
					</ButtonGroup>
				)}
				<input
					className={styles.input__input}
					disabled={isDisabled}
					autoComplete={autoComplete}
					autoFocus={autoFocus}
					id={htmlFor}
					onBlur={onBlur}
					type={type}
					onChange={onChange}
					onFocus={onFocus}
					placeholder={placeholder}
					required={isRequired}
					value={value}
				/>
				{isLoading && (
					<div className={styles.input__loading}>
						<Loading size={20} />
					</div>
				)}
			</Flex>
			{showingResults && (
				<div className={styles.input__results}>
					<ResultList items={filteredItems} />
				</div>
			)}
			{!!helperText && (
				<Text type="tiny" emphasis="tertiary" className={styles.input__helper}>
					{helperText}
				</Text>
			)}
		</div>
	)
}
