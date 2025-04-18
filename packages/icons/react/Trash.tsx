import type { SVGProps } from "react"
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M18 4h-4.275c-.191-.647-.458-1.466-.725-2h-2c-.267.534-.534 1.353-.725 2H6a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2m0 3H6v12.152a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zM9 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgTrash
