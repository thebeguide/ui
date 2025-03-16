"use client"

import { useEffect, useCallback, useState } from "react"

export const useKeyPress = (targetKey: string) => {
	const [keyPressed, setKeyPressed] = useState(false)

	const downHandler = useCallback(
		({ key }: { key: string }) => {
			if (key === targetKey) setKeyPressed(true)
		},
		[targetKey],
	)

	const upHandler = useCallback(
		({ key }: { key: string }) => {
			if (key === targetKey) setKeyPressed(false)
		},
		[targetKey],
	)

	useEffect(() => {
		globalThis?.addEventListener("keydown", downHandler)
		globalThis?.addEventListener("keyup", upHandler)

		return () => {
			globalThis?.removeEventListener("keydown", downHandler)
			globalThis?.removeEventListener("keyup", upHandler)
		}
	}, [downHandler, upHandler])

	return keyPressed
}
