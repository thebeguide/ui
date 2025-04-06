"use client"

import { useEffect, useState, useRef, cloneElement, Children as ReactChildren, type ReactElement, type FC } from "react"
import { ANIMATION_FAST } from "../../constants/animations"
import { getClasses } from "@thebeguide/utils/classnames"
import { ResultList } from "../shared/ResultList/ResultList"
import styles from "./Dropdown.module.css"
import type { MouseEvent } from "react"
import type { DropdownProps } from "./Dropdown.types"
import type { ThebeIconType } from "../../types/icons"

// NOTE @03b8 instead of passing ref, should use https://www.w3.org/TR/css-anchor-position-1/ when ready
export const Dropdown: FC<DropdownProps> = ({ isHidden, children, items, isDisabled, position = "bottom-left" }) => {
	const hoverStateRef = useRef<boolean>(false)
	const resultListRef = useRef<HTMLOListElement | null>(null)

	const [isVisible, setVisible] = useState<boolean>(Boolean(isHidden))
	const [isHovering, setHovering] = useState<boolean>(false)
	const [navHeight, setNavHeight] = useState<number>(0)

	useEffect(() => {
		setVisible(false)
	}, [isHidden])

	useEffect(() => {
		if (resultListRef?.current) {
			setNavHeight(resultListRef?.current?.offsetHeight ?? 0)
		}
	}, [isVisible, items?.length])

	hoverStateRef.current = isHovering

	if (isDisabled) {
		return children
	}

	const dropdownClasses: string = getClasses(styles.dropdown, {
		[styles.dropdownBottomLeft]: position === "bottom-left" || !position,
		[styles.dropdownBottomRight]: position === "bottom-right",
		[styles.dropdownTopLeft]: position === "top-left",
		[styles.dropdownTopRight]: position === "top-right",
	})

	const mouseEnter = (_event: MouseEvent<HTMLDivElement>): void => setHovering(true)
	const mouseLeave = (_event: MouseEvent<HTMLDivElement>) => {
		setHovering(false)

		return setTimeout(() => !hoverStateRef.current && setVisible(false), ANIMATION_FAST)
	}

	const renderChildren = ReactChildren.map(children, (child: ReactElement<any & { icon: ThebeIconType }>) => {
		const caretProps = {
			...(child?.props?.icon === "caret-down" && isVisible && { icon: "caret-up" }),
			...(child?.props?.icon === "chevron-down" && isVisible && { icon: "chevron-up" }),
		}

		return cloneElement(child, { ...child.props, ...caretProps })
	})

	const onSetVisible = (): void => setVisible(!isVisible)

	const navClasses: string = getClasses(styles.dropdown__nav, {
		[styles.dropdown__navActive]: isVisible,
	})

	return (
		<div className={dropdownClasses} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
			<div onClick={onSetVisible}>{renderChildren}</div>
			<nav
				className={navClasses}
				style={{
					height: `${navHeight}px`,
				}}
			>
				<ResultList ref={resultListRef} items={items} />
			</nav>
		</div>
	)
}
