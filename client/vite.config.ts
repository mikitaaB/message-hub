import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    envDir: path.resolve(__dirname, '..'),
  }
})
