import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  optimizeDeps: {
    include: ['@mui/material', '@mui/icons-material'],
  },
  resolve: {
    alias: {
      '@mui/icons-material': path.resolve(__dirname, 'node_modules/@mui/icons-material/esm'), // 絶対パスに変更
=======
  resolve: {
    alias: {
      '@mui/material': path.resolve(__dirname, 'node_modules/@mui/material'),
      '@mui/icons-material': path.resolve(__dirname, 'node_modules/@mui/icons-material'),
>>>>>>> 21159d915c06a4a0fc6b953d6866fe6392abf34b
    },
  },
});