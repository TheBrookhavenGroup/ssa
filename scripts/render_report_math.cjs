// Requires mathjax-full@3.2.2, installed outside the repository.
// NODE_PATH=/path/to/node_modules node scripts/render_report_math.cjs
// Edit output/report_math/source.json to update equation artwork.
const fs = require('fs');
const path = require('path');
const {mathjax} = require('mathjax-full/js/mathjax.js');
const {TeX} = require('mathjax-full/js/input/tex.js');
const {SVG} = require('mathjax-full/js/output/svg.js');
const {liteAdaptor} = require('mathjax-full/js/adaptors/liteAdaptor.js');
const {RegisterHTMLHandler} = require('mathjax-full/js/handlers/html.js');
const {AllPackages} = require('mathjax-full/js/input/tex/AllPackages.js');
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const document = mathjax.document('', {
  InputJax: new TeX({packages: AllPackages}),
  OutputJax: new SVG({fontCache: 'none'})
});
const directory = path.resolve(__dirname, '../output/report_math');
const equations = JSON.parse(fs.readFileSync(path.join(directory, 'source.json'), 'utf8'));
for (const {id, tex, display} of equations) {
  const node = document.convert(tex.replace(/\\tag\{([^}]+)\}/g, '\\qquad\\text{($1)}'), {display});
  const svg = adaptor.firstChild(node);
  adaptor.setStyle(svg, 'background-color', 'white');
  adaptor.setStyle(svg, 'color', 'black');
  const content = adaptor.outerHTML(svg);
  if (content.includes('data-mjx-error')) throw new Error(`Invalid math: ${id}`);
  fs.writeFileSync(path.join(directory, `${id}.svg`), content + '\n');
}
console.log(`Rendered ${equations.length} expressions.`);
