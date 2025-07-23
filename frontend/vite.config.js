import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // poll for changes every 100 ms instead of relying on native FS events
      usePolling: true,
      interval: 100,
      // wait for the file to finish writing before triggering reload
      awaitWriteFinish: {
        stabilityThreshold: 200,
        pollInterval: 100,
      },
    },
    hmr: {
      overlay: true,
    },
  },
})
