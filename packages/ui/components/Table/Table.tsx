import styles from "./Table.module.css"
import { getClasses } from "@thebeguide/utils"
import type { FC } from "react"
import type { TableProps } from "./Table.types"

export const Table: FC<TableProps> = ({ children, hasBorder, isMonoHeader }) => {
	const tableClasses: string = getClasses(styles.table, "small")

	const tableElementClasses: string = getClasses(styles.tableElement, {
		[styles.tableElementBorder]: hasBorder,
		[styles.tableElementMonoHeader]: isMonoHeader,
	})

	return (
		<div className={tableClasses}>
			<table className={tableElementClasses}>{children}</table>
		</div>
	)
}
