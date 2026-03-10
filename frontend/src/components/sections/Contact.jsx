import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import AnimatedSection from '../ui/AnimatedSection';
import { personal, socialLinks } from '../../data/portfolioData';
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const iconMap = { FiGithub, FiLinkedin, FiTwitter };

const INIT_FORM = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INIT_FORM);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm(INIT_FORM);
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="bg-surface-0 scroll-mt-20">
      <div className="section-container">
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">

          {/* Left — Contact info */}
          <AnimatedSection direction="right" className="lg:col-span-2 flex flex-col gap-6">
            <div className="card p-6 flex flex-col gap-5">
              <h3 className="font-bold text-lg text-text-primary">Contact Information</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-primary-500" size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-0.5">Email</p>
                  <a href={`mailto:${personal.email}`} className="text-sm text-text-primary hover:text-primary-500 transition-colors font-medium">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-primary-500" size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-sm text-text-primary font-medium">{personal.location}</p>
                </div>
              </div>

              <div className="border-t border-surface-200 pt-5">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Follow Me</p>
                <div className="flex gap-2">
                  {socialLinks.map(link => {
                    const Icon = iconMap[link.icon];
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted border border-surface-200 hover:text-primary-500 hover:border-primary-300 hover:bg-primary-50 hover:scale-110 transition-all duration-200"
                      >
                        {Icon && <Icon size={17} />}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="card p-5 bg-gradient-to-br from-primary-50 to-accent-300/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-slow" />
                <span className="text-sm font-semibold text-primary-600">Available for hire</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                I'm currently open to full-time roles and interesting freelance projects.
                Response time is usually within 24 hours.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Pavan Joshi"
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      required
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration"
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={5}
                    className="input-field resize-none"
                  />
                </div>

                {/* Status message */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-xl p-3 text-sm font-medium"
                    >
                      <FiCheckCircle size={16} /> Message sent! I'll get back to you soon.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl p-3 text-sm font-medium"
                    >
                      <FiAlertCircle size={16} /> Something went wrong. Please try again or email directly.
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                    />
                  ) : (
                    <FiSend size={15} />
                  )}
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
