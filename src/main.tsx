/**
 * Renderer entry point. Vite loads this file into the "renderer" process.
 * By default, Node.js integration is disabled here.
 * https://electronjs.org/docs/tutorial/process-model
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root was not found in index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
