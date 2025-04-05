"use client"

import { useCallback, useEffect, useState } from "react"
import type { HeliosThemes } from ".."

export const useTheme = () => {
	const [theme, setTheme] = useState<HeliosThemes | null>(null)

	useEffect(() => {
		setTheme(getTheme())
	}, [])

	const getTheme = (): HeliosThemes => (typeof globalThis !== "undefined" ? globalThis.__theme : "light")

	const toggleTheme = useCallback(() => {
		const currentIsDark = getTheme() === "dark"
		globalThis.__setPreferredTheme?.(currentIsDark ? "light" : "dark")
	}, [])

	useEffect(() => {
		if (typeof globalThis === "undefined") return

		const originalOnThemeChange = globalThis.__onThemeChange

		globalThis.__onThemeChange = (newTheme: HeliosThemes) => {
			originalOnThemeChange?.(newTheme)
			setTheme(newTheme)
		}

		return () => {
			globalThis.__onThemeChange = originalOnThemeChange
		}
	}, [])

	return {
		theme: theme ?? "light",
		isDark: theme === "dark",
		toggleTheme,
	} as const
}
