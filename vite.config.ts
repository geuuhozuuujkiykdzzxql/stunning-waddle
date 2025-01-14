import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/stunning-waddle/",
  plugins: [react()],
  build: {
    copyPublicDir: false,
  },
  // assetsInclude: [
  //   '**/*.jpg',
  // ],
})
