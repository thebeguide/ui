import { ShimmerProps } from "./Shimmer.types"
import { getClasses } from "@heliosgraphics/utils/classnames"
import styles from "./Shimmer.module.css"
import type { FC } from "react"

export const Shimmer: FC<ShimmerProps> = ({ isRounded, paddingTop, paddingBottom, height, width }) => {
	const shimmerDivClasses: string = getClasses({
		["radius-max"]: isRounded,
		["radius-small"]: !isRounded,
	})

	return (
		<div
			className={styles.shimmer}
			style={{
				height: height + "px",
				paddingTop: (paddingTop ?? 0) + "px",
				paddingBottom: (paddingBottom ?? 0) + "px",
				width: width + "px",
			}}
		>
			<div className={shimmerDivClasses} />
		</div>
	)
}
