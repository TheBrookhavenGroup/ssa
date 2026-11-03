// Build with external sharp/opentype.js@1.3.4 dependencies and a Lato Regular TTF.
// NODE_PATH=/path/to/node_modules node scripts/render_social_preview.cjs /path/to/Lato-Regular.ttf
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const opentype = require('opentype.js');
const root = path.resolve(__dirname, '..');
async function main() {
  if (!process.argv[2]) throw new Error('Supply the path to Lato-Regular.ttf');
  const font = opentype.parse(Uint8Array.from(fs.readFileSync(process.argv[2])).buffer);
  const text = (value, x, y, size, fill) => {
    const artwork = font.getPath(value, x, y, size);
    artwork.fill = fill;
    return artwork.toSVG();
  };
  const logo = fs.readFileSync(path.join(root, 'web/brookhaven-logo.png')).toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="627" viewBox="0 0 1200 627">
<title>The Brookhaven Group — Social Security Investment</title>
<rect width="1200" height="627" fill="#f3f6f8"/>
<rect x="40" y="36" width="1120" height="240" rx="4" fill="white" stroke="#dedede"/>
<path d="M44 38H1156" stroke="#e8522b" stroke-width="6"/>
<image href="data:image/png;base64,${logo}" x="70" y="60" width="230" height="155"/>
${text('Since 1991', 70, 249, 22, '#292521')}
${text('Workflow Automation · Cloud Computing', 340, 145, 27, '#59534e')}
${text('Data Management · Analytics', 340, 186, 27, '#59534e')}
${text('SOCIAL SECURITY INVESTMENT', 42, 344, 27, '#146b78')}
${text('Should I wait until age 70?', 40, 429, 65, '#173044')}
${text('Explore the future value of investing', 42, 499, 32, '#173044')}
${text('monthly Social Security benefits.', 42, 544, 32, '#173044')}
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(root, 'web/social-preview.png'));
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
