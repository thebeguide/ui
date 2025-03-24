"use client"

import { Masonry as MasonryPlock } from "react-plock/dist/index.es"
import { Children, type ReactElement, type FC } from "react"
import type { MasonryProps } from "./Masonry.types"

export const Masonry: FC<MasonryProps> = ({ children, columns, gap, brakepoints, useBalancedLayout }) => {
	if (!children) return null

	const mappedChildren: Array<ReactElement> | null | undefined = Children.map(children, (child) => (
		<div className="Row">{child}</div>
	))

	return (
		<MasonryPlock
			items={mappedChildren as Array<ReactElement>}
			render={(item: any) => item}
			config={{
				columns: columns,
				gap: gap,
				media: brakepoints,
				useBalancedLayout: useBalancedLayout,
			}}
		/>
	)
}
