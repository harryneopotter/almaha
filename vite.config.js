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
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});
