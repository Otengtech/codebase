import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

// Define __dirname manually for ESM support
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      closeBundle() {
        const from = resolve(__dirname, 'public/_redirects');
        const to = resolve(__dirname, 'dist/_redirects');
        fs.copyFileSync(from, to);
      },
    },
  ],
  base: '/',
});
