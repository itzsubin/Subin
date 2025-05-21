import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';


dotenv.config();

const app = express();


app.use(helmet());

app.use(cors({
  origin: [process.env.CLIENT_URL || 'http://localhost:3000', 
  'https://*.vercel.app'],
  methods: ['GET', 'POST', 'OPTIONS'], //for preflight
  allowedHeaders: ['Content-Type'],
  credentials: true,
  optionsSuccessStatus: 200 
}));

app.use(morgan('dev'));


app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));


app.use('/api', contactRoutes);


app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date(),
    environment: process.env.NODE_ENV || 'development'
  });
});


app.use(errorHandler);

export default app;