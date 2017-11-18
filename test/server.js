const {describe, it} = require('mocha')
const supertest = require('supertest')
const chai = require('chai')
chai.should()
const app = require('../server.js')

describe('package.land', () => {
  it('redirects root path to repo readme', async () => {
    const res = await supertest(app).get(`/`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://github.com/nice-registry/package.land#readme')
  })

  it('redirects known package names to GitHub', async () => {
    const res = await supertest(app).get(`/express`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://github.com/expressjs/express')
  })

  it('redirects unknown package names to npm', async () => {
    const res = await supertest(app).get(`/not-gonna-be-a-package-name`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://npmjs.com/package/not-gonna-be-a-package-name')
  })

  it('should not fetch native methods', async () => {
    const res = await supertest(app).get(`/__defineGetter__`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://npmjs.com/package/__defineGetter__')
  })

  it('should redirect properly if a package with the native function exsists', async () => {
    const res = await supertest(app).get(`/toString`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://github.com/uxnow/toString')
  })
})
