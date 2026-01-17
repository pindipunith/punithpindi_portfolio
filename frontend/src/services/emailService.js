import emailjs from '@emailjs/browser';

// EmailJS Configuration
// To use this, you need to:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service
// 3. Create an email template
// 4. Get your Public Key from Account settings
// 5. Add these values to .env file

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export const sendEmail = async (formData) => {
  try {
    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      // For development/demo: simulate success
      console.log('EmailJS not configured. Using mock submission.');
      return { 
        success: true, 
        message: 'Message received! (Demo mode - configure EmailJS for production)' 
      };
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Punith Pindi',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return { 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      };
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Email send error:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try emailing directly at pindipunith444@gmail.com' 
    };
  }
};
