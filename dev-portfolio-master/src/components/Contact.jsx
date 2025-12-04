// src/components/Contact.jsx
import React, { useState } from 'react';
import './contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_KEY, // secure key from .env
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus('Message sent successfully! ✅');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again ❌');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Something went wrong. Please try again ❌');
    }

    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="contact-section section-content-container">
      <div className="contact-card">
        <h2 className="get-in-touch-title">Get in Touch</h2>

        {/* Contact Details */}
        <div className="details-box">
          <h3 className="details-title">My details</h3>

          <p className="detail-line">
            <strong>Email:</strong>
            <br />
            <a className="contact-link" href="mailto:sinchananaik174@gmail.com">
              sinchananaik174@gmail.com
            </a>
          </p>

          <p className="detail-line">
            <strong>Phone:</strong>
            <br />
            <a className="contact-link" href="tel:+919019156772">
              +91 90191 56772
            </a>
          </p>

          <p className="detail-line">
            <strong>Location:</strong>
            <br />
            Yellapur, Karnataka, India
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h3 className="form-title">Send me a message</h3>

          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              required
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="send-btn">
            Send Message
          </button>

          {status && <p className="send-status">{status}</p>}
        </form>
      </div>
    </div>
  );
}
