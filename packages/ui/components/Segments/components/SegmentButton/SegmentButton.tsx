import styles from "./SegmentButton.module.css"
import type { SegmentButtonProps } from "./SegmentButton.types"
import { FC } from "react"
import { getClasses } from "@heliosgraphics/utils"

export const SegmentButton: FC<SegmentButtonProps> = ({ isActive, title, onClick }) => {
	const segmentButtonClasses: string = getClasses(styles.segmentButton, {
		[styles.segmentButtonActive]: isActive,
	})

	return (
		<button className={segmentButtonClasses} onClick={onClick} data-component="SegmentButton">
			{title}
		</button>
	)
}
