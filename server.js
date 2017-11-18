const express = require('express')
const port = Number(process.env.PORT) || 5000
const obj2map = obj => Object.keys(obj).reduce((m, k) => m.set(k, obj[k]), new Map())
const repos = obj2map(require('all-the-package-repos'))
// clear obj from cache.
delete require.cache[require.resolve("all-the-package-repos")]
const app = express()

app.get('/', (req, res, next) => {
  res.redirect('https://github.com/nice-registry/package.land#readme')
})

app.get('/:name', (req, res, next) => {
  const name = req.params.name
  const repo = repos.get(name) || `https://npmjs.com/package/${name}`
  res.redirect(repo)
})

if (!module.parent) {
  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
