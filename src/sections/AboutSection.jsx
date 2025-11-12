import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';

const highlights = [
  {
    title: 'Model Strategy',
    description:
      'I design experimentation roadmaps, quantify uncertainty, and align system architecture to product intent.',
  },
  {
    title: 'Ethical Deployment',
    description:
      'Inclusive datasets, bias audits, and model governance frameworks keep ML trustworthy and human-first.',
  },
  {
    title: 'Scalable MLOps',
    description:
      'From feature stores to CI/CD for models, I craft resilient pipelines that keep inference fast and observable.',
  },
];

export default function AboutSection() {
  return (
    <motion.div
      className="section__inner"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <SectionHeading eyebrow="About" title="Who I am" />
      <div className="about">
        <div className="about__profile">
          <p>
            I&apos;m Noor, a machine learning specialist shaping adaptive products for the next decade.
            My approach balances algorithmic rigor with storytelling—helping teams understand how models
            learn, behave, and evolve. I build with Python, TensorFlow, PyTorch, and cloud-native stacks
            across AWS and GCP.
          </p>
          <p>
            When I&apos;m not training models, I mentor emerging ML practitioners and co-host a monthly
            reading group unpacking responsible AI research.
          </p>
        </div>
        <div className="about__highlights">
          {highlights.map(({ title, description }) => (
            <motion.article
              key={title}
              className="about__card"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            >
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

