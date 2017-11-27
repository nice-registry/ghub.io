# 📦 ghub.io

> Redirect to an npm package's repository page, like [ghub.io/express](http://ghub.io/express)

## Features

💙 Platform agnostic: supports GitHub, Gitlab, BitBucket, and [others](https://github.com/nice-registry/all-the-package-repos/pull/6).  

🚀 [Stateless design](https://12factor.net/processes) using [all-the-package-repos](http://ghub.io/all-the-package-repos)  

🔒 HTTPS support

🌴 Always fresh with [Greenkeeper](https://greenkeeper.io/)  

👫 [Shared ownership](https://github.com/nice-registry/about#readme) in a GitHub org  

🙌 [Open Open Source](https://github.com/nice-registry/about#contributing) contribution model  

## Web Usage

These links will take you to each package's GitHub repo:

- [ghub.io/electron](http://ghub.io/electron)
- [ghub.io/choo](http://ghub.io/choo)
- [ghub.io/puppeteer](http://ghub.io/puppeteer)

Works for GitLab too:

- [ghub.io/jsonschema-extra](http://ghub.io/jsonschema-extra)

And BitBucket:

- [ghub.io/pickles](http://ghub.io/pickles)

When the package has no specified repo, you'll be redirected to npm:

- [ghub.io/some-nonexistent-package](http://ghub.io/some-nonexistent-package)

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

## License

MIT
