import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi';
import { personal, socialLinks } from '../../data/portfolioData';

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
      <div className="absolute top-20 -right-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-40 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl pointer-events-none" />

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
                Available for work
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="section-heading text-balance mt-2">
              Hi, I'm{' '}
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
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted border border-surface-200 bg-surface-0 hover:text-primary-500 hover:border-primary-300 hover:bg-primary-50 hover:scale-110 transition-all duration-200 shadow-card"
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — Avatar / illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-300 to-accent-300 opacity-20 blur-xl animate-pulse-slow" />

              {/* Avatar container */}
              <div className="animate-float relative">
                {/* Gradient border */}
                <div className="p-1 rounded-full bg-gradient-to-br from-primary-400 via-accent-400 to-primary-300 shadow-glow">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-100 to-accent-300/30 flex items-center justify-center overflow-hidden">
                    {personal.avatar ? (
                      <img src={personal.avatar} alt={personal.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-8xl font-black text-primary-300 select-none leading-none">
                          {personal.name.split(' ').map(n => n[0]).join('')}
                        </span>
                        <span className="text-primary-400 text-sm font-medium">Your photo here</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card px-3 py-2 flex items-center gap-2 border border-surface-200"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                >
                  <span className="text-lg">⚡</span>
                  <div>
                    <p className="text-xs font-bold text-text-primary leading-none">5+ Years</p>
                    <p className="text-xs text-text-muted">Experience</p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card px-3 py-2 flex items-center gap-2 border border-surface-200"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
                >
                  <span className="text-lg">🚀</span>
                  <div>
                    <p className="text-xs font-bold text-text-primary leading-none">30+ Projects</p>
                    <p className="text-xs text-text-muted">Delivered</p>
                  </div>
                </motion.div>
              </div>
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
