import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  define: {
    // Frozen at build time so the prerendered HTML and the hydrated client
    // always agree. new Date() in a component cannot promise that.
    __BUILD_YEAR__: JSON.stringify(String(new Date().getFullYear())),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
