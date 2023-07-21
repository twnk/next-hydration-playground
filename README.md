## Getting Started

First, run the production server:

```bash
npm run build && npm run start
```

Then, explore each of the hydration errors.

1. [Dynamic Ad Injection](http://localhost:3000/hydration-errors/dynamic-ad-injection)
2. [Inconsistent HTML->React Rendering](http://localhost:3000/hydration-errors/inconsistent-html-renderer)
3. [Minification](http://localhost:3000/hydration-errors/minification)
  - You can add `?safeInjection=true` [to the URL](http://localhost:3000/hydration-errors/minification?safeInjection=true) and make the error disappear. See if you can understand the difference.
4. [Bonus! Not Hydration](http://localhost:3000/hydration-errors/bonus), but similar principle.
  - Toggle `strictNextHead` from `false` to `true` in `next.config.js` and restart the server.