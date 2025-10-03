import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      include: ['**/*.{jsx,tsx,js,ts}', '**/*.spec.js'],
    })
  ],
  resolve: {
    alias: {
      '@prabhath-tharaka/html-editor': path.resolve(__dirname, './packages/html-editor/src/index.js'),
      '@prabhath-tharaka/html-editor/styles': path.resolve(__dirname, './packages/html-editor/src/components/editor/MultiPageEditor.css')
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      '**/tests/e2e/**', // Exclude Playwright e2e tests
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        'dist/',
        '**/*.config.js',
        '**/demo-app/**'
      ],
      include: [
        'packages/html-editor/src/**/*.{js,jsx}'
      ]
    }
  },
});