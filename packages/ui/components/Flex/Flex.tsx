import { forwardRef, type Ref } from "react"
import { getFlexUtility, getSafeFlexProps } from "../Flex/Flex.utils"
import type { FlexProps } from "./Flex.types"

export const Flex = forwardRef<HTMLDivElement, FlexProps>((props: FlexProps, ref: Ref<HTMLDivElement>) => {
	const flexClasses: string = getFlexUtility(props)
	const safeProps = getSafeFlexProps(props)

	return (
		<div {...safeProps} className={flexClasses} onClick={props.onClick} ref={ref}>
			{props.children}
		</div>
	)
})
