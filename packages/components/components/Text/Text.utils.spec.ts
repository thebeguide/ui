import { it, describe, expect } from "vitest"
import { _getFontWeight } from "./Text.utils"

describe("typography", () => {
	describe("_getFontWeight", () => {
		it("generates thin", () => expect(_getFontWeight("thin")).toEqual("fw-thin"))
		it("generates regular", () => expect(_getFontWeight("normal")).toEqual("fw-normal"))
		it("generates black", () => expect(_getFontWeight("black")).toEqual("fw-black"))
		it("nothing for undefined", () => expect(_getFontWeight(undefined)).toEqual(""))
		it("nothing for empty", () => expect(_getFontWeight(<any>"")).toEqual(""))
	})
})
