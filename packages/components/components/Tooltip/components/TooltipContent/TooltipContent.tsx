import { Text } from "../../../.."
import type { FC } from "react"
import { useTooltipContext } from "../../Tooltip.utils"

export const TooltipContent: FC<TooltipContentProps> = ({ children }) => {
	const { popoverRef, tooltipClasses } = useTooltipContext()

	return (
		<div className={tooltipClasses} ref={popoverRef} popover="manual">
			<Text type="small">{children}</Text>
		</div>
	)
}
