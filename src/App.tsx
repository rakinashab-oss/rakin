import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Briefcase,
  GraduationCap,
  Layers,
  Globe,
  Code2,
  Palette,
  Video,
  Megaphone,
  Users,
  Compass,
  Cpu,
  Trophy,
  Sparkles,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  Github,
  Phone,
  Check,
  Copy,
  Menu,
  X,
  Eye,
  HeartPulse,
  Building2,
  Handshake,
  BookOpen,
  ConciergeBell,
  Terminal,
  ExternalLink,
  ChevronRight,
  Send
} from 'lucide-react';

/**
 * ============================================================================
 * CENTRALIZED SITE CONFIGURATION (siteConfig)
 * ----------------------------------------------------------------------------
 * Edit the fields below to update portrait URL, business website URL,
 * live project links, or phone number without modifying any UI code.
 * ============================================================================
 */
export const siteConfig = {
  fullName: 'MD. Rakin Ashab',
  brandMark: 'RAKIN ASHAB.',
  title: 'Multi-skilled Professional',
  location: 'Bangladesh',
  /**
   * CONFIGURABLE EXTERNAL URLS & PHONE:
   * Leave as empty string ("") until ready to publish publicly.
   */
  oneStopSolutionsUrl: '',
  bloodBankProjectUrl: '',
  phoneNumber: '',
  email: 'contact@rakin.online',
  socials: {
    linkedin: 'https://www.linkedin.com/in/mohammad-rakin-ashab-54082421a/',
    instagram: 'https://www.instagram.com/rakin_ashab/',
    facebook: 'https://www.facebook.com/rakinashab',
    github: 'https://github.com/rakinashab-oss',
  },
};

/**
 * ============================================================================
 * STRUCTURED PORTFOLIO DATA (Strictly Verified Content)
 * ============================================================================
 */
const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const EXPERIENCES = [
  {
    id: 'exp-01',
    role: 'Business Development Officer',
    organization: 'Insaf Overseas',
    isCurrent: true,
    responsibilities: [
      'Business development and client acquisition',
      'Client communication and relationship management',
      'Business promotion and lead generation',
      'Client support and follow-up',
      'Identifying new business opportunities',
    ],
  },
  {
    id: 'exp-02',
    role: 'Customer Relationship Officer (CRO)',
    organization: 'Creative Tours and Travels',
    isCurrent: false,
    responsibilities: [
      'Customer relationship management',
      'Client communication',
      'Travel service coordination',
      'Customer support',
    ],
  },
  {
    id: 'exp-03',
    role: 'Student Consultancy Counselor',
    organization: 'Student Consultancy',
    isCurrent: false,
    responsibilities: [
      'Student counseling',
      'Admission guidance',
      'Education consultancy support',
      'Student communication',
    ],
  },
];

const EDUCATION = [
  {
    id: 'edu-01',
    qualification: 'Diploma in Hospitality Management',
    institution: 'Update Hotel Management Institute',
    focus: 'Hospitality Operations, Guest Relations & Service Excellence',
  },
  {
    id: 'edu-02',
    qualification: 'Higher Secondary Certificate (HSC)',
    institution: 'BAF Shaheen College, Jashore',
    focus: 'Academic Foundation, Discipline & Leadership',
  },
];

const SKILL_CATEGORIES = [
  {
    id: 'business',
    title: 'Business & Entrepreneurship',
    icon: Building2,
    skills: [
      'Business Development',
      'Business Management',
      'Entrepreneurship',
      'Business Promotion',
    ],
  },
  {
    id: 'sales',
    title: 'Sales & Communication',
    icon: Handshake,
    skills: [
      'Client Communication',
      'Customer Relationship Management',
      'Customer Handling',
      'Lead Generation',
      'Sales & Marketing',
    ],
  },
  {
    id: 'consultancy',
    title: 'Consultancy',
    icon: BookOpen,
    skills: [
      'Student Counseling',
      'Admission Guidance',
      'Client Support',
      'Education Consultancy',
    ],
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    icon: ConciergeBell,
    skills: [
      'Guest Relations',
      'Customer Service',
      'Hospitality Management',
      'Service Excellence',
    ],
  },
  {
    id: 'digital',
    title: 'Digital & Technology',
    icon: Terminal,
    skills: [
      'Digital Marketing',
      'Website Projects',
      'Technology Exploration',
      'Creative Problem Solving',
    ],
  },
];

const VENTURE_SERVICES = [
  {
    title: 'Digital Marketing',
    icon: Megaphone,
    description:
      'Strategic digital visibility, brand positioning, and targeted audience growth campaigns tailored for modern businesses.',
  },
  {
    title: 'Website Development',
    icon: Code2,
    description:
      'Clean, responsive, performance-engineered websites built to establish credibility and convert visitors into clients.',
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    description:
      'Cohesive visual identity systems, social media creatives, and brand collateral crafted with precision.',
  },
  {
    title: 'Video Editing',
    icon: Video,
    description:
      'Dynamic short-form and promotional visual storytelling engineered to capture attention and elevate brand recall.',
  },
];

interface ProjectDetail {
  id: string;
  index: string;
  title: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  configurableUrl: string;
  visualType: 'agency' | 'bloodbank';
}

const PROJECTS: ProjectDetail[] = [
  {
    id: 'one-stop-solutions',
    index: 'PROJECT 01',
    title: 'ONE STOP SOLUTIONS',
    category: 'Business / Digital Services',
    status: 'Entrepreneurial Venture',
    description:
      'An entrepreneurial initiative focused on providing digital solutions for businesses, startups, and personal brands.',
    highlights: [
      'Digital Marketing',
      'Website Development',
      'Graphic Design',
      'Video Editing',
    ],
    configurableUrl: siteConfig.oneStopSolutionsUrl,
    visualType: 'agency',
  },
  {
    id: 'blood-bank',
    index: 'PROJECT 02',
    title: 'BLOOD BANK',
    category: 'Social Impact / Technology',
    status: 'Platform Concept & Architecture',
    description:
      'A blood donor connection platform designed to help people find blood donors and make blood donation more accessible.',
    highlights: [
      'Blood group-based donor discovery',
      'Donor search functionality',
      'Blood donation availability tracking',
      '90-day blood donation eligibility concept',
      'Mobile-friendly experience',
    ],
    configurableUrl: siteConfig.bloodBankProjectUrl,
    visualType: 'bloodbank',
  },
];

const PERSONAL_GOALS = [
  'Build a successful professional career.',
  'Achieve financial independence.',
  'Grow One Stop Solutions into a successful business.',
  'Pursue international educational opportunities.',
  'Continuously improve professional and communication skills.',
  'Create meaningful projects and positive impact.',
];

/**
 * ============================================================================
 * REUSABLE SCROLL-REVEAL WRAPPER (Respects prefers-reduced-motion)
 * ============================================================================
 */
const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * ============================================================================
 * CUSTOM ARCHITECTURAL PROJECT VISUALS (SVG Artwork)
 * ============================================================================
 */
const ProjectArtwork: React.FC<{ type: 'agency' | 'bloodbank' }> = ({ type }) => {
  if (type === 'agency') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-indigo-100/80 via-white/70 to-amber-100/75 border-b border-slate-900/10 overflow-hidden flex items-center justify-center group-hover:from-indigo-100 group-hover:to-sky-100 transition-colors duration-500 backdrop-blur-md">
        {/* Architectural Grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="oss-grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#oss-grid)" />
        </svg>

        {/* Ambient Frosted Glow */}
        <div className="absolute w-44 h-44 rounded-full bg-indigo-400/20 blur-2xl" />

        {/* Concentric Frosted Monolith */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-indigo-500/25 bg-white/40 backdrop-blur-md flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-indigo-500/40 flex items-center justify-center bg-white/80 backdrop-blur-lg shadow-[0_10px_30px_rgba(79,70,229,0.14)]">
              <div className="text-center">
                <span className="block font-mono text-[10px] tracking-[0.25em] text-indigo-600 font-semibold">
                  OSS
                </span>
                <span className="block font-display text-xs tracking-[0.15em] text-slate-900 mt-0.5 font-semibold">
                  360° DIGITAL
                </span>
              </div>
            </div>
          </div>
          {/* Orbiting Frosted Nodes */}
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-white/80 backdrop-blur-md border border-slate-900/10 font-mono text-[9px] text-slate-800 tracking-widest rounded-full shadow-sm">
            WEB
          </span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-white/80 backdrop-blur-md border border-slate-900/10 font-mono text-[9px] text-slate-800 tracking-widest rounded-full shadow-sm">
            MEDIA
          </span>
          <span className="absolute top-1/2 -left-11 -translate-y-1/2 px-2.5 py-0.5 bg-white/80 backdrop-blur-md border border-slate-900/10 font-mono text-[9px] text-slate-800 tracking-widest rounded-full shadow-sm">
            DESIGN
          </span>
          <span className="absolute top-1/2 -right-12 -translate-y-1/2 px-2.5 py-0.5 bg-white/80 backdrop-blur-md border border-slate-900/10 font-mono text-[9px] text-slate-800 tracking-widest rounded-full shadow-sm">
            GROWTH
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-rose-100/80 via-white/75 to-sky-100/80 border-b border-slate-900/10 overflow-hidden flex items-center justify-center group-hover:from-rose-100 group-hover:to-indigo-100 transition-colors duration-500 backdrop-blur-md">
      {/* Pulse & Donor Network Blueprint */}
      <svg
        className="w-full h-full max-w-md px-6"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle horizontal radar lines */}
        <line x1="20" y1="50" x2="380" y2="50" stroke="#CBD5E1" strokeDasharray="3 3" />
        <line x1="20" y1="100" x2="380" y2="100" stroke="#94A3B8" strokeOpacity="0.45" />
        <line x1="20" y1="150" x2="380" y2="150" stroke="#CBD5E1" strokeDasharray="3 3" />

        {/* Donor Connection Nodes */}
        <circle cx="80" cy="65" r="18" fill="rgba(255,255,255,0.82)" stroke="#E11D48" strokeOpacity="0.6" strokeWidth="1.4" />
        <text x="80" y="69" textAnchor="middle" fill="#9F1239" fontSize="10" fontWeight="600" fontFamily="monospace">
          O+
        </text>

        <circle cx="320" cy="65" r="18" fill="rgba(255,255,255,0.82)" stroke="#4F46E5" strokeOpacity="0.6" strokeWidth="1.4" />
        <text x="320" y="69" textAnchor="middle" fill="#3730A3" fontSize="10" fontWeight="600" fontFamily="monospace">
          A-
        </text>

        <circle cx="95" cy="145" r="18" fill="rgba(255,255,255,0.82)" stroke="#4F46E5" strokeOpacity="0.6" strokeWidth="1.4" />
        <text x="95" y="149" textAnchor="middle" fill="#3730A3" fontSize="10" fontWeight="600" fontFamily="monospace">
          B+
        </text>

        <circle cx="305" cy="145" r="18" fill="rgba(255,255,255,0.82)" stroke="#E11D48" strokeOpacity="0.6" strokeWidth="1.4" />
        <text x="305" y="149" textAnchor="middle" fill="#9F1239" fontSize="10" fontWeight="600" fontFamily="monospace">
          AB+
        </text>

        {/* Connection vectors */}
        <line x1="98" y1="70" x2="175" y2="95" stroke="#E11D48" strokeOpacity="0.35" strokeWidth="1.2" />
        <line x1="302" y1="70" x2="225" y2="95" stroke="#4F46E5" strokeOpacity="0.35" strokeWidth="1.2" />
        <line x1="112" y1="140" x2="175" y2="108" stroke="#4F46E5" strokeOpacity="0.35" strokeWidth="1.2" />
        <line x1="288" y1="140" x2="225" y2="108" stroke="#E11D48" strokeOpacity="0.35" strokeWidth="1.2" />

        {/* Central Glass Hub */}
        <rect
          x="160"
          y="76"
          width="80"
          height="48"
          rx="24"
          fill="rgba(255,255,255,0.9)"
          stroke="#4F46E5"
          strokeWidth="1.3"
        />
        <text
          x="200"
          y="97"
          textAnchor="middle"
          fill="#312E81"
          fontSize="9"
          fontWeight="700"
          fontFamily="monospace"
          letterSpacing="1.5"
        >
          90-DAY
        </text>
        <text
          x="200"
          y="110"
          textAnchor="middle"
          fill="#475569"
          fontSize="8"
          fontFamily="monospace"
        >
          CYCLE SYNC
        </text>
      </svg>
    </div>
  );
};

/**
 * ============================================================================
 * MAIN PORTFOLIO APPLICATION COMPONENT
 * ============================================================================
 */
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkillFilter, setActiveSkillFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Quick message draft state (100% frontend mailto composer)
  const [contactForm, setContactForm] = useState({
    name: '',
    subject: '',
    message: '',
  });

  // Custom desktop cursor state
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  // Inject Google Fonts, Favicon & Metadata dynamically
  useEffect(() => {
    document.title = `${siteConfig.fullName} — ${siteConfig.title}`;

    if (!document.getElementById('rakin-editorial-fonts')) {
      const link = document.createElement('link');
      link.id = 'rakin-editorial-fonts';
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(link);
    }

    const timer = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  // Scroll listener for transparent-to-solid navbar and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);

      const scrollPosition = window.scrollY + 180;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle custom cursor tracking on pointer-fine desktop devices
  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (!isFinePointer || prefersReducedMotion) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Lock body scroll when mobile drawer or project modal is open
  useEffect(() => {
    if (mobileMenuOpen || selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, selectedProject]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback silent handling
    }
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      contactForm.subject.trim() ||
        `Portfolio Inquiry from ${contactForm.name.trim() || 'Visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\n\n${contactForm.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const filteredSkillCategories =
    activeSkillFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeSkillFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F6FB] via-[#EEF2FF] to-[#F8FAFC] text-slate-900 selection:bg-indigo-600 selection:text-white overflow-x-hidden font-sans antialiased">
      {/* Global Typography & Light Glassmorphism Utilities */}
      <style>{`
        :root {
          --font-editorial: 'Cormorant Garamond', Georgia, serif;
          --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }
        html {
          scroll-behavior: smooth;
          background-color: #F4F6FB;
        }
        body {
          font-family: var(--font-sans);
          background-color: #F4F6FB;
          color: #0F172A;
        }
        .font-editorial {
          font-family: var(--font-editorial);
        }
        .font-mono-code {
          font-family: var(--font-mono);
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.68);
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);
          border: 1px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 12px 36px -12px rgba(15, 23, 42, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.9);
        }
        .glass-pill {
          background: rgba(255, 255, 255, 0.62);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(15, 23, 42, 0.09);
        }
        .text-gradient-prism {
          background: linear-gradient(125deg, #0F172A 0%, #3730A3 55%, #0284C7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .btn-glass-primary {
          background: linear-gradient(135deg, #1E293B 0%, #312E81 100%);
          color: #FFFFFF;
          box-shadow: 0 10px 25px -8px rgba(49, 46, 129, 0.45);
        }
        .btn-glass-primary:hover {
          background: linear-gradient(135deg, #0F172A 0%, #4338CA 100%);
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.92); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scrollLine 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>

      {/* Luminous Pastel Glass Ambient Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-28 -left-24 w-[480px] h-[480px] rounded-full bg-indigo-300/35 blur-[115px]" />
        <div className="absolute top-1/3 -right-24 w-[460px] h-[460px] rounded-full bg-sky-200/45 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[520px] h-[420px] rounded-full bg-amber-200/35 blur-[125px]" />
      </div>

      {/* Custom Minimalist Desktop Cursor */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className="hidden lg:block pointer-events-none fixed top-0 left-0 z-50 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-indigo-600 transition-opacity duration-300"
      />
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        className="hidden lg:block pointer-events-none fixed top-0 left-0 z-50 w-8 h-8 -ml-4 -mt-4 rounded-full border border-indigo-500/40"
      />

      {/* ====================================================================
          01. STICKY NAVIGATION BAR
      ==================================================================== */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/75 backdrop-blur-xl border-b border-slate-900/10 py-3.5 shadow-[0_8px_30px_rgba(15,23,42,0.06)]'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-indigo-600/20 bg-white/80 backdrop-blur-md font-editorial font-bold text-sm tracking-tight text-indigo-950 shadow-xs group-hover:bg-indigo-950 group-hover:text-white transition-all duration-300">
              RA
            </span>
            <span className="font-mono-code text-xs sm:text-sm font-medium tracking-[0.22em] text-slate-900 group-hover:text-indigo-700 transition-colors">
              {siteConfig.brandMark}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative py-1 text-xs uppercase tracking-[0.16em] transition-colors duration-300 ${
                    isActive
                      ? 'text-indigo-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Quick Action & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/75 backdrop-blur-md border border-slate-900/12 hover:bg-indigo-950 hover:text-white hover:border-indigo-950 text-slate-900 text-xs font-medium tracking-wider uppercase shadow-xs transition-all duration-300"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl glass-pill text-slate-900 hover:bg-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Frosted Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-white/88 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-slate-900/10 pb-5">
            <span className="font-mono-code text-xs tracking-[0.22em] text-slate-900 font-medium">
              {siteConfig.brandMark}
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl glass-pill text-slate-900 hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="my-auto py-6 flex flex-col gap-3">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="group flex items-baseline justify-between py-2 border-b border-slate-900/10"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-code text-xs text-indigo-600/80">
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-editorial text-3xl sm:text-4xl tracking-tight transition-colors ${
                        isActive
                          ? 'text-indigo-700 italic font-semibold'
                          : 'text-slate-700 group-hover:text-slate-950'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-700 transition-colors" />
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-900/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-indigo-700 transition-colors font-mono-code"
            >
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-indigo-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-indigo-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-indigo-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-indigo-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      <main className="relative z-10">
        {/* ====================================================================
            02. CINEMATIC HERO SECTION
        ==================================================================== */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 sm:pt-32 sm:pb-12 border-b border-slate-900/10 overflow-hidden"
        >
          {/* Subtle Glass Grid Pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                'radial-gradient(#64748B 0.75px, transparent 0.75px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 my-auto">
            <div className="max-w-5xl flex flex-col items-start">
              {/* Status / Location Eyebrow Pill */}
              <div
                className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill mb-8 shadow-xs transition-all duration-700 ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse-slow" />
                <span className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-slate-700">
                  Bangladesh · Personal Portfolio
                </span>
              </div>

              {/* Main Heading & Professional Title */}
              <div
                className={`transition-all duration-700 delay-100 ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <h1 className="font-editorial font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[5.35rem] leading-[1.03] tracking-[-0.02em] text-gradient-prism">
                  MD. Rakin Ashab
                </h1>
                <p className="mt-3 sm:mt-4 font-editorial italic text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] text-slate-700 tracking-tight">
                  Multi-skilled Professional.
                </p>
                <div className="mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-indigo-600 via-sky-500 to-transparent" />
              </div>

              {/* Supporting Tagline & Description */}
              <div
                className={`mt-7 sm:mt-8 max-w-2xl space-y-3.5 transition-all duration-700 delay-200 ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-900 leading-relaxed">
                  “Building ideas. Exploring possibilities. Creating meaningful
                  impact.”
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Driven by ambition, inspired by innovation, and committed to
                  continuous growth.
                </p>
              </div>

              {/* Primary & Secondary Call-To-Action Buttons */}
              <div
                className={`mt-8 sm:mt-10 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 transition-all duration-700 delay-300 ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <a
                  href="#ventures"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('ventures');
                  }}
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full btn-glass-primary font-medium text-sm tracking-wide transition-all duration-300"
                >
                  <span>View My Work</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/75 backdrop-blur-md border border-slate-900/12 text-slate-900 font-medium text-sm tracking-wide hover:bg-white hover:border-indigo-500/40 shadow-xs transition-all duration-300"
                >
                  <span>Let&apos;s Connect</span>
                </a>
              </div>

              {/* Subtle Domain Pillar Strip */}
              <div
                className={`mt-10 pt-6 border-t border-slate-900/10 w-full max-w-2xl flex flex-wrap items-center gap-x-5 gap-y-2 font-mono-code text-[11px] uppercase tracking-[0.16em] text-slate-600 transition-all duration-700 delay-300 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-indigo-700 font-medium">
                  Business Development
                </span>
                <span className="text-slate-400">/</span>
                <span>Entrepreneurship</span>
                <span className="text-slate-400">/</span>
                <span>Hospitality</span>
                <span className="text-slate-400">/</span>
                <span>Digital</span>
              </div>
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-10 flex items-center justify-between">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="group inline-flex items-center gap-3 text-slate-600 hover:text-indigo-700 transition-colors"
            >
              <span className="relative w-[1.5px] h-9 bg-slate-900/15 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-sky-500 animate-scroll-line" />
              </span>
              <span className="font-mono-code text-[10px] uppercase tracking-[0.25em]">
                Scroll to Explore
              </span>
            </a>

            <span className="hidden sm:inline-block font-mono-code text-[10px] uppercase tracking-[0.22em] text-slate-500">
              Index 00 — 09
            </span>
          </div>
        </section>

        {/* ====================================================================
            03. ABOUT SECTION — "A Little About Me"
        ==================================================================== */}
        <section
          id="about"
          className="py-24 sm:py-32 border-b border-slate-900/10 relative"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono-code text-xs tracking-[0.22em] text-indigo-700 font-medium">
                  01 / ABOUT
                </span>
                <span className="h-[1px] w-12 bg-indigo-600/35" />
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient-prism">
                A Little About Me
              </h2>
            </Reveal>

            <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Pull-Quote & Approved Extended Biography */}
              <div className="lg:col-span-7 space-y-8">
                <Reveal delay={100}>
                  <blockquote className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-600 to-sky-500"
                    />
                    <p className="font-editorial italic text-2xl sm:text-3xl lg:text-[2rem] leading-snug text-slate-900">
                      “Driven by curiosity. Focused on growth. Inspired by
                      possibilities.”
                    </p>
                  </blockquote>
                </Reveal>

                <Reveal delay={180}>
                  <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-[1.8] font-normal">
                    <p>
                      I am an ambitious and goal-oriented individual with a
                      passion for business, technology, hospitality, and
                      continuous learning.
                    </p>
                    <p>
                      I enjoy exploring new opportunities, developing practical
                      skills, and turning ideas into meaningful projects.
                    </p>
                    <p>
                      My professional journey combines experience in business
                      development, customer relationship management, student
                      consultancy, and travel services with an entrepreneurial
                      mindset.
                    </p>
                    <p className="text-slate-950 font-medium">
                      I believe in continuous improvement, discipline,
                      creativity, and building meaningful solutions that create
                      value.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Architectural Glass Pillars */}
              <div className="lg:col-span-5 space-y-5">
                <Reveal delay={150}>
                  <div className="p-6 sm:p-7 rounded-2xl glass-panel hover:bg-white/85 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-indigo-700 font-medium">
                        01 · Career Interests
                      </span>
                      <Briefcase className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="font-editorial text-2xl text-slate-900 font-semibold mb-2">
                      Multidisciplinary Focus
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Bridging business development, client relations,
                      hospitality management, student consultancy, and modern
                      digital services.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={220}>
                  <div className="p-6 sm:p-7 rounded-2xl glass-panel hover:bg-white/85 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-indigo-700 font-medium">
                        02 · Personal Philosophy
                      </span>
                      <Compass className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="font-editorial text-2xl text-slate-900 font-semibold mb-2">
                      Discipline &amp; Value Creation
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Grounded in consistency, structured execution, creative
                      problem solving, and building genuine trust in every
                      professional interaction.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={290}>
                  <div className="p-6 sm:p-7 rounded-2xl glass-panel hover:bg-white/85 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-indigo-700 font-medium">
                        03 · Future Vision
                      </span>
                      <Sparkles className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="font-editorial text-2xl text-slate-900 font-semibold mb-2">
                      Global Perspective &amp; Venture Growth
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Scaling One Stop Solutions into a trusted digital agency
                      while pursuing international education and impactful
                      technology initiatives.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            04. CAREER EXPERIENCE TIMELINE (Strictly Approved 3 Roles Only)
        ==================================================================== */}
        <section
          id="experience"
          className="py-24 sm:py-32 border-b border-slate-900/10"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono-code text-xs tracking-[0.22em] text-indigo-700 font-medium">
                  02 / EXPERIENCE
                </span>
                <span className="h-[1px] w-12 bg-indigo-600/35" />
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient-prism">
                  Professional Journey
                </h2>
                <p className="text-sm text-slate-600 max-w-md">
                  Hands-on experience across business growth, client
                  relationships, travel coordination, and academic consultancy.
                </p>
              </div>
            </Reveal>

            {/* Vertical Glass Timeline */}
            <div className="mt-14 relative pl-6 sm:pl-10 border-l border-indigo-600/25 space-y-10">
              {EXPERIENCES.map((exp, index) => (
                <Reveal key={exp.id} delay={index * 120}>
                  <article className="relative group">
                    {/* Timeline Node */}
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[31px] sm:-left-[47px] top-7 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                        exp.isCurrent
                          ? 'bg-indigo-600 border-white shadow-[0_0_0_4px_rgba(79,70,229,0.22)]'
                          : 'bg-white border-slate-400 group-hover:border-indigo-600'
                      }`}
                    />

                    <div
                      className={`p-6 sm:p-8 lg:p-10 rounded-2xl glass-panel transition-all duration-300 ${
                        exp.isCurrent
                          ? 'ring-1 ring-indigo-600/25 bg-white/80'
                          : 'hover:bg-white/85'
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-900/10">
                        <div>
                          <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-indigo-600/85">
                            Role 0{index + 1}
                          </span>
                          <h3 className="mt-1.5 font-editorial text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-950">
                            {exp.role}
                          </h3>
                          <p className="mt-1 text-base sm:text-lg text-slate-700 font-medium">
                            {exp.organization}
                          </p>
                        </div>

                        {exp.isCurrent ? (
                          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full btn-glass-primary font-mono-code text-[11px] font-medium uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse-slow" />
                            Currently Working
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 border border-slate-900/10 font-mono-code text-[11px] uppercase tracking-wider text-slate-600">
                            Previous Role
                          </span>
                        )}
                      </div>

                      <div className="mt-6">
                        <p className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-4">
                          Key Responsibilities
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {exp.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm sm:text-base text-slate-800"
                            >
                              <ChevronRight className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            05. ACADEMIC BACKGROUND (Strictly No Batch Numbers)
        ==================================================================== */}
        <section
          id="education"
          className="py-24 sm:py-32 border-b border-slate-900/10"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono-code text-xs tracking-[0.22em] text-indigo-700 font-medium">
                  03 / EDUCATION
                </span>
                <span className="h-[1px] w-12 bg-indigo-600/35" />
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient-prism">
                Academic Foundation
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {EDUCATION.map((edu, idx) => (
                <Reveal key={edu.id} delay={idx * 140}>
                  <article className="h-full p-7 sm:p-9 rounded-2xl glass-panel hover:bg-white/85 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="w-11 h-11 rounded-xl border border-indigo-600/20 bg-white/80 flex items-center justify-center text-indigo-700 group-hover:bg-indigo-950 group-hover:text-white transition-all duration-300 shadow-2xs">
                          <GraduationCap className="w-5 h-5" />
                        </span>
                        <span className="font-mono-code text-xs tracking-[0.2em] text-indigo-600/75">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-slate-950 leading-snug">
                        {edu.qualification}
                      </h3>
                      <p className="mt-2 text-base sm:text-lg text-slate-700 font-medium">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-slate-900/10">
                      <p className="font-mono-code text-[11px] uppercase tracking-[0.16em] text-slate-600">
                        {edu.focus}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            06. INTERACTIVE PROFESSIONAL SKILLS SHOWCASE
        ==================================================================== */}
        <section
          id="skills"
          className="py-24 sm:py-32 border-b border-slate-900/10"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono-code text-xs tracking-[0.22em] text-indigo-700 font-medium">
                  04 / CAPABILITIES
                </span>
                <span className="h-[1px] w-12 bg-indigo-600/35" />
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient-prism">
                  Core Competencies
                </h2>

                {/* Interactive Category Filter Tabs */}
                <div
                  role="tablist"
                  aria-label="Filter skills by domain"
                  className="flex flex-wrap gap-2"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeSkillFilter === 'all'}
                    onClick={() => setActiveSkillFilter('all')}
                    className={`px-4 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                      activeSkillFilter === 'all'
                        ? 'btn-glass-primary font-medium'
                        : 'glass-pill text-slate-700 hover:bg-white hover:text-slate-950'
                    }`}
                  >
                    All Domains
                  </button>
                  {SKILL_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={activeSkillFilter === cat.id}
                      onClick={() => setActiveSkillFilter(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                        activeSkillFilter === cat.id
                          ? 'btn-glass-primary font-medium'
                          : 'glass-pill text-slate-700 hover:bg-white hover:text-slate-950'
                      }`}
                    >
                      {cat.title.split('&')[0].trim()}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkillCategories.map((category, idx) => {
                const IconComponent = category.icon;
                return (
                  <Reveal key={category.id} delay={idx * 80}>
                    <div className="h-full p-7 rounded-2xl glass-panel hover:bg-white/85 transition-all duration-300 flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="w-10 h-10 rounded-xl border border-indigo-600/20 bg-white/80 flex items-center justify-center text-indigo-700 group-hover:border-indigo-500 transition-colors">
                            <IconComponent className="w-5 h-5" />
                          </span>
                          <span className="font-mono-code text-[11px] text-indigo-600/75">
                            0{idx + 1}
                          </span>
                        </div>

                        <h3 className="font-editorial text-2xl font-semibold text-slate-950 mb-5">
                          {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3.5 py-1.5 rounded-lg bg-white/75 border border-slate-900/10 text-xs sm:text-sm text-slate-800 hover:!border-indigo-500/50 hover:!text-indigo-900 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            07. ENTREPRENEURIAL VENTURE SPOTLIGHT — ONE STOP SOLUTIONS
        ==================================================================== */}
        <section
          id="ventures"
          className="py-24 sm:py-32 border-b border-slate-900/10 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono-code text-xs tracking-[0.22em] text-indigo-700 font-medium">
                  05 / ENTREPRENEURIAL VENTURE
                </span>
                <span className="h-[1px] w-12 bg-indigo-600/35" />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative rounded-3xl bg-white/75 backdrop-blur-2xl border border-white/90 shadow-[0_24px_60px_-15px_rgba(30,41,59,0.12)] p-7 sm:p-12 lg:p-16 overflow-hidden">
                {/* Soft Frosted Corner Glows */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 w-80 h-80 rounded-full bg-indigo-300/30 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-sky-200/35 blur-3xl"
                />

                {/* Top Venture Header */}
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-slate-900/10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-indigo-600/20 mb-5 shadow-2xs">
                      <Layers className="w-3.5 h-3.5 text-indigo-700" />
                      <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-indigo-900 font-medium">
                        Founder / Business Owner
                      </span>
                    </div>

                    <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-prism uppercase">
                      ONE STOP SOLUTIONS
                    </h2>
                    <p className="mt-3 font-editorial italic text-2xl sm:text-3xl text-slate-700">
                      “Every Digital Solution Under One Roof.”
                    </p>
                  </div>

                  {/* Configurable Business Website CTA */}
                  <div className="flex flex-wrap items-center gap-3.5">
                    {siteConfig.oneStopSolutionsUrl ? (
                      <a
                        href={siteConfig.oneStopSolutionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full btn-glass-primary font-medium text-sm transition-colors"
                      >
                        <span>Visit Official Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/80 border border-slate-900/10 font-mono-code text-xs text-slate-700">
                        <Globe className="w-3.5 h-3.5 text-indigo-700" />
                        <span>Official Portal · Configurable</span>
                      </span>
                    )}

                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-glass-primary font-medium text-sm transition-all"
                    >
                      <span>Start a Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Venture Introduction */}
                <div className="relative z-10 mt-8 max-w-3xl">
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    One Stop Solutions is my entrepreneurial initiative focused
                    on delivering digital services and creative business
                    solutions under one roof.
                  </p>
                </div>

                {/* 4 Core Service Pillars */}
                <div className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {VENTURE_SERVICES.map((service, index) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div
                        key={service.title}
                        className="p-6 rounded-2xl bg-white/65 backdrop-blur-md border border-white/90 hover:bg-white/90 hover:border-indigo-500/35 shadow-xs transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-5">
                            <span className="w-10 h-10 rounded-xl bg-white/90 border border-indigo-600/20 flex items-center justify-center text-indigo-700 group-hover:bg-indigo-950 group-hover:text-white transition-all">
                              <ServiceIcon className="w-5 h-5" />
                            </span>
                            <span className="font-mono-code text-[11px] text-indigo-600/75">
                              0{index + 1}
                            </span>
                          </div>
                          <h3 className="font-editorial text-2xl font-semibold text-slate-950 mb-2.5">
                            {service.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ====================================================================
            08. FEATURED PROJECTS (One Stop Solutions & Blood Bank)
        ==================================================================== */}
        <section
          id="projects"
          className="py-24 sm:py-32 border-b border-slate-900/10"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono-code text-xs tracking-[0.22em] text-indigo-700 font-medium">
                  06 / SELECTED PROJECTS
                </span>
                <span className="h-[1px] w-12 bg-indigo-600/35" />
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient-prism">
                  Initiatives &amp; Concepts
                </h2>
                <p className="text-sm text-slate-600 max-w-md">
                  Focused ventures and purposeful technology platforms built to
                  solve real-world problems.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {PROJECTS.map((project, idx) => (
                <Reveal key={project.id} delay={idx * 140}>
                  <article className="h-full rounded-2xl glass-panel hover:bg-white/85 overflow-hidden flex flex-col justify-between transition-all duration-300 group">
                    <div>
                      {/* Custom Glass Artwork */}
                      <ProjectArtwork type={project.visualType} />

                      <div className="p-7 sm:p-9">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-indigo-700 font-medium">
                            {project.index} · {project.category}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white/80 border border-slate-900/10 font-mono-code text-[10px] uppercase tracking-wider text-slate-700">
                            {project.status}
                          </span>
                        </div>

                        <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-slate-950">
                          {project.title}
                        </h3>

                        <p className="mt-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="mt-6 pt-6 border-t border-slate-900/10">
                          <p className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-3">
                            {project.visualType === 'agency'
                              ? 'Core Services'
                              : 'Key Features & Concepts'}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.highlights.map((feat) => (
                              <span
                                key={feat}
                                className="px-3 py-1.5 rounded-lg bg-white/75 border border-slate-900/10 text-xs text-slate-800"
                              >
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-7 sm:px-9 pb-7 sm:pb-9 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/85 border border-slate-900/12 hover:bg-indigo-950 hover:text-white hover:border-indigo-950 text-slate-900 text-xs font-medium tracking-wider uppercase shadow-2xs transition-all cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Explore Details</span>
                      </button>

                      {project.configurableUrl && (
                        <a
                          href={project.configurableUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono-code text-indigo-700 hover:underline"
                        >
                          <span>Live Link</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            09. PERSONAL INTERESTS — "Life Beyond Professional Work"
        ==================================================================== */}
        <section
          id="beyond"
          className="py-24 sm:py-32 border-b border-slate-900/10"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono-code text-xs tracking-[0.22em] text-indigo-700 font-medium">
                  07 / PERSONAL IDENTITY
                </span>
                <span className="h-[1px] w-12 bg-indigo-600/35" />
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient-prism">
                Life Beyond Professional Work
              </h2>
            </Reveal>

            {/* Editorial Light Glass Bento Mosaic */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Featured Passion Card: Football, Argentina & Lionel Messi */}
              <Reveal delay={80} className="md:col-span-7">
                <div className="h-full p-7 sm:p-10 rounded-2xl bg-gradient-to-br from-sky-100/75 via-white/75 to-indigo-100/75 backdrop-blur-xl border border-white/90 hover:bg-white/90 shadow-[0_14px_36px_-14px_rgba(30,41,59,0.1)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                  {/* Subtle Pitch Line Geometry */}
                  <svg
                    aria-hidden="true"
                    className="absolute right-0 bottom-0 w-56 h-56 opacity-35 pointer-events-none"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <circle
                      cx="160"
                      cy="160"
                      r="90"
                      stroke="#0284C7"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="160"
                      cy="160"
                      r="45"
                      stroke="#4F46E5"
                      strokeWidth="1"
                    />
                    <line
                      x1="40"
                      y1="200"
                      x2="200"
                      y2="40"
                      stroke="#0284C7"
                      strokeWidth="1"
                    />
                  </svg>

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-sky-700/15 font-mono-code text-[11px] text-sky-900 font-medium">
                        <Trophy className="w-3.5 h-3.5 text-indigo-700" />
                        <span>THE BEAUTIFUL GAME</span>
                      </span>
                      <span className="font-editorial italic text-2xl text-indigo-700 font-semibold">
                        N° 10
                      </span>
                    </div>

                    <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-slate-950 leading-tight">
                      Football, Argentina National Team &amp; Lionel Messi
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl">
                      A lifelong admirer of football artistry, unwavering
                      loyalty to the Argentina National Football Team, and deep
                      inspiration from Lionel Messi&apos;s humility, vision, and
                      relentless pursuit of excellence.
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-900/10 flex flex-wrap gap-2.5">
                    <span className="px-3 py-1 rounded-md bg-white/85 border border-slate-900/10 font-mono-code text-[11px] text-slate-800">
                      Football
                    </span>
                    <span className="px-3 py-1 rounded-md bg-white/85 border border-sky-700/15 font-mono-code text-[11px] text-sky-900">
                      Argentina National Football Team
                    </span>
                    <span className="px-3 py-1 rounded-md bg-white/85 border border-indigo-700/15 font-mono-code text-[11px] text-indigo-900">
                      Lionel Messi
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Travelling & Exploring New Places */}
              <Reveal delay={150} className="md:col-span-5">
                <div className="h-full p-7 sm:p-9 rounded-2xl glass-panel hover:bg-white/85 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white/85 border border-indigo-600/20 flex items-center justify-center text-indigo-700 mb-6">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-slate-950">
                      Travelling &amp; Exploring New Places
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      Discovering new destinations, experiencing diverse
                      cultures, and broadening perspective through meaningful
                      journeys.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-900/10 font-mono-code text-[11px] uppercase tracking-widest text-indigo-700/80">
                    Exploration &amp; Perspective
                  </div>
                </div>
              </Reveal>

              {/* Technology & Artificial Intelligence */}
              <Reveal delay={200} className="md:col-span-6">
                <div className="h-full p-7 sm:p-9 rounded-2xl glass-panel hover:bg-white/85 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white/85 border border-indigo-600/20 flex items-center justify-center text-indigo-700 mb-6">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-slate-950">
                      Technology &amp; Artificial Intelligence
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      Exploring emerging digital tools, modern AI workflows,
                      and how intelligent technology reshapes business and
                      everyday life.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Learning New Skills & Entrepreneurship */}
              <Reveal delay={260} className="md:col-span-6">
                <div className="h-full p-7 sm:p-9 rounded-2xl glass-panel hover:bg-white/85 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white/85 border border-indigo-600/20 flex items-center justify-center text-indigo-700 mb-6">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-slate-950">
                      Learning New Skills &amp; Entrepreneurship
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      Continuously acquiring practical capabilities and
                      brainstorming venture ideas that turn curiosity into
                      sustainable value.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ====================================================================
            10. VISION & GOALS — "Always Learning. Always Growing."
        ==================================================================== */}
        <section
          id="goals"
          className="py-24 sm:py-32 border-b border-slate-900/10"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono-code text-xs tracking-[0.22em] text-indigo-700 font-medium">
                  08 / VISION &amp; ROADMAP
                </span>
                <span className="h-[1px] w-12 bg-indigo-600/35" />
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient-prism">
                Always Learning. Always Growing.
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PERSONAL_GOALS.map((goal, idx) => (
                <Reveal key={goal} delay={idx * 80}>
                  <div className="h-full p-7 rounded-2xl glass-panel hover:bg-white/85 transition-all duration-300 group flex flex-col justify-between">
                    <span className="font-editorial italic text-4xl text-slate-400 group-hover:text-indigo-700 transition-colors duration-300 font-semibold">
                      0{idx + 1}
                    </span>
                    <p className="mt-6 text-lg sm:text-xl font-medium text-slate-900 leading-snug">
                      {goal}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            11. CONTACT SECTION — "Let's Create Something Meaningful."
        ==================================================================== */}
        <section id="contact" className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono-code text-xs tracking-[0.22em] text-indigo-700 font-medium">
                  09 / CONTACT
                </span>
                <span className="h-[1px] w-12 bg-indigo-600/35" />
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient-prism max-w-3xl">
                Let&apos;s Create Something Meaningful.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Have an opportunity, an idea, or simply want to connect? I&apos;d
                love to hear from you.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              {/* Direct Channels & Social Links */}
              <div className="lg:col-span-6 space-y-6">
                <Reveal delay={100}>
                  {/* Primary Email Card */}
                  <div className="p-6 sm:p-8 rounded-2xl glass-panel">
                    <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-indigo-700 font-medium">
                      Direct Electronic Mail
                    </span>
                    <p className="mt-2 font-editorial text-2xl sm:text-3xl text-slate-950 font-semibold break-all">
                      {siteConfig.email}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-glass-primary font-medium text-sm transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email Me</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 border border-slate-900/12 hover:border-indigo-500 text-xs font-mono-code uppercase tracking-wider text-slate-900 transition-colors cursor-pointer"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Email</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </Reveal>

                {/* Conditional Phone Card */}
                {siteConfig.phoneNumber && (
                  <Reveal delay={140}>
                    <a
                      href={`tel:${siteConfig.phoneNumber}`}
                      className="flex items-center justify-between p-6 rounded-2xl glass-panel hover:bg-white/85 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-11 h-11 rounded-xl bg-white/85 border border-indigo-600/20 flex items-center justify-center text-indigo-700">
                          <Phone className="w-5 h-5" />
                        </span>
                        <div>
                          <span className="block font-mono-code text-[10px] uppercase tracking-widest text-slate-500">
                            Direct Phone
                          </span>
                          <span className="text-base font-medium text-slate-950">
                            {siteConfig.phoneNumber}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500" />
                    </a>
                  </Reveal>
                )}

                {/* Social Media Links Grid */}
                <Reveal delay={180}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 sm:p-5 rounded-xl glass-panel hover:bg-white/90 transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        <Linkedin className="w-5 h-5 text-indigo-700" />
                        <span className="text-sm font-medium text-slate-900">
                          LinkedIn
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-700 transition-colors" />
                    </a>

                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 sm:p-5 rounded-xl glass-panel hover:bg-white/90 transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        <Instagram className="w-5 h-5 text-indigo-700" />
                        <span className="text-sm font-medium text-slate-900">
                          Instagram
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-700 transition-colors" />
                    </a>

                    <a
                      href={siteConfig.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 sm:p-5 rounded-xl glass-panel hover:bg-white/90 transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        <Facebook className="w-5 h-5 text-indigo-700" />
                        <span className="text-sm font-medium text-slate-900">
                          Facebook
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-700 transition-colors" />
                    </a>

                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 sm:p-5 rounded-xl glass-panel hover:bg-white/90 transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        <Github className="w-5 h-5 text-indigo-700" />
                        <span className="text-sm font-medium text-slate-900">
                          GitHub
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-700 transition-colors" />
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Client-Side Quick Message Composer */}
              <div className="lg:col-span-6">
                <Reveal delay={160}>
                  <form
                    onSubmit={handleMailtoSubmit}
                    className="p-6 sm:p-9 rounded-2xl glass-panel space-y-5"
                  >
                    <div>
                      <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-indigo-700 font-medium">
                        Quick Dispatch
                      </span>
                      <h3 className="mt-1 font-editorial text-2xl sm:text-3xl font-semibold text-slate-950">
                        Draft a Message
                      </h3>
                    </div>

                    <div>
                      <label
                        htmlFor="sender-name"
                        className="block font-mono-code text-[11px] uppercase tracking-wider text-slate-600 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            name: e.target.value,
                          })
                        }
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-900/12 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="sender-subject"
                        className="block font-mono-code text-[11px] uppercase tracking-wider text-slate-600 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        id="sender-subject"
                        type="text"
                        required
                        value={contactForm.subject}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            subject: e.target.value,
                          })
                        }
                        placeholder="Collaboration, Venture Inquiry, or Opportunity"
                        className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-900/12 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="sender-message"
                        className="block font-mono-code text-[11px] uppercase tracking-wider text-slate-600 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="sender-message"
                        rows={4}
                        required
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            message: e.target.value,
                          })
                        }
                        placeholder="Share a brief note..."
                        className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-900/12 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full btn-glass-primary font-medium text-sm transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open in Email Client</span>
                    </button>
                  </form>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          12. ARCHITECTURAL FOOTER
      ==================================================================== */}
      <footer className="relative z-10 border-t border-slate-900/10 bg-white/55 backdrop-blur-xl py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-900/10">
            <div>
              <p className="font-editorial text-2xl sm:text-3xl font-semibold text-gradient-prism">
                {siteConfig.fullName}
              </p>
              <p className="mt-1.5 text-sm text-slate-600">
                “Building my journey, one step at a time.”
              </p>
            </div>

            {/* Quick Navigation Links */}
            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap gap-x-6 gap-y-2.5"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-xs uppercase tracking-widest text-slate-600 hover:text-indigo-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <span>
                © {new Date().getFullYear()} {siteConfig.fullName}. All rights
                reserved.
              </span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono-code hover:text-indigo-700 transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 text-slate-600">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-white/75 border border-slate-900/10 hover:border-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-lg bg-white/75 border border-slate-900/10 hover:border-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-lg bg-white/75 border border-slate-900/10 hover:border-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg bg-white/75 border border-slate-900/10 hover:border-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => scrollToSection('home')}
                aria-label="Back to Top"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/80 border border-slate-900/12 hover:border-indigo-600 text-xs font-mono-code uppercase tracking-wider text-slate-900 transition-colors cursor-pointer"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          PROJECT DETAILS MODAL DRAWER
      ==================================================================== */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 bg-slate-950/35 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-white/92 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectArtwork type={selectedProject.visualType} />

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-indigo-700 font-medium">
                    {selectedProject.index} · {selectedProject.category}
                  </span>
                  <h3
                    id="modal-project-title"
                    className="mt-1 font-editorial text-3xl sm:text-4xl font-semibold text-slate-950"
                  >
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="w-10 h-10 rounded-xl bg-white/80 border border-slate-900/12 flex items-center justify-center text-slate-900 hover:border-indigo-600 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-900/10">
                <p className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-3">
                  {selectedProject.visualType === 'agency'
                    ? 'Service Pillars'
                    : 'Core Platform Concepts'}
                </p>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-slate-900"
                    >
                      {selectedProject.visualType === 'bloodbank' ? (
                        <HeartPulse className="w-4 h-4 text-rose-600 shrink-0" />
                      ) : (
                        <Check className="w-4 h-4 text-indigo-700 shrink-0" />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
                {selectedProject.configurableUrl && (
                  <a
                    href={selectedProject.configurableUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-glass-primary font-medium text-xs uppercase tracking-wider"
                  >
                    <span>Open Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    scrollToSection('contact');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-glass-primary font-medium text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Inquire About This Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
