# nconnect

## Entrypoints

On this directory you will see *entrypoints* for the code. WebPack uses the these to transpile and create ES5 bundles (e.g. `dist/assets/js/main.js`, `dist/assets/js/vendor.js`, `dist/assets/js/polyfills.js` and `dist/assets/js/server.js`).

- `main.ts` is the main application (frontend)
- `index.html` is the SPA (single page app) HTML
- `vendor.ts` contains the dependencies for libraries to be bundled
- `polyfills.ts` contains the dependencies for polyfills
- `server.ts` is the NodeJS backend

# Subdirectories

- `app/` contains frontend-only code parts
- `models/` contains models shared with frontend and backend
- `backend/` contains the backend code
- `styles/` contains shared SCSS files


