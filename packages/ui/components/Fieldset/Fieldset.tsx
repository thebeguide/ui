import styles from "./Fieldset.module.css"
import type { FC } from "react"
import type { FieldsetProps } from "./Fieldset.types"

export const Fieldset: FC<FieldsetProps> = ({ children, legend }) => {
	return (
		<fieldset className={styles.fieldset}>
			<legend>{legend}</legend>
			{children}
		</fieldset>
	)
}
