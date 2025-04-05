import { it, describe, expect } from "vitest"
import { md } from "./Markdown.utils"

describe("markdown", () => {
	describe("md", () => {
		const SAMPLE = `Hello\n\nHey`
		const SAMPLE_OUTPUT = `<p>Hello</p>\n<p>Hey</p>\n`

		it("Returns", () => expect(md.render(SAMPLE)).toEqual(SAMPLE_OUTPUT))
	})
})
