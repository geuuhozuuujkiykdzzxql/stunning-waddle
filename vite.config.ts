import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/stunning-waddle/",
  plugins: [react()],
  build: {
    copyPublicDir: false,
  },
  assetsInclude: [
    '/all_grades_goals_forms_solutions/*/*/*.*',
    '/grade_22_goals_forms_solutions/*/*/*.*',
  ],
})
