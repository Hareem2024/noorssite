import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';

export default function ContactSection() {
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
        <form className="contact__form">
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Ada Lovelace" type="text" />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" placeholder="ada@lab.ai" type="email" />
          </div>
          <div className="form__group">
            <label htmlFor="topic">Project focus</label>
            <select id="topic" name="topic" defaultValue="ml-product">
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
            />
          </div>
          <button className="button button--primary" type="submit">
            Send message
          </button>
        </form>
      </motion.div>
      <footer className="contact__footer">
        <span>© {new Date().getFullYear()} Noor. Crafted with curiosity and care.</span>
      </footer>
    </div>
  );
}

