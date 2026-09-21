import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/PORTFOLIO/', // served at https://birla1cr.github.io/PORTFOLIO/
  plugins: [react(), tailwindcss()],
})
