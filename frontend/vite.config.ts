import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: 
      //'/tickers': 'http://localhost:8080',
      //'/news': 'http://localhost:8080',
      //'/auth': 'http://localhost:8080',
      '/tickers': 'http://{34.22.108.245:8080',
      '/news': 'http://{34.22.108.245:8080',
      '/auth': 'http://{34.22.108.245:8080',
    }
  }
})
