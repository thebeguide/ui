declare module "*.module.css" {
	const classes: { [key: string]: string }

	export default classes
}

declare module "@heliosgraphics/icons/react/*" {
	import { FunctionComponent, SVGProps } from "react"

	const Icon: FunctionComponent<SVGProps<SVGSVGElement>>

	export default Icon
}
