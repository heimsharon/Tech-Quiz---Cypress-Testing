import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Vite configuration file for the React client app
// Includes Vitest config for unit/component testing and dev server settings

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true, // Use global test APIs (describe, it, etc.)
        environment: 'jsdom', // Simulate browser environment for tests
        setupFiles: './src/_tests_/setup.ts', // Setup file for test environment
    },
    server: {
        port: 3001, // Dev server runs on port 3001
        open: false, // Do not open browser automatically
        proxy: {
            '/api': {
                target: 'http://localhost:3001', // Proxy API requests to backend
                secure: false,
                changeOrigin: true,
            },
        },
    },
});
