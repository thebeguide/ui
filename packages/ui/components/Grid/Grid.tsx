import { GridProps } from "./Grid.types"
import { getClasses } from "@heliosgraphics/utils/classnames"
import type { FC } from "react"

export const Grid: FC<GridProps> = ({ columns, children }) => {
	const gridClasses = getClasses("grid", {
		[`grid-cols-${columns}`]: columns,
	})

	return <div className={gridClasses}>{children}</div>
}
