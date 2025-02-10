import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "suman-saha",
    project: "javascript-react"
  }),
  sentryVitePlugin({
    org: "suman-saha",
    project: "iphone15"
  }),
  sentryVitePlugin({
    org: "suman-saha",
    project: "iphone15"
  })],

  build: {
    sourcemap: true
  }
})