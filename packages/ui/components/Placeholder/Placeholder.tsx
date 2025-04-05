import { Flex, Text } from "../.."
import styles from "./Placeholder.module.css"
import type { PlaceholderProps } from "./Placeholder.types"
import type { FC } from "react"

export const Placeholder: FC<PlaceholderProps> = ({ children, height }) => {
	return (
		<Flex
			className={styles.box}
			padding={16}
			style={{
				height: height ? `${height}px` : "inherit",
			}}
		>
			<Text type="small" fontFamily="mono">
				{children}
			</Text>
		</Flex>
	)
}
