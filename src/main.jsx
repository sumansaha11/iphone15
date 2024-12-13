import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://5374553db04762a926b195f84ad640ac@o4508448463650816.ingest.de.sentry.io/4508448989184080",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)