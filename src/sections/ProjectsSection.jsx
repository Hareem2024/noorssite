import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';

const projects = [
  {
    name: 'Signal Atlas',
    flavor: 'Multimodal forecasting platform',
    description:
      'Designed a graph neural network that fuses satellite imagery and tabular telemetry to anticipate supply-chain anomalies with 92% F1.',
    stack: ['PyTorch Geometric', 'Airflow', 'AWS SageMaker'],
    link: 'https://example.com/signal-atlas',
  },
  {
    name: 'Lumen Copilot',
    flavor: 'Responsible ML assistant',
    description:
      'Built a governance layer for LLM-powered workflows with automated prompt evaluation, bias heuristics, and audit trails.',
    stack: ['LangChain', 'Weights & Biases', 'FastAPI'],
    link: 'https://example.com/lumen-copilot',
  },
  {
    name: 'Percept Studio',
    flavor: 'Real-time NLP analytics',
    description:
      'Implemented streaming sentiment and topic detection over 2M events/min using distillation, quantization, and ONNX runtime.',
    stack: ['TensorFlow', 'Kafka', 'ONNX'],
    link: 'https://example.com/percept-studio',
  },
];

export default function ProjectsSection() {
  return (
    <div className="section__inner">
      <SectionHeading
        eyebrow="Projects"
        title="Selected machine learning builds"
        description="A sample of production-focused systems and research explorations."
      />
      <div className="projects">
        {projects.map(({ name, flavor, description, stack, link }, index) => (
          <motion.article
            key={name}
            className="projects__card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
          >
            <div className="projects__header">
              <h3>{name}</h3>
              <span>{flavor}</span>
            </div>
            <p>{description}</p>
            <ul className="projects__stack">
              {stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <a className="projects__link" href={link} target="_blank" rel="noreferrer">
              Explore → 
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

