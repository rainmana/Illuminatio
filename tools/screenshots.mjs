/**
 * Regenerate true raster screenshots (PNG/JPEG) for the README gallery and
 * the community-directory thumbnail.
 *
 * The committed screenshots/*.svg are text-safe wrappers (this repo was
 * originally pushed through an API that only carries text). Before submitting
 * to the Obsidian community directory, run this to produce real rasters:
 *
 *   npm install puppeteer
 *   npm run build
 *   node tools/screenshots.mjs
 *
 * Outputs: screenshots/<variant>-<mode>.png and screenshots/screenshot.png (512x288).
 */
import puppeteer from "puppeteer";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const combos = [
	["kells", "light"], ["kells", "dark"],
	["lindisfarne", "light"], ["lindisfarne", "dark"],
	["winchester", "light"], ["winchester", "dark"],
	["riches", "light"], ["riches", "dark"],
	["ellesmere", "light"], ["ellesmere", "dark"],
	["aureus", "light"], ["aureus", "dark"],
	["gigas", "light"], ["gigas", "dark"],
	["argenteus", "light"], ["argenteus", "dark"],
];

const stub = readFileSync("harness/obsidian-stub.css", "utf8");
const theme = readFileSync("theme.css", "utf8");
const html = readFileSync("harness/harness.html", "utf8").replace(
	"<!--STYLES-->",
	`<style>\n${stub}\n</style>\n<style>\n${theme}\n</style>`
);
const tmp = join(tmpdir(), "illuminatio-preview.html");
writeFileSync(tmp, html);
mkdirSync("screenshots", { recursive: true });

const b = await puppeteer.launch({ args: ["--no-sandbox", "--force-color-profile=srgb"] });
const pg = await b.newPage();
await pg.setViewport({ width: 1600, height: 1000, deviceScaleFactor: 1 });
await pg.goto(`file://${tmp}`, { waitUntil: "load" });
await pg.evaluate(() => document.fonts.ready);

async function apply(ms, mode) {
	await pg.evaluate((ms, mode) => {
		document.body.className = `theme-${mode} illuminatio-${ms}`;
		const bar = document.querySelector(".ill-harness-bar");
		if (bar) bar.style.display = "none";
		const scroller = document.querySelector(".markdown-preview-view");
		if (scroller) scroller.scrollTop = 0;
	}, ms, mode);
	await new Promise((r) => setTimeout(r, 150));
}

for (const [ms, mode] of combos) {
	await apply(ms, mode);
	await pg.screenshot({ path: `screenshots/${ms}-${mode}.png` });
	console.log(`screenshots/${ms}-${mode}.png`);
}

// community thumbnail: 512x288, cropped to the leaf, from kells light
await apply("kells", "light");
const clip = await pg.screenshot({ clip: { x: 280, y: 70, width: 1200, height: 675 }, encoding: "base64" });
const png = await pg.evaluate(async (b64) => {
	const img = new Image();
	img.src = `data:image/png;base64,${b64}`;
	await img.decode();
	const c = document.createElement("canvas");
	c.width = 512;
	c.height = 288;
	c.getContext("2d").drawImage(img, 0, 0, 512, 288);
	return c.toDataURL("image/png").split(",")[1];
}, clip);
writeFileSync("screenshots/screenshot.png", Buffer.from(png, "base64"));
console.log("screenshots/screenshot.png (512x288)");

await b.close();
