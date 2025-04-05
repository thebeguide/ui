"use client"

import { useEffect, useRef, type FC, MouseEvent } from "react"
import styles from "./Dialog.module.css"
import { Button, ButtonGroup, Heading, Flex } from "../.."
import { getClasses } from "@heliosgraphics/utils/classnames"
import type { DialogProps } from "./Dialog.types"

const ATTRIBUTE_SCROLL = "data-scroll" as const
const POSITION_FIXED_CLASS = "fixed" as const

export const Dialog: FC<DialogProps> = ({ title, children, isNarrow, isOpen, isCentered, onClose, noPadding }) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null)

	const resetScroll = () => {
		globalThis?.requestAnimationFrame(() => {
			document.body.setAttribute(ATTRIBUTE_SCROLL, "")
			dialogRef?.current?.scrollTo?.(0, 0)
		})
	}

	const resetDocumentStyle = (scrollPosition: number): void => {
		globalThis?.requestAnimationFrame(() => {
			document.body.style.position = ""
			document.body.style.height = ""
			document.body.style.top = ""
			document.body.classList.remove(POSITION_FIXED_CLASS)

			return globalThis?.scrollTo?.(0, scrollPosition)
		})
	}

	useEffect(() => {
		return () => {
			resetDocumentStyle(0)
			resetScroll()
		}
	}, [title])

	useEffect(() => {
		dialogRef?.current?.scrollTo?.(0, 0)

		if (isOpen) {
			const localPosition: number = document?.documentElement?.scrollTop ?? 0

			document.body.classList.add(POSITION_FIXED_CLASS)
			document.body.style.top = `-${localPosition}px`
			document.body.setAttribute(ATTRIBUTE_SCROLL, localPosition.toString())

			dialogRef?.current?.showModal?.()
		} else if (!dialogRef?.current) {
			const localPos: string = document?.body?.getAttribute(ATTRIBUTE_SCROLL) ?? "0"
			const scrollPosition: number = parseInt(localPos) ?? 0

			document.body.classList.remove(POSITION_FIXED_CLASS)

			resetDocumentStyle(scrollPosition)

			dialogRef?.current?.close?.()
		}
	}, [isOpen])

	if (!isOpen) return null

	const onDialogClose = (event: MouseEvent<HTMLDialogElement>): boolean | void | Promise<void> => {
		const isDialog: boolean = (event?.target as HTMLDialogElement)?.tagName === "DIALOG"

		return isDialog && onClose()
	}

	const dialogClasses: string = getClasses(styles.dialog, "helios-scrollbar", "elevation-large", {
		[styles.dialogCentered]: isCentered,
		[styles.dialogNarrow]: isNarrow,
	})
	const dialogFlexClasses: string = getClasses(styles.dialog__header, "sticky top-0 z-50 helios-ui-glass-1")
	const dialogContentClasses: string = getClasses(styles.dialog__content, {
		[styles.dialog__contentNoPadding]: noPadding,
	})

	return (
		<dialog ref={dialogRef} className={dialogClasses} onClick={onDialogClose}>
			{!!title && (
				<Flex isBetween={true} isYCentered={true} padding={8} className={dialogFlexClasses}>
					<Heading level={5} fontWeight="medium">
						{title}
					</Heading>
					<ButtonGroup>
						<Button icon="x" intent="silent" value="" onClick={onClose} size="small" isIconOnly={true} />
					</ButtonGroup>
				</Flex>
			)}
			{isOpen && <div className={dialogContentClasses}>{children}</div>}
		</dialog>
	)
}
