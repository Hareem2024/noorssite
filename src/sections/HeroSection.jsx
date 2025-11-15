import { motion } from 'framer-motion';
import RubiksCube from '../components/RubiksCube.jsx';

export default function HeroSection() {
  return (
    <div className="hero">
      <motion.div
        className="hero__card"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <h1>
          <span className="hero__line hero__line--primary">Hi, I'm <span>Noor</span> !</span>
          <span className="hero__line">I'm an <span>AI Engineer</span></span>
          <span className="hero__line">Based in <span>Hamburg</span></span>
        </h1>
        <p>
          I build machine learning systems that are reliable, scalable, and deeply user-focused.
        </p>
        <div className="hero__cta">
          <a className="button button--primary" href="#projects">
            View Projects
          </a>
          <a className="button button--ghost" href="#contact">
            Collaborate
          </a>
        </div>
      </motion.div>
      <motion.div
        className="hero__visual"
        initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
      >
        <RubiksCube />
      </motion.div>
    </div>
  );
}

