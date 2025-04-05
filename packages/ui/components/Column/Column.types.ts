import type { FlexProps } from "../.."

export interface ColumnBaseProps {
	isColumnCentered?: boolean
	width: number
}

export type ColumnProps = ColumnBaseProps & FlexProps
