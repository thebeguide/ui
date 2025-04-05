import type { SegmentButtonProps } from "./components/SegmentButton/SegmentButton.types"
import type { FC, ReactElement } from "react"

export interface SegmentsProps {
	children: React.ReactNode
	isFullWidth?: boolean
}

export interface SegmentsComposition {
	(props: SegmentsProps): ReactElement
	Button: FC<SegmentButtonProps>
}
