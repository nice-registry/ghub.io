const getCurrentRepo = require('./get-current-repo')
const getUsageExample = require('./get-usage-example.js')

module.exports = (proc = process, con = console) => {
  const currentRepo = getCurrentRepo(proc)
  if (currentRepo) {
    return [currentRepo]
  }
  con.log(getUsageExample())
  return null
}
