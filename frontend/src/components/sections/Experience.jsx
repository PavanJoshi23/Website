import AnimatedSection from '../ui/AnimatedSection';
import { experience } from '../../data/portfolioData';
import { FiBriefcase, FiArrowUp } from 'react-icons/fi';

// Group consecutive roles by company
function groupByCompany(items) {
  const groups = [];
  for (const item of items) {
    const last = groups[groups.length - 1];
    if (last && last.company === item.company) {
      last.roles.push(item);
    } else {
      groups.push({ company: item.company, roles: [item] });
    }
  }
  return groups;
}

function CompanyInitial({ company }) {
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-black text-white select-none"
      style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)' }}
    >
      {company[0]}
    </div>
  );
}

export default function Experience() {
  const groups = groupByCompany(experience);

  return (
    <section id="experience" className="bg-surface-50 scroll-mt-20">
      <div className="section-container">
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag">Career</span>
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            My professional journey — building products and growing as an engineer.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {groups.map((group, gi) => (
            <AnimatedSection key={group.company} delay={gi * 0.15}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Company header */}
                <div
                  className="flex items-center gap-4 px-6 py-5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <CompanyInitial company={group.company} />
                  <div>
                    <p className="font-bold text-text-primary text-base leading-tight">{group.company}</p>
                    <p className="text-text-muted text-xs mt-0.5 flex items-center gap-1.5">
                      <FiBriefcase size={11} />
                      {group.roles.length > 1
                        ? `${group.roles.length} roles`
                        : group.roles[0].role}
                    </p>
                  </div>
                </div>

                {/* Roles */}
                <div className="px-6 py-2">
                  {group.roles.map((role, ri) => (
                    <div key={role.id} className="flex gap-4 py-5 relative">
                      {/* Left connector line between roles */}
                      {group.roles.length > 1 && (
                        <div className="flex flex-col items-center flex-shrink-0 w-5">
                          <div
                            className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0"
                            style={{ background: ri === 0 ? '#a78bfa' : 'rgba(139,92,246,0.4)' }}
                          />
                          {ri < group.roles.length - 1 && (
                            <div
                              className="w-px flex-1 mt-1"
                              style={{ background: 'linear-gradient(to bottom, rgba(139,92,246,0.35), rgba(139,92,246,0.1))' }}
                            />
                          )}
                        </div>
                      )}

                      {/* Role content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-text-primary text-sm">{role.role}</h3>
                            {role.promoted && (
                              <span
                                className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                style={{
                                  background: 'rgba(139,92,246,0.15)',
                                  border: '1px solid rgba(139,92,246,0.35)',
                                  color: '#a78bfa',
                                }}
                              >
                                <FiArrowUp size={9} /> Promoted
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-text-muted whitespace-nowrap">{role.period}</span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed mb-3">{role.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {role.tags.map(tag => (
                            <span key={tag} className="tag-pill">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
