import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './Common/Theme/ThemeContext';
import { ErrorBoundary } from 'react-error-boundary';
import Cursor from './Common/Cursor/cursor';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error-fallback">
      <h2>Something went wrong</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <ThemeProvider>
        <Cursor />
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);