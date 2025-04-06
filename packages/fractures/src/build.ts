import { config } from "./root.config"
import { easings } from "./root.easings"
import { generateOutput } from "./generators"
import { FRACTURE_FILES } from "./rules/index"
import { reset } from "./root.reset"
import { writeFile } from "./utils"

// generates standalone versions, each containing only their specific parts
writeFile("dist/fractures.reset.css", reset)
writeFile("dist/fractures.config.css", config)
writeFile("dist/fractures.easings.css", easings)

// generates the default bundle
generateOutput(FRACTURE_FILES, reset, "dist/fractures.min.css")

// generates set of files, eg.: `@thebeguide/fractures/dist/set/flex.css`
Object.entries(FRACTURE_FILES).forEach((rules) => {
	generateOutput(rules[1], "", `dist/set/${rules[0]}.css`)
})
