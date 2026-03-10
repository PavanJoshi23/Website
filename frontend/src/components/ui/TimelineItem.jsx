import AnimatedSection from './AnimatedSection';

export default function TimelineItem({ item, index, isLast }) {
  return (
    <AnimatedSection delay={index * 0.12}>
      <div className="relative flex gap-6">
        {/* Timeline line + dot */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-4 h-4 rounded-full bg-primary-400 ring-4 ring-primary-100 mt-1.5 flex-shrink-0 z-10" />
          {!isLast && (
            <div className="w-0.5 flex-1 bg-gradient-to-b from-primary-300 to-primary-100 mt-1" />
          )}
        </div>

        {/* Content */}
        <div className="card p-6 flex-1 mb-8">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="font-bold text-lg text-text-primary">{item.role}</h3>
              <p className="text-primary-500 font-semibold text-sm mt-0.5">{item.company}</p>
            </div>
            <span className="bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-primary-100 whitespace-nowrap">
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
