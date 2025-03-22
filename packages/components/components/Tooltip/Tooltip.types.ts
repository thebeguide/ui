import type { FC, ReactElement, ReactNode, RefObject } from "react"

export interface TooltipProps {
	children: ReactNode
	position?:
		| "bottom-center"
		| "bottom-left"
		| "bottom-right"
		| "left-center"
		| "right-center"
		| "top-center"
		| "top-left"
		| "top-right"
	isVisible?: boolean
}

export interface TooltipTriggerProps {
	children: ReactNode
}

export interface TooltipContextType {
	triggerRef: RefObject<HTMLDivElement | null>
	popoverRef: RefObject<HTMLDivElement | null>
	tooltipClasses: string
	isOpen: boolean
}

export interface TooltipComposition {
	(props: TooltipProps): ReactElement
	Trigger: FC<TooltipTriggerProps>
	Content: FC<TooltipContentProps>
}
