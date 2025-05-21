import { transporter } from '../config/emailConfig.js';
import { validateContactForm } from '../middlewares/validationMiddleware.js';
import { sanitizeInput } from '../utils/sanitize.js';
import { successResponse, errorResponse } from '../utils/responseHandler.js';

export const sendContactEmail = async (req, res) => {
  try {
   
    const validationError = validateContactForm(req.body);
    if (validationError) {
      return errorResponse(res, 400, validationError);
    }

    
    const { name, email, message } = sanitizeInput(req.body);

   
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

   
    await transporter.sendMail(mailOptions);
    successResponse(res, 200, 'Message sent successfully!');

  } catch (error) {
    console.error('Email sending error:', error);
    errorResponse(res, 500, 'Failed to send message');
  }
};