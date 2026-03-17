import { FiArrowUp } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

export default function TimelineItem({ item, index, isLast }) {
  return (
    <AnimatedSection delay={index * 0.12}>
      <div className="relative flex gap-6">
        {/* Timeline line + dot */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className="w-4 h-4 rounded-full mt-1.5 flex-shrink-0 z-10"
            style={{
              background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
              boxShadow: '0 0 0 3px rgba(139,92,246,0.2), 0 0 0 6px rgba(139,92,246,0.06)',
            }}
          />
          {!isLast && (
            <div
              className="w-px flex-1 mt-1"
              style={{ background: 'linear-gradient(to bottom, rgba(139,92,246,0.4), rgba(139,92,246,0.08))' }}
            />
          )}
        </div>

        {/* Content */}
        <div className="card p-6 flex-1 mb-6">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-lg text-text-primary">{item.role}</h3>
                {item.promoted && (
                  <span
                    className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(139,92,246,0.15)',
                      border: '1px solid rgba(139,92,246,0.35)',
                      color: '#a78bfa',
                    }}
                  >
                    <FiArrowUp size={10} /> Promoted
                  </span>
                )}
              </div>
              <p className="text-primary-400 font-semibold text-sm mt-0.5">{item.company}</p>
            </div>
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
              style={{
                background: 'rgba(139,92,246,0.1)',
                border: '1px solid rgba(139,92,246,0.25)',
                color: '#c4b5fd',
              }}
            >
              {item.period}
            </span>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
