import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bolt-test/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
