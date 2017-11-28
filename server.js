const express = require('express')
const port = Number(process.env.PORT) || 5000
const getRepo = require('./lib/get-repo')
const logger = require('./lib/logger')
const home = require('./lib/home')

const app = express()

app.use('/:name', logger)
app.use(express.static(__dirname))

app.get('/', home)

app.get('/:name', (req, res, next) => {
  res.redirect(getRepo(req.params.name))
})

app.get('/:scope/:project', (req, res, next) => {
  const name = [req.params.scope, req.params.project].join('/')
  res.redirect(getRepo(name))
})

if (!module.parent) {
  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
