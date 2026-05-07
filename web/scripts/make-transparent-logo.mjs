import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = resolve(__dirname, "../public/Logbuild_logo.png");
const output = resolve(__dirname, "../public/Logbuild_logo_transparent.png");

// Target colour to remove: #2d4a1e
const TR = 0x2d, TG = 0x4a, TB = 0x1e;
// Tolerance: Euclidean distance in RGB space
const TOLERANCE = 60;

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info; // channels === 4

for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const dist = Math.sqrt((r - TR) ** 2 + (g - TG) ** 2 + (b - TB) ** 2);
  if (dist < TOLERANCE) {
    data[i + 3] = 0; // transparent
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .trim({ threshold: 0 }) // crop to the bounding box of non-transparent pixels
  .toFile(output);

const meta = await sharp(output).metadata();
console.log(`Done → ${output} (${meta.width}×${meta.height}px)`);
