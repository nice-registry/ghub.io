const obj2map = (o) => new Map(Object.entries(o))
const repos = obj2map(require('all-the-package-repos'))
delete require.cache[require.resolve('all-the-package-repos')]

module.exports = function getRepo (name) {
  return repos.get(name) || `https://npmjs.com/package/${name}`
}
