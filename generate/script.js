const path = require('path');
const tools = require('./tools');
const template = require('./template');


// console.log('__dirname', path.join(__dirname, '../web-html')) // xxxx/webxiu.github.io/generate
function createWebHtml() {
  const inputPath = path.join(__dirname, '../web-html');
  const outPath = path.join(__dirname, '../web-html/index.html');

  const links = tools.getDirPaths({
    rootPath: inputPath,
    exclude: ['images', 'css', 'js', 'img', 'assets'],
    include: ['.html']
  });

  const dataStr = JSON.stringify(links).replace(new RegExp(path.join(__dirname, '../web-html'), 'g'), '.')
  tools.writeFile(outPath, template.getGameTemplate(dataStr))
}
createWebHtml()