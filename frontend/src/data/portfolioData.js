export const personal = {
  name: 'Pavan Joshi',
  title: 'Full-Stack Engineer',
  tagline: 'I build fast, beautiful, and scalable web experiences.',
  bio: `I'm a passionate full-stack engineer with a love for crafting pixel-perfect UIs
and robust backend systems. I thrive at the intersection of design and engineering,
turning complex problems into elegant digital solutions. When I'm not coding,
you'll find me exploring new technologies and contributing to open-source projects.`,
  email: 'hello@pavanjoshi.dev',
  location: 'India',
  resumeUrl: '/resume.pdf',
  avatar: null,
};

export const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/pavanjoshi',          icon: 'FiGithub'   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pavanjoshi',     icon: 'FiLinkedin' },
  { label: 'Twitter',  href: 'https://twitter.com/pavanjoshi',         icon: 'FiTwitter'  },
];

export const stats = [
  { value: '5+',  label: 'Years Experience' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '15+', label: 'Happy Clients' },
  { value: '10+', label: 'Open Source Contributions' },
];

export const skills = [
  { name: 'React',       icon: 'SiReact',       color: '#61DAFB', category: 'Frontend' },
  { name: 'JavaScript',  icon: 'SiJavascript',  color: '#F7DF1E', category: 'Frontend' },
  { name: 'TypeScript',  icon: 'SiTypescript',  color: '#8b5cf6', category: 'Frontend' },
  { name: 'Tailwind CSS',icon: 'SiTailwindcss', color: '#a78bfa', category: 'Frontend' },
  { name: 'HTML5',       icon: 'SiHtml5',       color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3',        icon: 'SiCss3',        color: '#7c3aed', category: 'Frontend' },
  { name: 'Python',      icon: 'SiPython',      color: '#FFD43B', category: 'Backend'  },
  { name: 'FastAPI',     icon: 'SiFastapi',     color: '#009688', category: 'Backend'  },
  { name: 'Node.js',     icon: 'SiNodedotjs',   color: '#339933', category: 'Backend'  },
  { name: 'PostgreSQL',  icon: 'SiPostgresql',  color: '#8b5cf6', category: 'Backend'  },
  { name: 'MongoDB',     icon: 'SiMongodb',     color: '#47A248', category: 'Backend'  },
  { name: 'Redis',       icon: 'SiRedis',       color: '#DC382D', category: 'Backend'  },
  { name: 'Docker',      icon: 'SiDocker',      color: '#7c3aed', category: 'DevOps'   },
  { name: 'Git',         icon: 'SiGit',         color: '#F05032', category: 'DevOps'   },
  { name: 'AWS',         icon: 'SiAmazonwebservices', color: '#FF9900', category: 'DevOps' },
  { name: 'Linux',       icon: 'SiLinux',       color: '#FCC624', category: 'DevOps'   },
];

export const projects = [
  {
    id: 1,
    title: 'CollabSpace',
    description: 'A real-time collaboration platform with live document editing, video calls, and team chat. Built for remote teams to stay connected and productive.',
    tags: ['React', 'FastAPI', 'WebSockets', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    repoUrl: '#',
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: 'DataVault Analytics',
    description: 'An ML-powered analytics dashboard that visualizes large datasets with interactive charts, predictive insights, and automated reporting.',
    tags: ['Python', 'React', 'D3.js', 'Pandas', 'FastAPI'],
    liveUrl: '#',
    repoUrl: '#',
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: 'ShopFlow',
    description: 'A mobile-first e-commerce platform with headless CMS integration, real-time inventory management, and seamless Stripe checkout.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
    image: null,
    featured: true,
  },
  {
    id: 4,
    title: 'DevPulse',
    description: 'A developer productivity tool that aggregates GitHub activity, tracks coding streaks, and generates beautiful contribution reports.',
    tags: ['React', 'GitHub API', 'TypeScript', 'Tailwind'],
    liveUrl: '#',
    repoUrl: '#',
    image: null,
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: 'Senior Full-Stack Engineer',
    company: 'TechCorp Inc.',
    period: '2022 – Present',
    description: 'Led development of core product features serving 50K+ users. Architected microservices migration reducing latency by 35%. Mentored a team of 4 junior engineers.',
    tags: ['React', 'FastAPI', 'AWS', 'PostgreSQL'],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'Startup XYZ',
    period: '2020 – 2022',
    description: 'Built the SaaS MVP from the ground up, reaching 5K users in 6 months. Optimized database queries reducing API response time by 40%.',
    tags: ['Vue.js', 'Django', 'Docker', 'PostgreSQL'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Digital Agency ABC',
    period: '2018 – 2020',
    description: 'Delivered 15+ client websites and web apps. Introduced a shared component library that reduced development time by 30% across all projects.',
    tags: ['React', 'SCSS', 'WordPress', 'JavaScript'],
  },
];
