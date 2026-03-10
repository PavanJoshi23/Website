import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const gradientStyles = [
  { background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(109,40,217,0.08))' },
  { background: 'linear-gradient(135deg, rgba(109,40,217,0.1), rgba(139,92,246,0.18))' },
  { background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(91,33,182,0.1))' },
  { background: 'linear-gradient(135deg, rgba(91,33,182,0.08), rgba(139,92,246,0.14))' },
];

export default function ProjectCard({ project, index }) {
  const gradientStyle = gradientStyles[index % gradientStyles.length];

  return (
    <motion.div
      className="card overflow-hidden group flex flex-col"
      whileHover="hover"
      initial="rest"
    >
      {/* Image / preview area */}
      <div className="relative h-48 overflow-hidden flex-shrink-0" style={gradientStyle}>
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-black text-primary-400 select-none">
              {project.title[0]}
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-primary-900/70 backdrop-blur-sm flex items-center justify-center gap-3"
          variants={{
            rest:  { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.25 }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4"
            onClick={e => project.liveUrl === '#' && e.preventDefault()}
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-900 font-semibold rounded-xl text-sm hover:bg-white transition-colors"
            onClick={e => project.repoUrl === '#' && e.preventDefault()}
          >
            <FiGithub size={14} /> Code
          </a>
        </motion.div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-text-primary mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
