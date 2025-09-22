import { getRepo } from './lib/get-repo-worker.js'
import { getHomePage } from './lib/home-worker.js'

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // Handle favicon
    if (url.pathname === '/favicon.ico') {
      return new Response(null, { status: 404 })
    }

    // Handle home page
    if (url.pathname === '/') {
      return getHomePage()
    }

    // Handle package redirects
    const packageName = url.pathname.replace(/^\//, '')

    if (packageName) {
      const repoUrl = await getRepo(packageName)

      // Log request data in production
      if (env.NODE_ENV === 'production') {
        console.log(`query: ${JSON.stringify({
          name: packageName,
          domain: url.hostname,
          headers: Object.fromEntries(request.headers),
          date: new Date().toISOString()
        })}`)
      }

      return Response.redirect(repoUrl, 302)
    }

    return new Response('Not Found', { status: 404 })
  }
}