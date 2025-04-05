// throttle.ts
export type CallbackFunction = (...args: unknown[]) => void

export const throttle = (fn: CallbackFunction, delay: number): CallbackFunction => {
	let timeoutId: NodeJS.Timeout | null = null

	return (...args: unknown[]): void => {
		if (!timeoutId) {
			fn(...args)
			timeoutId = setTimeout(() => {
				timeoutId = null
			}, delay)
		}
	}
}
