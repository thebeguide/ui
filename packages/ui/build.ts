import { build, type BuildOptions } from "esbuild"
import { mkdir, rm, cp, readFile, writeFile } from "fs/promises"
import { execSync } from "child_process"
import cssModulesPlugin from "esbuild-css-modules-plugin"

const setup = async (): Promise<void> => {
	await rm("dist", { recursive: true, force: true })
	await mkdir("dist", { recursive: true })

	const sharedConfig: BuildOptions = {
		format: "esm",
		platform: "browser",
		target: "esnext",
		bundle: true,
		sourcemap: true,
		metafile: true,
		external: ["react", "react/jsx-runtime", "react-dom", "react-dom/client", "@heliosgraphics/*"],
		plugins: [
			cssModulesPlugin({
				inject: true,
				localsConvention: "camelCaseOnly",
				pattern: "[name]_[local]",
			}),
		],
		minify: true,
		treeShaking: true,
		allowOverwrite: true,
		jsx: "automatic",
		preserveSymlinks: true,
	}

	const buildConfigs: BuildOptions[] = [
		{
			...sharedConfig,
			entryPoints: ["index.ts"],
			outdir: "dist",
		},
		{
			...sharedConfig,
			entryPoints: ["constants/meta.ts"],
			outdir: "dist",
		},
	]

	await Promise.all(buildConfigs.map((config) => build(config)))

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

	// Only process index.js
	const content = await readFile("dist/index.js", "utf8")
	await writeFile("dist/index.js", `"use client";\n${content}`)

	execSync("tsc --declaration --emitDeclarationOnly --outDir dist", {
		stdio: "inherit",
		env: { ...process.env, TS_NODE_IGNORE_CSS: "true" },
	})
}

setup()
