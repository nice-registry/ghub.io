# ghub.io

Redirect to an npm package's repository page, like [ghub.io/express](https://ghub.io/express)

## Features

🌏 Supports GitHub, Gitlab, BitBucket, and [others](https://github.com/nice-registry/all-the-package-repos/pull/6).  

🚀 [Stateless design](https://12factor.net/processes) using [all-the-package-repos](https://ghub.io/all-the-package-repos)  

🔒 HTTPS support

🌴 Always fresh with [Dependabot](https://docs.github.com/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)  

👫 [Shared ownership](https://github.com/nice-registry/about#readme) in a GitHub org  

🙌 [Open Open Source](https://github.com/nice-registry/about#contributing) contribution model  

## Web Usage

Visit `ghub.io/<package-name>` in your browser and you'll be taken to that 
package's repository page on GitHub or elsewhere. If the package has no 
specified repo you'll be redirected to npmjs.com.

Examples:

- [ghub.io/electron](https://ghub.io/electron) (GitHub)
- [ghub.io/jsonschema-extra](https://ghub.io/jsonschema-extra) (GitLab)
- [ghub.io/pickles](https://ghub.io/pickles) (BitBucket)
- [ghub.io/some-nonexistent-package](https://ghub.io/some-nonexistent-package) (npm)

## CLI Usage

`ghub` is also available as a command-line tool which accepts one or many
package names and opens their GitHub repos in your web browser:

```sh
npm i -g ghub
ghub choo chai chalk
```

The CLI can also read from newline-delimited standard input.

To open a repo tab for every dependency in a local package.json file:

```sh
npm i -g ghub json
cat package.json | json dependencies | json -ka | ghub
```

or every `devDependency`:

```sh
npm i -g ghub json
cat package.json | json devDependencies | json -ka | ghub
```

Pair `ghub` with the [`depnames`](https://github.com/nice-registry/depnames)
CLI to open repo pages for all the dependencies of a given package:

```
npm i -g ghub depnames
depnames chokidar | ghub
```

View the top ten most-dependend-on packages whose names start with `level`:

```sh
npm i -g ghub all-the-package-names
all-the-package-names | egrep '^level' | head -n 10 | ghub
```

## Repository

[github.com/nice-registry/ghub.io](https://github.com/nice-registry/ghub.io#readme)

## License

MIT
## See Also

[gem.wtf](https://gem.wtf) - a similar service, but for ruby gems
