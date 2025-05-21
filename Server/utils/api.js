// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://your-production-api.com' 
    : 'http://localhost:5055',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;