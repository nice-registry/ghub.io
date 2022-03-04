require('chai').should()
const {describe, it} = require('mocha')
const supertest = require('supertest')
const cheerio = require('cheerio')
const app = require('../server.js')

describe('ghub.io', () => {
  it('has a homepage', async () => {
    const res = await supertest(app).get(`/`)
    res.statusCode.should.equal(200)
    const $ = cheerio.load(res.text)
    $('h1 a').length.should.equal(1)

    const titles = $('h2')
      .map((i, el) => $(el).text())
      .get()

    titles.length.should.be.above(3)
  })

  it('redirects known package names to GitHub', async () => {
    const res = await supertest(app).get(`/express`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://github.com/expressjs/express')
  })

  it('supports scoped package names', async () => {
    const res = await supertest(app).get(`/@angular/core`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://github.com/angular/angular')
  })

  it('redirects unknown package names to npm', async () => {
    const res = await supertest(app).get(`/not-gonna-be-a-package-name`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://www.npmjs.com/package/not-gonna-be-a-package-name')
  })

  it('should not fetch native methods', async () => {
    const res = await supertest(app).get(`/__defineGetter__`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://www.npmjs.com/package/__defineGetter__')
  })

  it('should redirect properly if a package with the native function exists', async () => {
    const res = await supertest(app).get(`/toString`)
    res.statusCode.should.equal(302)
    res.headers.location.should.equal('https://github.com/uxnow/toString')
  })
})
