import type { FC } from "react"
import type { HRMarkupProps } from "./HRMarkup.types"

export const HRMarkup: FC<HRMarkupProps> = (props) => {
	const { ...goodProps } = props

	return <hr {...goodProps} data-component="Separator" />
}
