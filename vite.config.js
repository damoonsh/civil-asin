import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/civil-asin/', // Replace with your repository name
  plugins: [react()],
});
