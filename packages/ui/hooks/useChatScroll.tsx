"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const SCROLL_THRESHOLD = 1

type ScrollPosition = {
	top: number
	bottom: number
	height: number
}

export const useChatScroll = (deps: unknown) => {
	const [isManual, setManual] = useState<boolean>(false)
	const [scrollPos, setScrollPos] = useState<ScrollPosition>({ top: 0, bottom: 0, height: 0 })
	const ref = useRef<HTMLDivElement>(null)
	const wasAtBottom = useRef<boolean>(true)

	const scrollToBottom = useCallback((behavior: ScrollBehavior = "auto") => {
		const element = ref.current
		if (!element) return

		const { scrollHeight, clientHeight } = element
		element.scrollTo({
			top: scrollHeight - clientHeight,
			behavior,
		})
	}, [])

	const onResetManual = useCallback(() => {
		setManual(false)
		scrollToBottom("smooth")
	}, [scrollToBottom])

	const checkScrollable = useCallback(() => {
		const element = ref.current
		if (!element) return false

		return element.scrollHeight > element.clientHeight
	}, [])

	const onScroll = useCallback(() => {
		const element = ref.current
		if (!element) return

		const { scrollTop, scrollHeight, clientHeight } = element
		const distanceFromBottom = scrollHeight - (scrollTop + clientHeight)
		const atBottom = distanceFromBottom <= SCROLL_THRESHOLD

		setScrollPos({
			top: scrollTop,
			bottom: distanceFromBottom,
			height: scrollHeight,
		})

		wasAtBottom.current = atBottom
		setManual(!atBottom && checkScrollable())
	}, [checkScrollable])

	useEffect(() => {
		const element = ref.current
		if (!element) return

		const resizeObserver = new ResizeObserver(() => {
			if (!checkScrollable()) {
				setManual(false)
			}
			onScroll()
		})

		resizeObserver.observe(element)
		element.addEventListener("scroll", onScroll)

		return () => {
			resizeObserver.disconnect()
			element.removeEventListener("scroll", onScroll)
		}
	}, [onScroll, checkScrollable])

	useEffect(() => {
		if (wasAtBottom.current) {
			scrollToBottom()
		}
	}, [deps, scrollToBottom])

	return { ref, onResetManual, isManual, scrollPos }
}
