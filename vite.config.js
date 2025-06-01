import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shoppingreact",
  server: {
    port: process.env.PORT,
  },
  plugins: [react(), vercel()],
})
