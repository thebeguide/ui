declare module "*.module.css"
declare module "*.css"
declare module "@thebeguide/icons/react/*" {
	import { FunctionComponent, SVGProps } from "react"
	const Icon: FunctionComponent<SVGProps<SVGSVGElement>>
	export default Icon
}
