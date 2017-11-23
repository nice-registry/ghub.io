const env = require('lil-env-thing')
const cleanDeep = require('clean-deep')

module.exports = function logger (req, res, next) {
  // don't pollute test output
  if (env.test) return next()

  const data = cleanDeep({
    name: req.params.name,
    domain: req.domain,
    ip: req.ip,
    headers: req.headers
  })

  console.log(`query: ${JSON.stringify(data)}`)

  return next()
}
