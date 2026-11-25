import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const backendUrl = (env.VITE_API_URL || 'http://localhost:4000').replace(/\/$/, '');
  const proxy = {
    target: backendUrl,
    changeOrigin: true,
  };

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': proxy,
        '/auth': proxy,
        '/slack': proxy,
        '/admin': proxy,
      },
    },
  };
});
