const path = require('path')
const fs = require('fs')

module.exports = (currentProcess = process) => {
  // Get current directory
  const currentDir = path.resolve(currentProcess.cwd())
  // Check if package.json exists within the current directory
  const packagePossiblePath = path.resolve(currentDir, 'package.json')
  const packageExists = fs.existsSync(packagePossiblePath)

  // If it does, obtain package name
  return packageExists ? (require(packagePossiblePath).name || null) : null
}
