/**
 * JAIPREETH J - DARK ANIME & LO-FI PORTFOLIO ENGINE
 * Features:
 * - Amber & Sand Embers Particle Simulation
 * - Cybernetic Terminal Engine
 * - Dynamic Typewriter & Scroll Spies
 * - Project Architecture Dossiers & PDF Resume Viewer
 */

// --- 1. FLOATING WARM BEIGE PARTICLES ENGINE ---
function initParticleCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = 45;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: -Math.random() * 0.35 - 0.15,
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * 0.02 + 0.01,
      color: Math.random() > 0.4 ? '#ebdbb2' : '#fabd2f'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.alpha += Math.sin(Date.now() * p.pulse * 0.05) * 0.005;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.save();
      ctx.globalAlpha = Math.max(0.1, Math.min(0.8, p.alpha));
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  render();
}

// --- 2. DYNAMIC TYPEWRITER EFFECT ---
function initTypewriter() {
  const el = document.getElementById('typewriter-role');
  if (!el) return;

  const roles = [
    'Full-Stack Software Developer ⚡',
    'Java & OOP Architecture Specialist ☕',
    'PostgreSQL, Express & REST Backend Architect ⚙️',
    'React & TypeScript Frontend Developer 🎨',
    'Information Science Student @ DSCE Bangalore 🎓'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 90;

  function type() {
    const current = roles[roleIdx];
    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      delay = 40;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      delay = 85;
    }

    if (!isDeleting && charIdx === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
}

// --- 3. PROJECT DATABASE & MODAL CONTROLLER ---
const projectData = {
  'expense-splitter': {
    title: 'Expense Splitter',
    category: 'Full-Stack Web & Financial Algorithms',
    badge: 'React + Vite + Node + Express + PostgreSQL + JWT',
    image: 'assets/anime_lofi_workspace_1788107051353.jpg',
    github: 'https://github.com/Jaipreeth-J/Expense-Splitter',
    live: 'https://github.com/Jaipreeth-J/Expense-Splitter',
    summary: 'Designed and developed a full-stack expense management platform enabling groups to track shared expenses and calculate member balances with equal, exact, and percentage-based splitting.',
    architecture: [
      'Full-Stack Expense Platform: Designed and developed a full-stack expense management platform enabling groups to track shared expenses and calculate member balances with equal, exact, and percentage-based splitting.',
      'Secure Auth & Route Protection: Implemented JWT-based authentication with bcrypt password hashing and protected API routes, along with group/member management and settlement tracking using Node.js, Express, and PostgreSQL.',
      'Greedy Minimum-Cash-Flow Algorithm: Developed a debt-simplification algorithm using a greedy minimum-cash-flow approach to reduce complex group debts into a minimal set of settlement transactions.',
      'Cloud Deployment & Neon DB: Built and deployed the responsive React frontend and RESTful backend using Vercel and Render, with PostgreSQL hosted on Neon and environment-based production configuration.'
    ],
    techStack: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Tailwind CSS', 'Neon']
  },
  'ai-sentinel': {
    title: 'AI Sentinel (AI Quality & Observability Platform)',
    category: 'AI Quality & Observability Platform',
    badge: 'React + TypeScript + Express + PostgreSQL + Prisma',
    image: 'assets/ai_sentinel.jpg',
    github: 'https://github.com/Jaipreeth-J/AI-Sentinel',
    live: 'https://github.com/Jaipreeth-J/AI-Sentinel',
    summary: 'Contributed to an AI observability platform to monitor LLM interactions and evaluate responses for quality, safety, and hallucination risks.',
    architecture: [
      'LLM Quality Monitoring: Contributed to an AI observability platform to monitor LLM interactions and evaluate responses for quality, safety, and hallucination risks.',
      'Centralized Observability Views: Provides a centralized dashboard to view AI evaluation results, risk levels, and conversation insights through REST APIs.',
      'Responsive React Views: Contributed to developing responsive dashboard views using React.js and TypeScript, integrating REST APIs to fetch and display application and evaluation data.',
      'Secure Auth & Prisma ORM: Implemented user authentication and API-key-based access control using Express.js middleware, integrating secured endpoints with PostgreSQL through Prisma ORM.'
    ],
    techStack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'REST APIs']
  },
  'medifusion': {
    title: 'MediFusion (Personal Health Management Platform)',
    category: 'Personal Health Management Platform',
    badge: 'React + TypeScript + PostgreSQL + Supabase RLS',
    image: 'assets/hero_banner.jpg',
    github: 'https://github.com/Jaipreeth-J/MediFusion',
    live: 'https://github.com/Jaipreeth-J/MediFusion',
    summary: 'Contributed to a health management platform for tracking vitals, symptoms, medications, mood, and health records in a centralized dashboard.',
    architecture: [
      'Comprehensive Health Dashboard: Contributed to a health management platform for tracking vitals, symptoms, medications, mood, and health records in a centralized dashboard.',
      'AI Insights & Wearable Sync: Integrated AI-powered health insights and wearable data synchronization to help users monitor and manage their health information.',
      'Responsive Components: Developed responsive dashboard components using React.js and TypeScript, integrating REST APIs to fetch and display user health data.',
      'Supabase & Row-Level Security (RLS): Worked with PostgreSQL and Supabase to manage user health records, implementing authentication, authorization, and Row-Level Security (RLS) for user-specific data access.'
    ],
    techStack: ['React.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Row-Level Security (RLS)', 'REST APIs']
  }
};

function openProjectModal(id) {
  const data = projectData[id];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const title = document.getElementById('modal-title');
  const cat = document.getElementById('modal-category');
  const summary = document.getElementById('modal-summary');
  const archList = document.getElementById('modal-architecture');
  const stack = document.getElementById('modal-stack');
  const githubLink = document.getElementById('modal-github');
  const liveLink = document.getElementById('modal-live');
  const img = document.getElementById('modal-img');

  title.textContent = data.title;
  cat.textContent = data.category;
  summary.textContent = data.summary;
  img.src = data.image;

  archList.innerHTML = '';
  data.architecture.forEach(item => {
    const li = document.createElement('li');
    li.style.marginBottom = '8px';
    li.innerHTML = item;
    archList.appendChild(li);
  });

  stack.innerHTML = '';
  data.techStack.forEach(t => {
    const span = document.createElement('span');
    span.className = 'tech-badge';
    span.textContent = t;
    stack.appendChild(span);
  });

  githubLink.href = data.github;
  if (data.live) {
    liveLink.href = data.live;
    liveLink.style.display = 'inline-flex';
  } else {
    liveLink.style.display = 'none';
  }

  modal.classList.add('active');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
}

// --- 4. RESUME PDF MODAL CONTROLLER ---
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  modal.classList.add('active');
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  modal.classList.remove('active');
}

// --- 5. TOAST NOTIFICATION UTILITY ---
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('.toast-text').textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function copyToClipboard(text, msg = 'Copied to clipboard!') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg);
  }).catch(() => {
    showToast('Copied: ' + text);
  });
}

// --- 6. INTERACTIVE TERMINAL ENGINE ---
function initTerminal() {
  const body = document.getElementById('terminal-body');
  const input = document.getElementById('terminal-input');
  if (!body || !input) return;

  const commands = {
    help: `Available commands:
  • about          - View profile & credentials
  • projects       - List key production builds
  • skills         - Display technical matrix & competencies
  • education      - Display academic records (DSCE, PUC)
  • certifications - View professional accreditations
  • languages      - View spoken language proficiencies
  • contact        - Show direct dispatch channels
  • clear          - Clean terminal output
  • resume         - Open official PDF resume`,
    about: `Jaipreeth J // Full-Stack Software Developer
Affiliation : Dayananda Sagar College of Engineering, Bangalore (BE ISE)
Status      : Oct 2023 - Present (CGPA: 8.9 / 10.0)
Core Focus  : Skilled in Java and full-stack development with React, TypeScript, Node.js, Express, and PostgreSQL.`,
    projects: `Featured Projects:
  1. Expense Splitter
     • Full-stack expense platform, greedy minimum-cash-flow algorithm, JWT, PostgreSQL (Neon)
  2. AI Sentinel (AI Quality & Observability Platform)
     • LLM monitoring, centralized evaluation dashboard, Express middleware, Prisma ORM
  3. MediFusion (Personal Health Management Platform)
     • Vitals & health records, AI insights, wearable sync, PostgreSQL, Supabase RLS`,
    skills: `Technical Matrix:
  [Languages]         : Java, JavaScript (ES6+), TypeScript
  [Frontend]          : React.js, HTML5, CSS3, Tailwind CSS, Bootstrap
  [Backend]           : Node.js, Express.js, REST API's
  [Database]          : PostgreSQL, MongoDB
  [Computer Fund.]    : Database Management Systems, Operating Systems, Computer Networks
  [Tools]             : Git, GitHub, Postman, VS Code
  [Core Competencies] : DSA, Low-Level Design (LLD), Object-Oriented Programming (OOP)`,
    education: `Academic Credentials:
  - Dayananda Sagar College of Engineering (DSCE), Bangalore
    Bachelor of Engineering (Information Science & Engineering)
    CGPA: 8.9 / 10.0 (Oct 2023 – Present)
  - BGS PU College, Bangalore
    Pre-University Course (PCMB)
    Score: 96.83% (June 2021 – April 2022)`,
    certifications: `Verified Certifications:
  • Java             - Udemy
  • Cloud Computing  - NPTEL`,
    languages: `Spoken Languages:
  • English (Professional)
  • Hindi (Conversational)
  • Kannada (Native)`,
    resume: () => {
      openResumeModal();
      return '>> Opening Jaipreeth_J(Final).pdf resume viewer...';
    },
    contact: `Dispatch Coordinates:
  • Email    : jaipreethj@gmail.com
  • LinkedIn : https://www.linkedin.com/in/jaipreeth-j
  • GitHub   : https://github.com/Jaipreeth-J
  • Location : Bangalore, Karnataka, India`,
    clear: () => {
      body.innerHTML = '';
      return '';
    },
    sudo: 'Permission denied: Nice try, wanderer.'
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      input.value = '';
      if (!cmd) return;

      const promptLine = document.createElement('div');
      promptLine.className = 'terminal-line';
      promptLine.innerHTML = `<span class="terminal-prompt">guest@jaipreeth:~$</span> ${escapeHtml(cmd)}`;
      body.appendChild(promptLine);

      let response = '';
      if (commands[cmd]) {
        if (typeof commands[cmd] === 'function') {
          response = commands[cmd]();
        } else {
          response = commands[cmd];
        }
      } else {
        response = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
      }

      if (response) {
        const outLine = document.createElement('div');
        outLine.className = 'terminal-output';
        outLine.textContent = response;
        body.appendChild(outLine);
      }

      body.scrollTop = body.scrollHeight;
    }
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// --- 7. INITIALIZATION & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTypewriter();
  initTerminal();

  // Filter Projects
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project Modal Openers
  document.querySelectorAll('[data-project-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = el.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });

  // Modal Closers
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-overlay').classList.remove('active');
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('⚡ Message sent! Thank you, Jaipreeth will get back to you shortly.');
      contactForm.reset();
    });
  }
});
