import { build } from "esbuild"
import { mkdir, rm, cp, readFile, writeFile } from "fs/promises"
import { execSync } from "child_process"

const setup = async (): Promise<void> => {
	await rm("dist", { recursive: true, force: true })
	await mkdir("dist", { recursive: true })

	await build({
		entryPoints: ["index.ts"],
		outdir: "dist",
		format: "esm",
		platform: "browser",
		target: "esnext",
		bundle: true,
		sourcemap: true,
		external: [
			"react",
			"react-dom",
			"react/jsx-runtime",
			"dayjs",
			"markdown-it",
			"highlight.js",
			"@use-gesture/react",
			"react-plock",
			"@heliosgraphics/*",
		],
		loader: { ".css": "empty" },
		minify: true,
		treeShaking: true,
		allowOverwrite: true,
		jsx: "automatic",
		preserveSymlinks: true,
	})

	await cp("components", "dist/components", {
		recursive: true,
		filter: (name) => name.endsWith(".css"),
	})

	const css = await readFile("components.css", "utf8")
	const minifiedCss = await build({
		stdin: {
			contents: css,
			loader: "css",
			sourcefile: "components.css",
		},
		write: false,
		minify: true,
	})

	await writeFile("dist/components.css", minifiedCss.outputFiles[0].contents)

	execSync("tsc --declaration --emitDeclarationOnly --outDir dist", {
		stdio: "inherit",
		env: { ...process.env, TS_NODE_IGNORE_CSS: "true" },
	})
}

setup()
