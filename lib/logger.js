const env = require('lil-env-thing')
const cleanDeep = require('clean-deep')

module.exports = function logger (req, res, next) {
  const data = cleanDeep({
    name: req.params.name,
    domain: req.domain,
    ip: req.ip,
    headers: req.headers,
    date: new Date()
  })

  // don't pollute test and dev output
  if (env.production) {
    console.log(`query: ${JSON.stringify(data)}`)
  }

  return next()
}
