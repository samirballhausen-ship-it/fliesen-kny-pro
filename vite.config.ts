import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment - set base to repo name
  // Comment out for local dev or Vercel
  // base: '/fliesen-kny-pro/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    // Target older browsers including iOS Safari 14+
    target: ['es2020', 'safari14', 'chrome87', 'firefox78'],
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
