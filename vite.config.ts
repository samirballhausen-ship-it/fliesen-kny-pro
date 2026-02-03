import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// REMOVED legacy plugin - it was causing slow loading on iOS Safari
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    // Safari 15+ target (iOS 15 is from 2021, should cover most users)
    target: ['es2020', 'safari15', 'chrome90'],
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
