import { Button, ButtonGroup, Flex, Text, Icon } from "../.."
import { getClasses } from "@heliosgraphics/utils/classnames"
import styles from "./Alert.module.css"
import type { AlertProps } from "./Alert.types"
import type { FC } from "react"

export const Alert: FC<AlertProps> = ({ children, onClose, title, icon, intent }) => {
	const alertClasses: string = getClasses(styles.alert, {
		[styles.alertAdvise]: intent === "advise",
		[styles.alertAutomation]: intent === "automation",
		[styles.alertConfirmation]: intent === "confirmation",
		[styles.alertDanger]: intent === "danger",
		[styles.alertHighlight]: intent === "highlight",
		[styles.alertQuestion]: intent === "question",
		[styles.alertSilent]: intent === "silent",
		[styles.alertSuccess]: intent === "success",
		[styles.alertWarning]: intent === "warning",
		[styles.alertSmall]: !title,
		[styles.alertNormal]: title,
		[styles.alertWithButton]: !!onClose,
	})

	return (
		<div className="relative">
			{!!onClose && (
				<ButtonGroup className={styles.alertButtonGroup}>
					<Button isIconOnly={true} value="Close" intent={intent} size="tiny" icon="x" onClick={onClose} />
				</ButtonGroup>
			)}
			<Flex className={alertClasses} padding={6} gap={6}>
				{!!icon && <Icon icon={icon} size={20} />}
				<Flex isColumn={true} isXCentered={true}>
					{!!title && (
						<Text type="div" fontWeight="semibold">
							{title}
						</Text>
					)}
					<Text type="small">{children}</Text>
				</Flex>
			</Flex>
		</div>
	)
}
