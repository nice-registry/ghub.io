#!/usr/bin/env node

const names = process.argv.slice(2)
const open = require('open')
const dedent = require('dedent')
const getRepo = require('./lib/get-repo')

if (!names.length) {
  console.log(dedent`To use ghub, specify one or many package names.
    Examples:

    ghub express
    ghub choo chai chalk`)

  // exit gracefully to avoid dumping a bunch of npm info
  process.exit()
}


names.forEach(name => open(getRepo(name)))