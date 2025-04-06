import { md } from "./Markdown.utils"
import { getClasses } from "@thebeguide/utils/classnames"
import styles from "./Markdown.module.css"
import type { FC } from "react"
import type { MarkdownProps } from "./Markdown.types"

export const Markdown: FC<MarkdownProps> = ({ text, isNonSelectable }) => {
	if (!text) return null

	const innerHTML = { __html: md.render(text) }
	const markdownClasses: string = getClasses(styles.markdown, {
		[styles.markdownNonSelectable]: isNonSelectable,
	})

	return <div className={markdownClasses} dangerouslySetInnerHTML={innerHTML}></div>
}
