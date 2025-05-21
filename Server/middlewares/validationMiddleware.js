export const validateContactForm = (data) => {
  const { name, email, message } = data;
  const errors = {};

  if (!name?.trim()) errors.name = 'Name is required';
  if (!email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email format';
  }
  if (!message?.trim()) errors.message = 'Message is required';

  return Object.keys(errors).length > 0 ? errors : null;
};