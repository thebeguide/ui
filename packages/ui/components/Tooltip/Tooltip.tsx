"use client"

import { useRef, useEffect, useMemo, useState, FC } from "react"
import { getClasses } from "@thebeguide/utils/classnames"
import styles from "./Tooltip.module.css"
import type { TooltipProps, TooltipComposition, TooltipContextType } from "./Tooltip.types"
import { TooltipTrigger } from "./components/TooltipTrigger/TooltipTrigger"
import { TooltipContent } from "./components/TooltipContent/TooltipContent"
import { TooltipContext } from "./Tooltip.utils"

export const Tooltip: FC<TooltipProps> & TooltipComposition = ({
	children,
	position = "bottom-center",
	isVisible = false,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(isVisible)
	const triggerRef = useRef<HTMLDivElement | null>(null)
	const popoverRef = useRef<HTMLDivElement | null>(null)

	const tooltipClasses: string = useMemo(() => getClasses(styles.tooltip, "elevation-medium"), [])

	useEffect(() => {
		const trigger = triggerRef.current
		const popover = popoverRef.current as HTMLElement & {
			showPopover?: () => void
			hidePopover?: () => void
		}

		if (!trigger || !popover || typeof popover.showPopover !== "function") {
			return
		}

		const positionTooltip = (): void => {
			if (!trigger || !popover) return

			const triggerRect = trigger.getBoundingClientRect()
			const popoverRect = popover.getBoundingClientRect()
			const viewportWidth = window.innerWidth
			const viewportHeight = window.innerHeight

			let top = 0
			let left = 0

			switch (position) {
				case "bottom-center":
					top = triggerRect.bottom + 8
					left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2
					break
				case "bottom-left":
					top = triggerRect.bottom + 8
					left = triggerRect.left
					break
				case "bottom-right":
					top = triggerRect.bottom + 8
					left = triggerRect.right - popoverRect.width
					break
				case "top-center":
					top = triggerRect.top - popoverRect.height - 8
					left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2
					break
				case "top-left":
					top = triggerRect.top - popoverRect.height - 8
					left = triggerRect.left
					break
				case "top-right":
					top = triggerRect.top - popoverRect.height - 8
					left = triggerRect.right - popoverRect.width
					break
				case "left-center":
					top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
					left = triggerRect.left - popoverRect.width - 8
					break
				case "right-center":
					top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
					left = triggerRect.right + 8
					break
			}

			left = Math.max(10, Math.min(left, viewportWidth - popoverRect.width - 10))
			top = Math.max(10, Math.min(top, viewportHeight - popoverRect.height - 10))

			popover.style.top = `${top}px`
			popover.style.left = `${left}px`
		}

		if (isVisible) {
			popover.showPopover()
			setIsOpen(true)
			setTimeout(positionTooltip, 0)
		}

		const handleMouseEnter = (): void => {
			popover.showPopover()
			setIsOpen(true)
			setTimeout(positionTooltip, 0)
		}

		const handleMouseLeave = (): void => {
			if (!isVisible) {
				popover.hidePopover()
				setIsOpen(false)
			}
		}

		trigger.addEventListener("mouseenter", handleMouseEnter)
		trigger.addEventListener("mouseleave", handleMouseLeave)

		window.addEventListener("resize", positionTooltip)
		window.addEventListener("scroll", positionTooltip, true)

		return () => {
			trigger.removeEventListener("mouseenter", handleMouseEnter)
			trigger.removeEventListener("mouseleave", handleMouseLeave)
			window.removeEventListener("resize", positionTooltip)
			window.removeEventListener("scroll", positionTooltip, true)
		}
	}, [isVisible, position])

	const contextValue: TooltipContextType = {
		triggerRef,
		popoverRef,
		tooltipClasses,
		isOpen,
	}

	return (
		<TooltipContext.Provider value={contextValue}>
			<div className={styles.tooltipContainer}>{children}</div>
		</TooltipContext.Provider>
	)
}

Tooltip.Trigger = TooltipTrigger
Tooltip.Content = TooltipContent
