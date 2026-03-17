import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard from '../ui/ProjectCard';
import { projects, pocs } from '../../data/portfolioData';
import { FiGithub } from 'react-icons/fi';

const TABS = [
  { id: 'projects', label: 'Projects' },
  { id: 'pocs',     label: 'POCs'     },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('projects');
  const items = activeTab === 'projects' ? projects : pocs;

  return (
    <section id="projects" className="bg-surface-0 scroll-mt-20">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Production-grade projects and experimental proofs of concept — each one built to learn or ship something real.
          </p>
        </AnimatedSection>

        {/* Tab switcher */}
        <AnimatedSection delay={0.1} className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-xl p-1"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer"
                style={{ color: activeTab === tab.id ? '#f5f5f7' : '#a1a1a6' }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(139,92,246,0.25)', border: '1px solid rgba(139,92,246,0.35)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {items.map((item, i) => (
              <motion.div key={item.id} variants={cardVariants}>
                <ProjectCard project={item} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatedSection delay={0.2} className="text-center mt-12">
          <a
            href="https://github.com/PavanJoshi23"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub size={16} /> View All on GitHub
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
