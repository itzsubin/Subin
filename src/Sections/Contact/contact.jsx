import { useState, useEffect } from 'react';
import styles from './contactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  
  const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;


  useEffect(() => {
    let timer;
    if (submitStatus === 'success') {
      timer = setTimeout(() => setSubmitStatus(null), 10000);
    }
    return () => clearTimeout(timer);
  }, [submitStatus]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const accessKey = WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error('Web3Forms access key is missing');
      setSubmitStatus('error');
      return;
    }

    console.log('Submitting with access key:', accessKey);

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: 'New Contact Form Submission from Portfolio'
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error(result.message || 'Submission failed');
      }
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className={styles.container} aria-labelledby="contact-heading">
      <div className={styles.info}>
        <h1 id="contact-heading" className={styles.title}>Contact Me</h1>
        <p>Feel free to reach out for collaborations or questions!</p>
      </div>
      

      <form 
        onSubmit={handleSubmit} 
        className={styles.contactForm} 
        noValidate
        aria-label="Contact form"
      >

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name <span className={styles.required} aria-hidden="true"></span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.error : ''}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            required
          />
          {errors.name && (
            <span id="name-error" className={styles.errorMessage} role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email <span className={styles.required} aria-hidden="true"></span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email && (
            <span id="email-error" className={styles.errorMessage} role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message <span className={styles.required} aria-hidden="true"></span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            required
          />
          {errors.message && (
            <span id="message-error" className={styles.errorMessage} role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <button 
          type="submit" 
          className={styles.submitBtn}
          disabled={isSubmitting}
          aria-live="polite"
        >
          {isSubmitting ? (
            <>
              <span className={styles.spinner} aria-hidden="true"></span>
              <span>Sending...</span>
            </>
          ) : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className={styles.successMessage} role="alert">
            <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
              <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
            </svg>
            <p>Thank you for your message! I'll get back to you soon.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className={styles.errorMessage} role="alert">
            <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
              <path fill="currentColor" d="M13 13H11V7H13M13 17H11V15H13M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2Z" />
            </svg>
            <p>
              Failed to send message. Please try again or email me directly at{' '}
              <a href="mailto:subinghimire51@gmail.com" className={styles.emailLink}>
                subinghimire51@gmail.com
              </a>
            </p>
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;