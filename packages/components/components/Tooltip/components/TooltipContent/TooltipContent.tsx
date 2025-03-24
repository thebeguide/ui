import { Text } from "../../../.."
import { useTooltipContext } from "../../Tooltip.utils"
import type { FC } from "react"
import type { TooltipContentProps } from "./TooltipContent.types"

export const TooltipContent: FC<TooltipContentProps> = ({ children }) => {
	const { popoverRef, tooltipClasses } = useTooltipContext()

	return (
		<div className={tooltipClasses} ref={popoverRef} popover="manual">
			<Text type="small">{children}</Text>
		</div>
	)
}
