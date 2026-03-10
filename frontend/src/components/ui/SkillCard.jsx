import { motion } from 'framer-motion';
import * as Si from 'react-icons/si';

export default function SkillCard({ skill }) {
  const IconComponent = Si[skill.icon];

  return (
    <motion.div
      className="card p-5 flex flex-col items-center gap-3 group cursor-default"
      whileHover={{ scale: 1.06, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <div
        className="text-4xl transition-transform duration-300 group-hover:scale-110"
        style={{ color: skill.color }}
      >
        {IconComponent ? <IconComponent /> : <span className="text-2xl font-bold">{skill.name[0]}</span>}
      </div>
      <span className="text-sm font-semibold text-text-secondary group-hover:text-primary-500 transition-colors duration-200 text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}
