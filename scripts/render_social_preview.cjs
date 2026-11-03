// Build with external sharp/opentype.js dependencies and a Lato Regular TTF.
// NODE_PATH=/path/to/node_modules node scripts/render_social_preview.cjs /path/to/Lato-Regular.ttf
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const opentype = require('opentype.js');
const root = path.resolve(__dirname, '..');
async function main() {
  if (!process.argv[2]) throw new Error('Supply the path to Lato-Regular.ttf');
  const font = opentype.parse(Uint8Array.from(fs.readFileSync(process.argv[2])).buffer);
  const text = (value, x, y, size, fill) => font.getPath(value, x, y, size).toSVG({flipY: false}).replace('fill="black"', `fill="${fill}"`);
  const logo = fs.readFileSync(path.join(root, 'web/brookhaven-logo.png')).toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<title>The Brookhaven Group — Social Security Investment</title>
<rect width="1200" height="630" fill="#f3f6f8"/>
<rect width="1200" height="270" fill="white"/>
<rect width="1200" height="10" fill="#e8522b"/>
<image href="data:image/png;base64,${logo}" x="62" y="38" width="270" height="182"/>
${text('The Brookhaven Group, LLC', 380, 120, 43, '#292521')}
${text('Since 1991', 382, 168, 26, '#59534e')}
<path d="M64 270H1136" stroke="#ccd9e0" stroke-width="2"/>
${text('Social Security Investment', 64, 388, 65, '#173044')}
${text('Should I wait until age 70?', 66, 460, 43, '#146b78')}
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(root, 'web/social-preview.png'));
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
