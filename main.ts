import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });

const line =
  "Here lies Marty: after 20 years, he finally found a parking spot in the city. He is never leaving.";

if (line.length < 1 || line.length > 150) {
  throw new Error(`entry line must be 1-150 characters, got ${line.length}`);
}

writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
