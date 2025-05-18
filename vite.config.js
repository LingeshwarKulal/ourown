import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Uncomment this when backend is running
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:5001',
    //     changeOrigin: true,
    //     secure: false
    //   }
    // },
    // Mock API responses when backend is not running
    setupMiddleware: [
      function (app) {
        app.use('/api/health', (req, res) => {
          res.json({ 
            status: 'success',
            message: 'Frontend Only Mode - Backend API mocked',
            timestamp: new Date().toISOString()
          });
        });
        
        // Add other mock API endpoints here as needed
        app.use('/api/newsletter/subscribe', (req, res) => {
          res.json({ 
            status: 'success',
            message: 'Subscription successful (mocked response)',
          });
        });
        
        app.use('/api/contact', (req, res) => {
          res.json({ 
            message: 'Message sent successfully (mocked response)'
          });
        });
      }
    ]
  }
})
