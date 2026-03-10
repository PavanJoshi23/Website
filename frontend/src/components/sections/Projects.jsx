import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/portfolioData';
import { FiGithub } from 'react-icons/fi';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-surface-0 scroll-mt-20">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            A selection of projects I've built — from SaaS platforms to developer tools. Each one solving a real problem.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.2} className="text-center mt-12">
          <a
            href="https://github.com/pavanjoshi"
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
