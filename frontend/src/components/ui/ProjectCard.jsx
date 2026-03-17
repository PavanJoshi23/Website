import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronRight, FiClock, FiActivity } from 'react-icons/fi';
import { createPortal } from 'react-dom';

const gradientStyles = [
  { background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(109,40,217,0.08))' },
  { background: 'linear-gradient(135deg, rgba(109,40,217,0.1), rgba(139,92,246,0.18))' },
  { background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(91,33,182,0.1))' },
  { background: 'linear-gradient(135deg, rgba(91,33,182,0.08), rgba(139,92,246,0.14))' },
];

const statusColor = {
  'Completed':   { bg: 'rgba(34,197,94,0.12)',  border: 'rgba(34,197,94,0.3)',  text: '#4ade80' },
  'In Progress': { bg: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.3)', text: '#fbbf24' },
  'Archived':    { bg: 'rgba(161,161,166,0.1)', border: 'rgba(161,161,166,0.2)', text: '#a1a1a6' },
};

function ProjectModal({ project, onClose }) {
  const sc = statusColor[project.status] ?? statusColor['Archived'];

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Sheet */}
        <motion.div
          className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(22,22,23,0.95)',
            backdropFilter: 'blur(40px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.8)',
          }}
          initial={{ y: 60, opacity: 0, scale: 0.97 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        >
          {/* Header gradient strip */}
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #a78bfa, #7c3aed)' }} />

          <div className="p-6 sm:p-8">
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <FiX size={15} className="text-text-secondary" />
            </button>

            {/* Title + badges */}
            <h3 className="text-xl font-bold text-text-primary mb-3 pr-10">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.status && (
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text }}
                >
                  <FiActivity size={11} /> {project.status}
                </span>
              )}
              {project.duration && (
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1a6' }}
                >
                  <FiClock size={11} /> {project.duration}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-5">{project.description}</p>

            {/* Highlights */}
            {project.highlights?.length > 0 && (
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted mb-3">Highlights</p>
                <ul className="flex flex-col gap-2.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <FiChevronRight size={14} className="mt-0.5 flex-shrink-0 text-primary-500" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const gradientStyle = gradientStyles[index % gradientStyles.length];

  return (
    <>
      <motion.div
        className="card overflow-hidden group flex flex-col cursor-pointer"
        whileHover="hover"
        initial="rest"
        onClick={() => setOpen(true)}
      >
        {/* Image / preview area */}
        <div className="relative h-44 overflow-hidden flex-shrink-0" style={gradientStyle}>
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-black text-primary-400 select-none opacity-60">
                {project.title[0]}
              </span>
            </div>
          )}
          {/* Status badge on card */}
          {project.status && (() => {
            const sc = statusColor[project.status] ?? statusColor['Archived'];
            return (
              <span
                className="absolute top-3 right-3 text-[11px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text }}
              >
                {project.status}
              </span>
            );
          })()}
        </div>

        {/* Card body */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-base text-text-primary mb-1.5 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
              {project.tags.length > 3 && (
                <span className="tag-pill">+{project.tags.length - 3}</span>
              )}
            </div>
            <span className="text-xs font-medium text-primary-400 group-hover:text-primary-300 transition-colors flex items-center gap-1 flex-shrink-0 ml-2">
              Details <FiChevronRight size={13} />
            </span>
          </div>
        </div>
      </motion.div>

      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}
