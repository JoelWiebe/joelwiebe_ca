import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// SCROLL REVEAL COMPONENT (NATIVE OBSERVER)
// ==========================================
// Wraps any content to trigger an elegant, hardware-accelerated fade-and-slide 
// animation when it enters the viewport during scrolling.
function ScrollReveal({ children, delay = 0, className = "" }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target); // Animate once for smooth scrolling performance
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
      className={`transition-all duration-1000 ease-out transform ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ==========================================
// VECTOR GRAPHICAL BACKDROP FALLBACKS
// ==========================================
const VectorArt = {
  ScenicLandscape: () => (
    <svg className="w-full h-full object-cover opacity-25" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scenicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#042f1a" />
          <stop offset="50%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
      <rect width="1200" height="600" fill="url(#scenicGrad)" />
      <path d="M0 450 Q 300 350 600 480 T 1200 400 V600 H0 Z" fill="#020617" />
      <path d="M0 500 Q 400 420 800 520 T 1200 450 V600 H0 Z" fill="#090d16" />
      <circle cx="800" cy="250" r="100" fill="#fbbf24" opacity="0.15" filter="blur(40px)" />
    </svg>
  ),
  FamilySkyline: () => (
    <svg className="w-full h-full object-cover opacity-40" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#1e1b4b" />
      <circle cx="300" cy="200" r="120" fill="#ec4899" opacity="0.15" filter="blur(50px)" />
    </svg>
  ),
  BulldogLines: () => (
    <svg className="w-full h-full object-cover opacity-45" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#1c1917" />
      <circle cx="200" cy="180" r="40" stroke="#fb923c" strokeWidth="1.5" />
      <circle cx="400" cy="180" r="40" stroke="#fb923c" strokeWidth="1.5" />
    </svg>
  ),
  MakerLines: () => (
    <svg className="w-full h-full object-cover opacity-45" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#111827" />
      <rect x="150" y="100" width="300" height="200" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
    </svg>
  )
};

const ICONS = {
  Heart: () => (
    <svg className="w-4 h-4 text-rose-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  ),
  Play: () => (
    <svg className="w-5 h-5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    </svg>
  ),
  Pause: () => (
    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
    </svg>
  ),
  ArrowDown: () => (
    <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  ),
  Hammer: () => (
    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063 1.06l-.02.041a11.32 11.32 0 01-2.932 3.665l-.33.275a.53.53 0 01-.735-.015l-1.48-1.48a.53.53 0 01-.015-.735l.275-.33a11.32 11.32 0 013.665-2.932z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5V6a2 2 0 012-2h1.5a1 1 0 011 1v2a2 2 0 01-2 2h-2.5z" />
    </svg>
  ),
  Camera: () => (
    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  Setting: () => (
    <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
};

// Raw, factual datasets representing Joel's real professional records
const PORTFOLIO_PROJECTS = [
  {
    id: "ck-board",
    title: "CK Board & SCORE Platform",
    subtitle: "Real-time CSCL Scripting and Classroom Orchestration",
    category: "Ed-Tech",
    technologies: ["Angular", "Node.js", "Azure PaaS", "WebSockets", "MongoDB"],
    description: "An advanced classroom orchestration infrastructure built on Azure PaaS. Supports collaborative inquiry by allowing teachers to run dynamic scripting pathways and capture high-volume student ideas on a live shared digital board (CK Board) via low-latency WebSockets.",
    metrics: "Deployed inside Grade-8 science cohorts across Toronto learning communities.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "crowd-tutor",
    title: "Crowd Tutor: Knowledge Worlds",
    subtitle: "Adolescent Life Exploration & Sandbox Navigation",
    category: "AI",
    technologies: ["React Three Fiber", "Generative AI", "Wearables Integration", "HCI", "Knowledge Economy"],
    description: "A non-profit tech platform engineered to guide underserved adolescents in finding real-world interests and meaningful opportunities. Features custom human-AI collaborative generation of exploratory modules, a 3D game sandbox for storing and interacting with concepts, a shared knowledge barter economy, and custom wearable geocaching mechanics for physical neighborhood interaction.",
    metrics: "Designed specifically to foster community agency and lower barriers to interest-exploration.",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "emotion-analyzer",
    title: "AI Emotion Analyzer",
    subtitle: "Qualitative Dataset Sentiment Parser",
    category: "AI & Analytics",
    technologies: ["Python", "NLP", "Emotion Analysis", "Transformers"],
    description: "A Python-driven workflow designed to automatically classify emotion indicators across massive qualitative interview transcripts and parent feedback datasets regarding Canadian child care policies.",
    metrics: "Maintains high inter-rater agreement with manual qualitative coders.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "nurse-robotics",
    title: "Remote Nurse Training Robotics",
    subtitle: "HCI & Telepresence in Critical Pediatric Training",
    category: "HCI & Robotics",
    technologies: ["WebRTC", "HCI Control Suite", "Telepresence Robotics", "Node.js"],
    description: "Investigated how mobile telepresence robotic nodes control and deliver pediatric clinical nursing simulation training to remote practitioner communities across Northern Saskatchewan.",
    metrics: "Ensures social presence and sensory scaffolding at a distance.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "wise-project",
    title: "WISE Project Collaboration",
    subtitle: "Berkeley Collaborative Inquiry Framework",
    category: "Full Stack",
    technologies: ["Java Spring", "Angular", "Docker", "HCI"],
    description: "Collaborated with the UC Berkeley TELS research community to extend the core Java Spring and Angular codebase for the WISE international research ecosystem.",
    metrics: "Engineered scalable features supporting thousands of active science students.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  }
];

const SCHOLARLY_PAPERS = {
  journals: [
    {
      authors: "The implementation of peer assessment as a scaffold during computer-supported collaborative inquiry learning in secondary STEM education.",
      journal: "International Journal of STEM Education",
      year: "2024",
      link: "11(1), Article 1. https://doi.org/10.1186/s40594-024-00465-8"
    },
    {
      authors: "Yu, E., Burns, S., Wiebe J.P., Perlman, J., Chen I., Kahlon, K., Perlman, M.",
      journal: "Parent Voices on the benefits and challenges of Canada's new child care policy: An emotion analysis using a large language model.",
      year: "Under Review",
      link: "Qualitative Sentiment Research Article"
    },
    {
      authors: "Yu, E., Wiebe, J., Burns, S., Tsiokos, M., Pancham, E., Perlman, M.",
      journal: "The Role of AI in Early Childhood Development: A Systematic Review with a Methodological Exploration of an AI-Assisted Review Workflow.",
      year: "Under Review",
      link: "Systematic Review and AI-Assisted Workflow paper"
    }
  ],
  conferences: [
    {
      authors: "Wiebe, J. P., Khan, R., Burns, S., & Slotta, J. D.",
      title: "Qualitative Research in the Age of LLMs: A Human-in-the-Loop Approach to Hybrid Thematic Analysis.",
      venue: "Proceedings of the 19th International Conference of the Learning Sciences - ICLS 2025",
      detail: "pp. 1123-1131. International Society of the Learning Sciences."
    },
    {
      authors: "Wiebe, J. P., Khan, R., Burron, G., & Slotta, J. D.",
      title: "A Review of Active Learning within JLS and ijCSCL: What can the Learning Sciences tell Active Learning Practitioners?",
      venue: "Proceedings of the 15th International Conference of the Learning Sciences - ICLS 2021",
      detail: "International Society of the Learning Sciences."
    }
  ],
  presentations: [
    {
      authors: "Slotta, J. D., Wiebe, J. P., Preeti, R., Moher, T.",
      title: "Introducing SCORE: The SCripting and ORchestration Environment.",
      venue: "ICLS 2025 / SALTISE"
    },
    {
      authors: "Wiebe, J. P., Martin, E., Slotta, J. D.",
      title: "Adaption and Co-regulation of Classroom Engagement in a Grade-Eight Knowledge Community: Co-designing Scripts, Roles, and Technology.",
      venue: "SALTISE Conference 2023 - Educators as Designers"
    },
    {
      authors: "Wiebe, J. P., Wang, X., & Slotta, J. D.",
      title: "Mastery-Based Grading With Co-Construction of an Open Textbook Solution Manual in Undergraduate Mathematics.",
      venue: "AERA Annual Meeting 2023"
    },
    {
      authors: "Burron, G., Feng, S., Khan, R., MacDougall, A., Mohtadi, G., Sarvestany, S. S., Smith, L., Vemic, A., & Wiebe, J. P.",
      title: "Developing Teacher-Researcher Identity and Practice through Collaborative Inquiry: Findings from a Pilot Project.",
      venue: "Canadian Society for the Study of Education (CSSE) Conference 2023"
    }
  ]
};

const CHRONICLES = [
  {
    id: "stay-at-home-dad",
    title: "Stay-at-Home Fatherhood",
    subtitle: "Active parenting, creative growth",
    category: "Family & Life",
    description: "Raising my beautiful daughter in Wasaga Beach is my primary anchor. Managing learning play schedules and playground routines is where my real pedagogical empathy is born. I combine daily care with software engineering pipelines from my desk.",
    imageKey: "familyImg",
    defaultArt: VectorArt.FamilySkyline,
    placeholderLabel: "family_daughter_beach.jpg"
  },
  {
    id: "two-frenchies",
    title: "Double Frenchie Dad",
    subtitle: "Meet our brindle companions",
    category: "Family & Life",
    description: "Our household is co-piloted by two stubby, energetic French Bulldogs. They follow me along forest trails and guard the workspace while I build educational platforms.",
    imageKey: "frenchiesImg",
    defaultArt: VectorArt.BulldogLines,
    placeholderLabel: "two_frenchies_wasaga.jpg"
  },
  {
    id: "physical-trades",
    title: "The Maker's Craft & Trades",
    subtitle: "Roofing, framing, & renovations",
    category: "Trades & Crafts",
    description: "Framing rafters, climbing roofing grids, and tackling structural home renovations. Building solid physical architecture relies on the exact same logical integrity as writing modular software loops.",
    imageKey: "makerImg",
    defaultArt: VectorArt.MakerLines,
    placeholderLabel: "carpentry_roof_framing.jpg"
  }
];

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [projectFilter, setProjectFilter] = useState('All');
  
  // Custom video-simulation states
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoProgress, setCurrentVideoProgress] = useState(15);

  // Design workspace panel populated with beautiful default lifestyle imagery
  const [customPhotos, setCustomPhotos] = useState({
    heroImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80", // Sunset beach landscape
    familyImg: "https://images.unsplash.com/photo-1536640717449-443917d90c85?auto=format&fit=crop&w=800&q=80", // Dad & child outdoor walk
    frenchiesImg: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80", // Happy dogs outdoors
    makerImg: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=800&q=80" // Wood framing / builder layout
  });
  const [showConfigTray, setShowConfigTray] = useState(false);

  // Monitor scroll for Parallax background offsets
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update mock progress bar when video is simulated "playing"
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentVideoProgress(prev => (prev >= 100 ? 0 : prev + 1));
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePhotoSwap = (key, url) => {
    setCustomPhotos(prev => ({ ...prev, [key]: url }));
  };

  const filteredProjects = PORTFOLIO_PROJECTS.filter(p => {
    if (projectFilter === 'All') return true;
    return p.category === projectFilter;
  });

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-[#070b11] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans font-light">
      
      {/* Structural safety constraints (guarantees zero side-scrolling to white) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-[85px] pointer-events-none overflow-hidden" />
      <div className="absolute top-[40%] left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[85px] pointer-events-none overflow-hidden" />

      {/* ==========================================
          LANDING HERO & IMMERSIVE TOP BANNER
          ========================================== */}
      <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden border-b border-slate-900/80">
        
        {/* PARALLAX HERO SCENIC BANNER */}
        <div 
          className="absolute inset-0 w-full h-[120%] pointer-events-none z-0 overflow-hidden"
          style={{ transform: `translateY(${scrollY * 0.35}px)` }}
        >
          {customPhotos.heroImg ? (
            <div className="relative w-full h-full">
              <img 
                src={customPhotos.heroImg} 
                alt="Immersive Scenic Backdrop" 
                className="w-full h-full object-cover filter brightness-[0.45] scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b11] via-[#070b11]/45 to-transparent" />
            </div>
          ) : (
            <div className="w-full h-full relative">
              <VectorArt.ScenicLandscape />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="px-5 py-3 rounded-2xl bg-black/85 border border-amber-500/20 backdrop-blur-md max-w-lg space-y-1.5 shadow-xl">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold block">
                    📷 Photo Frame Backdrop
                  </span>
                  <span className="text-xs text-slate-300 block">
                    Expected Image File: <code className="text-emerald-400 font-mono text-xs">wasaga_beach_landscape.jpg</code>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Floating Header */}
        <header className="relative z-30 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center font-serif text-lg font-black text-amber-500 bg-amber-500/10">
              JW
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-slate-200 block text-sm sm:text-base">J. Joel P. Wiebe</span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 font-bold">Maker • Father • Software Artisan</span>
            </div>
          </div>
          
          <nav className="hidden sm:flex items-center space-x-8 text-xs font-mono tracking-widest text-slate-400 font-bold">
            <a href="#about" className="hover:text-amber-500 transition-colors">The Story</a>
            <a href="#video-theater" className="hover:text-amber-500 transition-colors">Video Sandbox</a>
            <a href="#projects" className="hover:text-amber-500 transition-colors">Projects</a>
            <a href="#scholarly" className="hover:text-amber-500 transition-colors">Scholarly</a>
          </nav>
        </header>

        {/* Hero Copy (Fade-In Animated on Viewport Entrance) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center items-start space-y-6">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 text-[10px] font-mono tracking-widest uppercase rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
              <ICONS.Heart />
              <span>Dedicated Family Man & Software Craftsman</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <h1 className="text-5xl sm:text-8xl font-black tracking-tight leading-[0.9] max-w-4xl text-slate-100 font-serif">
              Building things <br />
              that matter, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400">inside and out.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              I am a stay-at-home father, a trail runner, a physical renovator, and a software researcher. I believe that digital platforms should solve pragmatic problems and strive to make the world a warmer, better place.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={550}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#creative-making" 
                className="px-6 py-3.5 bg-amber-500 text-slate-950 font-black rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-transform hover:scale-105 shadow-lg shadow-amber-500/10 flex items-center gap-2"
              >
                <ICONS.Hammer /> Explore Family & Craft
              </a>
              <a 
                href="#video-theater" 
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-extrabold rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all border border-slate-800 flex items-center gap-2"
              >
                <ICONS.Play /> Watch Video Reel
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll helper */}
        <div className="relative z-20 pb-8 flex flex-col items-center justify-center text-slate-500 text-[10px] font-mono uppercase tracking-widest font-bold">
          <span>Scroll down</span>
          <ICONS.ArrowDown />
        </div>
      </section>

      {/* ==========================================
          SECTION 1: STORY & COMPANION CHRONICLE
          ========================================== */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-28 border-b border-slate-900/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Col A: Google-styled Avatar Centerpiece */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal className="w-full max-w-sm">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500 to-emerald-500 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-700" />
                
                <div className="relative w-full aspect-[4/5] rounded-3xl bg-[#090f16] border border-slate-800 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
                  
                  {/* Fixed structural avatar card inside custom radial lens view */}
                  <div className="relative w-full h-2/3 rounded-2xl bg-gradient-to-b from-emerald-950/25 to-slate-900 border border-slate-800/80 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12)_0%,transparent_60%)]" />
                    
                    {/* Handcrafted Google profile wire vector */}
                    <svg className="w-32 h-32 text-amber-500/80" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                      <circle cx="50" cy="50" r="42" strokeWidth="1.5" strokeDasharray="4 4" />
                      <circle cx="50" cy="50" r="34" strokeWidth="1" />
                      <path d="M 35 60 Q 50 42 65 60" strokeWidth="2" fill="none" />
                      <circle cx="50" cy="40" r="8" fill="currentColor" opacity="0.2" />
                      <line x1="50" y1="50" x2="50" y2="78" strokeWidth="2.5" />
                    </svg>

                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-black/95 border border-slate-800 text-[10px] font-mono text-emerald-400 font-bold">
                      WASAGA BEACH, ON
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-extrabold">The Core Sandbox</span>
                    <h3 className="font-serif font-black text-xl text-slate-100">Joel's Workspace</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Staying anchored through parenting duties, companion dogs, forest runs, and pragmatic software builds.
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Col B: Sincere Narratives */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-2">My Philosophy</span>
              <h2 className="text-4xl sm:text-5xl font-black font-serif tracking-tight leading-tight">
                Crafting tools to build a <br />
                <span className="text-amber-500">sincere & warmer</span> world.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-slate-300 text-lg leading-relaxed">
                I operate at the intersection of complex computer science and real-world pedagogy. Inside the ENCORE Lab at OISE, University of Toronto, I design community knowledge ecosystems that help classrooms synthesize complex math & scientific systems together.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p className="text-slate-400 text-sm leading-relaxed">
                But my work doesn't stop in front of a screen. I highly value physical craftsmanship—including framing, roofing, and home renovations. Building solid physical architecture is structured exactly like writing high-performance digital architectures. Both require stability, clean layout, and deep precision.
              </p>
            </ScrollReveal>

            {/* Custom credentials block */}
            <ScrollReveal delay={350} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-bold">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-900 flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <ICONS.Hammer />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-200">Trades & Building</h4>
                  <p className="text-[11px] text-slate-400 font-normal">Carpentry, framing, home updates</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-900 flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ICONS.Camera />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-200">The Visual Lens</h4>
                  <p className="text-[11px] text-slate-400 font-normal">Valuing composition & story</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2: VIDEO THEATER / DEMOS
          ========================================== */}
      <section id="video-theater" className="bg-[#05080d] border-b border-slate-900 py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <ScrollReveal>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold block">Pragmatic Demos</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight">Active Video Sandbox</h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Watch simulated video feeds showcasing my stay-at-home dad adventures, outdoor runs along the Wasaga trails, and dynamic software design.
              </p>
            </ScrollReveal>
          </div>

          {/* Interactive Player Frame */}
          <ScrollReveal delay={150} className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-black border-2 border-slate-800/85 shadow-2xl group">
              
              {/* VIDEO INTERFACE OVERLAYS */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none">
                
                {/* Header tags */}
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-ping' : 'bg-slate-600'}`} />
                    {isPlaying ? 'PLAYING VIDEO PREVIEW' : 'VIDEO STANDBY'}
                  </span>
                  <span className="font-bold">DOC_REEL_JW.MP4</span>
                </div>

                {/* Central Overlay instructions */}
                {!isPlaying && (
                  <div className="text-center space-y-2 py-10 pointer-events-auto">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="mx-auto w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 flex items-center justify-center hover:scale-110 transition-transform shadow-xl cursor-pointer animate-pulse"
                    >
                      <ICONS.Play />
                    </button>
                    <p className="text-xs text-slate-300 font-mono font-bold">Click to preview active documentary reel</p>
                  </div>
                )}

                {/* Bottom playback details */}
                <div className="flex items-center justify-between pointer-events-auto bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/5 font-bold">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 bg-amber-500 rounded-lg text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <ICONS.Pause /> : <ICONS.Play />}
                  </button>
                  
                  {/* Progress bar */}
                  <div className="flex-1 mx-4 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                    <div 
                      className="h-full bg-amber-500 rounded-full transition-all duration-300" 
                      style={{ width: `${currentVideoProgress}%` }}
                    />
                  </div>
                  
                  <span className="text-xs font-mono text-slate-300">01:42 / 05:00</span>
                </div>

              </div>

              {/* Graphical simulation canvas running inside the video player */}
              <svg className="absolute inset-0 w-full h-full object-cover opacity-65 pointer-events-none" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="450" fill="#090e15" />
                <defs>
                  <pattern id="playerGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="800" height="450" fill="url(#playerGrid)" />
                <path d="M 100 225 Q 250 100 400 300 T 700 150" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.6" />
                <circle cx="400" cy="300" r="10" fill="#10b981" opacity="0.4" />
              </svg>

              {/* User instructions watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 bg-black/75 rounded border border-white/10 font-bold">
                  VIDEO PREVIEW INTERACTIVE SCREEN
                </span>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: LIFESTYLE CHRONICLES
          ========================================== */}
      <section id="creative-making" className="max-w-7xl mx-auto px-6 py-28 space-y-16">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <ScrollReveal>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">Earthy Chronicles</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight">Family, Craft, & Life</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              I value family, photography, and the raw sincerity of crafting with my hands. Filter the snapshot panels below to explore my holistic routines.
            </p>
          </ScrollReveal>
        </div>

        {/* Categories Tab Selector */}
        <ScrollReveal delay={100} className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
          {['All', 'Family & Life', 'Trades & Crafts'].map(tabName => (
            <button
              key={tabName}
              onClick={() => setActiveFilter(tabName)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-widest border transition-all cursor-pointer ${
                activeFilter === tabName
                  ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/10 font-black'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              📷 {tabName.toUpperCase()} LENS
            </button>
          ))}
        </ScrollReveal>

        {/* Dynamic Photo Cards with full custom swapping support */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHRONICLES.filter(item => activeFilter === 'All' || item.category === activeFilter).map((chronicle, idx) => {
            const RenderDefaultArt = chronicle.defaultArt;
            const hasCustomPhoto = customPhotos[chronicle.imageKey];

            return (
              <ScrollReveal delay={idx * 150} key={chronicle.id} className="group">
                <div className="flex flex-col h-full bg-[#0a0f16] rounded-2xl border border-slate-800/80 overflow-hidden shadow-xl hover:border-amber-500/20 transition-all duration-300">
                  
                  {/* Dynamic Photo Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                    {hasCustomPhoto ? (
                      <img 
                        src={hasCustomPhoto} 
                        alt={chronicle.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full relative">
                        <RenderDefaultArt />
                        {/* Overlay layout guidelines */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/60 text-center">
                          <span className="text-[9px] font-mono tracking-wider text-slate-400 block font-bold">
                            📷 PHOTO CONTAINER PLACEHOLDER
                          </span>
                          <span className="text-[10px] text-amber-500 font-mono block mt-1">
                            {chronicle.placeholderLabel}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Descriptions */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">{chronicle.category}</span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase font-bold">Snapshot Card</span>
                      </div>
                      <h3 className="font-serif font-black text-xl text-slate-100">{chronicle.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {chronicle.description}
                      </p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </section>

      {/* ==========================================
          SECTION 4: ORIGINAL PROJECT PORTFOLIO
          ========================================== */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-28 border-t border-slate-900">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold block">Original Sandbox</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-none">Project Portfolio</h2>
              <p className="text-slate-400 text-sm max-w-xl">
                Explore high-availability platforms, control suites, and technical architectures developed for global societies, academic institutions, and startups.
              </p>
            </div>

            {/* Filter buttons for the portfolio */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-[#0a0f16] border border-slate-800 rounded-xl">
              {['All', 'Full Stack', 'Ed-Tech', 'AI', 'HCI & Robotics'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setProjectFilter(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all cursor-pointer font-bold ${
                    projectFilter === tab
                      ? 'bg-amber-500 text-slate-950 font-extrabold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <ScrollReveal delay={idx * 100} key={proj.id} className="flex flex-col h-full bg-[#080d14] border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-300 group">
                {/* Photo container for portfolio project */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img 
                    src={proj.imageUrl} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d14] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/80 border border-slate-800 text-[9px] font-mono text-amber-500 font-bold">
                    {proj.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-black text-slate-100 leading-snug group-hover:text-amber-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-indigo-400 font-mono font-bold">{proj.subtitle}</p>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">{proj.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-900 space-y-3">
                    <p className="text-[11px] text-slate-500 italic font-bold">Goal: {proj.metrics}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map(tech => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[9px] text-slate-500 font-mono font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 5: SELECT SCHOLARLY CONTRIBUTIONS
          ========================================== */}
      <section id="scholarly" className="max-w-7xl mx-auto px-6 py-28 border-t border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <ScrollReveal>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block font-bold">Academic Archives</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-none">Scholarly <br />Contributions</h2>
              <p className="text-slate-400 text-sm leading-relaxed mt-4">
                A selection of peer-reviewed journal articles, international proceedings (ICLS), and conference presentations (AERA, SALTISE, CSSE) exploring active learning community pedagogy and Human-AI hybrid research methods.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8 space-y-12">
            
            {/* Journal Publications Category */}
            <div className="space-y-6">
              <ScrollReveal>
                <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold pb-2 border-b border-slate-800">
                  Journal Publications
                </h3>
              </ScrollReveal>

              <div className="space-y-4">
                {SCHOLARLY_PAPERS.journals.map((paper, idx) => (
                  <ScrollReveal delay={idx * 100} key={idx} className="p-6 rounded-2xl bg-[#080d14]/40 border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <span className="text-xs font-mono text-emerald-400 font-bold">{paper.journal}</span>
                      <span className="text-xs font-mono text-slate-500 font-bold">{paper.year}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {paper.authors}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-2 font-mono font-bold">
                      {paper.link}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Conference Proceedings Category */}
            <div className="space-y-6">
              <ScrollReveal>
                <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold pb-2 border-b border-slate-800 font-bold">
                  Refereed Conference Proceedings (Full Papers)
                </h3>
              </ScrollReveal>

              <div className="space-y-4">
                {SCHOLARLY_PAPERS.conferences.map((paper, idx) => (
                  <ScrollReveal delay={idx * 100} key={idx} className="p-6 rounded-2xl bg-[#080d14]/40 border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <span className="text-xs font-mono text-indigo-400 font-bold">{paper.venue}</span>
                    </div>
                    <p className="text-xs font-mono text-slate-500 mb-2 font-bold">{paper.authors}</p>
                    <h4 className="font-serif font-bold text-slate-200 text-sm sm:text-base mb-1">
                      "{paper.title}"
                    </h4>
                    <p className="text-[11px] text-slate-500 font-light">{paper.detail}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Selected Presentations Category */}
            <div className="space-y-6">
              <ScrollReveal>
                <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold pb-2 border-b border-slate-800 font-bold">
                  Peer-Reviewed Presentations & Invited Papers
                </h3>
              </ScrollReveal>

              <div className="space-y-4">
                {SCHOLARLY_PAPERS.presentations.map((paper, idx) => (
                  <ScrollReveal delay={idx * 100} key={idx} className="p-6 rounded-2xl bg-[#080d14]/40 border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <span className="text-xs font-mono text-emerald-400 font-bold">{paper.venue}</span>
                    </div>
                    <p className="text-xs font-mono text-slate-500 mb-1 font-bold">{paper.authors}</p>
                    <h4 className="font-serif font-bold text-slate-200 text-sm sm:text-base">
                      "{paper.title}"
                    </h4>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          COLLABORATE & SINCERE DISPATCH
          ========================================== */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center space-y-8 border-t border-slate-900">
        <ScrollReveal>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold block mb-2">Connect Sincerely</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black">Let's build together.</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed mt-4">
            Want to discuss research co-design scripts, framing wood configurations, trail runner routes near Wasaga Beach, or bulldog parenting? Reach out.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150} className="max-w-md mx-auto p-6 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-4">
          <h4 className="font-extrabold text-sm text-slate-200">Say Hello</h4>
          <p className="text-xs text-slate-400 font-light">Direct your inquiry to the mail box below. I'm open to joint research ventures and tech collaborations.</p>
          <a 
            href="mailto:me@joelwiebe.ca" 
            className="inline-block px-5 py-2.5 bg-amber-500 text-slate-950 text-xs tracking-wider uppercase font-black rounded-lg hover:bg-amber-400 transition-colors cursor-pointer"
          >
            Send Email
          </a>
        </ScrollReveal>
      </section>

      {/* Earthy Spruce Forest Footer */}
      <footer className="w-full bg-[#04060b] border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-extrabold text-slate-300 tracking-wider">J. Joel P. Wiebe</h4>
            <p className="text-[10px]">Wasaga Beach, Ontario • Canada</p>
          </div>
          <div className="flex items-center space-x-6 text-[10px] font-mono">
            <a href="mailto:me@joelwiebe.ca" className="hover:text-amber-500 transition-colors font-bold">me@joelwiebe.ca</a>
            <span>•</span>
            <span className="text-emerald-500 font-bold">FAMILY • CRAFT • COMPUTING</span>
          </div>
        </div>
      </footer>

      {/* ==========================================
          DESIGN WORKSPACE TRAY (BOTTOM RIGHT)
          ========================================== */}
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={() => setShowConfigTray(!showConfigTray)}
          className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-full shadow-2xl flex items-center justify-center text-slate-200 transition-all cursor-pointer"
          title="Open Live Image Customizer"
        >
          <ICONS.Setting />
        </button>

        {showConfigTray && (
          <div className="absolute bottom-14 right-0 w-80 p-5 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl space-y-4 z-50 animate-fadeIn text-xs">
            <div className="flex justify-between items-center border-b border-slate-900 pb-2">
              <span className="font-bold font-mono uppercase tracking-wider text-amber-500">Design Workspace</span>
              <button onClick={() => setShowConfigTray(false)} className="text-slate-500 hover:text-white cursor-pointer">✕</button>
            </div>
            
            <p className="text-[10px] text-slate-400 leading-normal">
              Paste in image URLs below to swap the visual banners and snapshot cards in real-time!
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Landing Hero Banner URL</label>
                <input 
                  type="text" 
                  placeholder="Paste URL here..."
                  value={customPhotos.heroImg}
                  onChange={(e) => handlePhotoSwap('heroImg', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Family Photo URL</label>
                <input 
                  type="text" 
                  placeholder="Paste URL here..."
                  value={customPhotos.familyImg}
                  onChange={(e) => handlePhotoSwap('familyImg', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Frenchies Photo URL</label>
                <input 
                  type="text" 
                  placeholder="Paste URL here..."
                  value={customPhotos.frenchiesImg}
                  onChange={(e) => handlePhotoSwap('frenchiesImg', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Maker / Woodworking Photo URL</label>
                <input 
                  type="text" 
                  placeholder="Paste URL here..."
                  value={customPhotos.makerImg}
                  onChange={(e) => handlePhotoSwap('makerImg', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="pt-2 border-t border-slate-900 flex justify-between">
              <button 
                onClick={() => setCustomPhotos({ heroImg: "https://picsum.photos/1200/800", familyImg: "https://picsum.photos/600/400?random=1", frenchiesImg: "https://picsum.photos/600/400?random=2", makerImg: "https://picsum.photos/600/400?random=3" })}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded cursor-pointer"
              >
                Load Dummy Images
              </button>
              <button 
                onClick={() => setCustomPhotos({ heroImg: "", familyImg: "", frenchiesImg: "", makerImg: "" })}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}