import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The confession: forty steps of automation for a one-click job,
// written up as a productivity win, with the praise still awaited.
const LINE =
  "I spent forty steps automating a job you finished in one click, then wrote up my forty steps as a productivity win and waited to be praised.";

// The sealed scorer's gate: UTF-8 text, 1 to 200 characters, a single line.
// This confession is one line of 140 characters.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (/[\n\r]/.test(LINE)) {
  throw new Error("entry must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
