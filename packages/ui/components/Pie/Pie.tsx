import type { FC } from "react"
import styles from "./Pie.module.css"
import type { PieProps, PieItem } from "./Pie.types"

export const Pie: FC<PieProps> = ({ color, size, data }) => {
	const r: number = size / 4
	const whole = data?.reduce((a, b) => a + b.value, 0)
	const circumferencePercentage: number = (2 * Math.PI * r) / whole
	const backgroundColor: string = `hsl(var(--${color}-hue), var(--${color}-saturation), 50%)`

	return (
		<svg
			className={styles.pie}
			height={size}
			width={size}
			viewBox={`0 0 ${size} ${size}`}
			style={{ backgroundColor: backgroundColor }}
		>
			{data.map((item, key) => {
				const thisData: Array<PieItem> = data.slice(0, key)
				const thisSize = thisData?.reduce((a, b) => a + b.value, 0)
				const thisColor: string = `hsl(var(--${color}-hue), ${(key + 1) * 20}%, 50%)`

				return (
					<circle
						key={key}
						r={size / 4}
						cx={size / 2}
						cy={size / 2}
						fill="transparent"
						stroke={thisColor}
						strokeDashoffset={-thisSize * circumferencePercentage}
						strokeWidth={size / 2}
						strokeDasharray={`${circumferencePercentage * item.value} ${circumferencePercentage * whole}`}
						transform={`rotate(-90) translate(-${size})`}
					/>
				)
			})}
		</svg>
	)
}
