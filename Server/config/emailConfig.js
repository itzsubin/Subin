import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const createTransporter = () => {
  // Validate required environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Missing email credentials in environment variables');
  }

  const config = {
    service: process.env.EMAIL_SERVICE || 'gmail',
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === 'production'
    }
  };

  return nodemailer.createTransport(config);
};

export const transporter = createTransporter();

// Verify connection with better error handling
transporter.verify()
  .then(() => {
    console.log('✅ Server is ready to send emails');
    console.log(`📧 Using email: ${process.env.EMAIL_USER}`);
    console.log(`⚙️  Environment: ${process.env.NODE_ENV || 'development'}`);
  })
  .catch(error => {
    console.error('❌ SMTP Connection Error:', error.message);
    console.log('ℹ️  Troubleshooting tips:');
    console.log('1. Verify your email credentials in .env file');
    console.log('2. Check if "Less secure app access" is enabled for Gmail');
    console.log('3. If using 2FA, ensure you created an App Password');
    console.log('4. Verify your firewall isn\'t blocking port 587 or 465');
  });