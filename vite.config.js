import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Add a plugin to run before the build to prevent Rollup errors
    {
      name: 'skip-rollup-native-warnings',
      enforce: 'pre',
      buildStart() {
        // Set environment variable to skip native module warnings
        process.env.ROLLUP_SKIP_NAPI_WARN = 'true';
      }
    }
  ],  server: {
    port: 5173,
    strictPort: false,
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
    // Prevent ad blockers from interfering with HMR/resource loading
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    sourcemap: true
  },
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
