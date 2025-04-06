import type { FC } from "react"
import type { ThebeThemes } from "../../types/themes"
import type { SetupLinkProps, SetupProps } from "./Setup.types"

declare global {
	interface Window {
		__theme: ThebeThemes
		__onThemeChange: ((theme: ThebeThemes) => void) | undefined
		__setPreferredTheme: (theme: ThebeThemes) => void
	}

	var __theme: ThebeThemes
	var __onThemeChange: ((theme: ThebeThemes) => void) | undefined
	var __setPreferredTheme: (theme: ThebeThemes) => void
}

const code = (): void => {
	globalThis.__onThemeChange = function (_theme: ThebeThemes): void {}

	const setTheme = (newTheme: ThebeThemes): void => {
		globalThis.__theme = newTheme
		preferredTheme = newTheme
		document.documentElement.dataset.theme = newTheme
		globalThis.__onThemeChange?.(newTheme)
	}

	let preferredTheme: ThebeThemes | undefined
	const darkQuery: MediaQueryList = globalThis.matchMedia("(prefers-color-scheme: dark)")

	try {
		const storedTheme = localStorage.getItem("theme")
		if (storedTheme === "dark" || storedTheme === "light") {
			preferredTheme = storedTheme
		}
	} catch (error: unknown) {
		console.error("failed to read theme from localStorage:", error)
	}

	globalThis.__setPreferredTheme = function (newTheme: ThebeThemes): void {
		try {
			setTheme(newTheme)
			localStorage.setItem("theme", newTheme)
		} catch (error: unknown) {
			console.error("failed to set theme:", error)
		}
	}

	const handleDarkModeChange = (event: MediaQueryListEvent): void => {
		globalThis.__setPreferredTheme(event.matches ? "dark" : "light")
	}

	const handleDocumentClick = (event: MouseEvent): void => {
		if (event.x > 256 && globalThis.location.hash === "#ui-menu") {
			globalThis.location.hash = "#ui"
		}
	}

	darkQuery.addEventListener("change", handleDarkModeChange)
	document.addEventListener("click", handleDocumentClick)

	setTheme(preferredTheme ?? (darkQuery.matches ? "dark" : "light"))
}

export const Setup: FC<SetupProps> = () => {
	const preconnectLinks: Array<SetupLinkProps> = [
		{ rel: "preconnect", href: "https://rsms.me/", crossOrigin: "anonymous" },
		{ rel: "preconnect", href: "https://fonts.googleapis.com", crossOrigin: "anonymous" },
		{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
	]

	const stylesheetLinks: Array<SetupLinkProps> = [
		{ rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
		},
	]

	return (
		<>
			{preconnectLinks.map((linkProps, index) => (
				<link key={`preconnect-${index}`} {...linkProps} />
			))}
			{stylesheetLinks.map((linkProps, index) => (
				<link key={`stylesheet-${index}`} {...linkProps} />
			))}
			<script
				dangerouslySetInnerHTML={{
					__html: `(${code.toString()})();`,
				}}
			/>
		</>
	)
}
