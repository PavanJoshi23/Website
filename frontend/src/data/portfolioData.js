export const personal = {
  name: 'Pavan Joshi',
  title: 'AI Engineer',
  tagline: 'I build LLM-powered systems, RAG pipelines, and the interfaces that make AI actually useful.',
  bio: `I'm an AI engineer focused on building production-grade generative AI systems — RAG pipelines, LLM agents, and the full-stack applications that put them in front of users. I work at the intersection of modern AI tooling and clean engineering: FastAPI backends, React frontends, and vector databases that don't hallucinate (unlike the models). When I'm not shipping, I'm reverse-engineering how things work just for fun.`,
  email: 'pavanjoshi2311@gmail.com',
  location: 'India',
  resumeUrl: '/resume.pdf',
  avatar: null,
};

export const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/PavanJoshi23',          icon: 'FiGithub'   },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pavan-joshi-289b621b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',     icon: 'FiLinkedin' },
  { label: 'Twitter',  href: 'https://twitter.com/pavanjoshi',         icon: 'FiTwitter'  },
];

export const stats = [
  { value: '1+',  label: 'Years Experience' },
  { value: '1', label: 'Projects Delivered' },
  { value: '10+', label: 'Proof of Concepts Built' },
];

export const skills = [
  { name: 'React',       icon: 'SiReact',       color: '#61DAFB', category: 'Frontend' },
  { name: 'JavaScript',  icon: 'SiJavascript',  color: '#F7DF1E', category: 'Frontend' },
  { name: 'Tailwind CSS',icon: 'SiTailwindcss', color: '#a78bfa', category: 'Frontend' },
  { name: 'HTML5',       icon: 'SiHtml5',       color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3',        icon: 'SiCss3',        color: '#7c3aed', category: 'Frontend' },
  { name: 'Python',      icon: 'SiPython',      color: '#FFD43B', category: 'Backend'  },
  { name: 'FastAPI',     icon: 'SiFastapi',     color: '#009688', category: 'Backend'  },
  { name: 'PostgreSQL',  icon: 'SiPostgresql',  color: '#8b5cf6', category: 'Backend'  },
  { name: 'MongoDB',     icon: 'SiMongodb',     color: '#47A248', category: 'Backend'  },
  { name: 'Redis',       icon: 'SiRedis',       color: '#DC382D', category: 'Backend'  },
  { name: 'Docker',      icon: 'SiDocker',      color: '#7c3aed', category: 'DevOps'   },
  { name: 'Git',         icon: 'SiGit',         color: '#F05032', category: 'DevOps'   },
  { name: 'Linux',       icon: 'SiLinux',       color: '#FCC624', category: 'DevOps'   },
  { name: 'LangChain',   icon: 'SiLangchain',   color: '#1C7C5A', category: 'AI/ML'   },
  { name: 'LangGraph',   icon: 'SiLanggraph',   color: '#1C7C5A', category: 'AI/ML'   },
  { name: 'vectorDBs',   icon: 'SiPinecone',    color: '#E5B769', category: 'AI/ML'   },
  { name: 'RAG',         icon: 'SiRag',         color: '#1C7C5A', category: 'AI/ML'   },
  { name: 'Prompting',   icon: 'SiPrompting',   color: '#1C7C5A', category: 'AI/ML'   },
  { name: 'Claude',       icon: 'SiClaude',       color: '#412991', category: 'AI/ML'   },
  { name: 'OpenAI',       icon: 'SiOpenai',       color: '#412991', category: 'AI/ML'   },
  { name: 'AI Agents',    icon: 'SiAutomatedagents',    color: '#1C7C5A', category: 'AI/ML'   },
  { name: 'Workflow', icon: 'SiWorkflow',       color: '#FF4A00', category: 'AI/ML'   },

];

export const projects = [
  {
    id: 1,
    title: 'CollabSpace',
    description: 'A real-time collaboration platform with live document editing, video calls, and team chat. Built for remote teams to stay connected and productive.',
    tags: ['React', 'FastAPI', 'WebSockets', 'PostgreSQL', 'Redis'],
    image: null,
    status: 'Completed',
    duration: '4 months',
    highlights: [
      'Real-time collaborative editing with operational transformation',
      'WebRTC-based video calls with up to 8 participants',
      'Redis pub/sub for instant team notifications',
      'Role-based access control with JWT authentication',
    ],
  },
  {
    id: 2,
    title: 'DataVault Analytics',
    description: 'An ML-powered analytics dashboard that visualizes large datasets with interactive charts, predictive insights, and automated reporting.',
    tags: ['Python', 'React', 'D3.js', 'Pandas', 'FastAPI'],
    image: null,
    status: 'Completed',
    duration: '3 months',
    highlights: [
      'Processes datasets up to 10M rows using chunked Pandas pipelines',
      'Predictive trend analysis using scikit-learn regression models',
      'Interactive D3.js charts with drill-down and export features',
      'Scheduled PDF/CSV report generation via Celery',
    ],
  },
  {
    id: 3,
    title: 'ShopFlow',
    description: 'A mobile-first e-commerce platform with headless CMS integration, real-time inventory management, and seamless Stripe checkout.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    image: null,
    status: 'In Progress',
    duration: '2 months',
    highlights: [
      'Headless CMS (Sanity.io) for flexible product catalog management',
      'Real-time inventory sync with optimistic UI updates',
      'Stripe checkout with webhook-driven order lifecycle',
      'Mobile-first PWA with offline cart persistence',
    ],
  },
  {
    id: 4,
    title: 'DevPulse',
    description: 'A developer productivity tool that aggregates GitHub activity, tracks coding streaks, and generates beautiful contribution reports.',
    tags: ['React', 'GitHub API', 'TypeScript', 'Tailwind'],
    image: null,
    status: 'Completed',
    duration: '6 weeks',
    highlights: [
      'Aggregates commits, PRs, and review activity via GitHub GraphQL API',
      'Streak tracking with timezone-aware calendar heatmap',
      'Shareable report cards with custom themes',
      'Caches API responses to stay within GitHub rate limits',
    ],
  },
];

export const pocs = [
  {
    id: 1,
    title: 'WebRTC Mesh Network',
    description: 'Explored peer-to-peer video streaming without a media server using WebRTC mesh topology. Tested scalability limits and latency trade-offs.',
    tags: ['WebRTC', 'JavaScript', 'Node.js'],
    image: null,
    status: 'Archived',
    duration: '2 weeks',
    highlights: [
      'Implemented full mesh signaling via a lightweight Node.js server',
      'Measured CPU/bandwidth overhead as participant count scaled',
      'Identified 4-peer limit before quality degradation became unacceptable',
      'Documented trade-offs between mesh, SFU, and MCU architectures',
    ],
  },
  {
    id: 2,
    title: 'LLM Streaming API',
    description: 'Proof of concept for streaming OpenAI responses token-by-token via FastAPI Server-Sent Events with real-time UI updates.',
    tags: ['FastAPI', 'Python', 'SSE', 'OpenAI'],
    image: null,
    status: 'Completed',
    duration: '1 week',
    highlights: [
      'FastAPI SSE endpoint streams OpenAI tokens with back-pressure handling',
      'React hook consumes the stream and updates UI incrementally',
      'Graceful cancellation on client disconnect using async generators',
      'Explored token-level latency differences across GPT-3.5 and GPT-4',
    ],
  },
  {
    id: 3,
    title: 'CRDT Sync Engine',
    description: 'Investigated Conflict-free Replicated Data Types for offline-first document sync. Built a minimal text CRDT from scratch.',
    tags: ['TypeScript', 'CRDT', 'IndexedDB'],
    image: null,
    status: 'Archived',
    duration: '3 weeks',
    highlights: [
      'Implemented a RGA (Replicated Growable Array) for character-level edits',
      'Offline edits stored in IndexedDB and merged on reconnect',
      'Simulated network partitions to verify eventual consistency',
      'Benchmarked merge performance against Yjs and Automerge',
    ],
  },
];

export const chatQA = [
  {
    q: 'Who are you?',
    a: "I'm Pavan — an AI engineer. I build production-grade LLM apps, RAG pipelines, and the interfaces that make AI actually usable.",
  },
  {
    q: 'What do you build?',
    a: 'Full-stack AI products: retrieval-augmented generation systems, streaming APIs, agent workflows, and the React frontends that talk to them. FastAPI on the backend, always.',
  },
  {
    q: 'Your stack?',
    a: 'React + FastAPI at the core. Python for everything AI — LangChain, LlamaIndex, OpenAI SDK. PostgreSQL with pgvector for embeddings. Docker to ship it all.',
  },
  {
    q: 'Fun fact?',
    a: "I built a CRDT sync engine from scratch just to understand how collaborative editors work. Turns out conflict-free data structures are genuinely beautiful.",
  },
];

export const techQuotes = [
  'A neural network is just a really fancy if-else statement.',
  'RAG: because hallucinations are not a feature.',
  'Fine-tuning is vibes-based gradient descent.',
  '99 bugs in the code... take one down... 127 bugs in the code.',
  'In God we trust. All others bring data.',
  'The best model is the one that ships.',
  "It's not a bug, it's an undocumented feature.",
  'ChatGPT said it was a hallucination. I call it creativity.',
  'Prompt engineering: talking to computers politely.',
  'Move fast and break prod... I mean things.',
  'Machine learning: garbage in, garbage out, but with GPUs.',
  'My code works. I have no idea why.',
  "There are 10 types of people: those who get binary and those who don't.",
  'sudo make me a sandwich.',
  'To understand recursion, you must first understand recursion.',
  'LLMs are just spicy autocomplete.',
  'Embeddings: turning words into maths since 2013.',
  'Context window full. Please summarize your life.',
];

export const experience = [
  {
    id: 1,
    role: 'Associate Software Engineer',
    company: 'Keehoo.ai',   // ← update
    period: 'August 2025 – Present', // ← update
    description: 'Promoted from Trainee based on performance. Contributing to full-stack feature development, code reviews, and production deployments.',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    promoted: true, // marks this as a promotion from the entry below
  },
  {
    id: 2,
    role: 'Trainee Software Engineer',
    company: 'Keehoo.ai',   // ← same company
    period: 'Nov 2024 – July 2025', // ← update
    description: 'Joined as a software engineering trainee. Worked on internal tooling, bug fixes, and onboarding projects to learn the product and codebase.',
    tags: ['React', 'Python', 'Git'],
    promoted: false,
  },
];
