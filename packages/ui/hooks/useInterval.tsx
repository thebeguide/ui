"use client"

import { useEffect, useRef } from "react"

export const useInterval = (callback: () => void, delay: number) => {
	const savedCallback = useRef<() => void>(null)

	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	useEffect(() => {
		const tick = () => {
			savedCallback?.current?.()
		}

		let id: NodeJS.Timeout

		if (delay !== null) {
			id = setInterval(tick, delay)

			return () => clearInterval(id)
		}

		return () => clearInterval(id)
	}, [delay])
}
