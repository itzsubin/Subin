import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();


const requiredEnvVars = ['CLIENT_URL']; 
if (!process.env.VERCEL) {
  requiredEnvVars.forEach(varName => {
    if (!process.env[varName]) {
      console.error(`Missing required environment variable: ${varName}`);
      process.exit(1);
    }
  });
}


if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5055;
  
  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  })
  .on('error', (err) => {
    console.error('Server startup error:', err);
    process.exit(1);
  });


  process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Server closed');
    });
  });
}

export default app;