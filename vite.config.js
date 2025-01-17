import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
// import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), mdx()],
});
