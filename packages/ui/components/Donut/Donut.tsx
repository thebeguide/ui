import { getDonutBorderSize } from "./Donut.utils"
import { Flex } from "../.."
import styles from "./Donut.module.css"
import type { DonutProps } from "./Donut.types"
import type { FC } from "react"

export const Donut: FC<DonutProps> = ({ children, size, percentage = 0, color }) => {
	const borderSize: number = getDonutBorderSize(size)
	const actualSize: number = size - borderSize
	const cSize = size / 2
	const rSize = actualSize / 2
	const dashSize = 100 - percentage
	const donutColor: string = `hsl(var(--${color}-hue), var(--${color}-saturation), 50%)`

	const donutContainerStyle: object = {
		height: size + "px",
		width: size + "px",
	}

	return (
		<Flex style={donutContainerStyle} className={`${styles.donut} relative`} isCentered={true}>
			<Flex className="absolute top-0 left-0 z-50" style={donutContainerStyle} isCentered={true}>
				{children}
			</Flex>
			<svg
				className={styles.donut__svg}
				xmlns="http://www.w3.org/2000/svg"
				viewBox={`0 0 ${size} ${size}`}
				height={size}
				width={size}
			>
				<circle
					fill="none"
					strokeWidth={borderSize}
					stroke={donutColor}
					cx={cSize}
					cy={cSize}
					r={rSize}
					style={{ opacity: 0.25 }}
				/>
				<circle
					fill="none"
					strokeWidth={borderSize}
					stroke={donutColor}
					pathLength={100}
					strokeDasharray={100}
					strokeDashoffset={dashSize}
					strokeLinecap="round"
					cx={cSize}
					cy={cSize}
					r={rSize}
				/>
			</svg>
		</Flex>
	)
}
