import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // On retire la ligne "base" car tu es sur un domaine principal (madilium.com)
})