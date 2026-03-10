import AnimatedSection from '../ui/AnimatedSection';
import TimelineItem from '../ui/TimelineItem';
import { experience } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="bg-surface-50 scroll-mt-20">
      <div className="section-container">
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag">Career</span>
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            My professional journey — building products, leading teams, and growing as an engineer.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {experience.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
