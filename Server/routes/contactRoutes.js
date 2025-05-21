import express from 'express';
import { sendContactEmail } from '../controllers/contactController.js';
import { contactRateLimiter } from '../middlewares/rateLimiter.js';

const router = express.Router();

router.post('/contact', contactRateLimiter, sendContactEmail);

export default router;