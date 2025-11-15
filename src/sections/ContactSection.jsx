import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'ml-product',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Determine API endpoint based on environment
      const apiUrl = import.meta.env.VITE_API_URL || '/api/send-email';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          topic: formData.topic,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        topic: 'ml-product',
        message: '',
      });
    } catch (error) {
      console.error('Email sending error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly at noorejaz576@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section__inner contact">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let’s collaborate"
        description="Tell me about the product you’re shaping, the research you’re pushing, or the community you’re empowering."
      />
      <motion.div
        className="contact__card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="contact__details">
          <p>
            I&apos;m available for consulting, advisory roles, and speaking engagements focused on
            machine learning systems, responsible AI, and technical storytelling.
          </p>
          <ul>
            <li>
              <span>Email</span>
              <a href="mailto:hello@noor.ai">hello@noor.ai</a>
            </li>
            <li>
              <span>Calendly</span>
              <a href="https://calendly.com/noor-ml">Book a 30 minute session</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href="https://linkedin.com/in/noor-ml">linkedin.com/in/noor-ml</a>
            </li>
          </ul>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          {status.message && (
            <div
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                backgroundColor:
                  status.type === 'success'
                    ? 'rgba(39, 211, 177, 0.15)'
                    : 'rgba(255, 87, 87, 0.15)',
                color:
                  status.type === 'success'
                    ? 'var(--text-primary)'
                    : 'var(--text-primary)',
                border: `1px solid ${
                  status.type === 'success'
                    ? 'rgba(39, 211, 177, 0.3)'
                    : 'rgba(255, 87, 87, 0.3)'
                }`,
              }}
            >
              {status.message}
            </div>
          )}
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Ada Lovelace"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="ada@lab.ai"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="topic">Project focus</label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
            >
              <option value="ml-product">ML Product Strategy</option>
              <option value="research">Research Collaboration</option>
              <option value="speaking">Speaking Engagement</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="message">How can I help?</label>
            <textarea
              id="message"
              name="message"
              placeholder="Share context, goals, and timelines…"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="button button--primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </motion.div>
      <footer className="contact__footer">
        <span>© {new Date().getFullYear()} Noor. Crafted with curiosity and care.</span>
      </footer>
    </div>
  );
}

