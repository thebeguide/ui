import { getClasses } from "@thebeguide/utils/classnames"
import styles from "./DatePicker.module.css"
import type { DatePickerProps } from "./DatePicker.types"
import type { FC } from "react"

export const DatePicker: FC<DatePickerProps> = ({ date }) => {
	const datePickerClasses: string = getClasses(styles.datePicker)

	return <div className={datePickerClasses}>{date}</div>
}
