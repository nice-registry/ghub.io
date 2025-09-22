import githubUrlToObject from 'github-url-to-object'

export async function getRepo(name) {
  try {
    // Fetch package.json from unpkg.com
    const response = await fetch(`https://unpkg.com/${encodeURIComponent(name)}/package.json`)

    if (!response.ok) {
      // Package not found or other error, redirect to npm
      return `https://npmjs.com/package/${name}`
    }

    const packageData = await response.json()
    const repository = packageData.repository

    if (!repository) {
      // No repository field, redirect to npm
      return `https://npmjs.com/package/${name}`
    }

    let repoUrl
    if (typeof repository === 'string') {
      repoUrl = repository
    } else if (repository.url) {
      repoUrl = repository.url
    } else {
      // Invalid repository format, redirect to npm
      return `https://npmjs.com/package/${name}`
    }

    // Handle shorthand GitHub repo format (e.g., "expressjs/express")
    if (repoUrl && !repoUrl.startsWith('http') && !repoUrl.startsWith('git')) {
      // Assume it's a GitHub shorthand
      repoUrl = `https://github.com/${repoUrl}`
    }

    // Use github-url-to-object to sanitize and normalize the URL
    const githubInfo = githubUrlToObject(repoUrl)
    if (githubInfo && githubInfo.https_url) {
      return githubInfo.https_url
    }

    // If not a GitHub URL, try basic sanitization
    // Convert git+ URLs to https URLs
    if (repoUrl.startsWith('git+')) {
      repoUrl = repoUrl.substring(4) // Remove 'git+' prefix
    }

    // Convert git:// to https://
    if (repoUrl.startsWith('git://')) {
      repoUrl = repoUrl.replace('git://', 'https://')
    }

    // Remove .git suffix if present
    if (repoUrl.endsWith('.git')) {
      repoUrl = repoUrl.slice(0, -4)
    }

    // Ensure it's a valid URL
    try {
      new URL(repoUrl)
      return repoUrl
    } catch {
      // Invalid URL, redirect to npm
      return `https://npmjs.com/package/${name}`
    }

  } catch (error) {
    console.error('Error fetching package data:', error)
    return `https://npmjs.com/package/${name}`
  }
}