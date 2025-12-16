import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Cette ligne est cruciale pour que GitHub Pages trouve vos fichiers
  // Si votre dépôt s'appelle "madilium-site", mettez base: '/madilium-site/'
  // Sinon, essayez './' pour un chemin relatif simple.
  base: './', 
})