import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { debounce, type CallbackFunction } from "./debounce"

describe.skip("debounce", () => {
	let callback: CallbackFunction
	let debouncedFunction: CallbackFunction

	beforeEach(() => {
		vi.useFakeTimers()

		callback = vi.fn()
		debouncedFunction = debounce(callback, 1000)
	})

	afterEach(() => {
		vi.useRealTimers()
	})

	it("calls the callback after the specified time", () => {
		debouncedFunction()

		vi.advanceTimersByTime(500)
		expect(callback).not.toHaveBeenCalled()

		vi.advanceTimersByTime(500)
		expect(callback).toHaveBeenCalled()
	})

	it("does not call the callback if the function is called again within the wait time", () => {
		debouncedFunction()
		vi.advanceTimersByTime(500)

		debouncedFunction()
		vi.advanceTimersByTime(500)

		expect(callback).not.toHaveBeenCalled()

		vi.advanceTimersByTime(500)
		expect(callback).toHaveBeenCalledTimes(1)
	})
})
