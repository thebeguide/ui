export type ThebeColors =
	// core
	| "gray"
	| "red"
	| "green"
	| "blue"
	| "yellow"
	| "aqua"
	| "pink"

	// official mixes
	| "orange"
	| "purple"

export interface ThebeColorScaleOptions {
	0?: string
	25?: string
	50?: string
	100: string
	200: string
	300: string
	400: string
	500: string
	600: string
	700: string
	800: string
	900: string
	1000?: string
}
