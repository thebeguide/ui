import { useId } from "react"
import styles from "./Dot.module.css"
import type { DotProps } from "./Dot.types"
import type { FC } from "react"
import { useTheme } from "../.."

export const Dot: FC<DotProps> = ({ colorAccent, size = 8, color = "blue" }) => {
	const { theme } = useTheme()
	const dotId: string = useId()

	const dotColor: string = `hsla(var(--${color}-hue), var(--${color}-saturation), 50%, 0.5)`
	const dotColorAccent: string =
		theme === "dark"
			? `hsla(var(--${colorAccent}-hue), var(--${colorAccent}-saturation), 75%, 0.5)`
			: `hsla(var(--${colorAccent}-hue), var(--${colorAccent}-saturation), 50%, 0.25)`

	const dotStyle = {
		height: size + "px",
		maxHeight: size + "px",
		maxWidth: size + "px",
		minWidth: size + "px",
		width: size + "px",
	}

	return (
		<div className={styles.dot} style={dotStyle}>
			<svg width="100%" height="100%" viewBox="0 0 20 20">
				<linearGradient id={dotId}>
					<stop stopColor={dotColor} offset="0%" />
					{colorAccent && <stop stopColor={dotColorAccent} offset="100%" />}
				</linearGradient>
				<circle fill={`url(#${dotId})`} cx={10} cy={10} r={10} />
			</svg>
		</div>
	)
}
