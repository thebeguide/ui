"use client"

import { useState, useEffect } from "react"
import styles from "./Clock.module.css"
import type { FC } from "react"
import type { ClockProps } from "./Clock.types"

export const Clock: FC<ClockProps> = () => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const timerId = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => clearInterval(timerId)
	}, [])

	const getRotation = (time: Date, type: "hours" | "minutes" | "seconds") => {
		const hours = time.getHours() % 12
		const minutes = time.getMinutes()
		const seconds = time.getSeconds()

		switch (type) {
			case "hours":
				return `rotate(${(hours + minutes / 60) * 30 - 180}, 0, 0)`
			case "minutes":
				return `rotate(${minutes * 6 - 180}, 0, 0)`
			case "seconds":
				return `rotate(${seconds * 6 - 180}, 0, 0)`
			default:
				return ""
		}
	}

	return (
		<div className={styles.clock}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
				<g transform="translate(128,128)">
					<circle r="124" fill="none" strokeWidth="8" className={styles.clock__border} />
					<g transform="rotate(180)">
						<line
							className={styles.clock__hour}
							x1="0"
							y1="0"
							x2="0"
							y2="-50"
							strokeWidth="8"
							strokeLinecap="round"
							transform={getRotation(time, "hours")}
						/>
						<line
							className={styles.clock__minute}
							x1="0"
							y1="0"
							x2="0"
							y2="-80"
							strokeWidth="8"
							strokeLinecap="round"
							transform={getRotation(time, "minutes")}
						/>
						<line
							className={styles.clock__second}
							x1="0"
							y1="0"
							x2="0"
							y2="-90"
							strokeWidth="4"
							strokeLinecap="round"
							transform={getRotation(time, "seconds")}
						/>
						<circle r="8" className={styles.clock__center} />
					</g>
				</g>
			</svg>
		</div>
	)
}
