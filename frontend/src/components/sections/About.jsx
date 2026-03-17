import AnimatedSection from '../ui/AnimatedSection';
import { personal, stats } from '../../data/portfolioData';
import { FiMapPin, FiMail } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="bg-surface-0 scroll-mt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — Avatar / image */}
          <AnimatedSection direction="right">
            <div className="relative flex justify-center">
              {/* Decorative blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-accent-500/5 rounded-3xl rotate-3 scale-105" />

              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary-400 via-accent-400 to-primary-300 shadow-soft-lg">
                <div className="w-full aspect-square max-w-sm rounded-[22px] bg-gradient-to-br from-primary-900/60 to-surface-100 flex items-center justify-center overflow-hidden">
                  {personal.avatar ? (
                    <img src={personal.avatar} alt={personal.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center gap-4 p-8">
                      <span className="text-9xl font-black text-primary-400 select-none leading-none">
                        {personal.name.split(' ').map(n => n[0]).join('')}
                      </span>
                      <span className="text-primary-400 text-sm font-medium text-center">
                        Replace with your profile photo
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Content */}
          <div className="flex flex-col gap-6">
            <AnimatedSection delay={0.1}>
              <span className="section-tag">About Me</span>
              <h2 className="section-heading">
                Building <span className="gradient-text">AI systems</span> that actually work
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-text-secondary leading-relaxed">{personal.bio}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-8 h-8 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-primary-500" size={15} />
                  </div>
                  <span className="text-sm">{personal.location}</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-8 h-8 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-primary-500" size={15} />
                  </div>
                  <a href={`mailto:${personal.email}`} className="text-sm hover:text-primary-500 transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Stats grid */}
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-surface-0 rounded-2xl p-4 text-center border border-surface-200 hover:border-primary-700 hover:bg-primary-900/30 transition-all duration-200"
                  >
                    <p className="text-2xl font-bold gradient-text leading-none mb-1">{stat.value}</p>
                    <p className="text-xs text-text-muted font-medium leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
