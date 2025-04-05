import { Fragment, type FC } from "react"
import { Text, Flex, Icon } from "../.."
import type { BreadcrumbProps } from "./Breadcrumb.types"

export const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
	if (!items?.length) return null

	return (
		<Flex isYCentered={true} gap={2} isWrapping={true}>
			{items?.map((item, key) => {
				const isLast: boolean = Boolean(key + 1 === items?.length)

				return (
					<Fragment key={key}>
						<a href={item.href} onClick={item.onClick}>
							<Text
								type="div"
								fontStyle={item?.isActive ? "italic" : "normal"}
								emphasis={item.isActive ? "secondary" : "primary"}
							>
								{item.name}
							</Text>
						</a>
						{!isLast && <Icon icon="arrow-right" size={12} emphasis="tertiary" />}
					</Fragment>
				)
			})}
		</Flex>
	)
}
