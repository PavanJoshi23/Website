import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi';
import { personal, socialLinks } from '../../data/portfolioData';
import AIChatWidget from '../ui/AIChatWidget';

const iconMap = { FiGithub, FiLinkedin, FiTwitter };

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface-50 scroll-mt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-20 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(139,92,246,0.12)' }} />
      <div className="absolute bottom-20 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(139,92,246,0.07)' }} />

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={itemVariants}>
              <span className="section-tag">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse-slow" />
                Open to collaborate
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="section-heading text-balance mt-2">
              Hola, I'm{' '}
              <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl font-semibold text-text-secondary mb-4">
              {personal.title}
            </motion.p>

            <motion.p variants={itemVariants} className="text-text-secondary leading-relaxed max-w-lg mb-8 text-balance">
              {personal.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <a href={personal.resumeUrl} className="btn-primary">
                <FiDownload size={16} /> Download Resume
              </a>
              <button onClick={() => scrollTo('contact')} className="btn-outline">
                <FiMail size={16} /> Contact Me
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {socialLinks.map(link => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted border border-surface-200 bg-surface-0 hover:text-primary-400 hover:border-primary-700 hover:bg-primary-900/40 hover:scale-110 transition-all duration-200 shadow-card"
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — AI Chat Widget */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md">
              <AIChatWidget />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-primary-500 transition-colors cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
