import fs from 'fs';
import path from 'path';

const files = {
  // ==========================================
  // 1. PACKAGE.JSON
  // ==========================================
  'package.json': `{
  "name": "mohamed-mamdouh-portfolio",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.11.17",
    "lucide-react": "^0.460.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "vite": "^5.4.10"
  }
}`,

  // ==========================================
  // 2. VITE & POSTCSS & TAILWIND CONFIGS
  // ==========================================
  'vite.config.js': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
`,

  'postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,

  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'canvas-cream': '#faf9f7',
        'surface-ivory': '#fbfaf7',
        'pure-white': '#ffffff',
        'lavender-mist': '#f4f0ff',
        'powder-blue': '#d6e4f1',
        'ink-charcoal': '#121722',
        'deep-ink': '#1d1d1d',
        'mid-graphite': '#2d2d2d',
        'slate-gray': '#777c86',
        'steel-gray': '#a5a5a5',
        'hairline': '#efefef',
        'faint-gray': '#cccccc',
        'electric-cobalt': '#0068f9',
        'deep-cobalt': '#024bb1',
        'cerulean': '#0074dd',
        'vivid-violet': '#6736eb',
        'forest': '#046645',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Cairo"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'pill': '48px',
        'icon': '60px',
        'orb': '100px',
      },
      boxShadow: {
        'dock-subtle': 'rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px -1px 1px 0px inset, rgba(0, 0, 0, 0.14) 0px 0px 0px 0.5px inset',
        'dock-lg': 'rgba(0, 0, 0, 0.04) 0px 20px 20px -8px',
      },
      maxWidth: {
        'dock': '1200px',
      }
    },
  },
  plugins: [],
};
`,

  // ==========================================
  // 3. INDEX.HTML & MAIN ENTRY
  // ==========================================
  'index.html': `<!doctype html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mohamed Mamdouh | Full-Stack Web Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#faf9f7] text-[#121722] antialiased selection:bg-[#0068f9] selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`,

  'src/main.jsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
`,

  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-canvas-cream: #faf9f7;
  --color-surface-ivory: #fbfaf7;
  --color-pure-white: #ffffff;
  --color-lavender-mist: #f4f0ff;
  --color-powder-blue: #d6e4f1;
  --color-ink-charcoal: #121722;
  --color-deep-ink: #1d1d1d;
  --color-mid-graphite: #2d2d2d;
  --color-slate-gray: #777c86;
  --color-steel-gray: #a5a5a5;
  --color-hairline: #efefef;
  --color-faint-gray: #cccccc;
  --color-electric-cobalt: #0068f9;
  --color-deep-cobalt: #024bb1;
  --color-cerulean: #0074dd;
  --color-vivid-violet: #6736eb;
  --color-forest: #046645;
}

@layer base {
  html {
    scroll-behavior: smooth;
    background-color: #faf9f7;
    color: #121722;
  }

  body {
    font-family: 'Plus Jakarta Sans', 'Cairo', system-ui, -apple-system, sans-serif;
    background-color: #faf9f7;
    color: #121722;
    overflow-x: hidden;
  }
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #faf9f7;
}
::-webkit-scrollbar-thumb {
  background: #d6e4f1;
  border-radius: 48px;
}
::-webkit-scrollbar-thumb:hover {
  background: #0068f9;
}
`,

  // ==========================================
  // 4. COMPLETE BILINGUAL DATA (src/data/portfolioData.js)
  // ==========================================
  'src/data/portfolioData.js': `export const portfolioData = {
  en: {
    meta: {
      name: "Mohamed Mamdouh",
      role: "Full-Stack Web Developer",
      subRole: "MERN Stack & Enterprise SaaS Builder",
      location: "Cairo / Giza, Egypt",
      email: "mohamedmmdouh541@gmail.com",
      whatsappPrimary: "01007924757",
      whatsappSecondary: "01009305429",
      github: "https://github.com/mo-code-dev",
      linkedin: "https://www.linkedin.com/in/mohamed-mamdouh-bab243302",
      resumeUrl: "/Mohamed_Mamdouh-Full-stack.pdf",
    },
    nav: {
      links: [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Services", id: "services" },
        { name: "Projects", id: "projects" },
        { name: "Experience", id: "experience" },
        { name: "Education", id: "education" },
        { name: "Certificates", id: "certificates" },
        { name: "Contact", id: "contact" },
      ],
      resumeBtn: "My Resume",
      langToggle: "العربية",
      letsTalk: "Let's Talk",
    },
    hero: {
      availability: "Available for opportunities",
      eyebrow: "FULL-STACK WEB DEVELOPER",
      headlineLine1: "Building digital",
      headlineLine2: "experiences.",
      description:
        "I'm Mohamed Mamdouh, a Full-Stack Developer focused on building modern, responsive, and high-performance web applications using technologies like React, Tailwind CSS, Node.js, Express, and MongoDB.",
      primaryCta: "View My Work",
      secondaryCta: "Let's Talk",
      connectLabel: "Connect",
      floatingBadges: {
        stackLabel: "Stack",
        stackValue: "MERN",
        focusLabel: "Focus",
        focusValue: "Web Development",
        buildingLabel: "Building With",
        buildingValue: "React · Node · Mongo",
      },
      metrics: [
        { label: "Production Projects", value: "9+", accent: "cobalt" },
        { label: "Certifications & Programs", value: "9+", accent: "violet" },
        { label: "Core Architecture", value: "MERN", accent: "forest" },
      ],
    },
    about: {
      badge: "About Me",
      title: "Engineering software with a strong business mindset.",
      subtitle:
        "Bridging the gap between clean technical architecture and real-world operational workflows.",
      paragraphs: [
        "I don't just write code in isolation—my goal is to build organized, scalable, and maintainable digital products that solve real business problems from requirements analysis to deployment.",
        "With an academic degree in Accounting (English Section) and hands-on professional experience in Financial Operations, HR Talent Acquisition, and Sales, I bring a rare advantage to software development: I deeply understand the business logic behind ERP systems, financial modules, HR workflows, and SaaS platforms before writing a single line of code.",
      ],
      pillars: [
        {
          number: "01",
          title: "Clean & Scalable Architecture",
          description: "Modular frontend and backend design built for long-term maintenance and performance.",
        },
        {
          number: "02",
          title: "Business & Financial Acumen",
          description: "Practical background in accounting and HR enables accurate modeling of enterprise workflows.",
        },
        {
          number: "03",
          title: "Bilingual UX (RTL / LTR)",
          description: "Seamless Arabic and English interfaces tailored for MENA and global markets.",
        },
      ],
    },
    skills: {
      badge: "Skills & Technologies",
      titleLine1: "The skills behind",
      titleLine2: "my work.",
      subtitle:
        "A combination of technical knowledge and personal skills that help me build better products and work effectively with others.",
      techHeader: "Technical Skills",
      techSubheader: "Development Stack",
      categoriesCount: "04 Categories",
      technicalSkills: [
        {
          number: "01",
          title: "Frontend",
          description:
            "Building responsive, modern and interactive interfaces with a strong focus on usability.",
          skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
        },
        {
          number: "02",
          title: "Backend",
          description:
            "Developing reliable APIs and server-side applications with clean and scalable architecture.",
          skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication"],
        },
        {
          number: "03",
          title: "Database",
          description:
            "Designing and managing data structures for secure and efficient applications.",
          skills: ["MongoDB", "MongoDB Atlas", "Mongoose", "CRUD"],
        },
        {
          number: "04",
          title: "Tools",
          description:
            "Using modern development tools to build, test, manage and deploy projects efficiently.",
          skills: ["Git", "GitHub", "VS Code", "Postman", "Vite"],
        },
      ],
      personalHeader: "Personal Skills",
      personalSubheader: "How I Work",
      personalDescription:
        "Beyond technical skills, I believe that communication, adaptability and a problem-solving mindset are essential for building successful products.",
      personalSkills: [
        {
          title: "Problem Solving",
          description: "Breaking complex problems into clear, practical and effective solutions.",
          icon: "◈",
        },
        {
          title: "Communication",
          description: "Explaining ideas clearly and communicating effectively with different people.",
          icon: "◌",
        },
        {
          title: "Teamwork",
          description: "Working collaboratively, sharing ideas and contributing to team goals.",
          icon: "◇",
        },
        {
          title: "Adaptability",
          description: "Quickly learning new technologies and adapting to changing project requirements.",
          icon: "↗",
        },
        {
          title: "Time Management",
          description: "Organizing priorities and managing tasks to keep projects moving efficiently.",
          icon: "◷",
        },
        {
          title: "Continuous Learning",
          description: "Always improving my technical knowledge and keeping up with modern technologies.",
          icon: "∞",
        },
      ],
      approach: {
        eyebrow: "My Approach",
        title: "Learn. Build. Improve.",
        description:
          "I continuously learn new technologies and apply them by building real projects and solving practical problems.",
        tags: ["Problem Solving", "Clean Code", "Responsive Design", "Teamwork", "Continuous Learning"],
      },
    },
    services: {
      badge: "Services",
      titleLine1: "What I can",
      titleLine2: "build for you.",
      subtitle:
        "From focused landing pages to complete full-stack platforms, I build modern digital products with clear structure, responsive interfaces, and practical functionality.",
      includedLabel: "Included",
      techLabel: "Technologies",
      items: [
        {
          id: "fullstack-apps",
          number: "01",
          shortTitle: "Full-Stack Web Applications",
          title: "End-to-End Full-Stack Web Applications",
          category: "MERN Stack Architecture",
          description:
            "Complete web applications engineered from database schema design and secure REST APIs to dynamic, responsive React frontends.",
          features: [
            "Custom RESTful API architecture with Node.js & Express",
            "Role-based authentication & JWT security",
            "MongoDB database modeling & CRUD operations",
            "State management & responsive dashboard interfaces",
          ],
          tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
        },
        {
          id: "frontend-platforms",
          number: "02",
          shortTitle: "Enterprise Dashboards & SaaS UI",
          title: "Scalable Dashboards & SaaS Interfaces",
          category: "Frontend Engineering",
          description:
            "Complex multi-module user interfaces for ERP systems, construction management, e-learning, and multi-tenant SaaS products with full Arabic (RTL) and English (LTR) support.",
          features: [
            "Multi-module enterprise layouts & navigation",
            "Full bilingual localization (Arabic RTL / English LTR)",
            "Interactive data tables, workflows, and KPI cards",
            "Component-driven architecture with React & Next.js",
          ],
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18next", "Framer Motion"],
        },
        {
          id: "ecommerce-menus",
          number: "03",
          shortTitle: "E-Commerce & Digital Menus",
          title: "Modern E-Commerce Stores & Interactive Menus",
          category: "Commercial Products",
          description:
            "High-conversion online stores and restaurant digital menus with smooth cart management, product customization, and direct WhatsApp/checkout integration.",
          features: [
            "Product catalogs, filtering, and detailed views",
            "Interactive shopping cart & localStorage persistence",
            "Direct WhatsApp & phone order automation",
            "Mobile-first UX optimized for fast ordering",
          ],
          tech: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB", "Framer Motion"],
        },
        {
          id: "landing-pages",
          number: "04",
          shortTitle: "High-Converting Landing Pages",
          title: "Custom Landing Pages & Brand Websites",
          category: "UI/UX & Conversion",
          description:
            "Tailored landing pages for real estate, medical clinics, and corporate brands designed for speed, trust, and clear lead generation.",
          features: [
            "Custom visual identity & modern animations",
            "Appointment booking & direct contact funnels",
            "SEO-friendly structure & fast loading times",
            "Pixel-perfect responsiveness across all devices",
          ],
          tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide", "Responsive Design"],
        },
      ],
    },
    projects: {
      badge: "Selected Work",
      titleLine1: "Projects I've",
      titleLine2: "Built",
      subtitle:
        "A selection of real projects where I turn ideas into modern, responsive, and functional digital experiences.",
      filters: ["All", "Full-Stack", "Frontend"],
      liveDemoLabel: "Live Demo",
      openLiveProduct: "Open Live Product",
      privateRepoLabel: "Private Repository",
      featuredPreviewLabel: "Featured Product Preview",
      ctaBanner: {
        eyebrow: "More Projects Coming",
        title: "Always building. Always learning.",
        description:
          "I'm continuously working on new ideas and improving my development skills through real-world projects.",
        buttonText: "Explore My GitHub",
      },
      items: [
        {
          id: 1,
          title: "Santo",
          category: "Enterprise Construction Platform",
          description:
            "A complete enterprise-grade front-end for a modern construction management platform, combining project management, field operations, accounting, HR, procurement, materials, safety, documents, reporting, and business workflows.",
          tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Responsive Design",
            "English + Arabic",
            "RTL / LTR",
          ],
          type: "Frontend",
          featured: true,
          badge: "Featured",
          isNew: true,
          github: null,
          live: "https://santo-construction-platform.vercel.app/",
          santoMeta: [
            { label: "Product", value: "Enterprise Front-End" },
            { label: "Platform", value: "Construction Management" },
            { label: "Experience", value: "English + Arabic RTL" },
          ],
        },
        {
          id: 2,
          title: "Full-Stack E-Commerce",
          category: "Full-Stack Development",
          description:
            "A complete full-stack e-commerce web application with authentication, product management, protected routes, REST APIs, and database integration.",
          tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
          type: "Full-Stack",
          featured: true,
          badge: "Featured",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "#",
        },
        {
          id: 3,
          title: "Alex.Store",
          category: "Clothing E-Commerce",
          description:
            "A modern clothing e-commerce website focused on premium UI/UX, responsive layouts, clean product presentation, and smooth user interactions.",
          tech: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
          type: "Frontend",
          featured: true,
          badge: "Featured",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "https://alex-store-y1z5.vercel.app/",
        },
        {
          id: 4,
          title: "UNION",
          category: "SaaS Platform",
          description:
            "A scalable SaaS platform concept designed to support multiple business types with bilingual experiences, role-based authentication, business management, and subscription-ready architecture.",
          tech: [
            "React",
            "Vite",
            "Tailwind CSS",
            "i18next",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
          ],
          type: "Full-Stack",
          featured: true,
          badge: "Featured",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "#",
        },
        {
          id: 5,
          title: "ALPHA",
          category: "Real Estate Landing Page",
          description:
            "A premium real estate landing page created with a dark luxury visual identity for showcasing properties and developments across leading New Cairo and West Cairo locations.",
          tech: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
          type: "Frontend",
          featured: true,
          badge: "Featured",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "#",
        },
        {
          id: 6,
          title: "SkillUp",
          category: "E-Learning Platform",
          description:
            "A modern e-learning platform designed to present online courses, instructors, categories, and educational content through a responsive and interactive interface.",
          tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion"],
          type: "Frontend",
          featured: true,
          badge: "Featured",
          isNew: false,
          github: "https://github.com/mo-code-dev/skillup-e-learning-platform",
          live: "https://skillup-e-learning-platform.vercel.app/",
        },
        {
          id: 7,
          title: "LUMA",
          category: "Restaurant Digital Menu",
          description:
            "A modern bilingual restaurant digital menu experience with product details, extras, cart functionality, localStorage, delivery and takeaway options, and direct WhatsApp and phone ordering.",
          tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide", "JavaScript"],
          type: "Frontend",
          featured: true,
          badge: "Featured",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "#",
        },
        {
          id: 8,
          title: "Dr. Ahmed Mohamed Saeed",
          category: "Medical Landing Page",
          description:
            "A premium medical landing page for an internal medicine and gastroenterology doctor, focused on trust, clear service presentation, appointment booking, and direct communication.",
          tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide", "Responsive Design"],
          type: "Frontend",
          featured: true,
          badge: "Featured",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "#",
        },
        {
          id: 9,
          title: "Personal Portfolio",
          category: "Portfolio Website",
          description:
            "A modern personal portfolio designed to showcase my skills, projects, experience, education, certificates, and professional journey with a clean responsive interface.",
          tech: ["React", "Tailwind CSS", "Vite", "JavaScript", "Responsive Design"],
          type: "Frontend",
          featured: true,
          badge: "Featured",
          isNew: false,
          github: "https://github.com/mo-code-dev/Portfolio",
          live: "https://mohamed-mamdouh-portfolio-five.vercel.app/",
        },
      ],
    },
    experience: {
      badge: "My Experience",
      titleLine1: "Experience &",
      titleLine2: "Journey",
      subtitle:
        "A combination of professional experience, freelance work, volunteering, and continuous learning.",
      bottomBanner: {
        eyebrow: "Growing Every Day",
        title: "Different experiences. One goal.",
        description:
          "Building a strong professional background while continuously developing my technical and business skills.",
      },
      items: [
        {
          id: 1,
          role: "HR Recruiter / Talent Acquisition Specialist",
          company: "Freelance",
          location: "Remote",
          period: "1 Year",
          type: "Freelance",
          description:
            "Worked as a freelance HR Recruiter and Talent Acquisition Specialist, supporting recruitment activities and helping identify and evaluate suitable candidates for different roles.",
          responsibilities: [
            "Sourced and screened candidates based on job requirements.",
            "Reviewed CVs and evaluated candidate qualifications.",
            "Communicated with candidates throughout the recruitment process.",
            "Supported interview scheduling and candidate follow-up.",
            "Assisted with matching candidates to suitable job opportunities.",
          ],
          icon: "hr",
        },
        {
          id: 2,
          role: "Accountant",
          company: "Accounting Office",
          location: "Mohandessin, Giza",
          period: "1 Year",
          type: "Full-Time",
          description:
            "Worked at an accounting office in Mohandessin, gaining practical experience in accounting operations, financial documentation, and day-to-day office procedures.",
          responsibilities: [
            "Assisted with daily accounting and financial transactions.",
            "Prepared and organized accounting documents and records.",
            "Supported data entry and financial record keeping.",
            "Worked with financial documents and accounting procedures.",
            "Maintained accuracy and organization of accounting records.",
          ],
          icon: "accounting",
        },
        {
          id: 3,
          role: "Sales Representative",
          company: "Raya",
          location: "Egypt",
          period: "Experience",
          type: "Professional Experience",
          description:
            "Gained professional sales experience through customer interaction, communication, and supporting sales activities.",
          responsibilities: [
            "Communicated with customers and understood their needs.",
            "Presented products and services clearly to customers.",
            "Supported sales activities and customer follow-up.",
            "Developed communication and negotiation skills.",
          ],
          icon: "sales",
        },
        {
          id: 4,
          role: "Organization Member / Volunteer",
          company: "Youth Leaders Foundation (YLY)",
          location: "Ministry of Youth and Sports",
          period: "Volunteer Experience",
          type: "Volunteer",
          description:
            "Participated as a volunteer with Youth Leaders Foundation, developing teamwork, communication, organization, and event coordination skills.",
          responsibilities: [
            "Worked collaboratively within a volunteer team.",
            "Supported organizational and event-related activities.",
            "Communicated with team members and participants.",
            "Developed teamwork, leadership, and organizational skills.",
          ],
          icon: "volunteer",
        },
      ],
    },
    education: {
      badge: "Education",
      titleLine1: "Academic",
      titleLine2: "background.",
      subtitle:
        "My academic background in accounting and business provides a strong foundation that complements my technical development journey.",
      period: "2019 — 2023",
      degreeTitle: "Bachelor's Degree",
      department: "Commerce — Accounting",
      gradeBadge: "Grade: Good",
      universityLabel: "University",
      universityName: "Sohag University",
      facultyName: "Faculty of Commerce — English Section",
      details: [
        { label: "Degree", value: "Bachelor's Degree", sub: "Commerce" },
        { label: "Major", value: "Accounting", sub: "English Section" },
        { label: "University", value: "Sohag University", sub: "Egypt" },
        { label: "Graduation", value: "2023", sub: "Grade: Good" },
      ],
      statement:
        "My academic background in accounting developed my analytical thinking, attention to detail, problem-solving abilities, and understanding of business fundamentals.",
    },
    certificates: {
      badge: "Certificates & Training",
      titleLine1: "Learning that",
      titleLine2: "builds experience.",
      subtitle:
        "A collection of my professional certifications, technical training, banking programs, and continuous learning experiences.",
      footerTag: "Professional Development",
      bottomBanner: {
        eyebrow: "Continuous Learning",
        title: "Always learning. Always building.",
        description:
          "Combining technical development, business knowledge, and professional training to build stronger digital solutions.",
        counterLabel: "Learning Experiences",
      },
      items: [
        {
          title: "Backend Development / Node.js",
          provider: "Route Academy",
          category: "Web Development",
          description:
            "Backend development training covering Node.js, Express.js, MongoDB, Mongoose, REST APIs, and modern JavaScript.",
          skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
          icon: "⚙️",
        },
        {
          title: "React.js",
          provider: "Programming with Mosh",
          category: "Frontend Development",
          description:
            "Self-learning React.js training focused on building modern and reusable frontend applications.",
          skills: ["React.js", "Components", "Hooks", "Frontend"],
          icon: "⚛️",
        },
        {
          title: "HTML, CSS & JavaScript",
          provider: "Yanfaa",
          category: "Web Development",
          description:
            "Web development fundamentals covering HTML, CSS, and JavaScript for building responsive websites.",
          skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
          icon: "🌐",
        },
        {
          title: "MOS Certificate",
          provider: "Alpatros Team",
          category: "Professional Skills",
          description:
            "Microsoft Office Specialist certification demonstrating practical skills in Microsoft Office applications.",
          skills: ["Microsoft Office", "Productivity", "Computer Skills"],
          icon: "📊",
        },
        {
          title: "PFA Course",
          provider: "ITSharks",
          category: "Finance & Accounting",
          description:
            "Professional financial accounting training covering practical accounting concepts and financial fundamentals.",
          skills: ["Accounting", "Finance", "Financial Concepts"],
          icon: "📈",
        },
        {
          title: "Entrepreneurship",
          provider: "Egyptian Banking Institute",
          category: "Business",
          description:
            "Entrepreneurship training focused on business fundamentals, entrepreneurial thinking, and developing business ideas.",
          skills: ["Entrepreneurship", "Business", "Innovation"],
          icon: "💡",
        },
        {
          title: "Financial Analysis",
          provider: "Bank Misr",
          category: "Banking & Finance",
          description:
            "Financial analysis training covering key concepts related to analyzing financial information and business performance.",
          skills: ["Financial Analysis", "Banking", "Finance"],
          icon: "🏦",
        },
        {
          title: "Financial Inclusion",
          provider: "CIB",
          category: "Banking & Finance",
          description:
            "Training focused on financial inclusion and its role in expanding access to financial services.",
          skills: ["Financial Inclusion", "Banking", "Finance"],
          icon: "💳",
        },
        {
          title: "AI Catalyst V.04",
          provider: "DotPy — The Framework",
          category: "AI & Business",
          description:
            "Professional event focused on Artificial Intelligence, Business, Marketing, Leadership, and Emotional Intelligence.",
          skills: ["Artificial Intelligence", "Business", "Leadership"],
          icon: "🤖",
        },
      ],
    },
    contact: {
      badge: "Get In Touch",
      titleLine1: "Let's build something",
      titleLine2: "great together.",
      subtitle:
        "I'm open to web development opportunities, freelance projects, collaborations, and interesting ideas. Feel free to reach out.",
      findMeOnline: "Find me online",
      ctaCard: {
        badge: "Available for opportunities",
        title: "Have a project in mind?",
        description:
          "Whether you need a responsive frontend, a complete full-stack application, or help turning an idea into a real product, let's talk.",
        buttonText: "Send Me an Email",
        stackNote: "React • Tailwind CSS • Node.js • Express • MongoDB",
      },
      items: [
        {
          title: "Email",
          value: "mohamedmmdouh541@gmail.com",
          href: "mailto:mohamedmmdouh541@gmail.com",
          type: "email",
        },
        {
          title: "WhatsApp (Primary)",
          value: "01007924757",
          href: "https://wa.me/201007924757",
          type: "whatsapp",
        },
        {
          title: "WhatsApp (Secondary)",
          value: "01009305429",
          href: "https://wa.me/201009305429",
          type: "whatsapp",
        },
        {
          title: "Location",
          value: "Cairo / Giza, Egypt",
          href: "https://www.google.com/maps/search/?api=1&query=Giza%2C%20Egypt",
          type: "location",
        },
      ],
    },
  },
  ar: {
    meta: {
      name: "محمد ممدوح",
      role: "مطور ويب متكامل (Full-Stack)",
      subRole: "متخصص MERN Stack ومنصات الأعمال و SaaS",
      location: "القاهرة / الجيزة، مصر",
      email: "mohamedmmdouh541@gmail.com",
      whatsappPrimary: "01007924757",
      whatsappSecondary: "01009305429",
      github: "https://github.com/mo-code-dev",
      linkedin: "https://www.linkedin.com/in/mohamed-mamdouh-bab243302",
      resumeUrl: "/Mohamed_Mamdouh-Full-stack.pdf",
    },
    nav: {
      links: [
        { name: "الرئيسية", id: "home" },
        { name: "عني", id: "about" },
        { name: "المهارات", id: "skills" },
        { name: "الخدمات", id: "services" },
        { name: "المشاريع", id: "projects" },
        { name: "الخبرات", id: "experience" },
        { name: "التعليم", id: "education" },
        { name: "الشهادات", id: "certificates" },
        { name: "تواصل معي", id: "contact" },
      ],
      resumeBtn: "السيرة الذاتية",
      langToggle: "English",
      letsTalk: "تواصل معي",
    },
    hero: {
      availability: "متاح للفرص والمشاريع الجديدة",
      eyebrow: "مطور ويب FULL-STACK",
      headlineLine1: "بناء تجارب رقمية",
      headlineLine2: "متكاملة وعالية الأداء.",
      description:
        "أنا محمد ممدوح، مطور Full-Stack أركز على بناء تطبيقات ومنصات ويب حديثة، متجاوبة، وعالية الأداء باستخدام تقنيات React، Tailwind CSS، Node.js، Express، و MongoDB.",
      primaryCta: "تصفح أعمالي",
      secondaryCta: "تواصل معي",
      connectLabel: "تواصل",
      floatingBadges: {
        stackLabel: "التقنيات",
        stackValue: "MERN",
        focusLabel: "التركيز",
        focusValue: "تطوير الويب",
        buildingLabel: "أبني باستخدام",
        buildingValue: "React · Node · Mongo",
      },
      metrics: [
        { label: "مشاريع حقيقية منفذة", value: "+9", accent: "cobalt" },
        { label: "شهادات وبرامج تدريبية", value: "+9", accent: "violet" },
        { label: "البنية التقنية الأساسية", value: "MERN", accent: "forest" },
      ],
    },
    about: {
      badge: "نبذة عني",
      title: "هندسة البرمجيات بعقلية تفهم إدارة الأعمال.",
      subtitle:
        "الجمع بين البنية البرمجية النظيفة والفهم العميق لدورات العمل المحاسبية والإدارية.",
      paragraphs: [
        "هدفي ليس مجرد كتابة الكود فحسب، بل بناء مشاريع منظمة، قابلة للتطوير (Scalable)، وسلة الصيانة بجودة احترافية تبدأ من تحليل المتطلبات بدقة وحتى الاختبار والتسليم.",
        "بفضل دراستي الأكاديمية في المحاسبة (الشعبة الإنجليزية) وخبرتي العملية في المكاتب المحاسبية، واستقطاب المواهب (HR)، والمبيعات، أمتلك ميزة تنافسية قوية كمطور: القدرة على فهم منطق البيزنس (Business Logic) خلف أنظمة الـ ERP، المنصات الإدارية، وتطبيقات الـ SaaS قبل كتابة سطر كود واحد.",
      ],
      pillars: [
        {
          number: "01",
          title: "بنية برمجية منظمة (Clean Architecture)",
          description: "تصميم واجهات أمامية وخلفية مقسمة بوضوح لسهولة الصيانة والتطوير المستقبلي.",
        },
        {
          number: "02",
          title: "خلفية قوية في المحاسبة والـ HR",
          description: "خبرة عملية تساعدني على بناء الأنظمة الإدارية والمالية ومنصات الأعمال بدقة.",
        },
        {
          number: "03",
          title: "تجربة مستخدم ثنائية اللغة (RTL / LTR)",
          description: "بناء منصات تدعم العربية والإنجليزية باحترافية كاملة في التخطيط والاتجاهات.",
        },
      ],
    },
    skills: {
      badge: "المهارات والتقنيات",
      titleLine1: "المهارات التي تقف",
      titleLine2: "خلف أعمالي.",
      subtitle:
        "مزيج متكامل من المعرفة التقنية والمهارات الشخصية التي تساعدني على بناء منتجات رقمية أقوى والعمل بفعالية.",
      techHeader: "المهارات التقنية",
      techSubheader: "منظومة التطوير (Development Stack)",
      categoriesCount: "04 تصنيفات",
      technicalSkills: [
        {
          number: "01",
          title: "الواجهة الأمامية (Frontend)",
          description:
            "بناء واجهات مستخدم متجاوبة، حديثة وتفاعلية مع تركيز قوي على سهولة الاستخدام وتجربة المستخدم.",
          skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
        },
        {
          number: "02",
          title: "الواجهة الخلفية (Backend)",
          description:
            "تطوير واجهات برمجة تطبيقات (APIs) موثوقة وتطبيقات خادم ببنية نظيفة وقابلة للتوسع.",
          skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication"],
        },
        {
          number: "03",
          title: "قواعد البيانات (Database)",
          description:
            "تصميم وإدارة هياكل البيانات لبناء تطبيقات آمنة وعالية الكفاءة.",
          skills: ["MongoDB", "MongoDB Atlas", "Mongoose", "CRUD"],
        },
        {
          number: "04",
          title: "أدوات التطوير (Tools)",
          description:
            "استخدام أدوات التطوير الحديثة لبناء، اختبار، إدارة، ونشر المشاريع بكفاءة.",
          skills: ["Git", "GitHub", "VS Code", "Postman", "Vite"],
        },
      ],
      personalHeader: "المهارات الشخصية",
      personalSubheader: "كيف أعمل",
      personalDescription:
        "إلى جانب المهارات التقنية، أؤمن بأن التواصل الفعال، المرونة، وعقلية حل المشكلات هي ركائز أساسية لبناء منتجات ناجحة.",
      personalSkills: [
        {
          title: "حل المشكلات (Problem Solving)",
          description: "تفكيك المشكلات المعقدة وتحويلها إلى حلول عملية وواضحة وفعالة.",
          icon: "◈",
        },
        {
          title: "التواصل الفعال (Communication)",
          description: "شرح الأفكار التقنية بوضوح والتواصل الفعال مع مختلف فرق العمل والعملاء.",
          icon: "◌",
        },
        {
          title: "العمل الجماعي (Teamwork)",
          description: "العمل بروح الفريق، مشاركة الأفكار، والمساهمة الفعالة في تحقيق أهداف المشروع.",
          icon: "◇",
        },
        {
          title: "المرونة والتكيف (Adaptability)",
          description: "سرعة تعلم التقنيات الجديدة والتكيف مع متطلبات المشاريع المتغيرة.",
          icon: "↗",
        },
        {
          title: "إدارة الوقت (Time Management)",
          description: "تنظيم الأولويات وإدارة المهام لضمان سير المشاريع وتسليمها في الوقت المحدد.",
          icon: "◷",
        },
        {
          title: "التعلم المستمر (Continuous Learning)",
          description: "التطوير الدائم للمعرفة التقنية ومواكبة أحدث أدوات وهندسة البرمجيات.",
          icon: "∞",
        },
      ],
      approach: {
        eyebrow: "منهجيتي في العمل",
        title: "تعلّم. ابنِ. طوّر.",
        description:
          "أواظب على تعلم التقنيات الحديثة وتطبيقها عملياً من خلال بناء مشاريع حقيقية وحل مشكلات واقعية.",
        tags: ["حل المشكلات", "كود نظيف", "تصميم متجاوب", "العمل الجماعي", "التعلم المستمر"],
      },
    },
    services: {
      badge: "الخدمات",
      titleLine1: "ما الذي يمكنني",
      titleLine2: "بناؤه لك.",
      subtitle:
        "من صفحات الهبوط الموجهة إلى منصات الـ Full-Stack المتكاملة، أبني منتجات رقمية حديثة بهيكل واضح وواجهات متجاوبة.",
      includedLabel: "ما تشمله الخدمة",
      techLabel: "التقنيات المستخدمة",
      items: [
        {
          id: "fullstack-apps",
          number: "01",
          shortTitle: "تطبيقات ويب Full-Stack متكاملة",
          title: "تطوير تطبيقات ومنصات Full-Stack متكاملة",
          category: "MERN Stack Architecture",
          description:
            "بناء تطبيقات ويب كاملة تبدأ من تصميم قواعد البيانات والـ REST APIs الآمنة وحتى واجهات المستخدم التفاعلية بـ React.",
          features: [
            "بناء RESTful APIs منظمة باستخدام Node.js و Express",
            "نظام صلاحيات ومصادقة آمن باستخدام JWT",
            "تصميم قواعد بيانات MongoDB وعمليات CRUD كاملة",
            "لوحات تحكم وواجهات مستخدم متجاوبة وسريعة",
          ],
          tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
        },
        {
          id: "frontend-platforms",
          number: "02",
          shortTitle: "المنصات الإدارية وواجهات الـ SaaS",
          title: "بناء لوحات التحكم والمنصات الإدارية و SaaS",
          category: "Frontend Engineering",
          description:
            "تطوير واجهات أمامية متقدمة لأنظمة إدارة الشركات (ERP)، المقاولات، التعليم الإلكتروني، ومنصات الـ SaaS بدعم كامل للغتين العربية (RTL) والإنجليزية (LTR).",
          features: [
            "تخطيطات هندسية متعددة الأقسام للأنظمة الكبرى",
            "دعم كامل للغتين العربية والإنجليزية (RTL / LTR)",
            "جداول بيانات تفاعلية، تقارير، ومؤشرات أداء (KPIs)",
            "بنية كود مقسمة وقابلة للتوسع بـ React و Next.js",
          ],
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18next", "Framer Motion"],
        },
        {
          id: "ecommerce-menus",
          number: "03",
          shortTitle: "المتاجر الإلكترونية والمنيو الرقمي",
          title: "متاجر إلكترونية ومنصات منيو رقمي تفاعلي",
          category: "Commercial Products",
          description:
            "تطوير متاجر إلكترونية عصرية ومنيو رقمي للمطاعم والكافيهات مع سلة مشتريات ذكية وطلب مباشر عبر واتساب.",
          features: [
            "عرض المنتجات والتصنيفات والإضافات بشكل تفاعلي",
            "سلة مشتريات متكاملة مع حفظ البيانات في المتصفح",
            "ربط مباشر للطلبات عبر WhatsApp والاتصال المباشر",
            "تجربة مستخدم مثالية وسريعة على الهواتف الذكية",
          ],
          tech: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB", "Framer Motion"],
        },
        {
          id: "landing-pages",
          number: "04",
          shortTitle: "صفحات الهبوط والمواقع التعريفية",
          title: "صفحات هبوط احترافية عالية التحويل",
          category: "UI/UX & Conversion",
          description:
            "تصميم وتطوير صفحات هبوط مخصصة للعقارات، العيادات الطبية، والشركات بهوية بصرية مميزة تركز على سرعة الأداء وجذب العملاء.",
          features: [
            "تصميم عصري مع حركات تفاعلية ناعمة (Animations)",
            "نماذج حجز مواعيد وتواصل مباشر واضحة",
            "سرعة تحميل فائقة وتوافق مع معايير SEO",
            "تجاوب كامل ودقيق على كافة أحجام الشاشات",
          ],
          tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide", "Responsive Design"],
        },
      ],
    },
    projects: {
      badge: "أعمال مختارة",
      titleLine1: "مشاريع قمت",
      titleLine2: "ببنائها",
      subtitle:
        "مجموعة مختارة من المشاريع الحقيقية التي حولت فيها الأفكار إلى منصات وتجارب رقمية حديثة، متجاوبة، وعملية.",
      filters: ["All", "Full-Stack", "Frontend"],
      liveDemoLabel: "معاينة حية",
      openLiveProduct: "افتح المنصة الحية",
      privateRepoLabel: "مستودع خاص",
      featuredPreviewLabel: "معاينة حية للمشروع المميز",
      ctaBanner: {
        eyebrow: "المزيد من المشاريع قريباً",
        title: "بناء مستمر. تعلم مستمر.",
        description:
          "أعمل باستمرار على تنفيذ أفكار جديدة وتطوير مهاراتي الهندسية من خلال بناء مشاريع واقعية.",
        buttonText: "تصفح حسابي على GitHub",
      },
      items: [
        {
          id: 1,
          title: "Santo",
          category: "منصة مؤسسية لإدارة شركات المقاولات",
          description:
            "واجهة أمامية متكاملة (Enterprise-Grade) لمنصة حديثة لإدارة شركات المقاولات والإنشاءات، تجمع بين إدارة المشاريع، العمليات الميدانية، المحاسبة، الموارد البشرية (HR)، المشتريات، المواد، السلامة المهنية، المستندات، والتقارير.",
          tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Responsive Design",
            "English + Arabic",
            "RTL / LTR",
          ],
          type: "Frontend",
          featured: true,
          badge: "مميز",
          isNew: true,
          github: null,
          live: "https://santo-construction-platform.vercel.app/",
          santoMeta: [
            { label: "المنتج", value: "Enterprise Front-End" },
            { label: "المنصة", value: "إدارة المقاولات والإنشاءات" },
            { label: "التجربة", value: "عربي RTL + إنجليزي LTR" },
          ],
        },
        {
          id: 2,
          title: "Full-Stack E-Commerce",
          category: "تطوير متجر متكامل Full-Stack",
          description:
            "تطبيق متجر إلكتروني Full-Stack متكامل يشمل نظام مصادقة المستخدمين، إدارة المنتجات، حماية المسارات (Protected Routes)، واجهات REST APIs، وربط كامل بقاعدة البيانات.",
          tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
          type: "Full-Stack",
          featured: true,
          badge: "مميز",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "#",
        },
        {
          id: 3,
          title: "Alex.Store",
          category: "متجر أزياء وملابس إلكتروني",
          description:
            "موقع تجارة إلكترونية عصري للأزياء يركز على تجربة مستخدم (UI/UX) راقية، تخطيطات متجاوبة، عرض نظيف للمنتجات، وتفاعلات سلسة.",
          tech: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
          type: "Frontend",
          featured: true,
          badge: "مميز",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "https://alex-store-y1z5.vercel.app/",
        },
        {
          id: 4,
          title: "UNION",
          category: "منصة SaaS متعددة الأنشطة",
          description:
            "منصة SaaS قابلة للتوسع مصممة لدعم أنماط متعددة من الأعمال مع تجربة ثنائية اللغة، نظام صلاحيات حسب الدور (Role-Based Auth)، إدارة الأعمال، وهيكلة جاهزة للاشتراكات.",
          tech: [
            "React",
            "Vite",
            "Tailwind CSS",
            "i18next",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
          ],
          type: "Full-Stack",
          featured: true,
          badge: "مميز",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "#",
        },
        {
          id: 5,
          title: "ALPHA",
          category: "صفحة هبوط عقارية فاخرة",
          description:
            "صفحة هبوط عقارية راقية بهوية بصرية فخمة لعرض العقارات والمشروعات السكنية في أبرز مواقع القاهرة الجديدة وغرب القاهرة.",
          tech: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
          type: "Frontend",
          featured: true,
          badge: "مميز",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "#",
        },
        {
          id: 6,
          title: "SkillUp",
          category: "منصة تعليم إلكتروني (E-Learning)",
          description:
            "منصة تعليمية حديثة مصممة لعرض الدورات التدريبية، المحاضرين، الأقسام، والمحتوى التعليمي من خلال واجهة تفاعلية ومتجاوبة.",
          tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion"],
          type: "Frontend",
          featured: true,
          badge: "مميز",
          isNew: false,
          github: "https://github.com/mo-code-dev/skillup-e-learning-platform",
          live: "https://skillup-e-learning-platform.vercel.app/",
        },
        {
          id: 7,
          title: "LUMA",
          category: "منيو مطعم رقمي تفاعلي",
          description:
            "تجربة منيو رقمي ثنائي اللغة للمطاعم يشمل تفاصيل المنتجات، الإضافات، سلة المشتريات، الحفظ في localStorage، خيارات التوصيل والاستلام، والطلب المباشر عبر واتساب أو الهاتف.",
          tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide", "JavaScript"],
          type: "Frontend",
          featured: true,
          badge: "مميز",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "#",
        },
        {
          id: 8,
          title: "د. أحمد محمد سعيد",
          category: "صفحة هبوط طبية للعيادات",
          description:
            "صفحة هبوط طبية احترافية لطبيب باطنة وجهاز هضمي، تركز على بناء الثقة، العرض الواضح للخدمات الطبية، حجز المواعيد، والتواصل المباشر.",
          tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide", "Responsive Design"],
          type: "Frontend",
          featured: true,
          badge: "مميز",
          isNew: false,
          github: "https://github.com/mo-code-dev",
          live: "#",
        },
        {
          id: 9,
          title: "Personal Portfolio",
          category: "موقع بورتفوليو شخصي",
          description:
            "بورتفوليو شخصي حديث مصمم لعرض مهاراتي، مشاريعي، خبراتي، تعليمي، وشهاداتي المهنية بواجهة نظيفة ومتجاوبة.",
          tech: ["React", "Tailwind CSS", "Vite", "JavaScript", "Responsive Design"],
          type: "Frontend",
          featured: true,
          badge: "مميز",
          isNew: false,
          github: "https://github.com/mo-code-dev/Portfolio",
          live: "https://mohamed-mamdouh-portfolio-five.vercel.app/",
        },
      ],
    },
    experience: {
      badge: "خبراتي المهنية",
      titleLine1: "الخبرات و",
      titleLine2: "المسيرة المهنية",
      subtitle:
        "مزيج من الخبرة المهنية، العمل الحر، العمل التطوعي، والتطوير المستمر.",
      bottomBanner: {
        eyebrow: "تطور مستمر كل يوم",
        title: "خبرات متنوعة. هدف واحد.",
        description:
          "بناء خلفية مهنية قوية مع التطوير المستمر لمهاراتي التقنية والإدارية.",
      },
      items: [
        {
          id: 1,
          role: "أخصائي توظيف واستقطاب مواهب (HR Recruiter)",
          company: "عمل حر (Freelance)",
          location: "عن بُعد (Remote)",
          period: "سنة واحدة",
          type: "عمل حر",
          description:
            "عملت كأخصائي توظيف واستقطاب مواهب مستقل، لدعم أنشطة التوظيف والمساعدة في تحديد وتقييم المرشحين المناسبين لمختلف الأدوار الوظيفية.",
          responsibilities: [
            "البحث عن المرشحين وفرزهم بناءً على متطلبات الوظائف.",
            "مراجعة السير الذاتية (CVs) وتقييم مؤهلات المرشحين.",
            "التواصل مع المرشحين طوال مراحل عملية التوظيف.",
            "تنسيق مواعيد المقابلات ومتابعة المرشحين.",
            "المساهمة في مطابقة المرشحين مع الفرص الوظيفية المناسبة.",
          ],
          icon: "hr",
        },
        {
          id: 2,
          role: "محاسب مالي (Accountant)",
          company: "مكتب محاسبة",
          location: "المهندسين، الجيزة",
          period: "سنة واحدة",
          type: "دوام كامل",
          description:
            "عملت في مكتب محاسبة بالمهندسين، واكتسبت خبرة عملية في العمليات المحاسبية، التوثيق المالي، وإجراءات العمل المكتبية اليومية.",
          responsibilities: [
            "المساهمة في المعاملات المحاسبية والمالية اليومية.",
            "إعداد وتنظيم المستندات والسجلات المحاسبية.",
            "دعم إدخال البيانات وحفظ السجلات المالية.",
            "التعامل مع المستندات المالية والإجراءات المحاسبية.",
            "الحفاظ على دقة وتنظيم الدفاتر والسجلات المحاسبية.",
          ],
          icon: "accounting",
        },
        {
          id: 3,
          role: "مسؤول مبيعات (Sales Representative)",
          company: "شركة راية (Raya)",
          location: "مصر",
          period: "خبرة عملية",
          type: "خبرة مهنية",
          description:
            "اكتسبت خبرة مهنية في مجال المبيعات من خلال التفاعل المباشر مع العملاء، التواصل الفعال، ودعم الأنشطة البيعية.",
          responsibilities: [
            "التواصل مع العملاء وفهم احتياجاتهم بدقة.",
            "عرض المنتجات والخدمات بوضوح للعملاء.",
            "دعم أنشطة المبيعات ومتابعة العملاء.",
            "تطوير مهارات التواصل والتفاوض والإقناع.",
          ],
          icon: "sales",
        },
        {
          id: 4,
          role: "عضو تنظيمي ومتطوع",
          company: "مؤسسة القادة الشباب (YLY)",
          location: "وزارة الشباب والرياضة",
          period: "خبرة تطوعية",
          type: "عمل تطوعي",
          description:
            "شاركت كمتطوع في مبادرة شباب يدير شباب (YLY)، مما طور مهاراتي في العمل الجماعي، التواصل، التنظيم، وتنسيق الفعاليات.",
          responsibilities: [
            "العمل التعاوني المشترك ضمن فريق تطوعي.",
            "دعم الأنشطة التنظيمية والفعاليات الميدانية.",
            "التواصل الفعال مع أعضاء الفريق والمشاركين.",
            "تطوير مهارات القيادة، العمل الجماعي، والتنظيم.",
          ],
          icon: "volunteer",
        },
      ],
    },
    education: {
      badge: "التعليم",
      titleLine1: "الخلفية",
      titleLine2: "الأكاديمية.",
      subtitle:
        "خلفيتي الأكاديمية في المحاسبة وإدارة الأعمال تمنحني أساساً تحليلياً قوياً يكمل مسيرتي في التطوير التقني.",
      period: "2019 — 2023",
      degreeTitle: "درجة البكالوريوس",
      department: "التجارة — قسم المحاسبة",
      gradeBadge: "التقدير: جيد",
      universityLabel: "الجامعة",
      universityName: "جامعة سوهاج",
      facultyName: "كلية التجارة — الشعبة الإنجليزية (English Section)",
      details: [
        { label: "الدرجة العلمية", value: "درجة البكالوريوس", sub: "كلية التجارة" },
        { label: "التخصص", value: "المحاسبة", sub: "الشعبة الإنجليزية" },
        { label: "الجامعة", value: "جامعة سوهاج", sub: "مصر" },
        { label: "سنة التخرج", value: "2023", sub: "التقدير: جيد" },
      ],
      statement:
        "ساهمت دراستي الأكاديمية للمحاسبة باللغة الإنجليزية في تنمية التفكير التحليلي، الدقة في التفاصيل، القدرة على حل المشكلات، والفهم العميق لأساسيات البيزنس.",
    },
    certificates: {
      badge: "الشهادات والتدريبات",
      titleLine1: "التعلّم الذي",
      titleLine2: "يبني الخبرة.",
      subtitle:
        "مجموعة من الشهادات المهنية، التدريبات التقنية، البرامج المصرفية، وتجارب التعلم المستمر.",
      footerTag: "تطوير مهني",
      bottomBanner: {
        eyebrow: "التعلم المستمر",
        title: "دائماً أتعلم. دائماً أبني.",
        description:
          "الجمع بين التطوير التقني، المعرفة الإدارية والمالية، والتدريب المهني لبناء حلول رقمية أقوى.",
        counterLabel: "تجربة تعليمية وتدريبية",
      },
      items: [
        {
          title: "Backend Development / Node.js",
          provider: "Route Academy",
          category: "تطوير الويب",
          description:
            "تدريب متخصص في تطوير الواجهات الخلفية يغطي Node.js، Express.js، MongoDB، Mongoose، REST APIs، و JavaScript الحديثة.",
          skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
          icon: "⚙️",
        },
        {
          title: "React.js",
          provider: "Programming with Mosh",
          category: "تطوير الواجهات الأمامية",
          description:
            "تدريب عملي مكثف على React.js يركز على بناء تطبيقات واجهات أمامية حديثة وقابلة لإعادة الاستخدام.",
          skills: ["React.js", "Components", "Hooks", "Frontend"],
          icon: "⚛️",
        },
        {
          title: "HTML, CSS & JavaScript",
          provider: "منصة ينفع (Yanfaa)",
          category: "تطوير الويب",
          description:
            "أساسيات تطوير الويب الشاملة لـ HTML و CSS و JavaScript لبناء مواقع ويب متجاوبة.",
          skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
          icon: "🌐",
        },
        {
          title: "شهادة MOS الدولية",
          provider: "Alpatros Team",
          category: "مهارات مهنية",
          description:
            "شهادة أخصائي مايكروسوفت أوفيس (Microsoft Office Specialist) التي تثبت الكفاءة العملية في تطبيقات الأوفيس.",
          skills: ["Microsoft Office", "Productivity", "Computer Skills"],
          icon: "📊",
        },
        {
          title: "دبلومة المحاسب المالي المحترف (PFA)",
          provider: "ITSharks",
          category: "المالية والمحاسبة",
          description:
            "تدريب احترافي في المحاسبة المالية يغطي المفاهيم المحاسبية التطبيقية والأساسيات المالية.",
          skills: ["Accounting", "Finance", "Financial Concepts"],
          icon: "📈",
        },
        {
          title: "ريادة الأعمال (Entrepreneurship)",
          provider: "المعهد المصرفي المصري (EBI)",
          category: "ريادة الأعمال",
          description:
            "تدريب متخصص في ريادة الأعمال يركز على أساسيات البيزنس، التفكير الريادي، وتطوير أفكار المشاريع.",
          skills: ["Entrepreneurship", "Business", "Innovation"],
          icon: "💡",
        },
        {
          title: "التحليل المالي (Financial Analysis)",
          provider: "بنك مصر (Banque Misr)",
          category: "البنوك والمالية",
          description:
            "تدريب على التحليل المالي يغطي المفاهيم الأساسية لتحليل البيانات والقوائم المالية وتقييم أداء الأعمال.",
          skills: ["Financial Analysis", "Banking", "Finance"],
          icon: "🏦",
        },
        {
          title: "الشمول المالي (Financial Inclusion)",
          provider: "البنك التجاري الدولي (CIB)",
          category: "البنوك والمالية",
          description:
            "برنامج تدريبي يركز على الشمول المالي ودوره في توسيع نطاق الوصول إلى الخدمات المالية والمصرفية.",
          skills: ["Financial Inclusion", "Banking", "Finance"],
          icon: "💳",
        },
        {
          title: "AI Catalyst V.04",
          provider: "DotPy — The Framework",
          category: "الذكاء الاصطناعي والأعمال",
          description:
            "فعالية مهنية تركز على تطبيقات الذكاء الاصطناعي، إدارة الأعمال، التسويق، القيادة، والذكاء العاطفي.",
          skills: ["Artificial Intelligence", "Business", "Leadership"],
          icon: "🤖",
        },
      ],
    },
    contact: {
      badge: "تواصل معي",
      titleLine1: "دعنا نبني شيئاً",
      titleLine2: "رائعاً معاً.",
      subtitle:
        "أنا متاح لفرص تطوير الويب، مشاريع العمل الحر، التعاون التقني، والأفكار المميزة. لا تتردد في التواصل معي.",
      findMeOnline: "حساباتي على الإنترنت",
      ctaCard: {
        badge: "متاح للفرص والمشاريع",
        title: "هل لديك مشروع في ذهنك؟",
        description:
          "سواء كنت بحاجة إلى واجهة أمامية متجاوبة، تطبيق Full-Stack متكامل، أو تحويل فكرتك إلى منتج رقمي حقيقي، دعنا نتحدث.",
        buttonText: "أرسل لي بريداً إلكترونياً",
        stackNote: "React • Tailwind CSS • Node.js • Express • MongoDB",
      },
      items: [
        {
          title: "البريد الإلكتروني",
          value: "mohamedmmdouh541@gmail.com",
          href: "mailto:mohamedmmdouh541@gmail.com",
          type: "email",
        },
        {
          title: "واتساب (الرقم الأساسي)",
          value: "01007924757",
          href: "https://wa.me/201007924757",
          type: "whatsapp",
        },
        {
          title: "واتساب (الرقم الإضافي)",
          value: "01009305429",
          href: "https://wa.me/201009305429",
          type: "whatsapp",
        },
        {
          title: "الموقع",
          value: "القاهرة / الجيزة، مصر",
          href: "https://www.google.com/maps/search/?api=1&query=Giza%2C%20Egypt",
          type: "location",
        },
      ],
    },
  },
};
`,

  // ==========================================
  // 5. NAVBAR COMPONENT (Dock Style + Framer Motion)
  // ==========================================
  'src/components/Navbar.jsx': `import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const data = portfolioData[lang];
  const navLinks = data.nav.links;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
      let current = "home";
      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= top - 220) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleNavigation = (id) => {
    setIsOpen(false);
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const pos = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav
        className={\`mx-auto flex max-w-dock items-center justify-between rounded-pill border px-4 py-2.5 transition-all duration-300 sm:px-6 \${
          scrolled
            ? "border-hairline bg-pure-white/95 shadow-dock-lg backdrop-blur-xl"
            : "border-hairline bg-pure-white/80 backdrop-blur-md"
        }\`}
      >
        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNavigation("home")}
          className="group flex items-center gap-3 text-start"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-pill bg-electric-cobalt text-sm font-bold text-pure-white transition-transform duration-300 group-hover:scale-105">
            M
          </div>
          <div className="hidden sm:block">
            <p className="text-[15px] font-bold leading-tight text-ink-charcoal">
              {data.meta.name}
            </p>
            <p className="text-[11px] font-medium text-slate-gray">
              {data.meta.role}
            </p>
          </div>
        </button>

        {/* Desktop Links (Dock Pill Tab Bar) */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigation(link.id)}
                className={\`relative rounded-pill px-3.5 py-2 text-[14px] font-medium transition-colors duration-200 \${
                  isActive ? "text-electric-cobalt" : "text-ink-charcoal hover:text-electric-cobalt"
                }\`}
              >
                {isActive && (
                  <motion.span
                    layoutId="dockNavPill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-pill border border-hairline bg-surface-ivory"
                  />
                )}
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="inline-flex items-center gap-1.5 rounded-pill border border-hairline bg-pure-white px-4 py-2 text-[13px] font-semibold text-ink-charcoal transition-colors hover:border-powder-blue hover:text-electric-cobalt"
          >
            <Globe className="h-3.5 w-3.5 text-electric-cobalt" />
            {data.nav.langToggle}
          </button>

          <a
            href={data.meta.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-pill bg-electric-cobalt px-5 py-2.5 text-[14px] font-medium text-pure-white transition-colors hover:bg-deep-cobalt md:inline-flex"
          >
            {data.nav.resumeBtn}
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="flex h-10 w-10 items-center justify-center rounded-pill border border-hairline bg-pure-white text-ink-charcoal lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-dock overflow-hidden rounded-card border border-hairline bg-pure-white p-4 shadow-dock-lg lg:hidden"
          >
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavigation(link.id)}
                  className={\`flex w-full items-center justify-between rounded-pill px-4 py-3 text-start text-[15px] font-medium \${
                    activeSection === link.id
                      ? "bg-surface-ivory text-electric-cobalt font-semibold"
                      : "text-ink-charcoal hover:bg-surface-ivory"
                  }\`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.id && (
                    <span className="h-2 w-2 rounded-full bg-electric-cobalt" />
                  )}
                </button>
              ))}
              <a
                href={data.meta.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-pill bg-electric-cobalt px-5 py-3 text-[14px] font-medium text-pure-white"
              >
                {data.nav.resumeBtn}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
`,

  // ==========================================
  // 6. HERO COMPONENT (Dock Sunlit Gradient + Portrait + Metrics)
  // ==========================================
  'src/components/Hero.jsx': `import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Hero({ lang }) {
  const data = portfolioData[lang];
  const h = data.hero;

  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-canvas-cream via-[#d5ecff]/45 to-lavender-mist/70 px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-dock">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Availability Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-pill border border-hairline bg-pure-white px-4 py-2 shadow-dock-subtle">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-forest" />
              </span>
              <span className="text-[13px] font-medium text-ink-charcoal">
                {h.availability}
              </span>
            </div>

            {/* Eyebrow */}
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-electric-cobalt">
              {h.eyebrow}
            </p>

            {/* Roobert-style 84px Display Headline */}
            <h1 className="text-[46px] font-semibold leading-[1.06] tracking-[-0.03em] text-ink-charcoal sm:text-[64px] lg:text-[78px]">
              {h.headlineLine1}
              <span className="block text-electric-cobalt">{h.headlineLine2}</span>
            </h1>

            {/* Body Copy */}
            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.6] text-slate-gray sm:text-[18px]">
              {h.description}
            </p>

            {/* Paired Pill Buttons (Dock Signature) */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleNavigation("projects")}
                className="group inline-flex items-center gap-2.5 rounded-pill bg-electric-cobalt px-7 py-3.5 text-[15px] font-medium text-pure-white transition-all duration-200 hover:bg-deep-cobalt"
              >
                {h.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </button>

              <button
                type="button"
                onClick={() => handleNavigation("contact")}
                className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-7 py-3.5 text-[15px] font-medium text-ink-charcoal shadow-dock-subtle transition-colors hover:border-powder-blue hover:text-electric-cobalt"
              >
                {h.secondaryCta}
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-9 flex items-center gap-3">
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-gray">
                {h.connectLabel}
              </span>
              <a
                href={data.meta.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-pill border border-hairline bg-pure-white text-ink-charcoal shadow-dock-subtle transition-colors hover:border-electric-cobalt hover:text-electric-cobalt"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={data.meta.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-pill border border-hairline bg-pure-white text-ink-charcoal shadow-dock-subtle transition-colors hover:border-electric-cobalt hover:text-electric-cobalt"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={\`mailto:\${data.meta.email}\`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-pill border border-hairline bg-pure-white text-ink-charcoal shadow-dock-subtle transition-colors hover:border-electric-cobalt hover:text-electric-cobalt"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual: Profile Card in Dock 16px Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="relative rounded-card border border-hairline bg-pure-white p-4 shadow-dock-lg">
              <div className="relative overflow-hidden rounded-[12px] bg-gradient-to-b from-lavender-mist to-powder-blue/40">
                <img
                  src="/Mohamed-Mamdouh.png"
                  alt={data.meta.name}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80";
                  }}
                  className="h-[430px] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between px-1 pb-1">
                <div>
                  <p className="text-[18px] font-bold text-ink-charcoal">
                    {data.meta.name}
                  </p>
                  <p className="text-[13px] font-medium text-electric-cobalt">
                    {data.meta.role}
                  </p>
                </div>
                <span className="rounded-pill bg-lavender-mist px-3.5 py-1.5 text-[12px] font-semibold text-vivid-violet">
                  {h.floatingBadges.stackValue}
                </span>
              </div>
            </div>

            {/* Floating Dock Pill Badges */}
            <div className="absolute -left-4 top-8 hidden rounded-card border border-hairline bg-pure-white px-4 py-2.5 shadow-dock-lg sm:block">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-gray">
                {h.floatingBadges.buildingLabel}
              </p>
              <p className="mt-0.5 text-[13px] font-bold text-ink-charcoal">
                {h.floatingBadges.buildingValue}
              </p>
            </div>

            <div className="absolute -right-4 bottom-20 hidden rounded-card border border-hairline bg-pure-white px-4 py-2.5 shadow-dock-lg sm:block">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-forest" />
                <p className="text-[13px] font-semibold text-ink-charcoal">
                  {h.floatingBadges.focusValue}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Customer Stat Cards Pattern (Dock Social Proof Metrics) */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {h.metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-card border border-hairline bg-surface-ivory p-6 shadow-dock-subtle"
            >
              <p className="text-[14px] font-medium text-slate-gray">{m.label}</p>
              <p
                className={\`mt-2 text-[40px] font-semibold leading-none \${
                  m.accent === "cobalt"
                    ? "text-electric-cobalt"
                    : m.accent === "violet"
                    ? "text-vivid-violet"
                    : "text-forest"
                }\`}
              >
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
`,

  // ==========================================
  // 7. ABOUT COMPONENT
  // ==========================================
  'src/components/About.jsx': `import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function About({ lang }) {
  const about = portfolioData[lang].about;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-dock">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
              {about.badge}
            </span>

            <h2 className="mt-5 text-[36px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink-charcoal sm:text-[44px]">
              {about.title}
            </h2>

            <p className="mt-4 text-[17px] font-medium text-vivid-violet">
              {about.subtitle}
            </p>

            <div className="mt-6 space-y-4 text-[16px] leading-[1.65] text-slate-gray">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {about.pillars.map((pillar) => (
              <motion.div
                key={pillar.number}
                whileHover={{ y: -2 }}
                className="rounded-card border border-hairline bg-pure-white p-6 shadow-dock-subtle"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-pill bg-lavender-mist px-3 py-1 text-[12px] font-bold text-vivid-violet">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="mt-3 text-[20px] font-semibold text-ink-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.56] text-slate-gray">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
`,

  // ==========================================
  // 8. SKILLS COMPONENT (All 4 Tech Groups + All 6 Personal Skills)
  // ==========================================
  'src/components/Skills.jsx': `import { portfolioData } from "../data/portfolioData";

function Skills({ lang }) {
  const s = portfolioData[lang].skills;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline bg-surface-ivory">
      <div className="mx-auto max-w-dock">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
            {s.badge}
          </span>

          <h2 className="mt-5 text-[40px] font-semibold leading-[1.12] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
            {s.titleLine1}{" "}
            <span className="text-electric-cobalt">{s.titleLine2}</span>
          </h2>

          <p className="mt-4 text-[16px] leading-[1.6] text-slate-gray sm:text-[18px]">
            {s.subtitle}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-electric-cobalt">
                {s.techHeader}
              </p>
              <h3 className="mt-1 text-[24px] font-semibold text-ink-charcoal">
                {s.techSubheader}
              </h3>
            </div>
            <span className="text-[13px] font-medium text-slate-gray">
              {s.categoriesCount}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {s.technicalSkills.map((group) => (
              <div
                key={group.number}
                className="rounded-card border border-hairline bg-pure-white p-6 shadow-dock-subtle transition-all hover:border-powder-blue"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[13px] font-bold text-electric-cobalt">
                      {group.number}
                    </span>
                    <h4 className="mt-1 text-[22px] font-semibold text-ink-charcoal">
                      {group.title}
                    </h4>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-surface-ivory border border-hairline text-electric-cobalt font-bold">
                    +
                  </span>
                </div>

                <p className="mt-3 text-[15px] leading-[1.56] text-slate-gray">
                  {group.description}
                </p>

                <div className="my-5 h-px bg-hairline" />

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-pill border border-hairline bg-surface-ivory px-4 py-1.5 text-[13px] font-medium text-ink-charcoal transition-colors hover:border-electric-cobalt hover:text-electric-cobalt"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Skills */}
        <div className="mt-16">
          <div className="mb-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-vivid-violet">
              {s.personalHeader}
            </p>
            <h3 className="mt-1 text-[24px] font-semibold text-ink-charcoal">
              {s.personalSubheader}
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] text-slate-gray">
              {s.personalDescription}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.personalSkills.map((skill, idx) => (
              <div
                key={skill.title}
                className="rounded-card border border-hairline bg-pure-white p-6 shadow-dock-subtle"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-pill bg-lavender-mist text-vivid-violet font-bold">
                    {skill.icon}
                  </div>
                  <span className="text-[12px] font-semibold text-steel-gray">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="mt-4 text-[18px] font-semibold text-ink-charcoal">
                  {skill.title}
                </h4>
                <p className="mt-2 text-[14px] leading-[1.56] text-slate-gray">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Approach Bar */}
        <div className="mt-12 rounded-card bg-ink-charcoal p-7 text-pure-white sm:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-powder-blue">
                {s.approach.eyebrow}
              </p>
              <h3 className="mt-2 text-[22px] font-semibold">
                {s.approach.title}
              </h3>
              <p className="mt-1 max-w-md text-[14px] text-steel-gray">
                {s.approach.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.approach.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-pill border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-medium text-pure-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
`,

  // ==========================================
  // 9. SERVICES COMPONENT (Interactive Tabbed Dock Showcase)
  // ==========================================
  'src/components/Services.jsx': `import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Services({ lang }) {
  const s = portfolioData[lang].services;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = s.items[activeIndex] || s.items[0];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-dock">
        {/* Header */}
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
              {s.badge}
            </span>
            <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
              {s.titleLine1}{" "}
              <span className="text-electric-cobalt">{s.titleLine2}</span>
            </h2>
          </div>
          <p className="text-[16px] leading-[1.6] text-slate-gray sm:text-[18px]">
            {s.subtitle}
          </p>
        </div>

        {/* Interactive Split Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Selector List */}
          <div className="space-y-3">
            {s.items.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={\`flex w-full items-center justify-between rounded-card border p-5 text-start transition-all duration-200 \${
                    isActive
                      ? "border-electric-cobalt bg-pure-white shadow-dock-lg"
                      : "border-hairline bg-surface-ivory hover:bg-pure-white"
                  }\`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={\`text-[14px] font-bold \${
                        isActive ? "text-electric-cobalt" : "text-steel-gray"
                      }\`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <p className="text-[17px] font-semibold text-ink-charcoal">
                        {service.shortTitle}
                      </p>
                      <p className="mt-0.5 text-[12px] uppercase tracking-wider text-slate-gray">
                        {service.category}
                      </p>
                    </div>
                  </div>
                  <span
                    className={\`flex h-9 w-9 items-center justify-center rounded-pill border transition-colors \${
                      isActive
                        ? "border-electric-cobalt bg-electric-cobalt text-pure-white"
                        : "border-hairline bg-pure-white text-slate-gray"
                    }\`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Active Details Card */}
          <div className="relative overflow-hidden rounded-card border border-hairline bg-pure-white p-7 shadow-dock-lg sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-pill bg-lavender-mist px-3.5 py-1 text-[12px] font-semibold text-vivid-violet">
                      {activeService.category}
                    </span>
                    <span className="text-[28px] font-bold text-hairline">
                      {activeService.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[28px] font-semibold leading-[1.2] text-ink-charcoal sm:text-[34px]">
                    {activeService.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-[1.6] text-slate-gray">
                    {activeService.description}
                  </p>

                  {/* Checklist Items (Dock Forest Checkmarks) */}
                  <div className="mt-8">
                    <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-slate-gray">
                      {s.includedLabel}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {activeService.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2.5 rounded-[12px] border border-hairline bg-surface-ivory p-3.5 text-[14px] text-ink-charcoal"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-hairline pt-6">
                  <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-slate-gray">
                    {s.techLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeService.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-pill border border-hairline bg-pure-white px-3.5 py-1.5 text-[13px] font-medium text-ink-charcoal"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
`,

  // ==========================================
  // 10. PROJECTS COMPONENT (All 9 Projects + Interactive SantoPreview + Filter)
  // ==========================================
  'src/components/Projects.jsx': `import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Eye, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function SantoPreview({ liveUrl, openLabel }) {
  return (
    <div className="relative overflow-hidden rounded-card border border-hairline bg-[#f9f5ec] shadow-dock-lg">
      {/* Browser Bar */}
      <div className="flex items-center justify-between border-b border-[#d9d0c4] bg-[#fcf8ef] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="rounded-pill border border-[#d9d0c4] bg-[#fef9ef] px-4 py-0.5 text-[11px] font-medium text-slate-gray">
          santo-construction-platform.vercel.app
        </div>
        <div className="h-4 w-4 rounded-full bg-[#ead7cc]" />
      </div>

      {/* Dashboard Preview */}
      <div className="grid grid-cols-[90px_1fr] bg-[#fef9ef] text-left" dir="ltr">
        <div className="border-r border-[#d9d0c4] bg-[#fbf5e9] p-3">
          <div className="mb-4 flex items-center gap-2">
            <div className="grid h-6 w-6 place-items-center rounded-md bg-[#b05a36] text-[10px] font-bold text-white">
              S
            </div>
            <span className="text-[11px] font-bold text-[#2a2b2f]">Santo</span>
          </div>
          <div className="space-y-1.5">
            {["Overview", "Projects", "Field", "Tasks", "Accounting", "HR"].map(
              (item, idx) => (
                <div
                  key={item}
                  className={\`rounded-md px-2 py-1 text-[9px] font-semibold \${
                    idx === 0
                      ? "bg-[#ead7cc] text-[#b05a36]"
                      : "text-slate-gray"
                  }\`}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-[8px] font-bold uppercase tracking-wider text-[#b05a36]">
                Construction Operations
              </div>
              <div className="text-[15px] font-bold text-[#2a2b2f]">
                Enterprise Control Center
              </div>
            </div>
            <span className="rounded-pill bg-[#b05a36] px-3 py-1 text-[9px] font-semibold text-white">
              RTL / LTR Ready
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              ["Active", "12"],
              ["At Risk", "3"],
              ["Progress", "68%"],
              ["Modules", "10+"],
            ].map(([label, val]) => (
              <div
                key={label}
                className="rounded-lg border border-[#d9d0c4] bg-[#f5eee1] p-2"
              >
                <div className="text-[8px] text-slate-gray">{label}</div>
                <div className="mt-0.5 text-[13px] font-bold text-[#2a2b2f]">
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-ink-charcoal/0 opacity-0 transition-all duration-300 hover:bg-ink-charcoal/25 hover:opacity-100">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-pill bg-pure-white px-5 py-2.5 text-[13px] font-semibold text-ink-charcoal shadow-dock-lg"
        >
          <Eye className="h-4 w-4 text-electric-cobalt" />
          {openLabel}
        </a>
      </div>
    </div>
  );
}

function Projects({ lang }) {
  const p = portfolioData[lang].projects;
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? p.items
      : p.items.filter((item) => item.type === filter);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline bg-surface-ivory"
    >
      <div className="mx-auto max-w-dock">
        {/* Header & Filter Pills */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
              {p.badge}
            </span>
            <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
              {p.titleLine1}{" "}
              <span className="text-electric-cobalt">{p.titleLine2}</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[16px] text-slate-gray">
              {p.subtitle}
            </p>
          </div>

          {/* Dock Pill Filter Bar */}
          <div className="inline-flex self-start rounded-pill border border-hairline bg-pure-white p-1.5 shadow-dock-subtle">
            {p.filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={\`rounded-pill px-4 py-2 text-[13px] font-semibold transition-all \${
                  filter === f
                    ? "bg-electric-cobalt text-pure-white"
                    : "text-ink-charcoal hover:text-electric-cobalt"
                }\`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (All 9 Projects) */}
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => {
            const isSanto = project.title === "Santo";
            return (
              <motion.article
                layout
                key={project.id}
                className={\`flex flex-col justify-between rounded-card border border-hairline bg-pure-white p-6 shadow-dock-subtle transition-all hover:border-powder-blue hover:shadow-dock-lg sm:p-7 \${
                  isSanto ? "lg:col-span-2" : ""
                }\`}
              >
                <div>
                  {isSanto && (
                    <div className="mb-6">
                      <SantoPreview
                        liveUrl={project.live}
                        openLabel={p.openLiveProduct}
                      />
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-pill bg-lavender-mist text-electric-cobalt">
                        <Layers className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[12px] font-bold uppercase tracking-wider text-electric-cobalt">
                            {project.category}
                          </span>
                          {project.isNew && (
                            <span className="rounded-pill bg-forest/10 px-2.5 py-0.5 text-[11px] font-bold text-forest">
                              NEW
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 text-[24px] font-semibold text-ink-charcoal">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <span className="rounded-pill border border-hairline bg-surface-ivory px-3 py-1 text-[12px] font-medium text-slate-gray">
                      {project.type}
                    </span>
                  </div>

                  <p className="mt-4 text-[15px] leading-[1.6] text-slate-gray">
                    {project.description}
                  </p>

                  {isSanto && project.santoMeta && (
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {project.santoMeta.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-[12px] border border-hairline bg-surface-ivory p-3.5"
                        >
                          <p className="text-[11px] font-semibold uppercase text-slate-gray">
                            {m.label}
                          </p>
                          <p className="mt-1 text-[14px] font-semibold text-ink-charcoal">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-pill border border-hairline bg-surface-ivory px-3 py-1 text-[12px] font-medium text-ink-charcoal"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-5">
                  <div>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-2 text-[13px] font-medium text-ink-charcoal transition-colors hover:border-electric-cobalt hover:text-electric-cobalt"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center rounded-pill border border-hairline bg-surface-ivory px-4 py-2 text-[12px] font-medium text-steel-gray">
                        {p.privateRepoLabel}
                      </span>
                    )}
                  </div>

                  {project.live && project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-pill bg-electric-cobalt px-5 py-2 text-[13px] font-medium text-pure-white transition-colors hover:bg-deep-cobalt"
                    >
                      {p.liveDemoLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-pill border border-hairline bg-surface-ivory px-4 py-2 text-[13px] font-medium text-steel-gray">
                      {p.liveDemoLabel}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
`,

  // ==========================================
  // 11. EXPERIENCE COMPONENT (All 4 Roles + Full Responsibilities)
  // ==========================================
  'src/components/Experience.jsx': `import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Experience({ lang }) {
  const exp = portfolioData[lang].experience;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-dock">
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
            {exp.badge}
          </span>
          <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
            {exp.titleLine1}{" "}
            <span className="text-electric-cobalt">{exp.titleLine2}</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-gray">{exp.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {exp.items.map((item) => (
            <div
              key={item.id}
              className="rounded-card border border-hairline bg-pure-white p-6 shadow-dock-subtle sm:p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-pill bg-electric-cobalt text-pure-white">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-electric-cobalt">
                      {item.type}
                    </span>
                    <h3 className="mt-0.5 text-[20px] font-semibold text-ink-charcoal">
                      {item.role}
                    </h3>
                    <p className="text-[14px] font-medium text-slate-gray">
                      {item.company}
                    </p>
                  </div>
                </div>

                <span className="rounded-pill bg-lavender-mist px-3.5 py-1 text-[12px] font-semibold text-vivid-violet">
                  {item.period}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-[13px] text-slate-gray">
                <MapPin className="h-4 w-4 text-electric-cobalt" />
                {item.location}
              </div>

              <p className="mt-4 text-[15px] leading-[1.6] text-slate-gray">
                {item.description}
              </p>

              <div className="mt-5 space-y-2.5 border-t border-hairline pt-4">
                {item.responsibilities.map((r) => (
                  <div key={r} className="flex items-start gap-2.5 text-[14px] text-ink-charcoal">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
`,

  // ==========================================
  // 12. EDUCATION COMPONENT
  // ==========================================
  'src/components/Education.jsx': `import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Education({ lang }) {
  const edu = portfolioData[lang].education;

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline bg-surface-ivory"
    >
      <div className="mx-auto max-w-dock">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
            {edu.badge}
          </span>
          <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
            {edu.titleLine1}{" "}
            <span className="text-electric-cobalt">{edu.titleLine2}</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-gray">{edu.subtitle}</p>
        </div>

        <div className="overflow-hidden rounded-card border border-hairline bg-pure-white shadow-dock-lg">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left Accent Panel */}
            <div className="bg-ink-charcoal p-8 text-pure-white sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-pill bg-electric-cobalt text-pure-white">
                <GraduationCap className="h-7 w-7" />
              </div>
              <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-powder-blue">
                {edu.period}
              </p>
              <h3 className="mt-2 text-[32px] font-semibold leading-tight">
                {edu.degreeTitle}
              </h3>
              <p className="mt-2 text-[17px] text-powder-blue">
                {edu.department}
              </p>
              <span className="mt-6 inline-flex rounded-pill bg-white/10 px-4 py-2 text-[13px] font-semibold text-pure-white">
                {edu.gradeBadge}
              </span>
            </div>

            {/* Right Details */}
            <div className="p-8 sm:p-10">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-gray">
                {edu.universityLabel}
              </p>
              <h3 className="mt-1 text-[24px] font-semibold text-ink-charcoal">
                {edu.universityName}
              </h3>
              <p className="mt-1 text-[15px] font-medium text-electric-cobalt">
                {edu.facultyName}
              </p>

              <div className="my-6 h-px bg-hairline" />

              <div className="grid gap-4 sm:grid-cols-2">
                {edu.details.map((d) => (
                  <div
                    key={d.label}
                    className="rounded-[12px] border border-hairline bg-surface-ivory p-4"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-gray">
                      {d.label}
                    </p>
                    <p className="mt-1 text-[16px] font-semibold text-ink-charcoal">
                      {d.value}
                    </p>
                    <p className="text-[13px] text-slate-gray">{d.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[12px] bg-lavender-mist p-4 text-[14px] leading-[1.6] text-ink-charcoal">
                {edu.statement}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
`,

  // ==========================================
  // 13. CERTIFICATES COMPONENT (All 9 Certificates)
  // ==========================================
  'src/components/Certificates.jsx': `import { portfolioData } from "../data/portfolioData";

function Certificates({ lang }) {
  const cert = portfolioData[lang].certificates;

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-dock">
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
            {cert.badge}
          </span>
          <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
            {cert.titleLine1}{" "}
            <span className="text-electric-cobalt">{cert.titleLine2}</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-gray">{cert.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cert.items.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col justify-between rounded-card border border-hairline bg-pure-white p-6 shadow-dock-subtle transition-all hover:border-powder-blue hover:shadow-dock-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-pill bg-surface-ivory border border-hairline text-2xl">
                    {item.icon}
                  </div>
                  <span className="text-[22px] font-bold text-hairline">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="rounded-pill bg-lavender-mist px-3 py-1 text-[11px] font-semibold text-vivid-violet">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-3 text-[19px] font-semibold text-ink-charcoal">
                  {item.title}
                </h3>

                <p className="mt-1 text-[13px] font-semibold text-electric-cobalt">
                  {item.provider}
                </p>

                <p className="mt-3 text-[14px] leading-[1.56] text-slate-gray">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-hairline pt-4">
                {item.skills.map((sc) => (
                  <span
                    key={sc}
                    className="rounded-pill border border-hairline bg-surface-ivory px-3 py-1 text-[11px] font-medium text-ink-charcoal"
                  >
                    {sc}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
`,

  // ==========================================
  // 14. CONTACT COMPONENT (Dock Diagonal Blue Gradient Banner + Full Info)
  // ==========================================
  'src/components/Contact.jsx': `import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Contact({ lang }) {
  const data = portfolioData[lang];
  const c = data.contact;

  const getIcon = (type) => {
    if (type === "email") return <Mail className="h-5 w-5" />;
    if (type === "whatsapp") return <Phone className="h-5 w-5" />;
    return <MapPin className="h-5 w-5" />;
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline bg-pure-white"
    >
      <div className="mx-auto max-w-dock">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-surface-ivory px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
            {c.badge}
          </span>
          <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
            {c.titleLine1}{" "}
            <span className="text-electric-cobalt">{c.titleLine2}</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-gray">{c.subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Contact Cards (Email + Both WhatsApp Numbers + Location) */}
          <div className="space-y-4">
            {c.items.map((item) => (
              <a
                key={\`\${item.title}-\${item.value}\`}
                href={item.href}
                target={item.type === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center justify-between rounded-card border border-hairline bg-surface-ivory p-5 transition-all hover:border-electric-cobalt hover:bg-pure-white hover:shadow-dock-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-pill bg-electric-cobalt text-pure-white">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-gray">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[16px] font-semibold text-ink-charcoal">
                      {item.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-gray" />
              </a>
            ))}
          </div>

          {/* Dock Signature Diagonal Blue Gradient CTA Banner */}
          <div className="flex flex-col justify-between rounded-card border border-powder-blue bg-gradient-to-br from-canvas-cream via-[#c8dcf5] to-electric-cobalt p-8 sm:p-10">
            <div>
              <span className="inline-flex rounded-pill bg-pure-white px-4 py-1.5 text-[12px] font-semibold text-electric-cobalt shadow-dock-subtle">
                {c.ctaCard.badge}
              </span>
              <h3 className="mt-6 text-[32px] font-semibold leading-[1.15] text-ink-charcoal sm:text-[38px]">
                {c.ctaCard.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-ink-charcoal/85">
                {c.ctaCard.description}
              </p>
            </div>

            <div className="mt-10">
              <a
                href={\`mailto:\${data.meta.email}\`}
                className="inline-flex items-center gap-2 rounded-pill bg-electric-cobalt px-7 py-3.5 text-[15px] font-medium text-pure-white shadow-dock-lg transition-colors hover:bg-deep-cobalt"
              >
                {c.ctaCard.buttonText}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-[13px] font-medium text-ink-charcoal/80">
                {c.ctaCard.stackNote}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 text-[13px] text-slate-gray sm:flex-row">
          <p>© {new Date().getFullYear()} {data.meta.name}.</p>
          <div className="flex gap-6">
            <a
              href={data.meta.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-ink-charcoal hover:text-electric-cobalt"
            >
              GitHub
            </a>
            <a
              href={data.meta.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-ink-charcoal hover:text-electric-cobalt"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
`,

  // ==========================================
  // 15. APP.JSX
  // ==========================================
  'src/App.jsx': `import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div className="min-h-screen bg-canvas-cream text-ink-charcoal">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Services lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <Certificates lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
}

export default App;
`
};

// Create directories and write all files
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('✅ Created:', filePath);
});

// Ensure public directory exists for image & resume
fs.mkdirSync(path.join(process.cwd(), 'public'), { recursive: true });
console.log('\\n🎉 Portfolio generated successfully! Place Mohamed-Mamdouh.png inside /public and run:');
console.log('   npm install && npm run dev');