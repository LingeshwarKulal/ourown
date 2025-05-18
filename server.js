const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Debug: Print environment variables
console.log('Environment variables:', {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
  // Don't log the actual password
  DB_PASSWORD: process.env.DB_PASSWORD ? '****' : 'not set'
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ 
    status: 'error',
    message: 'Internal server error'
  });
});

// CORS configuration
app.use(cors({
  origin: ['http://localhost:5174', 'http://127.0.0.1:5174'], // Frontend URLs
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept']
}));

// Body parser middleware with size limits and error handling
app.use(express.json({
  limit: '10kb', // Limit body size
  strict: true // Strict JSON parsing
}));

// Handle JSON parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('JSON parsing error:', err);
    return res.status(400).json({ 
      status: 'error', 
      message: 'Invalid JSON format' 
    });
  }
  next();
});

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'success',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5002;

// More robust server startup
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Allowed origins:', ['http://localhost:5174', 'http://127.0.0.1:5174']);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please try a different port or close the application using this port.`);
  } else {
    console.error('Server startup error:', err);
  }
  process.exit(1);
}); 