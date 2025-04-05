import { getClasses } from "@heliosgraphics/utils/classnames"
import styles from "./Main.module.css"
import type { FC } from "react"
import type { MainProps } from "./Main.types"

export const Main: FC<MainProps> = ({ children }) => {
	const mainClasses: string = getClasses(styles.main, "flex flex-column")

	return <main className={mainClasses}>{children}</main>
}
