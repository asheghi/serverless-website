import { escapeInject } from 'vite-plugin-ssr'

export function render() {
  // `div#app-root` is empty; the HTML is static.
  return escapeInject`<html>
    <head>
      <title>SPA</title>
    </head>
    <body>
      <div id="app"/>
    </body>
  </html>`
};
