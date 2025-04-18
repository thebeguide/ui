import type { SVGProps } from "react"
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M19 8.583a1 1 0 0 1 0 1.414l-7 7-7-7a1 1 0 0 1 1.414-1.414L12 14.169l5.586-5.586a1 1 0 0 1 1.414 0"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgChevronDown
