import { getClasses } from "@thebeguide/utils/classnames"
import { Checkbox, Flex, Icon, Text } from "../../.."
import styles from "./ResultList.module.css"
import { forwardRef } from "react"
import type { ResultListProps } from "./ResultList.types"

export const ResultList = forwardRef<HTMLOListElement, ResultListProps>(({ items, isHidden }, ref) => {
	if (!items?.length || isHidden) return null

	const resultListClasses: string = getClasses(styles.resultList, "elevation-medium")

	return (
		<ol className={resultListClasses} data-component="ResultList" role="listbox" ref={ref}>
			{items?.map((item, key) => {
				const itemClasses: string = getClasses("flex flex-y-center gap-5", styles.item, {
					[styles.itemActive]: item.isActive && !item.type,
					[styles.itemDisabled]: item.isDisabled,
				})

				// NOTE @03b8 future composit
				if (item.type === "separator") return <li key={key} className={styles.resultList__separator} />

				// NOTE @03b8 future composit
				if (item.type === "checkbox") {
					const onCheck = (event: any) => item.onClick?.(event)

					return (
						<li key={key} onClick={item.onClick} className={itemClasses}>
							<Checkbox
								label={item.name}
								description={item.description}
								intent="silent"
								isChecked={item.isActive}
								onChange={onCheck}
							/>
						</li>
					)
				}

				return (
					<li key={key} onClick={item.onClick} className={itemClasses}>
						{item.icon && (
							<Flex isCentered={true} className={styles.resultList__icon}>
								<Icon icon={item.icon} size={18} />
							</Flex>
						)}
						<Flex isColumn={true} gap={1}>
							<Text type="small" fontWeight="medium" lineClamp={1}>
								{item.name}
							</Text>
							{!!item.description && (
								<Text type="tiny" fontFamily="sans">
									{item.description}
								</Text>
							)}
						</Flex>
					</li>
				)
			})}
		</ol>
	)
})
