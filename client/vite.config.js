import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
  proxy: {
    "/api": {
      target: "https://explore-projects.onrender.com",
      changeOrigin: true,
    },
    "/public": {
      target: "https://explore-projects.onrender.com",
      changeOrigin: true,
    },
  },
}
});
