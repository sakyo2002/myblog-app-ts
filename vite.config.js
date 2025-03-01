import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/material', '@mui/icons-material'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@mui/icons-material': path.resolve(__dirname, 'node_modules/@mui/icons-material/esm'), // 絶対パスに変更
    },
  },
});