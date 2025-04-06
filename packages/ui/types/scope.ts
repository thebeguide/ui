import type {
	BreadCrumbItem,
	ButtonGroupProps,
	DonutSizeType,
	ThebeColors,
	ThebeEmphasisType,
	ThebeIconType,
	ThebeIntentionType,
	ThebePositionType,
	ThebeScale,
	ThebeSizeType,
	PieItem,
	ResultItem,
	SelectItem,
} from ".."

export interface Scope {
	BREADCRUMB_ITEMS: Array<BreadCrumbItem>
	BUTTONGROUP_ALIGN: ButtonGroupProps["align"]
	CHECKBOX_LABEL: string
	CHILDREN: string
	COLOR: ThebeColors
	COLOR_ACCENT: ThebeColors
	DATE: string
	DATE_FORMAT: string
	DONUT_SIZE: DonutSizeType
	EMPHASIS: ThebeEmphasisType
	FUNCTION: Function
	GAP: ThebeScale
	HELPER_TEXT: string
	ICON: ThebeIconType
	ICON_ACCENT: ThebeIconType
	INPUT_LABEL: string
	INTENT: ThebeIntentionType
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
	POSITION: ThebePositionType
	RADIO: string
	RADIO_LABEL: string
	RESULT_LIST_ITEMS: Array<ResultItem>
	SCALE: ThebeScale
	SELECT_ITEMS: Array<SelectItem>
	SIZE: ThebeSizeType
	TAB_ITEMS: Array<string>
	TAB_SECTIONS: Array<unknown>
	TEXTAREA: string
	TEXTAREA_LABEL: string
	TEXTAREA_PLACEHOLDER: string
	TEXT_LABEL: string
	TEXT_VALUE: string
}
