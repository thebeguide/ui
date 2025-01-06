import benchmark from "benchmark"
import { getIsEqual } from "../utils/equals"
import _ from "lodash"
import { MOCK_ARRAY_OBJECTS, MOCK_LARGE_OBJECTS, MOCK_NESTED_OBJECTS, MOCK_SIMPLE_OBJECTS } from "./__mocks__/objects"

type BenchmarkResult = {
	id: number
	name: string
	"lodash (runs)": string
	"fractures (runs)": string
	diff: string
}

const suite = new benchmark.Suite()

const results: { [key: string]: Partial<BenchmarkResult> & { lodashHz?: number; fracturesHz?: number } } = {
	"Simple Objects - Identical": {},
	"Simple Objects - Different": {},
	"Nested Objects": {},
	"Array Objects": {},
	"Large Objects": {},
}

const printCurrentResults = () => {
	console.clear()

	const currentResults = Object.values(results).map((result, index) => {
		const lodashHz = result.lodashHz || 0
		const fracturesHz = result.fracturesHz || 0
		const diff = lodashHz && fracturesHz ? (((fracturesHz - lodashHz) / lodashHz) * 100).toFixed(1) : "pending"
		const diffFormatted = diff === "pending" ? diff : diff.startsWith("-") ? diff : `+${diff}`

		return {
			id: index + 1,
			name: result.name || "pending",
			"lodash (runs)": result["lodash (runs)"] || "pending",
			"fractures (runs)": result["fractures (runs)"] || "pending",
			diff: diffFormatted + (diff === "pending" ? "" : "%"),
		}
	})

	console.table(currentResults)
}

suite
	.add("Simple Objects - Identical (Fractures)", () => {
		getIsEqual(MOCK_SIMPLE_OBJECTS.first, MOCK_SIMPLE_OBJECTS.second)
	})
	.add("Simple Objects - Identical (Lodash)", () => {
		_.isEqual(MOCK_SIMPLE_OBJECTS.first, MOCK_SIMPLE_OBJECTS.second)
	})
	.add("Simple Objects - Different (Fractures)", () => {
		getIsEqual(MOCK_SIMPLE_OBJECTS.first, MOCK_SIMPLE_OBJECTS.third)
	})
	.add("Simple Objects - Different (Lodash)", () => {
		_.isEqual(MOCK_SIMPLE_OBJECTS.first, MOCK_SIMPLE_OBJECTS.third)
	})
	.add("Nested Objects (Fractures)", () => {
		getIsEqual(MOCK_NESTED_OBJECTS.first, MOCK_NESTED_OBJECTS.second)
	})
	.add("Nested Objects (Lodash)", () => {
		_.isEqual(MOCK_NESTED_OBJECTS.first, MOCK_NESTED_OBJECTS.second)
	})
	.add("Array Objects (Fractures)", () => {
		getIsEqual(MOCK_ARRAY_OBJECTS.first, MOCK_ARRAY_OBJECTS.second)
	})
	.add("Array Objects (Lodash)", () => {
		_.isEqual(MOCK_ARRAY_OBJECTS.first, MOCK_ARRAY_OBJECTS.second)
	})
	.add("Large Objects (Fractures)", () => {
		getIsEqual(MOCK_LARGE_OBJECTS.first, MOCK_LARGE_OBJECTS.second)
	})
	.add("Large Objects (Lodash)", () => {
		_.isEqual(MOCK_LARGE_OBJECTS.first, MOCK_LARGE_OBJECTS.second)
	})
	.on("start", function () {
		printCurrentResults()
	})
	.on("cycle", function (event: { target: benchmark.Target }) {
		const benchmark: benchmark.Target = event.target
		const name = benchmark.name
		const baseTestName = name?.replace(/ \((Fractures|Lodash)\)$/, "")
		const isFractures = name?.includes("Fractures")
		const hz = benchmark?.hz ?? 0

		results[baseTestName!] = {
			...results[baseTestName!],
			name: baseTestName,
			[isFractures ? "fracturesHz" : "lodashHz"]: hz,
			[isFractures ? "fractures (runs)" : "lodash (runs)"]: Math.floor(hz).toLocaleString(),
		}

		printCurrentResults()
	})
	.on("complete", function () {
		console.log("\nbenchmark completed")
	})
	.run({ async: true })
