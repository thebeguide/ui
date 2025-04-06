import type { ThebeAttributeMeta } from "../.."
import type { TooltipProps } from "./Tooltip.types"

export const meta: ThebeAttributeMeta<TooltipProps> = {
	_patterns: [
		{
			id: "ui-tooltip-default",
			description: "Default tooltip (bottom-center)",
			content: `<Tooltip><Tooltip.Trigger><Button value="Hover me" intent="silent"/></Tooltip.Trigger><Tooltip.Content>This is a tooltip</Tooltip.Content></Tooltip>`,
		},
		{
			id: "ui-tooltip-bottom-center",
			description: "Bottom center position",
			content: `<Tooltip position="bottom-center"><Tooltip.Trigger><Button value="Bottom Center" intent="silent"/></Tooltip.Trigger><Tooltip.Content>Tooltip at bottom center</Tooltip.Content></Tooltip>`,
		},
		{
			id: "ui-tooltip-bottom-left",
			description: "Bottom left position",
			content: `<Tooltip position="bottom-left"><Tooltip.Trigger><Button value="Bottom Left" intent="silent"/></Tooltip.Trigger><Tooltip.Content>Tooltip at bottom left</Tooltip.Content></Tooltip>`,
		},
		{
			id: "ui-tooltip-bottom-right",
			description: "Bottom right position",
			content: `<Tooltip position="bottom-right"><Tooltip.Trigger><Button value="Bottom Right" intent="silent"/></Tooltip.Trigger><Tooltip.Content>Tooltip at bottom right</Tooltip.Content></Tooltip>`,
		},
		{
			id: "ui-tooltip-top-center",
			description: "Top center position",
			content: `<Tooltip position="top-center"><Tooltip.Trigger><Button value="Top Center" intent="silent"/></Tooltip.Trigger><Tooltip.Content>Tooltip at top center</Tooltip.Content></Tooltip>`,
		},
		{
			id: "ui-tooltip-top-left",
			description: "Top left position",
			content: `<Tooltip position="top-left"><Tooltip.Trigger><Button value="Top Left" intent="silent"/></Tooltip.Trigger><Tooltip.Content>Tooltip at top left</Tooltip.Content></Tooltip>`,
		},
		{
			id: "ui-tooltip-top-right",
			description: "Top right position",
			content: `<Tooltip position="top-right"><Tooltip.Trigger><Button value="Top Right" intent="silent"/></Tooltip.Trigger><Tooltip.Content>Tooltip at top right</Tooltip.Content></Tooltip>`,
		},
		{
			id: "ui-tooltip-left-center",
			description: "Left center position",
			content: `<Tooltip position="left-center"><Tooltip.Trigger><Button value="Left Center" intent="silent"/></Tooltip.Trigger><Tooltip.Content>Tooltip at left center</Tooltip.Content></Tooltip>`,
		},
		{
			id: "ui-tooltip-right-center",
			description: "Right center position",
			content: `<Tooltip position="right-center"><Tooltip.Trigger><Button value="Right Center" intent="silent"/></Tooltip.Trigger><Tooltip.Content>Tooltip at right center</Tooltip.Content></Tooltip>`,
		},
		{
			id: "ui-tooltip-long",
			description: "With long content",
			content: `<Tooltip position="left-center"><Tooltip.Trigger><Button value="Long" icon="book" intent="silent"/></Tooltip.Trigger><Tooltip.Content>This is a very long tooltip that will wrap to multiple lines. This is a very long tooltip that will wrap to multiple lines</Tooltip.Content></Tooltip>`,
		},
		{
			id: "ui-tooltip-visible",
			description: "Initially visible tooltip",
			content: `<Tooltip isVisible={true}><Tooltip.Trigger><Button value="Always Visible" intent="silent"/></Tooltip.Trigger><Tooltip.Content>This tooltip is open by default</Tooltip.Content></Tooltip>`,
		},
		{
			id: "ui-tooltip-rich-content",
			description: "Rich content in tooltip",
			content: `<Tooltip><Tooltip.Trigger><Button value="Rich Content" intent="silent"/></Tooltip.Trigger><Tooltip.Content><Text type="small">Rich content with <strong>bold text</strong></Text></Tooltip.Content></Tooltip>`,
		},
	],
	_status: "experimental",
	_category: "core",
	children: {
		type: "ReactNode",
	},
	position: {
		type: "'bottom-center' | 'bottom-left' | 'bottom-right' | 'left-center' | 'right-center' | 'top-center' | 'top-left' | 'top-right'",
		isOptional: true,
	},
	isVisible: {
		type: "boolean",
		isOptional: true,
	},
}
