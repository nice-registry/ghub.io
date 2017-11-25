const express = require('express')
const app = express()

const { logger, getRepo } = require('./lib')

const port = Number(process.env.PORT) || 5000

app.use('/:name', logger)

app.get('/', (req, res, next) => {
  res.redirect('https://github.com/nice-registry/ghub.io#readme')
})

app.get('/:name', (req, res) => {
  const packageName = req.params.name

  if (packageName[0] === '@') {
    res.redirect(`/scoped/${packageName.slice(1)}?name=${req.query.name}`)
  } else {
    res.redirect(getRepo(packageName))
  }
})

app.get('/scoped/:scopedName', (req, res) => {
  const packageName = req.query.name
  res.redirect(`https://github.com/${req.params.scopedName}/${packageName}`)
})

if (!module.parent) {
  app.listen(port, () => console.log(`app running on ${port}`))
}

module.exports = app
