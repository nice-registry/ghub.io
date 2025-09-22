// Pre-rendered README content for Workers
const readmeContent = `
<h1>ghub.io</h1>
<p>Redirect to an npm package's repository page, like <a href="https://ghub.io/express">ghub.io/express</a></p>

<h2>Features</h2>
<p>🌏 Supports GitHub, Gitlab, BitBucket, and <a href="https://github.com/nice-registry/all-the-package-repos/pull/6">others</a>.</p>
<p>🚀 <a href="https://12factor.net/processes">Stateless design</a> using <a href="https://github.com/nice-registry/all-the-package-repos">all-the-package-repos</a></p>
<p>🔒 HTTPS support</p>
<p>🌴 Always fresh with <a href="https://docs.github.com/en/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates">Dependabot</a></p>
<p>👫 <a href="https://github.com/nice-registry/welcome#readme">Shared ownership</a> in a GitHub org</p>
<p>🙌 <a href="https://github.com/nice-registry/welcome#contributing">Open Open Source</a> contribution model</p>

<h2>Web Usage</h2>
<p>Visit <code>ghub.io/&lt;package-name&gt;</code> in your browser and you'll be taken to that
package's repository page on GitHub or elsewhere. If the package has no
specified repo you'll be redirected to npmjs.com.</p>

<p>Examples:</p>
<ul>
<li><a href="https://ghub.io/electron">ghub.io/electron</a> (GitHub)</li>
<li><a href="https://ghub.io/jsonschema-extra">ghub.io/jsonschema-extra</a> (GitLab)</li>
<li><a href="https://ghub.io/pickles">ghub.io/pickles</a> (BitBucket)</li>
<li><a href="https://ghub.io/some-nonexistent-package">ghub.io/some-nonexistent-package</a> (npm)</li>
</ul>

<h2>CLI Usage</h2>
<p><code>ghub</code> is also available as a command-line tool which accepts one or many
package names and opens their GitHub repos in your web browser:</p>

<pre><code>npm i -g ghub
ghub choo chai chalk</code></pre>

<p>The CLI can also read from newline-delimited standard input.</p>

<p>To open a repo tab for every dependency in a local package.json file:</p>

<pre><code>npm i -g ghub json
cat package.json | json dependencies | json -ka | ghub</code></pre>

<p>or every <code>devDependency</code>:</p>

<pre><code>npm i -g ghub json
cat package.json | json devDependencies | json -ka | ghub</code></pre>

<p>Pair <code>ghub</code> with the <a href="https://github.com/nice-registry/depnames"><code>depnames</code></a>
CLI to open repo pages for all the dependencies of a given package:</p>

<pre><code>npm i -g ghub depnames
depnames chokidar | ghub</code></pre>

<p>View the top ten most-dependend-on packages whose names start with <code>level</code>:</p>

<pre><code>npm i -g ghub all-the-package-names
all-the-package-names | egrep '^level' | head -n 10 | ghub</code></pre>

<h2>Repository</h2>
<p><a href="https://github.com/nice-registry/ghub.io#readme">github.com/nice-registry/ghub.io</a></p>

<h2>License</h2>
<p>MIT</p>

<h2>See Also</h2>
<p><a href="https://gem.wtf">gem.wtf</a> - a similar service, but for ruby gems</p>
`

function getHtml() {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ghub.io</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #24292f;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
  }

  .container {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 700px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .container {
      padding: 15px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 {
    font-size: 2em;
    border-bottom: 1px solid #d0d7de;
    padding-bottom: 0.3em;
  }

  h2 {
    font-size: 1.5em;
    border-bottom: 1px solid #d0d7de;
    padding-bottom: 0.3em;
  }

  a {
    color: #0969da;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  code {
    background-color: rgba(175,184,193,0.2);
    padding: 0.2em 0.4em;
    border-radius: 6px;
    font-size: 85%;
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  }

  pre {
    background-color: #f6f8fa;
    border-radius: 6px;
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
  }

  pre code {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    font-size: 100%;
  }

  ul, ol {
    padding-left: 2em;
  }

  p {
    margin-top: 0;
    margin-bottom: 16px;
  }
</style>
</head>
<body>
<div class="container">
  ${readmeContent}
</div>
</body>
</html>
`
}

export function getHomePage() {
  return new Response(getHtml(), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}