import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { throttle, type CallbackFunction } from "./throttle"

describe.skip("throttle", () => {
	let fn: CallbackFunction
	let throttled: CallbackFunction

	beforeEach(() => {
		vi.useFakeTimers()
		fn = vi.fn()
		throttled = throttle(fn, 1000)
	})

	afterEach(() => {
		vi.useRealTimers()
	})

	it("executes callback once within throttle window", () => {
		throttled()
		expect(fn).toHaveBeenCalledTimes(1)

		throttled()
		throttled()
		expect(fn).toHaveBeenCalledTimes(1)

		vi.advanceTimersByTime(1000)
		throttled()
		expect(fn).toHaveBeenCalledTimes(2)
	})
})
