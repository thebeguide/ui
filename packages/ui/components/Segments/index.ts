import type { SegmentsComposition } from "./Segments.types"
import { SegmentButton } from "./components/SegmentButton/SegmentButton"
import { Segments as SC } from "./Segments"

const SegmentedControl = SC as SegmentsComposition

SegmentedControl.Button = SegmentButton

export { SegmentedControl as Segments }
