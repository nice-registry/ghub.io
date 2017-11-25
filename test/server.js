const {describe, it} = require('mocha')
const supertest = require('supertest')
const chai = require('chai')
chai.should()
const app = require('../server.js')

describe('ghub.io', () => {
  it('redirects root path to repo readme', async () => {
    const res = await supertest(app).get(`/`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://github.com/nice-registry/ghub.io#readme')
  })

  it('redirects known package names to GitHub', async () => {
    const res = await supertest(app).get(`/express`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://github.com/expressjs/express')
  })

  it('redirects to a scoped package github page', async () => {
    const res = await supertest(app).get('/scoped/andregarvin?name=spark')
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://github.com/andregarvin/spark')
  })

  it('should redirect to the scoped route if it is a scoped name', async () => {
    const res = await supertest(app).get('/@request?name=cli')
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('/scoped/request?name=cli')
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

  it('should redirect properly if a package with the native function exists', async () => {
    const res = await supertest(app).get(`/toString`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://github.com/uxnow/toString')
  })
})
