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
    'Full-Stack Web Developer ⚡',
    'PostgreSQL & Scalable Backend Architect 🛡️',
    'React & Modern Frontend Engineer 🎨',
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
  'ai-sentinel': {
    title: 'AI Sentinel (Web Application & Dashboard)',
    category: 'Full-Stack Web Application',
    badge: 'React + Node + Prisma',
    image: 'assets/ai_sentinel.jpg',
    github: 'https://github.com/Jaipreeth-J/AI-Sentinel',
    live: 'https://github.com/Jaipreeth-J/AI-Sentinel',
    summary: 'A full-stack web application and interactive dashboard for evaluating real-time metrics with high-throughput REST APIs.',
    architecture: [
      'Interactive Web Dashboard: Built a testing playground and real-time dashboard using React, Tailwind CSS, TanStack Query, and Zustand.',
      'High-Throughput Ingestion APIs: Architected RESTful backend services with Express.js, PostgreSQL, and Prisma with idempotency handling and secure API key auth.',
      'State & Data Sync: Implemented fast client-side caching, reactive UI updates, and type-safe database queries.'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'TanStack Query', 'Zustand']
  },
  'timetable-dashboard': {
    title: 'Timetable Automation Dashboard',
    category: 'Full-Stack Systems',
    badge: 'DOCX Parser & Scheduler',
    image: 'assets/hero_banner.jpg',
    github: 'https://github.com/Jaipreeth-J/Timetable_Dashboard_Full_Stack',
    live: 'https://github.com/Jaipreeth-J/Timetable_Dashboard_Full_Stack',
    summary: 'A full-stack timetable management system using React, Node.js, and Express.js for automating university timetable processing.',
    architecture: [
      'DOCX Extraction Pipeline: Developed backend services in Node.js to parse unstructured .docx files and automate faculty timetable generation.',
      'Role-Based Portals: Implemented secure role-based authentication and integrated frontend with backend services to provide personalized dashboards.',
      'High-Performance UI: Built dynamic interface with React and Tailwind CSS for interactive timetable viewing.'
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'Firebase', 'Tailwind CSS']
  },
  'college-erp': {
    title: 'College ERP System',
    category: 'Full-Stack Web',
    badge: 'Enterprise RBAC',
    image: 'assets/hero_banner.jpg',
    github: 'https://github.com/Jaipreeth-J/college-erp',
    live: 'https://Jaipreeth-J.github.io/college-erp',
    summary: 'A full-scale responsive College ERP application using React, TypeScript, and Tailwind CSS with secure role-based management.',
    architecture: [
      'Responsive Architecture: Designed and developed using React, TypeScript, Vite, and Tailwind CSS for fast and clean UI.',
      'Backend & State: Integrated Supabase (PostgreSQL) for authentication, database management, and real-time data synchronization.',
      'Role-Based Routing: Implemented secure student and teacher routing and academic management modules following clean, reusable coding practices.'
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL']
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
  • about       - View profile & credentials
  • projects    - List key production builds
  • skills      - Display technical matrix & competencies
  • education   - Display academic records (DSCE, PUC)
  • contact     - Show direct dispatch channels
  • clear       - Clean terminal output
  • resume      - Open official PDF resume`,
    about: `Jaipreeth J // Full-Stack Software Developer
Affiliation : Dayananda Sagar College of Engineering, Bangalore (BE ISE)
Status      : Oct 2023 - Present (CGPA: 8.9 / 10.0)
Core Focus  : Scalable Full-Stack Web Development, React, Node.js, Express, PostgreSQL.`,
    projects: `Production Builds:
  1. AI Sentinel       - Multi-judge AI Quality & Observability Platform (React, Node, PostgreSQL, Prisma)
  2. College ERP       - Full-scale academic portal with RBAC (React, TypeScript, Supabase)
  3. Timetable System  - Automated DOCX schedule extraction engine (React, Node.js, Express)`,
    skills: `Technical Matrix:
  [Languages]   : Java, C (Basics), JavaScript (ES6+), TypeScript
  [Frontend]    : React.js, HTML5, CSS3, Tailwind CSS, Bootstrap
  [Backend]     : Node.js, Express.js, RESTful APIs
  [Database]    : PostgreSQL, MongoDB
  [Core CS]     : DSA, Low-Level Design (LLD), OOP, DBMS, OS, Computer Networks
  [Tools]       : Git, GitHub, Postman, VS Code, Figma`,
    education: `Academic Credentials:
  - Dayananda Sagar College of Engineering (DSCE)
    Bachelor of Engineering (ISE) | CGPA: 8.9 (Oct 2023 - Present)
  - BGS PU College, Bangalore
    Pre-University (PCMB) | Score: 96.83% (June 2021 - April 2022)`,
    resume: () => {
      openResumeModal();
      return '>> Opening Jaipreeth_J_BE_ISE.pdf resume viewer...';
    },
    contact: `Dispatch Coordinates:
  • Email    : jaipreethj@gmail.com
  • LinkedIn : https://www.linkedin.com/in/jaipreeth-j
  • GitHub   : https://github.com/Jaipreeth-J`,
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
