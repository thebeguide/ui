"use client"

import { useState, type FC } from "react"
import { TabsProps } from "./Tabs.types"
import styles from "./Tabs.module.css"
import { Text } from "../.."

export const Tabs: FC<TabsProps> = ({ active: activeNumber, items, sections }) => {
	const [active, setActive] = useState(activeNumber || 0)

	if (!items || !sections) return null

	return (
		<div>
			<ol className={`${styles.tabs__ol} flex gap-2`}>
				{items.map((tab, key) => (
					<li
						key={key}
						onClick={() => setActive(key)}
						className={`${styles.tabs__ol__item} ${active === key ? styles.tabs__ol__itemActive : ""}`}
					>
						<Text type="small" fontWeight="medium">
							{tab}
						</Text>
					</li>
				))}
			</ol>
			<section className="tabs__section">{sections[active]}</section>
		</div>
	)
}
