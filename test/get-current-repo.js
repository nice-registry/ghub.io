const should = require('chai').should()
const expect = require('chai').expect
const {describe, it} = require('mocha')

const getCurrentRepo = require('../lib/get-current-repo')
const packageName = require('../package.json').name || 'ghub'

describe('Current Repo', () => {
  it('able to obtain current directory repo name', () => {
    expect(getCurrentRepo()).to.equal(packageName)
  })

  it('unable able to obtain current directory repo name', () => {
    const mockProcess = {
      cwd () {
        return 'someInvalidPath'
      }
    }

    // check if null
    should.not.exist(getCurrentRepo(mockProcess))
  })
})
