import type {
	BreadCrumbItem,
	ButtonGroupProps,
	DonutSizeType,
	HeliosColors,
	HeliosEmphasisType,
	HeliosIconType,
	HeliosIntentionType,
	HeliosPositionType,
	HeliosScale,
	HeliosSizeType,
	PieItem,
	ResultItem,
	SelectItem,
} from ".."

export interface Scope {
	BREADCRUMB_ITEMS: Array<BreadCrumbItem>
	BUTTONGROUP_ALIGN: ButtonGroupProps["align"]
	CHECKBOX_LABEL: string
	CHILDREN: string
	COLOR: HeliosColors
	COLOR_ACCENT: HeliosColors
	DATE: string
	DATE_FORMAT: string
	DONUT_SIZE: DonutSizeType
	EMPHASIS: HeliosEmphasisType
	FUNCTION: Function
	GAP: HeliosScale
	HELPER_TEXT: string
	ICON: HeliosIconType
	ICON_ACCENT: HeliosIconType
	INPUT_LABEL: string
	INTENT: HeliosIntentionType
	INTENT_PARAGRAPH: string
	INTENT_TITLE: string
	IS_ACTIVE: boolean
	IS_CENTERED: boolean
	IS_CHECKED: boolean
	IS_COLUMN: boolean
	IS_DISABLED: boolean
	IS_LOADING: boolean
	IS_NARROW: boolean
	IS_OPEN: boolean
	IS_ROUND: boolean
	IS_ROUNDED: boolean
	MARKDOWN: string
	ON_RADIO_CHANGE: Function
	ON_SELECT_ITEM: Function
	ON_TEXTAREA_CHANGE: Function
	ON_TEXT_CHANGE: Function
	ON_TOGGLE_OPEN: Function
	PERCENTAGE: number
	PIE_ITEMS: Array<PieItem>
	PILL_LABEL: string
	POSITION: HeliosPositionType
	RADIO: string
	RADIO_LABEL: string
	RESULT_LIST_ITEMS: Array<ResultItem>
	SCALE: HeliosScale
	SELECT_ITEMS: Array<SelectItem>
	SIZE: HeliosSizeType
	TAB_ITEMS: Array<string>
	TAB_SECTIONS: Array<unknown>
	TEXTAREA: string
	TEXTAREA_LABEL: string
	TEXTAREA_PLACEHOLDER: string
	TEXT_LABEL: string
	TEXT_VALUE: string
}
