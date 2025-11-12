import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';

const timeline = [
  {
    date: '2023 — Present',
    role: 'Lead ML Engineer · Synthesis Labs',
    summary:
      'Architected real-time personalization stack processing 6M profiles, reduced inference latency by 48%, published internal fairness playbook.',
  },
  {
    date: '2021 — 2023',
    role: 'Applied Scientist · Nova Systems',
    summary:
      'Productionized sequence models for risk scoring, launched drift monitoring dashboard, co-filed patent on adaptive feature stores.',
  },
  {
    date: '2018 — 2021',
    role: 'ML Researcher · Calyx Institute',
    summary:
      'Researched interpretable vision transformers, contributed to open-source explainability toolkit adopted by 30+ teams worldwide.',
  },
];

const certifications = [
  'AWS Certified Machine Learning – Specialty',
  'DeepLearning.AI · Practical Data Ethics',
  'MLOps: Model Deployment & Monitoring (Stanford CPD)',
];

export default function ResumeSection() {
  return (
    <div className="section__inner">
      <SectionHeading
        eyebrow="Resume"
        title="Experience and credentials"
        description="A trajectory centered on production ML systems, responsible AI, and mentorship."
      />
      <div className="resume">
        <div className="resume__timeline">
          {timeline.map(({ date, role, summary }) => (
            <motion.article
              key={role}
              className="resume__item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="resume__date">{date}</span>
              <h3>{role}</h3>
              <p>{summary}</p>
            </motion.article>
          ))}
        </div>
        <motion.div
          className="resume__sidebar"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <h4>Certifications</h4>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            className="button button--primary resume__cta"
            href="https://example.com/noor-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download full resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}

