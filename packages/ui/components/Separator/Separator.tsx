import { SeparatorProps } from "./Separator.types"
import { HorizontalSeparator } from "./components/HorizontalSeparator/HorizontalSeparator"
import { VerticalSeparator } from "./components/VerticalSeparator/VerticalSeparator"
import type { FC } from "react"

export const Separator: FC<SeparatorProps> = (props) => {
	if (props.isVertical) {
		return <VerticalSeparator {...props} />
	} else {
		return <HorizontalSeparator {...props} />
	}
}
