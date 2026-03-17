import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SkillCard from '../ui/SkillCard';
import { skills } from '../../data/portfolioData';

const CATEGORIES = ['All', 'AI/ML', 'Frontend', 'Backend', 'DevOps'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden:  { opacity: 0, scale: 0.85, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, scale: 0.85, y: -10, transition: { duration: 0.2 } },
};

export default function Skills() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="bg-surface-50 scroll-mt-20">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-heading">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            A curated set of tools I use to bring ideas to life — from pixel-perfect frontends to scalable backends.
          </p>
        </AnimatedSection>

        {/* Category filter */}
        <AnimatedSection delay={0.1} className="flex justify-center mb-10">
          <div className="flex gap-2 p-1.5 bg-surface-100 rounded-2xl border border-surface-200">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  active === cat
                    ? 'text-white shadow-soft'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {active === cat && (
                  <motion.span
                    layoutId="skill-tab"
                    className="absolute inset-0 bg-primary-500 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            {filtered.map(skill => (
              <motion.div key={skill.name} variants={cardVariants}>
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
