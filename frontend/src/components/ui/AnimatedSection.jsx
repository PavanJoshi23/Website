import { motion } from 'framer-motion';

const directionMap = {
  up:    { opacity: 0, y: 32 },
  down:  { opacity: 0, y: -32 },
  left:  { opacity: 0, x: 32 },
  right: { opacity: 0, x: -32 },
  fade:  { opacity: 0 },
};

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
  const initial = directionMap[direction] ?? directionMap.up;

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
