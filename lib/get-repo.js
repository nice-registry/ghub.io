const obj2map = obj => Object.keys(obj).reduce((m, k) => m.set(k, obj[k]), new Map())
const repos = obj2map(require('all-the-package-repos'))
delete require.cache[require.resolve('all-the-package-repos')]

module.exports = function getRepo (name) {
  return repos.get(name) || `https://www.npmjs.com/package/${name}`
}
