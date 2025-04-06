import { getClasses } from "@thebeguide/utils/classnames"
import styles from "./Browser.module.css"
import type { BrowserProps } from "./Browser.types"
import type { FC } from "react"

export const Browser: FC<BrowserProps> = ({ children }) => {
	const browserClasses: string = getClasses(styles.browser)

	return <div className={browserClasses}>{children}</div>
}
