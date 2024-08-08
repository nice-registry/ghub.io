const express = require('express')
const port = Number(process.env.PORT) || 5001
const env = require('lil-env-thing')
const cleanDeep = require('clean-deep')
const getRepo = require('./lib/get-repo')

const app = express()

// Middleware
app.use(express.static(__dirname))
app.get('/', require('./lib/home'))
app.get('/*', redirectToRepo)

function redirectToRepo (req, res, next) {
  if (req.path === '/favicon.ico') return next()

  const packageName = req.path.replace(/^\//, '')

  const data = cleanDeep({
    name: packageName,
    domain: req.domain,
    ip: req.ip,
    headers: req.headers,
    date: new Date()
  })

  // don't pollute test and dev output
  if (env.production) {
    console.log(`query: ${JSON.stringify(data)}`)
  }

  res.redirect(getRepo(packageName))
}

if (!module.parent) {
  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
