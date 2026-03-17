import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiUser } from 'react-icons/fi';
import { chatQA } from '../../data/portfolioData';

const WORD_INTERVAL  = 55;   // ms between words
const TYPING_DELAY   = 650;  // ms to show typing dots before streaming starts

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: '#a78bfa' }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default function AIChatWidget() {
  const [messages,    setMessages]   = useState([]);
  const [streaming,   setStreaming]  = useState(false);
  const [askedQs,     setAskedQs]   = useState(new Set());
  const scrollRef    = useRef(null);   // the overflow-y-auto container
  const intervalRef  = useRef(null);
  const startTimeRef = useRef(null);
  const hasAutoPlayed = useRef(false);

  // Scroll ONLY inside the widget — never touches the page
  function scrollToBottom() {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-play first question
  useEffect(() => {
    if (hasAutoPlayed.current) return;
    hasAutoPlayed.current = true;
    const t = setTimeout(() => triggerQuestion(chatQA[0]), 1000);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => clearInterval(intervalRef.current), []);

  function triggerQuestion(qa) {
    if (streaming) return;
    setStreaming(true);
    setAskedQs(prev => new Set([...prev, qa.q]));

    // 1. Push user bubble
    setMessages(prev => [...prev, { role: 'user', text: qa.q }]);

    // 2. Push typing indicator bubble
    setMessages(prev => [...prev, { role: 'ai', typing: true, text: '', done: false }]);
    startTimeRef.current = Date.now();

    // 3. After delay, replace typing with streaming
    const typingTimer = setTimeout(() => {
      setMessages(prev => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: 'ai', typing: false, text: '', done: false };
        return copy;
      });

      const words = qa.a.split(' ');
      let i = 0;

      intervalRef.current = setInterval(() => {
        if (i >= words.length) {
          clearInterval(intervalRef.current);
          const elapsed = ((Date.now() - startTimeRef.current) / 1000).toFixed(1);
          const tokenEst = Math.round(words.length * 1.3);
          setMessages(prev => {
            const copy = [...prev];
            copy[copy.length - 1] = {
              ...copy[copy.length - 1],
              done: true,
              stat: `~${tokenEst} tokens · ${elapsed}s`,
            };
            return copy;
          });
          setStreaming(false);
          return;
        }

        const word = words[i];
        i++;
        setMessages(prev => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          const sep = last.text.length > 0 ? ' ' : '';
          copy[copy.length - 1] = { ...last, text: last.text + sep + word };
          return copy;
        });
      }, WORD_INTERVAL);
    }, TYPING_DELAY);

    return () => clearTimeout(typingTimer);
  }

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden w-full select-none"
      style={{
        background: 'rgba(12,12,14,0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 0 0 1px rgba(139,92,246,0.12), 0 8px 48px rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.05) inset',
        height: '440px',
      }}
    >
      {/* ── Header ─────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-4 py-3 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #6d28d9, #a78bfa)' }}
          >
            <FiCpu size={13} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold leading-none" style={{ color: '#e4e4e7' }}>portfolio-llm</p>
            <p className="text-[10px] leading-none mt-0.5" style={{ color: '#6d28d9' }}>instruct · v1</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <motion.span
            className="w-2 h-2 rounded-full"
            style={{ background: '#4ade80' }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-[11px] font-medium" style={{ color: '#4ade80' }}>online</span>
        </div>
      </div>

      {/* ── Messages ───────────────────────────────── */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4"
        style={{ scrollbarWidth: 'none' }}  /* hide scrollbar inside widget */
      >
        {messages.length === 0 && (
          <motion.div
            className="flex-1 flex flex-col items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
              style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}
            >
              <FiCpu size={18} style={{ color: '#a78bfa' }} />
            </div>
            <p className="text-xs font-medium" style={{ color: 'rgba(228,228,231,0.5)' }}>Ask me anything below</p>
          </motion.div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={
                  msg.role === 'ai'
                    ? { background: 'linear-gradient(135deg, #6d28d9, #a78bfa)' }
                    : { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }
                }
              >
                {msg.role === 'ai'
                  ? <FiCpu size={11} className="text-white" />
                  : <FiUser size={11} style={{ color: '#a1a1a6' }} />
                }
              </div>

              {/* Bubble */}
              <div className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-[80%]`}>
                <div
                  className="rounded-2xl px-3 py-2 text-sm leading-relaxed"
                  style={
                    msg.role === 'user'
                      ? {
                          background: 'rgba(255,255,255,0.07)',
                          color: '#f5f5f7',
                          borderBottomRightRadius: '5px',
                        }
                      : {
                          background: 'rgba(109,40,217,0.12)',
                          border: '1px solid rgba(139,92,246,0.2)',
                          color: '#e4e4e7',
                          borderBottomLeftRadius: '5px',
                        }
                  }
                >
                  {msg.typing ? (
                    <TypingDots />
                  ) : (
                    <>
                      {msg.text}
                      {!msg.done && msg.role === 'ai' && msg.text.length > 0 && (
                        <motion.span
                          className="inline-block w-0.5 h-3.5 ml-0.5 rounded-sm"
                          style={{ background: '#a78bfa', verticalAlign: 'text-bottom' }}
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.7, repeat: Infinity }}
                        />
                      )}
                    </>
                  )}
                </div>
                {/* Token stat */}
                {msg.stat && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] px-1"
                    style={{ color: 'rgba(161,161,166,0.45)' }}
                  >
                    {msg.stat}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Question pills ─────────────────────────── */}
      <div
        className="flex-shrink-0 px-3 pb-3 pt-2.5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex flex-wrap gap-1.5">
          {chatQA.map((qa) => {
            const asked = askedQs.has(qa.q);
            return (
              <button
                key={qa.q}
                onClick={() => triggerQuestion(qa)}
                disabled={streaming}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                style={{
                  background: asked ? 'rgba(139,92,246,0.06)' : 'rgba(139,92,246,0.12)',
                  border: asked ? '1px solid rgba(139,92,246,0.15)' : '1px solid rgba(139,92,246,0.28)',
                  color: asked ? 'rgba(196,181,253,0.5)' : '#c4b5fd',
                  opacity: streaming ? 0.4 : 1,
                }}
              >
                {asked ? `${qa.q} ✓` : qa.q}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
