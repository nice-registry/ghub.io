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

## Dependencies

- [all-the-package-repos](https://github.com/nice-registry/all-the-package-repos): All the repository URLs in the npm registry as an object whose keys are package names and values are URLs
- [express](https://github.com/expressjs/express): Fast, unopinionated, minimalist web framework

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [standard-markdown](https://github.com/zeke/standard-markdown): Test your Markdown files for Standard JavaScript Style™
- [supertest](https://github.com/visionmedia/supertest): SuperAgent driven library for testing HTTP servers

## License

MIT
