import { FC } from "react"
import { SegmentsProps } from "./Segments.types"
import { Flex } from "../.."
import styles from "./Segments.module.css"
import { getClasses } from "@thebeguide/utils"

export const Segments: FC<SegmentsProps> = ({ children, isFullWidth }) => {
	const segmentedControlClasses: string = getClasses(styles.segmentedControl, {
		[styles.segmentedControlFull]: isFullWidth,
	})

	return (
		<Flex className={segmentedControlClasses} isYCentered={true} gap={4} isInline={!isFullWidth}>
			{children}
		</Flex>
	)
}
