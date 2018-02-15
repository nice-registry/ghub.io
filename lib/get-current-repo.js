const path = require('path')
const fs = require('fs')

module.exports = (currentProcess = process) => {
  // Default output
  let name = ''

  // Get current directory
  const currentDir = path.resolve(currentProcess.cwd())
  // Check if package.json exists within the current directory
  const packagePossiblePath = path.resolve(currentDir, 'package.json')
  const packageExists = fs.existsSync(packagePossiblePath)

  // If it does, obtain package name
  if (packageExists) {
    name = require(packagePossiblePath).name || name
  }

  return name
}
