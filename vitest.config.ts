import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        include: ['src/**/*.test.{js,ts,jsx,tsx}', '**/*.spec.{js,ts,jsx,tsx}'],
        exclude: ['node_modules', 'dist'],
        environment: 'jsdom',
        coverage: {
            provider: 'v8',
            extension: [".tsx"],
            reporter: ['text', 'json-summary', 'json'],
            reportsDirectory: './coverage',
        },
    },
});