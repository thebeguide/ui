import { describe, it, expect, vi } from "vitest"
import { copyValue } from "./clipboard"

const mockDocument = {
	createElement: vi.fn(),
	execCommand: vi.fn(),
	body: {
		appendChild: vi.fn(),
	},
} as unknown as Document

global.document = mockDocument

const TEXT_STRING = "Test text" as const
type TextAreaMock = {
	value: string
	select: () => void
	remove: () => void
}

describe("copyValue", () => {
	it("copies text to the clipboard", () => {
		const textAreaMock: TextAreaMock = {
			value: "",
			select: vi.fn(),
			remove: vi.fn(),
		}

		document.createElement = vi.fn().mockReturnValue(textAreaMock)
		document.body.appendChild = vi.fn().mockReturnValue(textAreaMock)

		copyValue(TEXT_STRING)

		expect(document.createElement).toHaveBeenCalledWith("textarea")
		expect(document.body.appendChild).toHaveBeenCalled()
		expect(document.execCommand).toHaveBeenCalledWith("copy", false)
		expect(textAreaMock.value).toBe(TEXT_STRING)
		expect(textAreaMock.select).toHaveBeenCalled()
		expect(textAreaMock.remove).toHaveBeenCalled()
	})
})
