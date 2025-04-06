import type { ThebeScale, ThebeRadius } from "../.."
import type { FlexProps } from "./Flex.types"
// import type { MainProps } from "../Main/Main.types"
// import type { ColumnProps } from "../Column/Column.types"
// import type { NavigationProps } from "../Navigation/Navigation.types"
import type { ResponsiveScaleType, ResponsiveRadiusType } from "./Flex.types"

export const getFlexUtility = (props?: FlexProps): string => {
	if (!props) return "flex"

	const flexClasses: Set<string> = new Set<string>()
	const flexBase: "flex" | "inline-flex" = props?.isInline ? "inline-flex" : "flex"
	const flexGrow: number = props.grow ?? 0

	flexClasses.add(flexBase)

	if (props.isStretch) flexClasses.add("align-stretch")
	if (props.isCentered) flexClasses.add("flex-center")
	if (props.isColumn) flexClasses.add("flex-column")
	if (props.isWrapping) flexClasses.add("flex-wrap")
	if (props.isYCentered) flexClasses.add("flex-y-center")
	if (props.isXCentered) flexClasses.add("flex-x-center")
	if (props.yAlign === "baseline") flexClasses.add("align-baseline")
	if (props.yAlign === "start") flexClasses.add("align-flex-start")
	if (props.yAlign === "end") flexClasses.add("align-flex-end")
	if (props.xAlign === "start") flexClasses.add("justify-flex-start")
	if (props.xAlign === "end") flexClasses.add("justify-flex-end")
	if (props.isBetween) flexClasses.add("space-between")
	if (props.isAround) flexClasses.add("space-around")
	if (props.onClick) flexClasses.add("cursor-pointer")
	if (props.isFullWidth) flexClasses.add("wp-100")
	if (props.isNoWrap) flexClasses.add("nowrap")
	if (props.elevation === "small") flexClasses.add("elevation-small")
	if (props.elevation === "medium") flexClasses.add("elevation-medium")
	if (props.elevation === "large") flexClasses.add("elevation-large")
	if (flexGrow > 0 && flexGrow <= 8) flexClasses.add(`grow-${props.grow}`)

	// responsive Radius
	if (props.withRadius) {
		const responsiveRadius = getRadius(props.withRadius)
		flexClasses.add(responsiveRadius)
	}

	// responsive Scale
	if (props.padding) {
		const responsivePadding: string = getPadding(props.padding)
		flexClasses.add(responsivePadding)
	}

	if (props.gap) flexClasses.add(`gap-${props.gap}`)
	if (props.paddingY) flexClasses.add(`py-${props.paddingY}`)
	if (props.paddingX) flexClasses.add(`px-${props.paddingX}`)

	if (props.className) flexClasses.add(props.className)
	if (props.withBackground) flexClasses.add("thebe-ui-bg")

	return Array.from(flexClasses).join(" ")
}

export const getPadding = (paddingValue?: ResponsiveScaleType): string => {
	if (!paddingValue) return ""

	const isArray: boolean = Boolean(paddingValue && paddingValue instanceof Array)
	const paddingClasses = new Set<string>()

	if (!isArray) return `p-${paddingValue}`

	for (let index: number = 0; index < 3; index++) {
		const element = (paddingValue as [ThebeScale, ThebeScale, ThebeScale])[index]

		if (index === 0) paddingClasses.add(`mobile:p-${element ?? 0}`)
		if (index === 1) paddingClasses.add(`tablet:p-${element ?? 0}`)
		if (index === 2) paddingClasses.add(`p-${element ?? 0}`)
	}

	return Array.from(paddingClasses).join(" ")
}

export const getRadius = (radiusValue?: ResponsiveRadiusType): string => {
	if (!radiusValue) return ""

	const isArray: boolean = Boolean(radiusValue && radiusValue instanceof Array)
	const radiusClasses = new Set<string>()

	if (!isArray) return `radius-${radiusValue}`

	for (let index: number = 0; index < 3; index++) {
		const element: ThebeRadius = (radiusValue as [ThebeRadius, ThebeRadius, ThebeRadius])[index]

		if (index === 0 && !!element) radiusClasses.add(`mobile:radius-${element}`)
		if (index === 1 && !!element) radiusClasses.add(`tablet:radius-${element}`)
		if (index === 2 && !!element) radiusClasses.add(`radius-${element}`)
	}

	return Array.from(radiusClasses).join(" ")
}

export const getSafeFlexProps = (props: any): Partial<FlexProps> => {
	const {
		gap,
		isAround,
		isBetween,
		isCentered,
		isColumn,
		isColumnCentered,
		isFullWidth,
		isInline,
		isStretch,
		isWrapping,
		isXCentered,
		isYCentered,
		padding,
		paddingX,
		paddingY,
		withBackground,
		withGlass,
		withRadius,
		xAlign,
		yAlign,
		...safeProps
	} = props

	return safeProps
}
