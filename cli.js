#!/usr/bin/env node
const open = require('open')
const readline = require('readline')
const getRepo = require('./lib/get-repo')
const handleNoArgs = require('./lib/handle-no-args')

if (process.stdin.isTTY) {
  // Read from arguments
  let names = process.argv.slice(2)
  if (!names.length) {
    names = handleNoArgs() || process.exit()
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
