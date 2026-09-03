// ---------------------------------------------------------------------
// EDIT ME: a few links I couldn't fill in for you — see the README.
// ---------------------------------------------------------------------
export const GITHUB_USERNAME = 'ANTIMOLE' // GANTI
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`
export const SIAKAD_REPO_URL = 'https://github.com/ANTIMOLE/STT-DIAKONOS' // GANTI
export const ZENIT_REPO_URL = 'https://github.com/ANTIMOLE/ZENIT_VPS_TA' // GANTI

// Already real, pulled from the resume — leave as is unless something changed.
export const FULL_NAME = 'Angello Khara Sitanggang'
export const ROLE = 'Backend-leaning software engineer'
export const EMAIL = 'angellokhara4672@gmail.com'
export const PHONE = '+62 823-1475-6791'
export const LOCATION = 'Sleman, Yogyakarta, Indonesia'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/angello-sitanggang-062567195/'
export const CV_PATH = './Angello-Khara-Sitanggang - CV.pdf'
export const SIAKAD_LIVE_URL = 'http://52.74.11.77/'
export const ZENIT_LIVE_URL = 'http://54.251.148.232/'

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export const ZENIT_SCENARIOS = [
  { id: 'S-01', name: 'Browse', metric: 'response time' },
  { id: 'S-02', name: 'Shopping', metric: 'throughput' },
  { id: 'S-03', name: 'Checkout', metric: 'error rate' },
  { id: 'S-04', name: 'Authentication', metric: 'P95 / P99' },
  { id: 'S-05', name: 'Admin dashboard', metric: 'CPU / RAM' },
]

export const ZENIT_CONDITIONS = [
  { id: 'C1', label: 'Step-up load', n: 'N=10' },
  { id: 'C2', label: 'Stress', n: 'N=3' },
  { id: 'C3', label: 'Spike', n: 'N=3' },
  { id: 'C4', label: 'Soak', n: 'N=1' },
]

export const FOCUS_ITEMS = [
  { id: 'F-01', label: 'Learning', value: 'continuous' },
  { id: 'F-02', label: 'Building', value: 'side projects' },
  { id: 'F-03', label: 'Improving', value: 'fundamentals' },
  { id: 'F-04', label: 'Open to', value: 'internships / junior roles' },
]

export const OPEN_TO = [
  { id: 'O1', label: 'Internships' },
  { id: 'O2', label: 'Junior roles' },
  { id: 'O3', label: 'Freelance' },
  { id: 'O4', label: 'Collaboration' },
]

export const EXPERIENCE = {
  org: 'STT Diakonos',
  place: 'Pajerukan, Banyumas, Central Java (Hybrid)',
  role: 'SIAKAD Development — Practical Work Project',
  period: 'Jan 2026 – Mar 2026',
  bullets: [
    'Built a complete web-based Academic Information System (SIAKAD) that handles KRS, grades, attendance, and payments for four roles: admin, lecturer, student, and finance staff.',
    'Packaged the entire system into a single Docker container (Next.js frontend served directly from the Express process, together with MySQL and Caddy) and tested the setup on AWS Lightsail before moving it to the school’s own VPS.',
    'Delivered the finished system to the school and stayed involved through the deployment phase to provide technical support.',
  ],
}

export const ORG_EXPERIENCE = {
  org: 'Kelompok Studi Pemrograman UAJY (KSP UAJY)',
  place: 'Yogyakarta, Indonesia',
  role: 'Member & Event Committee',
  period: 'Aug 2023 – Jun 2024',
  bullets: [
    'Competed in Programming in Contest 2023 and later joined the organizing committee for the 2024 edition.',
    'Helped organize KSP events, including the 2023 field trip and multiple programming workshops.',
    'Supported the “Mastering Git & GitHub: Boundless Code Collaboration” workshop in collaboration with KSL.',
    'Mentored new members on programming fundamentals and algorithms through hands-on sessions.',
  ],
}

export const EDUCATION = {
  school: 'Universitas Atma Jaya Yogyakarta',
  address: 'Yogyakarta, Indonesia',
  degree: 'Bachelor of Informatics — Software Development Engineering',
  gpa: '3.84 / 4.00 (Cum Laude)',
  period: 'Jul 2022 – Jul 2026',
  finalProject:
    'E-Commerce Performance Research — built an e-commerce application to compare REST API and tRPC performance using Next.js and Express.js. Conducted load testing with k6, measuring response time, P95/P99 latency, throughput, error rate, CPU, and RAM usage.',
}

export const SKILLS = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'SQL', 'Python', 'C', 'Java'],
  },
  {
    group: 'Web Development',
    items: ['Next.js', 'React', 'Node.js', 'Express.js', 'tRPC', 'Prisma'],
  },
  {
    group: 'Database & Tools',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Git', 'GitHub', 'Docker'],
  },
  {
    group: 'Testing & Deployment',
    items: ['k6', 'Postman', 'Bruno', 'AWS Lightsail'],
  },
]


export const SOFT_SKILLS = ['Analytical thinking', 'Critical thinking', 'Problem solving', 'Teamwork', 'Project management']

export const CERTIFICATION = 'British English Council — CEFR C1 Advanced (2024)'
