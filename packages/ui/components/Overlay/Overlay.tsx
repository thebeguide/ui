import styles from "./Overlay.module.css"
import type { FC, MouseEvent } from "react"
import type { OverlayProps } from "./Overlay.types"
import { getClasses } from "@heliosgraphics/utils"

export const Overlay: FC<OverlayProps> = ({ onClose, isCentered, children, isOpen }) => {
	if (!isOpen) return null

	const hideFunction = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault()
		event.stopPropagation()

		return onClose?.()
	}

	const contentClasses: string = getClasses(styles.overlay__content, {
		[styles.overlay__contentCentered]: isCentered,
	})

	return (
		<section className={styles.overlay}>
			<div className={contentClasses}>{children}</div>
			<div className={styles.overlay__layer} onClick={hideFunction} />
		</section>
	)
}
