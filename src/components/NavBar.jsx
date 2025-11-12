import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar({ sections, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      >
        <a href="#home" className="navbar__brand navbar__brand--desktop" onClick={(event) => handleNavClick(event, 'home')}>
          <span className="navbar__brand-icon" aria-hidden="true">
            <span className="navbar__brand-node navbar__brand-node--primary" />
            <span className="navbar__brand-node navbar__brand-node--secondary" />
            <span className="navbar__brand-bridge" />
          </span>
          <span className="navbar__brand-text">Noor · ML Engineer</span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar__links navbar__links--desktop">
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

        {/* Mobile Hamburger Button */}
        <button
          className={`navbar__hamburger ${mobileMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="navbar__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Dropdown Menu */}
            <motion.div
              className="navbar__mobile-menu"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {sections.map(({ id, label }, index) => (
                <motion.button
                  key={id}
                  className={`navbar__mobile-link ${activeSection === id ? 'navbar__mobile-link--active' : ''}`}
                  onClick={(event) => handleNavClick(event, id)}
                  type="button"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {label}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}