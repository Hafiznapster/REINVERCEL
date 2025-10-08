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
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3, // Multiple passes for better compression
        unsafe: true, // Enable unsafe optimizations
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        dead_code: true, // Remove dead code
        unused: true // Remove unused variables
      },
      mangle: {
        toplevel: true,
        safari10: true
      }
    },
    cssCodeSplit: true, // Enable CSS code splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // More aggressive code splitting for better performance
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            if (id.includes('bootstrap')) {
              return 'bootstrap';
            }
            if (id.includes('firebase')) {
              return 'firebase';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('@emailjs')) {
              return 'emailjs';
            }
            if (id.includes('react-hook-form')) {
              return 'forms';
            }
            if (id.includes('react-quill')) {
              return 'editor';
            }
            return 'vendor';
          }
          // Split pages into separate chunks
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1].split('/')[0];
            return `page-${pageName}`;
          }
          // Split components
          if (id.includes('/components/')) {
            return 'components';
          }
          // Split services
          if (id.includes('/services/')) {
            return 'services';
          }
          // Split utils
          if (id.includes('/utils/')) {
            return 'utils';
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    },
    chunkSizeWarningLimit: 500, // Reduce chunk size warning limit
    target: 'es2015', // Target modern browsers for better optimization
    reportCompressedSize: false // Disable compressed size reporting for faster builds
  },
  server: {
    host: true, // This enables network access
    port: 5173, // Optional: specify port
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom']
  },
  esbuild: {
    target: 'es2015',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  }
});
