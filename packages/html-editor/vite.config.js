import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: /\.(jsx|js|tsx|ts)$/,
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'HTMLEditor',
      formats: ['es', 'umd'],
      fileName: (format) => `htmleditor.${format === 'es' ? 'es.js' : 'umd.cjs'}`
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit', 'uuid'],
      output: {
        // Provide global variables for UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-redux': 'ReactRedux',
          '@reduxjs/toolkit': 'RTK',
          uuid: 'uuid'
        }
      }
    },
    cssCodeSplit: false,
    sourcemap: true,
    emptyOutDir: true
  }
})
