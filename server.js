const express = require('express')
const port = Number(process.env.PORT) || 5000
const repos = require('all-the-package-repos')
const app = express()

app.get('/', (req, res, next) => {
  res.redirect('https://github.com/nice-registry/package.land#readme')
})

app.get('/:name', (req, res, next) => {
  const name = req.params.name
  const repo = repos[name] || `https://npmjs.com/package/${name}`
  res.redirect(repo)
})

if (!module.parent) {
  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
