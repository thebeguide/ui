import type { ThebeColors } from "../types/colors"
import type { ThebeIntentionType } from "../types/intentions"

export const INTENTIONS: Array<ThebeIntentionType> = [
	"advise",
	"automation",
	"confirmation",
	"danger",
	"highlight",
	"question",
	"silent",
	"success",
	"warning",
]

export const INTENTION_COLOR_MAP: Readonly<Record<ThebeIntentionType, ThebeColors>> = {
	advise: "blue",
	automation: "pink",
	confirmation: "purple",
	danger: "red",
	highlight: "orange",
	question: "aqua",
	silent: "gray",
	success: "green",
	warning: "yellow",
}

export const INTENT_DESCRIPTIONS: Record<ThebeIntentionType, string> = {
	advise: "Offer guidance or recommendations based on expertise or experience, allowing for personal choice",
	automation: "Indicate a process or action that is performed automatically without human intervention",
	confirmation: "Seek or provide verification of a completed action or decision",
	danger: "Signal that a mistake or problem has occurred in a process or system",
	highlight: "Emphasize important information or key features",
	question: "Ask for information or clarification on a specific topic or issue",
	silent: "Indicate an action or process that occurs without any noticeable signs or announcements",
	success: "Announce the successful completion or positive outcome of an action or process",
	warning: "Alert to potential danger, risk, or an unfavorable outcome",
}
