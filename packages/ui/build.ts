import { build } from "esbuild"
import { glob } from "glob"
import { mkdir, writeFile } from "fs/promises"
import { join } from "path"

// Clean build folder
await mkdir("dist", { recursive: true })

// Get all TSX components
const entryPoints = await glob("src/**/*.{ts,tsx}")

await build({
	entryPoints,
	outdir: "dist",
	bundle: false,
	format: "esm",
	platform: "browser",
	target: "esnext",
	loader: {
		".css": "copy",
	},
	sourcemap: true,
	splitting: false,
	minify: false,
})
