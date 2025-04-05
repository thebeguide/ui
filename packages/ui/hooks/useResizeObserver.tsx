"use client"

import { useState, useEffect, useRef, MutableRefObject } from "react"

export const useResizeObserver = (): readonly [MutableRefObject<HTMLDivElement | null>, number] => {
	const [width, setWidth] = useState(0)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			if (entries[0]) {
				const width = entries[0].contentRect.width
				setWidth(width)
			}
		})

		let element = ref.current
		if (element) {
			resizeObserver.observe(element)
		}

		return () => {
			if (element) {
				resizeObserver.unobserve(element)
			}
		}
	}, [ref.current])

	return [ref, width] as const
}
