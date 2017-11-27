#!/usr/bin/env node

const open = require('open')
const readline = require('readline')
const dedent = require('dedent')
const getRepo = require('./lib/get-repo')

if (process.stdin.isTTY) {
  // Read from arguments
  const names = process.argv.slice(2)
  if (!names.length) {
    console.log(dedent`To use ghub, specify one or many package names.
      Examples:

      ghub express
      ghub choo chai chalk`)

    // exit gracefully to avoid dumping a bunch of npm info
    process.exit()
  }
  names.forEach(name => open(getRepo(name)))
} else {
  // Read from newline-delimited STDIN
  readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  }).on('line', (line) => open(getRepo(line)))
}
