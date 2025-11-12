import { motion } from 'framer-motion';
import AccentBadge from '../components/AccentBadge.jsx';
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
        <AccentBadge text="Machine Learning Architect" />
        <h1>
          <span className="hero__line hero__line--primary">Architecting machine</span>
          <span className="hero__line">learning pipelines</span>
          <span className="hero__line">
            with <span>precision</span>.
          </span>
        </h1>
        <p>
          Noor is a machine learning engineer focused on turning research breakthroughs into polished,
          human-centered experiences. From model ideation to production inference, I design pipelines
          that balance precision, ethics, and delight.
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

