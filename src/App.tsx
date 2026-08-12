import React, { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink, 
  Mail, 
  Sparkles, 
  Cpu, 
  Brain, 
  BookOpen, 
  Heart, 
  Award, 
  Layers, 
  ShieldCheck, 
  ChevronDown, 
  Globe, 
  Users, 
  Activity, 
  Compass, 
  Hammer,
  Code,
  FileText
} from 'lucide-react';

// ==========================================
// SCROLL REVEAL COMPONENT (NATIVE OBSERVER)
// ==========================================
function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
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
// COMPREHENSIVE PROJECT CATALOG (20 PROJECTS)
// ==========================================
const ALL_PROJECTS = [
  {
    id: "crowd-tutor",
    title: "Crowd Tutor: Knowledge Worlds",
    subtitle: "Flagship Non-Profit AI Learning Platform",
    category: "Crowd Tutor & AI",
    technologies: ["React Three Fiber", "Generative AI", "VAGA Algorithm", "HCI", "Knowledge Economy"],
    description: "An integrative non-profit technology ecosystem engineered to guide adolescent interest exploration. Features a 3D R3F game sandbox, a shared knowledge barter economy, wearable geocaching mechanics, and the VAGA dual-potential algorithm for value-aligned personalized learning.",
    impact: "Primary active project led by Joel Wiebe as Executive Director of the Crowd Tutor Foundation.",
    imageUrl: "/images/crowdtutor/great_tree_of_light.png"
  },
  {
    id: "hitl-ta",
    title: "Human-in-the-Loop Thematic Analysis (HITL-TA)",
    subtitle: "Qualitative Methodology in the Age of LLMs",
    category: "Crowd Tutor & AI",
    technologies: ["Python", "LLMs", "Qualitative Methodologies", "ICLS 2025"],
    description: "Developed a hybrid human-AI qualitative coding methodology presented at ICLS 2025. Combines LLM text processing speed with human qualitative interpretation to perform rigorous thematic analysis on large qualitative corpuses.",
    impact: "Published in Proceedings of ICLS 2025 (Wiebe, Khan, Burns, & Slotta).",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "emotion-analyzer",
    title: "AI Emotion Analysis Pipeline",
    subtitle: "Qualitative Sentiment Parser for Policy Datasets",
    category: "Crowd Tutor & AI",
    technologies: ["Python", "NLP", "Transformers", "LLMs"],
    description: "An automated NLP emotion classification pipeline designed to analyze parent feedback regarding Canadian child care policies across thousands of qualitative interview transcripts.",
    impact: "Under review paper: Yu, Burns, Wiebe et al. High agreement with expert human coders.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ai-scoping-review",
    title: "AI Scoping Review Workflow",
    subtitle: "Automated Systematic Review Data Extraction",
    category: "Crowd Tutor & AI",
    technologies: ["Python", "Systematic Review API", "NLP"],
    description: "Engineered an AI-assisted review workflow for literature screening and systematic data extraction exploring the role of AI in Early Childhood Development.",
    impact: "Under review paper: Yu, Wiebe, Burns, Tsiokos, Pancham, & Perlman.",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ck-board",
    title: "CK Board & SCORE Platform",
    subtitle: "Real-time CSCL Scripting & Classroom Orchestration",
    category: "Ed-Tech & CSCL",
    technologies: ["Angular", "Node.js", "Azure PaaS", "WebSockets", "MongoDB"],
    description: "A real-time classroom orchestration infrastructure supporting collaborative inquiry. Enables teachers to run dynamic scripting pathways and capture high-volume student ideas on a shared canvas.",
    impact: "Deployed across Grade-8 science cohorts in Toronto learning communities.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "wise-score",
    title: "WISE SCORE Platform (UC Berkeley)",
    subtitle: "Scripting & Orchestration Environment",
    category: "Ed-Tech & CSCL",
    technologies: ["Java Spring", "Angular", "Docker", "HCI"],
    description: "Collaborated with UC Berkeley TELS research community to extend the Java Spring & Angular codebase for the international WISE research ecosystem, providing LMS features, simulation authoring, and student inquiry tools.",
    impact: "Supports thousands of active STEM science inquiry students worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "csw-math",
    title: "Community Supported Worksheets (CSW)",
    subtitle: "Asynchronous Collaborative Math Scripting",
    category: "Ed-Tech & CSCL",
    technologies: ["SCORE Engine", "LaTeX", "Node.js"],
    description: "Re-engineered synchronous active learning patterns into SCORE to support asynchronous math problem-solving for 300+ undergraduate students during COVID-19 pandemic transitions.",
    impact: "Scaffolded peer hint repositories and macro-scripting group negotiations.",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "solution-manual",
    title: "Co-constructed Solution Manual",
    subtitle: "KCI Model for Undergraduate Mathematics",
    category: "Academic & Inquiry",
    technologies: ["Overleaf", "LaTeX", "KCI Model"],
    description: "A multi-year design-based research study enacting Knowledge Community & Inquiry (KCI) principles. Scripted student roles (solvers vs. publishers) to collaboratively author open LaTeX solution manuals.",
    impact: "Presented at AERA Annual Meeting 2023 (Wiebe, Wang, & Slotta).",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "future-cities",
    title: "Future Cities, Future Us",
    subtitle: "Youth Climate Action & Community Studio",
    category: "Academic & Inquiry",
    technologies: ["Public HCI", "Interactive Exhibits", "Evergreen"],
    description: "Special climate action initiative co-designed with Urban Minds, 1UP Toronto, Evergreen, and ENCORE Lab. Youth created physical and digital displays for the Future Cities Canada Summit at Evergreen Brick Works.",
    impact: "Engaged intergenerational visitors in actionable urban sustainability visions.",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ma-thesis",
    title: "Anytime, Anywhere Knowledge Building",
    subtitle: "MA Thesis at OISE, University of Toronto",
    category: "Academic & Inquiry",
    technologies: ["Knowledge Forum", "Qualitative Research", "CSCL"],
    description: "Investigated theoretical barriers and opportunities for extending Knowledge Building beyond scheduled classroom hours. Formulated a conceptual framework linking physical world problem-solving with digital idea spaces.",
    impact: "Completed MA Thesis at OISE, University of Toronto.",
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mobile-kb",
    title: "Mobile Knowledge Building",
    subtitle: "KBSI 2018 Field Inquiry Pilot",
    category: "Academic & Inquiry",
    technologies: ["Mobile Web", "Knowledge Forum", "HCI"],
    description: "Piloted mobile photo capture and field writing across OISE, the Ontario Legislative Building, and Michener Institute during the Knowledge Building Summer Institute 2018.",
    impact: "Connected real-world UN Sustainable Development Goal observations to online knowledge discourse.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kmd3000",
    title: "Readings in Knowledge Media (KMD3000)",
    subtitle: "Active Learning Meta-Analysis in JLS & ijCSCL",
    category: "Academic & Inquiry",
    technologies: ["Literature Review", "Systematic Coding"],
    description: "Led a graduate research cohort analyzing active learning strategies across top Learning Sciences journals (JLS and ijCSCL), identifying inquiry-based learning, debates, and problem-based learning trends.",
    impact: "Presented at ICLS 2021 (Wiebe, Khan, Burron, & Slotta).",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "truth-annotator",
    title: "Truth: The News Annotator (CTL1926)",
    subtitle: "Crowdsourced Media Vetting & Fact-Checking",
    category: "Academic & Inquiry",
    technologies: ["Mobile Prototype", "Crowdsourcing", "Media Literacy"],
    description: "Designed a mobile tool enabling citizens and students to collaboratively dissect online articles based on fact-checking, source reliability, and author bias to counter disinformation.",
    impact: "Graduate design course prototype at OISE, University of Toronto.",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pervasive-math",
    title: "Pervasive Mathematics (KMD1002)",
    subtitle: "Everyday Objects in Elementary Math KB",
    category: "Academic & Inquiry",
    technologies: ["Knowledge Forum", "Elementary Pedagogy"],
    description: "Proposed and piloted an activity pattern using real-world photo capture to bring everyday physical objects into virtual Knowledge Forum spaces for elementary math inquiry.",
    impact: "Presented poster at KBSI 2017.",
    imageUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "learning-analytics",
    title: "Learning Analytics in Knowledge Forum",
    subtitle: "International Higher-Ed Pilot Study",
    category: "Academic & Inquiry",
    technologies: ["Learning Analytics", "Knowledge Forum Server"],
    description: "Evaluated embedded learning analytics dashboards for self-assessment and reflection in online higher education Knowledge Building environments in Hong Kong.",
    impact: "KMD 1001 research pilot with pre/post surveys and instructor interviews.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "isls-validator",
    title: "ISLS Paper Validator",
    subtitle: "Automated Conference Formatting & Docx Engine",
    category: "Crowd Tutor & AI",
    technologies: ["Python", "Docx Parsing", "Open-Source AST"],
    description: "Co-chaired ISLS Proceedings Task Circle and authored an automated formatting validator that scans submitted docx manuscripts against author guidelines and auto-fixes layout inconsistencies.",
    impact: "Deployed for official ISLS international conference proceedings workflows.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "nurse-robotics",
    title: "Remote Nurse Training Robotics",
    subtitle: "Telepresence HCI in Clinical Simulations",
    category: "HCI & Robotics",
    technologies: ["WebRTC", "HCI Control Suite", "Telepresence Robotics"],
    description: "Investigated how mobile telepresence robotic nodes control and deliver pediatric clinical nursing simulation training to remote practitioner communities across Northern Saskatchewan.",
    impact: "Scaffolded social presence and distance clinical education.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "teleoperation-hci",
    title: "Interactive Detail-in-Context Interface",
    subtitle: "4th Year CS Honours Project (RO-MAN 2017)",
    category: "HCI & Robotics",
    technologies: ["C++", "OpenGL", "HCI", "Camera Teleoperation"],
    description: "Researched remote controlling of mobile robots in unfamiliar environments by integrating 1st and 3rd person camera views into a unified teleoperation interface.",
    impact: "Published in IEEE RO-MAN 2017 conference proceedings (UManitoba HCI Lab).",
    imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mobile-robotics",
    title: "Intelligent Mobile Robotics (HuroCup)",
    subtitle: "Marathon Autonomous Humanoid Robot",
    category: "HCI & Robotics",
    technologies: ["Computer Vision", "Camera Calibration", "Robotics C++"],
    description: "Engineered 2D-to-3D vision transformation, line tracking, and arrow symbol recognition algorithms to enable a humanoid robot to autonomously navigate a marathon course under HuroCup rules.",
    impact: "Competed in international HuroCup humanoid robot marathon challenge.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "spectrum-90",
    title: "Spectrum 90 Touch Interface",
    subtitle: "Inuktun Services & HCI Lab Collaboration",
    category: "HCI & Robotics",
    technologies: ["Touch HCI", "Industrial Robotics", "User Testing"],
    description: "Developed and evaluated a custom touch interface for industrial inspection camera robots in Nanaimo, BC, conducting user testing and real-time hardware integration.",
    impact: "Deployed in industrial inspection systems by Eddyfi Technologies.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  }
];

// ==========================================
// SCHOLARLY PAPERS DATASET
// ==========================================
const SCHOLARLY_PAPERS = {
  journals: [
    {
      title: "The implementation of peer assessment as a scaffold during computer-supported collaborative inquiry learning in secondary STEM education.",
      journal: "International Journal of STEM Education",
      year: "2024",
      link: "11(1), Article 1. https://doi.org/10.1186/s40594-024-00465-8"
    },
    {
      title: "Parent Voices on the benefits and challenges of Canada's new child care policy: An emotion analysis using a large language model.",
      journal: "Under Review — Qualitative AI Emotion Research",
      year: "2025",
      link: "Yu, E., Burns, S., Wiebe J.P., Perlman, J., Chen I., Kahlon, K., Perlman, M."
    },
    {
      title: "The Role of AI in Early Childhood Development: A Systematic Review with a Methodological Exploration of an AI-Assisted Review Workflow.",
      journal: "Under Review — Systematic Review Workflow",
      year: "2025",
      link: "Yu, E., Wiebe, J., Burns, S., Tsiokos, M., Pancham, E., Perlman, M."
    }
  ],
  conferences: [
    {
      authors: "Wiebe, J. P., Khan, R., Burns, S., & Slotta, J. D.",
      title: "Qualitative Research in the Age of LLMs: A Human-in-the-Loop Approach to Hybrid Thematic Analysis.",
      venue: "Proceedings of the 19th International Conference of the Learning Sciences (ICLS 2025)",
      detail: "pp. 1123-1131. International Society of the Learning Sciences."
    },
    {
      authors: "Wiebe, J. P., Khan, R., Burron, G., & Slotta, J. D.",
      title: "A Review of Active Learning within JLS and ijCSCL: What can the Learning Sciences tell Active Learning Practitioners?",
      venue: "Proceedings of the 15th International Conference of the Learning Sciences (ICLS 2021)",
      detail: "International Society of the Learning Sciences."
    }
  ],
  presentations: [
    {
      authors: "Slotta, J. D., Wiebe, J. P., Preeti, R., Moher, T.",
      title: "Introducing SCORE: The SCripting and ORchestration Environment.",
      venue: "ICLS / SALTISE Conference"
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

// ==========================================
// PERSONAL CHRONICLES (CARTOONIFIED PHOTOS)
// ==========================================
const LIFESTYLE_CARDS = [
  {
    id: "stroller-running",
    title: "Parental Leave & Stroller Running",
    subtitle: "Guelph, Ontario • Daily Active Fatherhood",
    category: "Fatherhood & Life",
    description: "Taking dedicated parental leave to raise my daughter in Guelph has been the most transformative period of my life. Daily stroller runs along Guelph's river trails and parks bridge physical endurance with hands-on parenting.",
    imageUrl: "/images/family/cartoon_joel_family_car.jpg"
  },
  {
    id: "frenchie-dad",
    title: "Double Frenchie Dad & Wagon Rides",
    subtitle: "Wagon Outings & Companion Bulldogs",
    category: "Fatherhood & Life",
    description: "Co-piloting our Guelph household alongside two energetic French Bulldogs. Neighborhood wagon rides bring our daughter and furry companions together on daily outdoor neighborhood explorations.",
    imageUrl: "/images/family/cartoon_toddler_wagon_frenchie.jpg"
  },
  {
    id: "shared-adventures",
    title: "Family Exploration & Sincere Living",
    subtitle: "Miramichi & Beyond",
    category: "Fatherhood & Life",
    description: "Grounding high-level computer science research in genuine human connections. Sharing outdoor journeys, river walks, and community experiences with my family fuels my commitment to building technology with empathy.",
    imageUrl: "/images/family/cartoon_joel_family_miramichi.jpg"
  },
  {
    id: "trades-craft",
    title: "The Maker's Craft & Trades",
    subtitle: "Roofing, Framing, & Structural Renovations",
    category: "Crafts & Trades",
    description: "Framing rafters, building structures, and tackling physical home renovations. Constructing physical architecture requires the exact same logical integrity, structural stability, and precision as architecting scalable software.",
    imageUrl: "/images/family/cartoon_toddler_beach.jpg"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = ALL_PROJECTS.filter(p => {
    if (activeTab === 'All') return true;
    return p.category === activeTab;
  });

  return (
    <div className="w-full min-h-screen bg-[#070b11] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans font-light overflow-x-hidden">
      
      {/* Background Ambient Lighting Glows */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-[40%] left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ==========================================
          FLOATING EXECUTIVE HEADER
          ========================================== */}
      <header className="sticky top-0 z-50 w-full bg-[#070b11]/95 backdrop-blur-md border-b border-slate-800/80 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Left Brand Identifier */}
          <div className="flex items-center space-x-3.5 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-500 p-0.5 shadow-lg shadow-amber-500/10 flex-shrink-0">
              <div className="w-full h-full bg-[#070b11] rounded-[10px] flex items-center justify-center font-serif font-black text-amber-400 text-base">
                JW
              </div>
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-slate-100 block text-base leading-tight">Joel P. Wiebe</span>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold block leading-tight mt-0.5">
                Executive Director • Learning Scientist • Software Architect
              </span>
            </div>
          </div>

          {/* Right Nav Links & Button (Single Row, No Wrapping) */}
          <div className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar py-1">
            <nav className="flex items-center space-x-6 sm:space-x-8 text-xs font-mono tracking-widest text-slate-400 font-bold uppercase whitespace-nowrap">
              <a href="#crowdtutor" className="hover:text-amber-400 transition-colors whitespace-nowrap">Crowd Tutor</a>
              <a href="#ai-methodologies" className="hover:text-amber-400 transition-colors whitespace-nowrap">AI Research</a>
              <a href="#projects" className="hover:text-amber-400 transition-colors whitespace-nowrap">Projects ({ALL_PROJECTS.length})</a>
              <a href="#chronicles" className="hover:text-amber-400 transition-colors whitespace-nowrap">Life & Craft</a>
              <a href="#scholarly" className="hover:text-amber-400 transition-colors whitespace-nowrap">Scholarly</a>
            </nav>

            <a 
              href="https://crowdtutor.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold hover:bg-amber-500 hover:text-slate-950 transition-all shadow-md whitespace-nowrap ml-6"
            >
              <span>crowdtutor.org</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* ==========================================
          HERO LANDING SECTION
          ========================================== */}
      <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-slate-900 overflow-hidden py-20">
        
        {/* Parallax Backdrop Glow */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div className="absolute top-10 left-[20%] w-[500px] h-[500px] bg-gradient-to-br from-amber-500/20 via-emerald-500/10 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-8">
          
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold shadow-lg">
              <Award className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>Executive Director @ Crowd Tutor Foundation • Ph.D. Candidate @ UofT OISE</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-4xl sm:text-7xl font-serif font-black tracking-tight leading-[1.05] max-w-4xl text-slate-100">
              Engineering human potential through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400">
                adaptive AI & collaborative inquiry.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
              I bridge high-level learning sciences research with production software architecture. Operating at the intersection of computer science and pedagogy, I pioneer applications of emerging AI models, psychometric profiling algorithms, and community knowledge platforms designed to cultivate agency and transform personalized instruction.
            </p>
          </ScrollReveal>

          {/* Quick Credential Badges */}
          <ScrollReveal delay={400} className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs text-slate-400 font-bold">
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
              <Globe className="w-4 h-4 text-amber-500" />
              <span>Crowd Tutor Foundation</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
              <Brain className="w-4 h-4 text-emerald-400" />
              <span>ENCORE Lab, UofT OISE</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
              <Code className="w-4 h-4 text-sky-400" />
              <span>B.Sc. CS 1st Class Honours (UManitoba)</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center space-x-2">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>Guelph, Ontario</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500} className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#crowdtutor" 
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-transform hover:scale-105 shadow-xl shadow-amber-500/10 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Crowd Tutor Spotlight</span>
            </a>
            <a 
              href="mailto:joel@crowdtutor.org" 
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-extrabold rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all border border-slate-800 flex items-center space-x-2"
            >
              <Mail className="w-4 h-4 text-amber-500" />
              <span>joel@crowdtutor.org</span>
            </a>
          </ScrollReveal>

        </div>
      </section>

      {/* ==========================================
          PRIMARY SPOTLIGHT: CROWD TUTOR FOUNDATION
          ========================================== */}
      <section id="crowdtutor" className="relative py-28 border-b border-slate-900 bg-[#090e17]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
                <Globe className="w-3.5 h-3.5" />
                <span>Primary Active Leadership</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-slate-100">
                Crowd Tutor Foundation
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Serving as Executive Director, Joel Wiebe leads the creative direction, software architecture, and instrument development for Crowd Tutor—a non-profit technology initiative dedicated to personalized, value-aligned adolescent learning.
              </p>
            </div>

            <a 
              href="https://crowdtutor.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-mono font-extrabold text-xs tracking-wider uppercase hover:bg-amber-400 transition-all shadow-lg self-start lg:self-auto"
            >
              <span>Visit crowdtutor.org</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Visual Showcase Banner Grid (Symmetrical 2-Column Cards) */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Concept Art Card A */}
              <div className="glass-panel rounded-3xl overflow-hidden group flex flex-col justify-between p-6 space-y-6">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950">
                  <img 
                    src="/images/crowdtutor/great_tree_of_light.png" 
                    alt="Great Tree of Light Concept Art" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block">Interactive World-Building</span>
                  <h4 className="font-serif font-bold text-lg text-slate-100">The Great Tree of Light & 3D Sandbox</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    A 3D Three.js / React Three Fiber interactive environment where learners explore interest nodes, construct shared knowledge artifacts, and navigate discovery pathways.
                  </p>
                </div>
              </div>

              {/* Concept Art Card B */}
              <div className="glass-panel rounded-3xl overflow-hidden group flex flex-col justify-between p-6 space-y-6">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950">
                  <img 
                    src="/images/crowdtutor/slide_2_centering_and_creation.png" 
                    alt="Centering and Creation Concept" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block">VIGOR Elicitation Cycle</span>
                  <h4 className="font-serif font-bold text-lg text-slate-100">Values, Identity, & Goals Assessment</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Guiding adolescents through reflective check-ins to map universal core drivers and context-specific interest areas using Expectancy-Value and Control-Value frameworks.
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Pillars of Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <ScrollReveal delay={100} className="glass-panel p-6 rounded-2xl space-y-3">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 w-fit">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-extrabold text-slate-100 text-base">Creative Direction</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Co-designed narrative world-building, onboarding metaphors, and interest exploration pathways alongside founding directors.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="glass-panel p-6 rounded-2xl space-y-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-extrabold text-slate-100 text-base">Software Architecture</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Architecting a 3D Three.js / React Three Fiber game sandbox, shared knowledge barter economy, and wearable geocaching mechanics.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300} className="glass-panel p-6 rounded-2xl space-y-3">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 w-fit">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-extrabold text-slate-100 text-base">VAGA Algorithm</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Developing the Value-Aligned Growth Area dual-potential model calculating growth vs. gifted capacity grounded in educational psychology frameworks of motivation and emotion (Expectancy-Value & Control-Value theories).
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400} className="glass-panel p-6 rounded-2xl space-y-3">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-extrabold text-slate-100 text-base">AI Engine Integration</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Integrating cognitive-affective learner modeling, synthetic profile simulation for AI model training, and automated MMMAAP prompt generation.
              </p>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ==========================================
          AI METHODOLOGY & RESEARCH BREAKTHROUGHS
          ========================================== */}
      <section id="ai-methodologies" className="py-28 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <ScrollReveal>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">Methodological Innovations</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight">AI for Qualitative Research</h2>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Pioneering hybrid Human-in-the-Loop workflows that combine the execution speed of Large Language Models with the interpretative rigor of qualitative learning scientists.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1: HITL-TA */}
            <ScrollReveal delay={100} className="glass-panel glass-panel-hover p-8 rounded-3xl space-y-4">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-400 w-fit">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-bold block">ICLS 2025 Proceedings</span>
              <h3 className="font-serif font-black text-xl text-slate-100">HITL-TA (Human-in-the-Loop Thematic Analysis)</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                A hybrid qualitative methodology presented at ICLS 2025. Utilizes LLMs to generate candidate codes, extract inductive themes, and structure thematic hierarchies while preserving human qualitative judgment and contextual validity.
              </p>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 font-bold">
                Wiebe, Khan, Burns, & Slotta (2025)
              </div>
            </ScrollReveal>

            {/* Feature 2: AI Data Extraction */}
            <ScrollReveal delay={200} className="glass-panel glass-panel-hover p-8 rounded-3xl space-y-4">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block">Under Review Research</span>
              <h3 className="font-serif font-black text-xl text-slate-100">AI Data Extraction for Scoping Reviews</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Automated paper screening and structured data extraction workflows supporting systematic literature reviews. Applied in a multi-disciplinary review evaluating the role of AI in early childhood development.
              </p>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 font-bold">
                Yu, Wiebe, Burns, et al. (2025)
              </div>
            </ScrollReveal>

            {/* Feature 3: AI Emotion Analysis */}
            <ScrollReveal delay={300} className="glass-panel glass-panel-hover p-8 rounded-3xl space-y-4">
              <div className="p-3.5 rounded-2xl bg-sky-500/10 text-sky-400 w-fit">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-bold block">Under Review Research</span>
              <h3 className="font-serif font-black text-xl text-slate-100">AI Qualitative Emotion Analysis</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Leveraging transformer-based LLM workflows to parse emotional sentiment across extensive qualitative parent feedback corpuses analyzing Canada's national child care policy updates.
              </p>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 font-bold">
                Yu, Burns, Wiebe, et al. (2025)
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ==========================================
          CATEGORIZED PROJECT CATALOG (20 PROJECTS)
          ========================================== */}
      <section id="projects" className="py-28 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold block">Complete Record</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight">Project Portfolio ({ALL_PROJECTS.length})</h2>
              <p className="text-slate-400 text-sm max-w-xl font-light">
                Explore production platforms, academic research tools, CSCL scripting environments, and robotics control suites built throughout Joel's career.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-[#090e17] border border-slate-800 rounded-2xl">
              {['All', 'Crowd Tutor & AI', 'Ed-Tech & CSCL', 'Academic & Inquiry', 'HCI & Robotics'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono tracking-wide transition-all cursor-pointer font-bold ${
                    activeTab === tab
                      ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <ScrollReveal delay={idx * 80} key={proj.id} className="glass-panel glass-panel-hover flex flex-col h-full rounded-2xl overflow-hidden group">
                
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img 
                    src={proj.imageUrl} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent opacity-90" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 border border-slate-700 text-[9px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                    {proj.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-serif font-black text-slate-100 group-hover:text-amber-400 transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-emerald-400 font-mono font-bold">{proj.subtitle}</p>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">{proj.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-3">
                    <p className="text-[11px] text-slate-400 italic font-normal">Impact: {proj.impact}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map(tech => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] text-slate-400 font-mono font-bold">
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
          PERSONAL & FAMILY CHRONICLES (CARTOONIFIED)
          ========================================== */}
      <section id="chronicles" className="py-28 border-b border-slate-900 bg-[#090e17]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <ScrollReveal>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">Life & Personal Anchors</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight">Family, Craft, & Guelph</h2>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Grounding high-level research in active fatherhood during parental leave, stroller running in Guelph, companion bulldogs, and hands-on structural trades.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LIFESTYLE_CARDS.map((card, idx) => (
              <ScrollReveal delay={idx * 150} key={card.id} className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between">
                
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img 
                    src={card.imageUrl} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest block">{card.category}</span>
                    <h3 className="font-serif font-bold text-lg text-slate-100">{card.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">{card.description}</p>
                  </div>
                </div>

              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          SCHOLARLY CONTRIBUTIONS REPOSITORY
          ========================================== */}
      <section id="scholarly" className="py-28 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-4 space-y-6">
              <ScrollReveal>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">Academic Record</span>
                <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight">Scholarly <br />Contributions</h2>
                <p className="text-slate-400 text-sm leading-relaxed font-light mt-4">
                  Peer-reviewed journal articles, international conference proceedings (ICLS), and national presentations (AERA, SALTISE, CSSE) exploring active learning pedagogy and AI methodologies.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8 space-y-12">
              
              {/* Journals */}
              <div className="space-y-6">
                <ScrollReveal>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold pb-2 border-b border-slate-800">
                    Journal Publications & Manuscripts Under Review
                  </h3>
                </ScrollReveal>

                <div className="space-y-4">
                  {SCHOLARLY_PAPERS.journals.map((paper, idx) => (
                    <ScrollReveal delay={idx * 100} key={idx} className="glass-panel p-6 rounded-2xl space-y-2">
                      <span className="text-xs font-mono text-emerald-400 font-bold block">{paper.journal} ({paper.year})</span>
                      <h4 className="font-serif font-bold text-slate-100 text-sm sm:text-base">"{paper.title}"</h4>
                      <p className="text-[11px] text-slate-400 font-mono">{paper.link}</p>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Proceedings */}
              <div className="space-y-6">
                <ScrollReveal>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold pb-2 border-b border-slate-800">
                    Refereed International Conference Proceedings (Full Papers)
                  </h3>
                </ScrollReveal>

                <div className="space-y-4">
                  {SCHOLARLY_PAPERS.conferences.map((paper, idx) => (
                    <ScrollReveal delay={idx * 100} key={idx} className="glass-panel p-6 rounded-2xl space-y-2">
                      <span className="text-xs font-mono text-sky-400 font-bold block">{paper.venue}</span>
                      <p className="text-xs font-mono text-slate-400 font-bold">{paper.authors}</p>
                      <h4 className="font-serif font-bold text-slate-100 text-sm sm:text-base">"{paper.title}"</h4>
                      <p className="text-[11px] text-slate-400 font-light">{paper.detail}</p>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          EXECUTIVE DISPATCH & CONTACT
          ========================================== */}
      <section id="contact" className="py-28 text-center bg-[#05080d]">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          
          <ScrollReveal>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold block mb-2">Connect Directly</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black">Let's build together.</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light mt-4">
              Open to research collaborations, grant partnerships, ed-tech consulting, and joint ventures in adaptive AI and collaborative learning ecosystems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150} className="max-w-md mx-auto glass-panel p-8 rounded-3xl space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-lg text-slate-100">Get in Touch</h4>
              <p className="text-xs text-slate-400 font-light mt-1">Direct all communications, research collaborations, or foundation inquiries to the Crowd Tutor inbox.</p>
            </div>

            <a 
              href="mailto:joel@crowdtutor.org" 
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg"
            >
              <span>joel@crowdtutor.org</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              Visit Foundation: <a href="https://crowdtutor.org" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">crowdtutor.org</a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ==========================================
          FOOTER
          ========================================== */}
      <footer className="w-full bg-[#030509] border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-mono">
          <div>
            <span className="font-extrabold text-slate-200">Joel P. Wiebe</span> • Guelph, Ontario, Canada
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://crowdtutor.org" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">crowdtutor.org</a>
            <span>•</span>
            <a href="mailto:joel@crowdtutor.org" className="hover:text-amber-400 transition-colors">joel@crowdtutor.org</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
