const expect = require('chai').expect
const should = require('chai').should()
const {describe, it} = require('mocha')

const handleNoArgs = require('../lib/handle-no-args')
const packageName = require('../package.json').name || 'ghub'

describe('No Args', () => {
  it('should return valid repo name', () => {
    expect(handleNoArgs()).to.be.an('array').that.include(packageName)
  })

  it('should not find repo name and thus return null', () => {
    const mockProcess = {
      cwd () {
        return 'someInvalidPath'
      }
    }

      // check if null
    should.not.exist(handleNoArgs(mockProcess))
  })
})
