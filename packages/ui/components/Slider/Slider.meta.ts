import type { ThebeAttributeMeta } from "../.."
import type { SliderProps } from "./Slider.types"

export const meta: ThebeAttributeMeta<SliderProps> = {
	_patterns: [
		{
			id: "ui-slider-default",
			description: "default",
			content: `<Slider/>`,
		},
	],
	_status: "experimental",
	_category: "pattern",
	items: {
		type: "Array<ReactNode>",
		isOptional: true,
	},
}
