require('chai').should()
const {describe, it} = require('mocha')

const getCurrentRepo = require('../lib/get-current-repo')
const packageName = require('../package.json').name

describe('Current Repo', () => {
  it('able to obtain current directory repo name', () => {
    getCurrentRepo().should.be.equal(packageName)
  })

  it('unable able to obtain current directory repo name', () => {
    const mockProcess = {
      cwd () {
        return 'someInvalidPath'
      }
    }
    getCurrentRepo(mockProcess).should.be.equal('')
  })
})
