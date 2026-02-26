import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = env.VITE_SITE_URL || 'https://meet.andrewrichards.net';

  return {
    plugins: [
      react(),
      {
        name: 'html-inject-site-url',
        transformIndexHtml(html: string) {
          return html.replace(/__SITE_URL__/g, siteUrl);
        },
      },
    ],
    optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  };
});
