import { AngularNodeAppEngine, createNodeRequestHandler, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs';

// Path to the server's dist folder and browser folder
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

// Log the folder paths (optional for debugging)
console.log('Server dist folder path:', serverDistFolder);
console.log('Browser dist folder path:', browserDistFolder);

// Create the Express application and Angular Node App Engine instance
const app = express();
const angularApp = new AngularNodeAppEngine();

// Serve static files from the /browser folder (dist files)
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 * This is where SSR happens (using Angular SSR).
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

// Start the server if this module is the main entry point
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Export the request handler to be used by Netlify
export const handler = createNodeRequestHandler(app);
