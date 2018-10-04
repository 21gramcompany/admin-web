import NuxtServer from './core/NuxtServer';
import routes from './routes'

/** Nuxt.js with Express, Typescript
 * Nuxt.js
 * https://nuxtjs.org/
 *
 * Express
 * http://expressjs.com/
 *
 * Typescript
 * https://www.typescriptlang.org/
 */
NuxtServer.getInstance().run(routes);
