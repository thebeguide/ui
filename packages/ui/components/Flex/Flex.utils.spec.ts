import { it, describe, expect } from "vitest"
import { getFlexUtility, getSafeFlexProps } from "./Flex.utils"
import type { FlexProps } from "./Flex.types"

describe("getFlexUtility", () => {
	const MOCK_FLEX_COLUMN_CLASSES = `flex flex-center flex-column flex-wrap`
	const MOCK_FLEX_COLUMN: FlexProps = {
		children: null,
		isColumn: true,
		isWrapping: true,
		isCentered: true,
	}

	it("Generates simple wrapping column classes", () =>
		expect(getFlexUtility(MOCK_FLEX_COLUMN)).toEqual(MOCK_FLEX_COLUMN_CLASSES))

	const MOCK_FLEX_INLINE_CLASSES = `inline-flex gap-16`
	const MOCK_FLEX_INLINE: FlexProps = {
		children: null,
		isInline: true,
		gap: 16,
	}

	it("Generates inline classes", () => expect(getFlexUtility(MOCK_FLEX_INLINE)).toEqual(MOCK_FLEX_INLINE_CLASSES))

	const MOCK_FLEX_CLASSES = `flex`
	const MOCK_FLEX: FlexProps = { children: null }

	it("Generates empty flex without attrs", () => expect(getFlexUtility(MOCK_FLEX)).toEqual(MOCK_FLEX_CLASSES))
	it("Generates empty flex with undefined", () => expect(getFlexUtility(undefined as any)).toEqual(MOCK_FLEX_CLASSES))

	const MOCK_FLEX_DUPLICATE_CLASSES = `flex flex-center helios-ui-bg`
	const MOCK_FLEX_DUPLICATE: FlexProps = {
		children: null,
		isCentered: true,
		className: "flex",
		withBackground: true,
	}

	it("Generates without duplicated classes", () =>
		expect(getFlexUtility(MOCK_FLEX_DUPLICATE)).toEqual(MOCK_FLEX_DUPLICATE_CLASSES))

	const MOCK_FLEX_RESPONSIVE_CLASSES = `flex mobile:p-0 tablet:p-8 p-16`
	const MOCK_FLEX_RESPONSIVE: FlexProps = {
		children: null,
		padding: [0, 8, 16],
	}

	it("Generates responsive padding scale", () =>
		expect(getFlexUtility(MOCK_FLEX_RESPONSIVE)).toEqual(MOCK_FLEX_RESPONSIVE_CLASSES))

	const MOCK_FLEX_RADIUS_CLASSES = `flex mobile:radius-none tablet:radius-small radius-normal`
	const MOCK_FLEX_RADIUS: FlexProps = {
		children: null,
		withRadius: ["none", "small", "normal"],
	}

	it("Generates responsive radius scale", () =>
		expect(getFlexUtility(MOCK_FLEX_RADIUS)).toEqual(MOCK_FLEX_RADIUS_CLASSES))
})

describe("getSafeFlexProps", () => {
	const MOCK_FLEX_ATTRIBUTES: any = {
		children: null,
		className: "xo",
		draggable: true,
		gap: 24,
		isAround: true,
		isBetween: true,
		isCentered: true,
		isColumn: true,
		isColumnCentered: true,
		isInline: true,
		isStretch: true,
		isWrapping: true,
		isXCentered: true,
		isYCentered: true,
		padding: 16,
		paddingX: 16,
		paddingY: 16,
		withBackground: true,
		withRadius: "normal",
		withGlass: true,
		xAlign: "start",
		yAlign: "start",
	}
	const MOCK_FLEX_ATTRIBUTES_SAFE: FlexProps = {
		children: null,
		className: "xo",
		draggable: true,
	}

	it("Generates without invalid attributes", () =>
		expect(getSafeFlexProps(MOCK_FLEX_ATTRIBUTES)).toEqual(MOCK_FLEX_ATTRIBUTES_SAFE))
})
