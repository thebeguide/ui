"use client"

import { Flex, Icon } from "../.."
import { getClasses } from "@heliosgraphics/utils/classnames"
import { useId, type FC } from "react"
import { InputLabel } from "../shared/InputLabel/InputLabel"
import styles from "./Select.module.css"
import type { SelectProps } from "./Select.types"

export const Select: FC<SelectProps> = ({
	selectedValue,
	onChange,
	isLabelHidden,
	isSmall,
	isDisabled,
	items,
	label,
}) => {
	const htmlFor: string = useId()

	const selectClasses: string = getClasses(styles.select, {
		[styles.selectDisabled]: isDisabled,
		[styles.selectSmall]: isSmall,
		[styles.selectHiddenLabel]: !label || isLabelHidden,
	})

	return (
		<Flex isColumn={true} className={selectClasses}>
			<InputLabel label={label} id={htmlFor} isHidden={isLabelHidden} isDisabled={isDisabled} />
			<Flex>
				<select className={styles.select__select} onChange={onChange} id={htmlFor} value={selectedValue}>
					{items?.map((item, key) => {
						return (
							<option key={key} value={item.value} disabled={item.isDisabled}>
								{item.name}
							</option>
						)
					})}
				</select>
				<Flex className={styles.select__icon} isCentered={true}>
					<Icon icon="chevron-down" size={20} />
				</Flex>
			</Flex>
		</Flex>
	)
}
