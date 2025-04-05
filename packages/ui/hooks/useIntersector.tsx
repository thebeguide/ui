"use client"

import { useState, useEffect } from "react"

export const useIntersector = (ref: any): boolean => {
	const [isIntersecting, setIntersecting] = useState<boolean>(false)

	useEffect(() => {
		if (!ref?.current) return

		const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))

		observer.observe(ref.current)

		return () => observer.disconnect()
	}, [ref])

	return isIntersecting
}
