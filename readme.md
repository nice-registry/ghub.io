# 📦 ghub.io

Redirect to an npm package's GitHub page, if available.

## Web Usage

These links will take you to each package's GitHub repo:

- [ghub.io/express](https://ghub.io/express)
- [ghub.io/choo](https://ghub.io/choo)
- [ghub.io/puppeteer](https://ghub.io/puppeteer)

This link redirects to npm, because no GitHub repo will be found for the given package name:

- [ghub.io/some-nonexistent-package](https://ghub.io/some-nonexistent-package)

If you're looking for a quick way to get to an npm package page, use npm's 
shorter `npm.im` domain, like [npm.im/express](https://npm.im/express).

## CLI Usage

`ghub` is also available as a command-line tool which accepts one or many
package names and opens their GitHub repos in your web browser:

```sh
npm i -g ghub
ghub choo chai chalk
```

The CLI can also read from newline-delimited standard input. Here's an example
that opens the repos of the top ten most-dependend-on packages whose names 
start with `level`:

```sh
npm i -g ghub all-the-package-names
all-the-package-names | egrep '^level' | head -n 10 | ghub
```

## Dependencies

- [all-the-package-repos](https://github.com/nice-registry/all-the-package-repos): All the repository URLs in the npm registry as an object whose keys are package names and values are URLs
- [clean-deep](https://github.com/nunofgs/clean-deep): Remove falsy, empty or nullable values from objects
- [dedent](https://github.com/dmnd/dedent): An ES6 string tag that strips indentation from multi-line strings
- [express](https://github.com/expressjs/express): Fast, unopinionated, minimalist web framework
- [lil-env-thing](https://github.com/zeke/lil-env-thing): A tiny convenience module for managing process.env.NODE_ENV
- [open](https://github.com/pwnall/node-open): open a file or url in the user&#39;s preferred application

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [nodemon](https://github.com/remy/nodemon): Simple monitor script for use during development of a node.js app.
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [standard-markdown](https://github.com/zeke/standard-markdown): Test your Markdown files for Standard JavaScript Style™
- [supertest](https://github.com/visionmedia/supertest): SuperAgent driven library for testing HTTP servers

## License

MIT
