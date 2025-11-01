import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@amcharts/amcharts4/core': '@amcharts/amcharts4/core.js',
      '@amcharts/amcharts4/maps': '@amcharts/amcharts4/maps.js',
      '@amcharts/amcharts4-geodata': '@amcharts/amcharts4-geodata',
    }
  },
  optimizeDeps: {
    include: [
      '@amcharts/amcharts4/core',
      '@amcharts/amcharts4/maps',
      '@amcharts/amcharts4-geodata/worldIndiaUltra',
      '@amcharts/amcharts4-geodata/indiaHigh',
      'pdfjs-dist/legacy/build/pdf',
      'pdfjs-dist/legacy/build/pdf.worker.entry'
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          maps: ['@amcharts/amcharts4/core', '@amcharts/amcharts4/maps'],
          pdf: ['pdfjs-dist', 'pdfjs-dist/build/pdf.worker.mjs']
        }
      }
    }
  }
});

