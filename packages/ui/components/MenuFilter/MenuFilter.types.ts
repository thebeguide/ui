import type { ChangeEventHandler, MouseEventHandler } from "react"

export interface MenuFilterProps {
	onChange: ChangeEventHandler<HTMLInputElement>
	onClear?: MouseEventHandler<HTMLDivElement>
	value: string
}
