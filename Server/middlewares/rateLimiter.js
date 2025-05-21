import rateLimit from 'express-rate-limit';

export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit Ip to request 5 per window 
  message: 'Too many contact attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false
});