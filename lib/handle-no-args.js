const getCurrentRepo = require('./get-current-repo')
const getUsageExample = require('./get-usage-example.js')

module.exports = () => {
  const currentRepo = getCurrentRepo()
  if (currentRepo) {
    return [currentRepo]
  }
  console.log(getUsageExample())
  return null
}
