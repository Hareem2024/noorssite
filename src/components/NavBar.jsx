import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function NavBar({ sections, activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
    >
      <a href="#home" className="navbar__brand" onClick={(event) => handleNavClick(event, 'home')}>
        <span className="navbar__brand-icon" aria-hidden="true">
          <span className="navbar__brand-node navbar__brand-node--primary" />
          <span className="navbar__brand-node navbar__brand-node--secondary" />
          <span className="navbar__brand-bridge" />
        </span>
        <span className="navbar__brand-text">Noor · ML Engineer</span>
      </a>
      <div className="navbar__links">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`navbar__link ${activeSection === id ? 'navbar__link--active' : ''}`}
            onClick={(event) => handleNavClick(event, id)}
            type="button"
          >
            <span>{label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
}

