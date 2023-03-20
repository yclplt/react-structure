import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3535,
    host: true,
    open: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  }
})
