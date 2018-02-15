require('chai').should()
const {describe, it} = require('mocha')

const getUsageExample = require('../lib/get-usage-example')

describe('Usage example', () => {
  it('should be a string', () => {
    getUsageExample().should.be.a('string')
  })
})
