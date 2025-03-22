import { createContext, useContext } from "react"
import type { TooltipContextType } from "./Tooltip.types"

export const TooltipContext = createContext<TooltipContextType | undefined>(undefined)

export const useTooltipContext = (): TooltipContextType => {
	const context = useContext(TooltipContext)

	if (!context) {
		throw new Error("Tooltip components must be used within a Tooltip component")
	}

	return context
}
