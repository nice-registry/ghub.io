const dedent = require('dedent')

module.exports = () => {
  return (dedent`To use ghub, specify one or many package names.
      You can also ommit the name if you are inside a folder with a package.json.

      Examples:

      ghub
      ghub express
      ghub choo chai chalk`)
}
