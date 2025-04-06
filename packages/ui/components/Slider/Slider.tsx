import { getClasses } from "@thebeguide/utils/classnames"
import styles from "./Slider.module.css"
import type { FC } from "react"
import type { SliderProps } from "./Slider.types"

export const Slider: FC<SliderProps> = ({ items }) => {
	const sliderClasses: string = getClasses(styles.slider, "flex")

	return <ul className={sliderClasses}>{items?.map((item, key) => <li key={key}>{item}</li>)}</ul>
}
