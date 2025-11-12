import { useEffect, useMemo, useState } from 'react';
import NavBar from './components/NavBar.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import ResumeSection from './sections/ResumeSection.jsx';
import ContactSection from './sections/ContactSection.jsx';

const sections = [
  { id: 'home', label: 'Home', component: HeroSection },
  { id: 'about', label: 'About', component: AboutSection },
  { id: 'projects', label: 'Projects', component: ProjectsSection },
  { id: 'resume', label: 'Resume', component: ResumeSection },
  { id: 'contact', label: 'Get in Touch', component: ContactSection },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sectionIds = useMemo(() => sections.map((section) => section.id), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <>
      <NavBar sections={sections} activeSection={activeSection} />
      <main>
        {sections.map(({ id, component: Component }) => (
          <section id={id} className="section" key={id}>
            <Component />
          </section>
        ))}
      </main>
    </>
  );
}

