import { techQuotes } from '../../data/portfolioData';

const KEYFRAMES = `
@keyframes scroll-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes scroll-right {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
`;

function Pill({ text }) {
  return (
    <span
      className="inline-flex items-center flex-shrink-0 text-xs font-medium px-4 py-2 rounded-full mx-2 whitespace-nowrap"
      style={{
        background: 'rgba(139,92,246,0.07)',
        border: '1px solid rgba(139,92,246,0.18)',
        color: 'rgba(196,181,253,0.7)',
      }}
    >
      <span className="mr-2 opacity-40">"</span>
      {text}
      <span className="ml-2 opacity-40">"</span>
    </span>
  );
}

function Row({ quotes, direction, duration }) {
  const doubled = [...quotes, ...quotes];
  return (
    <div
      className="flex overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
    >
      <div
        className="flex"
        style={{
          animation: `${direction} ${duration} linear infinite`,
          willChange: 'transform',
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {doubled.map((q, i) => (
          <Pill key={i} text={q} />
        ))}
      </div>
    </div>
  );
}

const mid = Math.ceil(techQuotes.length / 2);
const row1 = techQuotes.slice(0, mid);
const row2 = techQuotes.slice(mid);

export default function QuoteTicker() {
  return (
    <>
      <style>{KEYFRAMES}</style>
      <div
        className="py-5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex flex-col gap-3">
          <Row quotes={row1} direction="scroll-left"  duration="38s" />
          <Row quotes={row2} direction="scroll-right" duration="44s" />
        </div>
      </div>
    </>
  );
}
