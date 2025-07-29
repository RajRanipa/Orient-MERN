import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
    open: true, // opens report automatically
    gzipSize: true,
    brotliSize: true,
    filename: 'bundle-report.html',
  }),
  ],
})
