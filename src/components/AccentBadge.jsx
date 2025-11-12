import { motion } from 'framer-motion';

export default function AccentBadge({ text }) {
  return (
    <motion.span
      className="accent-badge"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {text}
    </motion.span>
  );
}

