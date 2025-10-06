import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set this to your subdirectory if not hosting on root domain
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable source maps for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          bootstrap: ['bootstrap']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase chunk size warning limit
  },
  server: {
    host: true, // This enables network access
    port: 5173, // Optional: specify port
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
