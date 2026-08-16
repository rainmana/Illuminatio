/**
 * Illuminatio build: concatenate src partials (sorted by filename)
 * into the single theme.css Obsidian requires at the repo root.
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const files = readdirSync("src")
	.filter((f) => f.endsWith(".css"))
	.sort();

const banner = `/*
Illuminatio - an illuminated-manuscript theme for Obsidian
https://github.com/rainmana/Illuminatio

Built from the partials in src/ - edit those, then \`npm run build\`.
Fonts embedded under the SIL Open Font License 1.1 (see fonts/LICENSES).
*/

`;

const out =
	banner +
	files.map((f) => readFileSync(`src/${f}`, "utf8").trimEnd()).join("\n\n") +
	"\n";

writeFileSync("theme.css", out);
console.log(
	`theme.css built from ${files.length} partials (${(out.length / 1024).toFixed(1)} KB)`
);
