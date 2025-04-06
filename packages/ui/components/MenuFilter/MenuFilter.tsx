"use client"

import { FC } from "react"
import { Input } from "../.."
import { getClasses } from "@thebeguide/utils"
import styles from "./MenuFilter.module.css"
import type { MenuFilterProps } from "./MenuFilter.types"

export const MenuFilter: FC<MenuFilterProps> = ({ value, onClear, onChange }) => {
	const menuFilterClasses: string = getClasses(styles.menuFilter, "thebe-ui-glass-1")

	return (
		<div className={menuFilterClasses} data-component="MenuFilter">
			<Input
				placeholder="Search"
				value={value}
				onChange={onChange}
				autoComplete="new-password"
				onClear={onClear}
				label="Search"
				isLabelHidden={true}
			/>
		</div>
	)
}
