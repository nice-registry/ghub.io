const hubdown = require('hubdown')
const fs = require('fs')
const path = require('path')
const readme = fs.readFileSync(path.join(__dirname, '../readme.md'), 'utf8')
var doc

hubdown(readme).then(_doc => {
  doc = _doc
})

function html () {
  return `
<title>ghub.io</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/node_modules/github-markdown-css/github-markdown.css">
<style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 700px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }

  .markdown-body h1 a,
  .markdown-body h2 a,
  .markdown-body h3 a,
  .markdown-body h4 a,
  .markdown-body h5 a,
  .markdown-body h6 a {
    color: black;
  }
</style>

<article class="markdown-body">
  ${doc.content}
</article>
`
}

module.exports = async (req, res, next) => {
  res.set('Content-Type', 'text/html')
  res.send(html())
}
