import hljs from "highlight.js"
import markdownIt from "markdown-it"

export const md = markdownIt({
	breaks: true,
	html: true,
	xhtmlOut: true,
	linkify: true,
	highlight: function (str: string, lang: string) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(str, { language: lang }).value
			} catch (error) {
				console.error(error)
			}
		}

		return ""
	},
})
