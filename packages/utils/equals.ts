type FracturesPrimitive = string | number | boolean | null | undefined | bigint | symbol
type FracturesComparable = FracturesPrimitive | object | Array<unknown> | Set<unknown> | Map<unknown, unknown>

export const _getAreMapsEqual = <K, V>(
	mapA: Map<K, V>,
	mapB: Map<K, V>,
	seen = new WeakMap<object, object>(),
): boolean => {
	if (mapA.size !== mapB.size) return false
	if (mapA === mapB) return true

	const entriesA = Array.from(mapA.entries())
	const entriesB = new Map(mapB)

	return entriesA.every(
		([key, value]) =>
			entriesB.has(key) && _getIsEqual(value as FracturesComparable, entriesB.get(key) as FracturesComparable, seen),
	)
}

export const getAreDatesEqual = (a: Date, b: Date): boolean => a.getTime() === b.getTime()
export const getAreRegExpsEqual = (a: RegExp, b: RegExp): boolean => a.toString() === b.toString()
export const getAreErrorsEqual = (a: Error, b: Error): boolean =>
	a.message === b.message && a.name === b.name && a.stack === b.stack
export const getAreBuffersEqual = (a: Buffer, b: Buffer): boolean => a.length === b.length && Buffer.compare(a, b) === 0

export const getAreSetsEqual = <T>(setA: Set<T>, setB: Set<T>): boolean => {
	if (setA.size !== setB.size) return false
	if (setA === setB) return true
	if (setA.size === 0) return true

	const arrA = Array.from(setA)
	const arrB = Array.from(setB)
	const matched = new Array(arrB.length).fill(false)

	for (let i = 0; i < arrA.length; i++) {
		let foundMatch = false

		for (let j = 0; j < arrB.length; j++) {
			if (!matched[j] && _getIsEqual((arrA as any)[i], arrB[j])) {
				matched[j] = true
				foundMatch = true
				break
			}
		}

		if (!foundMatch) return false
	}

	return true
}

export const _getIsEqual = <T extends FracturesComparable>(
	a: T,
	b: T,
	seen = new WeakMap<object, object>(),
): boolean => {
	if (a === b) return true
	if (a === null || b === null) return a === b

	if (typeof a !== "object" && typeof b !== "object") {
		return a === b
	}

	if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) {
		return false
	}

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false

		return a.every((val, idx) => _getIsEqual(val, b[idx], seen))
	}

	if (Object.is(a, b)) return true

	const typeA = typeof a
	const typeB = typeof b

	if (typeA !== typeB) return false
	if (typeA !== "object") return false

	const seenA = seen.get(a as object)
	if (seenA) return seenA === b

	seen.set(a as object, b as any)

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false

		for (let i = 0; i < a.length; i++) {
			if (!_getIsEqual(a[i], b[i], seen)) return false
		}
		return true
	}

	if (a instanceof Map && b instanceof Map) return _getAreMapsEqual(a, b, seen)
	if (a instanceof Set && b instanceof Set) return getAreSetsEqual(a, b)
	if (a instanceof Date && b instanceof Date) return getAreDatesEqual(a, b)
	if (a instanceof Error && b instanceof Error) return getAreErrorsEqual(a, b)
	if (a instanceof RegExp && b instanceof RegExp) return getAreRegExpsEqual(a, b)
	if (Buffer.isBuffer(a) && Buffer.isBuffer(b)) return getAreBuffersEqual(a, b)

	const keysA = [...Object.keys(a as object), ...Object.getOwnPropertySymbols(a as object)]
	const keysB = [...Object.keys(b as object), ...Object.getOwnPropertySymbols(b as object)]

	if (keysA.length !== keysB.length) return false

	return keysA.every(
		(key) => Object.prototype.hasOwnProperty.call(b, key) && _getIsEqual((a as any)[key], (b as any)[key], seen),
	)
}

export const getIsEqual = <T extends FracturesComparable>(a: T, b: T): boolean => {
	return _getIsEqual(a, b)
}

export const getAreMapsEqual = <T extends FracturesComparable>(a: T, b: T): boolean => {
	return _getAreMapsEqual(a as Map<unknown, unknown>, b as Map<unknown, unknown>)
}
