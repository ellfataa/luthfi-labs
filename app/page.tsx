'use client';

import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import Particles from "./components/Particles/Particles";
import Orb from "./components/Orb/Orb";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Linkedin, Mail, Github } from 'lucide-react';

// BAGIAN NAVBAR
const Navbar = ({ items, handleNavClick, setSidebarOpen, sidebarOpen, isHidden }: {
  items: { label: string, href: string }[],
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void,
  setSidebarOpen: (open: boolean) => void,
  sidebarOpen: boolean,
  isHidden: boolean
}) => {
  if (isHidden) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center py-3 sm:py-4 lg:py-5">
          <div className="text-xl sm:text-2xl lg:text-2xl font-bold text-blue-600">LF</div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={e => handleNavClick(e, item.href)}
                className="relative text-gray-700 font-medium py-2 px-1 group transition-all duration-300 ease-out overflow-hidden text-sm lg:text-base"
              >
                <span className="relative block transform transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  {item.label}
                </span>
                <span className="absolute top-full left-0 block text-blue-600 font-semibold transform transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  {item.label}
                </span>
                <span className="absolute inset-0 bg-blue-50 rounded-lg transform scale-0 transition-transform duration-300 ease-out group-hover:scale-100 opacity-0 group-hover:opacity-20 -z-10"></span>
              </a>
            ))}
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md text-blue-600 hover:bg-blue-100 transition"
              aria-label="Open menu"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar for Mobile */}
      {typeof window !== "undefined" && (
        <React.Fragment>
          {sidebarOpen && (
            <div className="fixed inset-0 z-[60] flex">
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={() => setSidebarOpen(false)}
              />
              {/* Sidebar */}
              <div className="relative w-64 max-w-[80vw] bg-white/95 backdrop-blur-md h-full shadow-2xl p-6 flex flex-col animate-slideInRight ml-auto">
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-blue-600 transition"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </button>
                <div className="text-2xl font-bold text-blue-600 mb-8">LF</div>
                <nav className="flex flex-col gap-2">
                  {items.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={e => {
                        handleNavClick(e, item.href);
                        setSidebarOpen(false);
                      }}
                      className="text-gray-700 font-medium text-lg py-2 px-2 rounded-lg hover:text-blue-600 transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
              <style jsx>{`
                @keyframes slideInRight {
                  from { transform: translateX(100%); opacity: 0; }
                  to { transform: translateX(0); opacity: 1; }
                }
                .animate-slideInRight {
                  animation: slideInRight 0.3s cubic-bezier(0.4,0,0.2,1);
                }
              `}</style>
            </div>
          )}
        </React.Fragment>
      )}
    </nav>
  );
};

// BAGIAN HERO SECTION
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center pt-6 sm:pt-10 lg:pt-14">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-justify order-2 lg:order-1">
            <div>
              <RotatingText
                texts={['Web Developer', 'UI/UX Design', 'Data Analyst']}
                mainClassName="bg-transparent text-blue-500 overflow-hidden justify-center text-xl sm:text-2xl font-bold inline-flex transition-all"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            <div className="space-y-2 sm:space-y-3 lg:space-y-5">
              <SplitText
                text="I'm Luthfi Emillulfata"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight text-justify"
                delay={50}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
              
              <BlurText
                text="A Computer Science student at Jenderal Soedirman University with expertise in Web Development, UI/UX Design, and Data Analysis. An outstanding student with proven problem-solving, teamwork, and leadership skills. Seeking to apply technical knowledge and collaborative abilities in a dynamic environment."
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-justify"
                delay={100}
                stepDuration={0.4}
                direction="top"
                threshold={0.1}
                rootMargin="-100px"
              />
            </div>

            <div className="pt-2 sm:pt-4 lg:pt-6">
              <a
                href="https://drive.google.com/file/d/1sCq5Mr7eLfwLpJ5Eg_Pu6d2aJ3aGvYk8/view?usp=sharing"
                className="inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition-colors duration-300 font-medium text-base sm:text-lg"
              >
                Look at my CV
              </a>
            </div>
          </div>

          {/* Lanyard Component */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" style={{ marginTop: '-32px' }}>
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// BAGIAN ABOUT SECTION
const AboutSection = () => {
  const techStack = [
    { name: "React", category: "Frontend Framework", image: "assets/image/react.png" },
    { name: "Tailwind", category: "CSS Framework", image: "assets/image/tailwind.png" },
    { name: "Javascript", category: "Programming Language", image: "assets/image/javascript.png" },
    { name: "Bootstrap", category: "CSS Framework", image: "assets/image/bootstrap.png" },
    { name: "Laravel", category: "Web Framework", image: "assets/image/laravel.png" },
    { name: "Next.Js", category: "Web Framework", image: "assets/image/next js.png" },
    { name: "Codeigniter", category: "Web Framework", image: "assets/image/codeigniter.png" },
    { name: "Git", category: "Version Control System", image: "assets/image/git.png" },
    { name: "GitHub", category: "Cloud-based Services", image: "assets/image/github.png" },
    { name: "PHP", category: "Programming Language", image: "assets/image/php lang.png" },
    { name: "Figma", category: "Design Tool", image: "assets/image/figma.png" },
    { name: "WordPress", category: "Content Management System (CMS)", image: "assets/image/wordpress.png" },
    { name: "Google Colab", category: "Machine Learning Tool", image: "assets/image/colab.png" },
    { name: "Python", category: "Programming Language", image: "assets/image/python.png" },
    { name: "Kaggle", category: "Machine Learning Tool", image: "assets/image/kaggle.png" },
    { name: "Visual Studio Code", category: "Code Editor", image: "assets/image/vscode.png" }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-start">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 mt-2">About Me</h2>
          
          <BlurText
            text="A dedicated Web Developer with expertise in modern technologies and a strong passion for crafting exceptional digital experiences. My enthusiasm for UI/UX Design drives me to not only conceptualize but also meticulously develop designs into functional web applications. I am also an enthusiastic Data Analyst, finding immense enjoyment and challenge in conducting in-depth analysis and research to uncover valuable insights."
            className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8 mx-auto text-justify"
            delay={100}
            stepDuration={0.4}
            direction="top"
            threshold={0.1}
            rootMargin="-100px"
          />

          <BlurText
            text="Currently, I'm exploring and building using web technologies such as React, Laravel, Next.js, and Tailwind. For UI/UX Design projects, I use Figma. When tackling Data Analysis, I work using Python, Google Colab, and Kaggle. I genuinely enjoy working with these tools!"
            className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-12 mx-auto text-justify"
            delay={100}
            stepDuration={0.4}
            direction="top"
            threshold={0.1}
            rootMargin="-100px"
          />

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-justify">
            I have learning experience with various tools and technologies, including:
          </p>

          {/* Tech Stack Grid with Orb Background */}
          <div className="relative">
            {/* Orb Background */}
            <div className="absolute inset-0 w-full h-full">
              <Orb
                hoverIntensity={0.3}
                rotateOnHover={true}
                hue={6}
                forceHoverState={false}
              />
            </div>

            {/* Tech Stack Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-none mx-auto">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" 
                  style={{animationDelay: `${index * 0.2}s`, animationDuration: '3s'}}
                >
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={tech.image} alt={tech.name} className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">{tech.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{tech.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// BAGIAN EXPERIENCE SECTION
const ExperienceItem = ({ 
  title, 
  company, 
  period, 
  description, 
  image,
  documents = [],
  setIsNavbarHidden
}: {
  title: string;
  company: string;
  period: string;
  description: string[];
  image: string;
  documents?: string[];
  setIsNavbarHidden: (hidden: boolean) => void;
}) => {
  const [showDocuments, setShowDocuments] = useState(false);
  const [currentDocIndex, setCurrentDocIndex] = useState(0);

  const handleOpenDocuments = () => {
    setIsNavbarHidden(true);
    setShowDocuments(true);
  };

  const handleCloseDocuments = () => {
    setIsNavbarHidden(false);
    setShowDocuments(false);
  };

  const nextDocument = () => {
    setCurrentDocIndex((prev) => (prev + 1) % documents.length);
  };

  const prevDocument = () => {
    setCurrentDocIndex((prev) => (prev - 1 + documents.length) % documents.length);
  };

  return (
    <div className="group relative">
      <div className="absolute left-1 sm:left-2 lg:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
      
      {/* Experience card */}
      <div className="ml-8 sm:ml-12 lg:ml-20 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
          
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 sm:gap-4">
            <div className="flex items-start gap-3 sm:gap-4 flex-1">
              {/* logo */}
              <div className="relative flex-shrink-0">
                <img
                  src={image}
                  alt={company}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Text content */}
              <div className="flex-1 min-w-0">
                <div className="mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                    {title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base lg:text-lg flex items-center gap-2">
                    {company}
                  </p>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                  {description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* View Documentary button */}
                {documents.length > 0 && (
                  <div className="mt-3">
                  <button
                    onClick={handleOpenDocuments}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium text-xs sm:text-sm group shadow-md hover:shadow-lg"
                    style={{ minHeight: 0, minWidth: 0 }}
                  >
                    View Documentary
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Period badge */}
            <div className="flex-shrink-0 mt-2 lg:mt-0">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                {period}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Document modal */}
      {showDocuments && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center p-2 sm:p-4"
             onClick={handleCloseDocuments}>
          <div className="relative w-full max-w-4xl">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
                 onClick={(e) => e.stopPropagation()}>
              {/* Tombol close minimalis di pojok kanan atas */}
              <button
                onClick={handleCloseDocuments}
                className="absolute top-4 right-4 z-50 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 group"
                aria-label="Close document viewer"
              >
                <X className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
              </button>
              
              <div className="bg-gray-50 p-4 sm:p-8 flex items-center justify-center" style={{ height: '60vh' }}>
                <div className="relative w-full h-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                  <img
                    src={documents[currentDocIndex]}
                    alt={`Document ${currentDocIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Navigasi dokumen responsif */}
              {documents.length > 1 && (
                <div className="bg-white border-t border-gray-100 p-4 sm:p-6">
                  {/* Layout untuk desktop dan tablet */}
                  <div className="hidden sm:flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Jika di awal, pergi ke dokumen terakhir
                        if (currentDocIndex === 0) {
                          setCurrentDocIndex(documents.length - 1);
                        } else {
                          prevDocument();
                        }
                      }}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl transition-all duration-200 border border-gray-200"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="text-sm font-medium">Previous</span>
                    </button>
                    
                    {/* Indikator halaman untuk desktop */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {currentDocIndex + 1} of {documents.length}
                      </span>
                      <div className="flex gap-1">
                        {documents.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                              index === currentDocIndex
                                ? 'bg-blue-500 w-6'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            onClick={() => setCurrentDocIndex(index)}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Jika di akhir, kembali ke awal
                        if (currentDocIndex === documents.length - 1) {
                          setCurrentDocIndex(0);
                        } else {
                          nextDocument();
                        }
                      }}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl transition-all duration-200 border border-gray-200"
                    >
                      <span className="text-sm font-medium">Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Layout untuk mobile */}
                  <div className="sm:hidden space-y-3">
                    {/* Indikator halaman di atas untuk mobile */}
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-sm text-gray-500 font-medium">
                        {currentDocIndex + 1} of {documents.length}
                      </span>
                      <div className="flex gap-1">
                        {documents.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                              index === currentDocIndex
                                ? 'bg-blue-500 w-6'
                                : 'bg-gray-300 active:bg-gray-400'
                            }`}
                            onClick={() => setCurrentDocIndex(index)}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Tombol navigasi untuk mobile */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (currentDocIndex === 0) {
                            setCurrentDocIndex(documents.length - 1);
                          } else {
                            prevDocument();
                          }
                        }}
                        className="flex items-center justify-center gap-2 flex-1 py-3 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 text-gray-700 rounded-xl transition-all duration-200 border border-gray-200"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">Previous</span>
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (currentDocIndex === documents.length - 1) {
                            setCurrentDocIndex(0);
                          } else {
                            nextDocument();
                          }
                        }}
                        className="flex items-center justify-center gap-2 flex-1 py-3 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 text-gray-700 rounded-xl transition-all duration-200 border border-gray-200"
                      >
                        <span className="text-sm font-medium">Next</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ExperienceSection = ({ setIsNavbarHidden }: { setIsNavbarHidden: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [isNavbarHiddenLocal] = useState(false);

  // KATEGORI PENGALAMAN
  const professionalExperiences = [
    {
      title: "Head of Laboratory Assistant",
      company: "Laboratory Assistant Informatics UNSOED",
      period: "Aug - Dec 2024",
      image: "assets/image/asprak.jpg",
      documents: [
        "assets/documentary/head 1.jpeg",
        "assets/documentary/head 2.jpeg"
      ],
      description: [
        "Led and coordinated a team of 33 members (5 coordinators and 28 assistants) as Head of Laboratory Assistant.",
        "Managed recruitment process for 60 applicants, including creating promotional materials and assistant ID cards.",
        "Developed scheduling systems for assistant shifts and practicum schedules to prevent conflicts.",
        "Created assessment materials and conducted evaluations, managing final score entries into spreadsheets."
      ]
    },
    {
      title: "Staff Intern of the Information Technology",
      company: "PDAM Banyumas (Perumda Air Minum Tirta Satria Banyumas)",
      period: "Jul - Aug 2024",
      image: "assets/image/pdam.jpg",
      documents: [
        "assets/documentary/pdam1.jpg"
      ],
      description: [
        "Completed one-month internship collaborating with PDAM IT division to develop a customer registration portal website using Laravel framework and Midtrans payment gateway.",
        "Designed comprehensive data flow for registration process including use case, sequence diagram, activity diagram, and class diagram.",
        "Managed database implementation by inputting 306 village data entries and 27 sub-district data entries for Banyumas Regency into the system.",
        "Present the progress of member registration portal website development to field supervisor."
      ]
    },
    {
      title: "Laboratory Assistant of Operating Systems",
      company: "Laboratory Assistant Informatics UNSOED",
      period: "Mar - Jun 2024",
      image: "assets/image/asprak.jpg",
      documents: [
        "assets/documentary/asprakso.jpeg"
      ],
      description: [
        "Selected as Operating System Lab Assistant through administrative and interview selection process.",
        "Instructed 40 students across 2 shifts in Operating System Practicum using Windows and WSL Linux environments.",
        "Distributed learning modules covering terminal, command prompt, process, memory, and file system topics.",
        "Developed and evaluated student assessments, including creating assignments, grading work, and managing final grade entries."
      ]
    },
    {
      title: "Laboratory Assistant of Database",
      company: "Laboratory Assistant Informatics UNSOED",
      period: "Sep - Dec 2023",
      image: "assets/image/asprak.jpg",
      documents: [
        "assets/documentary/asprakbd1.jpg",
        "assets/documentary/asprakbd2.jpg",
        "assets/documentary/asprakbd3.jpg"
      ],
      description: [
        "Selected as Database Lab Assistant through administrative and interview selection process.",
        "Instructed 60 students across 3 shifts in Database Practicum using XAMPP and Command Prompt environments.",
        "Taught database creation, SQL Query usage, and database relationships/cardinality concepts through hands-on instruction.",
        "Developed and evaluated student assessments, including creating assignments, grading work, and managing final grade entries."
      ]
    },
    {
      title: "Recipient of the Smart Scholarship Award",
      company: "BRI Bank",
      period: "Aug 2022 - Jun 2023",
      image: "assets/image/bri.jpg",
      documents: [
        "assets/documentary/smart1.jpg",
        "assets/documentary/smart2.jpg"
      ],
      description: [
        "Maintained excellent academic performance while consistently meeting scholarship institution requirements and standards.",
        "Actively participated in monthly mentoring sessions and engaged in all organized scholarship programs and activities.",
        "Enhanced professional knowledge by attending approximately 4 seminars and webinars on relevant topics.",
        "Participated in Focus Group Discussion (FGD) at Gurau Baturraden with approximately 20 participants."
      ]
    }
  ];

  const organizationalExperiences: {
    title: string;
    company: string;
    period: string;
    image: string;
    description: string[];
    documents?: string[];
  }[] = [
    {
      title: "Staff of the Education Division",
      company: "HMIF UNSOED (Informatics Student Association UNSOED)",
      period: "Mar - Dec 2024",
      image: "assets/image/hmif.png",
      documents: [
        "assets/documentary/edu1.jpeg",
        "assets/documentary/edu2.JPG",
        "assets/documentary/edu3.jpg"
      ],
      description: [
        "Enhanced academic potential for Unsoed Informatics students through structured programs including 'Mahasiswa Berprestasi' initiatives.",
        "Led 'Simpul Pintar' Exam Question Bank & Material Bank program, collecting and organizing 74 course materials and 148 exam questions for Midterm and Final Semester assessments.",
        "Developed and maintained 2 academic repositories using pivot tables in Microsoft Excel for internship and street vendor data management."
      ]
    },
    {
      title: "Staff of the Directorate General of Data Analysis",
      company: "BEM UNSOED (Student Executive Board UNSOED)",
      period: "Feb - Dec 2024",
      image: "assets/image/bemu.png",
      documents: [
        "assets/documentary/risdat1.jpg",
        "assets/documentary/risdat2.jpg",
        "assets/documentary/risdat3.jpg"
      ],
      description: [
        "Conducted research and surveys to support BEM UNSOED ministries while providing strategic benefits to the Unsoed Student Big Family (KBMU).",
        "Led Data Analysis Directorate, managing collected data using Excel, Google Colab, and spreadsheets for comprehensive analysis.",
        "Processed and analyzed survey data including 'Super Survey' with 749 respondents and 'Ekspektasi dan Harapan Mahasiswa Baru 2024' survey with 1,519 respondents.",
        "Created detailed PDF reports with analysis results and collaborated with Infographic department for visual report production."
      ]
    },
    {
      title: "Staff Intern of the Personnel Ministry",
      company: "BEM FT UNSOED (Student Executive Board of Engineering Faculty UNSOED)",
      period: "Sep - Nov 2022",
      image: "assets/image/bemft.jpg",
      documents: [
        "assets/documentary/bemft.jpg"
      ],
      description: [
        "Participated in monthly plenary meetings with approximately 60 participants to coordinate organizational activities.",
        "Led and managed ministry member relations to maintain harmony and prevent conflicts within the organization.",
        "Participated in ministry planning meetings to organize refreshing events for 11 team members."
      ]
    }
  ];

  const committeeExperiences = [
    {
      title: "Chief Executive of ‘Kunjungan Lembaga’ Dinkominfo Banyumas",
      company: "BEM UNSOED (Student Executive Board UNSOED)",
      period: "May - Sep 2024",
      image: "assets/image/bemu.png",
      documents: [
        "assets/documentary/kumbang1.jpg",
        "assets/documentary/kumbang2.jpg",
        "assets/documentary/kumbang3.jpg",
        "assets/documentary/kumbang4.jpg"
      ],
      description: [
        "Led institutional visits, including to Dinkominfo Banyumas, fostering data and research knowledge transfer.",
        "Achieved 28 participants (exceeding 20 target), demonstrating effective outreach.",
        "Developed proposals and facilitated discussions with committees and institutions."
      ]
    },
    {
      title: "Coordinator of the Security Division of Informatics Makrab",
      company: "HMIF UNSOED (Informatics Student Association UNSOED)",
      period: "Aug 2024 - Feb 2025",
      image: "assets/image/hmif.png",
      documents: [
        "assets/documentary/mm3.jpg",
        "assets/documentary/mm1.jpeg",
        "assets/documentary/mm2.jpeg"
      ],
      description: [
        "Supervised 87 committee members and established comprehensive committee guidelines containing 13 rules, 4 licensing procedures, and consequence policies.",
        "Conducted field engineering assessments to evaluate and approve activity locations for safety and feasibility.",
        "Maintained security and order throughout all event activities from initiation to completion."
      ]
    },
    {
      title: "Informatics Volunteers 'Pengabdian Masyarakat'",
      company: "HMIF UNSOED (Informatics Student Association UNSOED)",
      period: "Sep 2023",
      image: "assets/image/hmif.png",
      documents: [
        "assets/documentary/pengmas1.jpg",
        "assets/documentary/pengmas2.jpg",
        "assets/documentary/pengmas3.jpg"
      ],
      description: [
        "Volunteered as an educator at Blater 2 Elementary School, teaching approximately 18 elementary students basic computer skills and Microsoft Office applications.",
        "Created and delivered presentations explaining Microsoft Office fundamentals to elementary students through engaging and age-appropriate methods.",
        "Guided hands-on learning sessions for students to practice basic Microsoft Office operations and computer literacy skills.",
        "Conducted interactive Q&A sessions and educational games to reinforce learning while implementing Tri Dharma of Higher Education through Community Service."
      ]
    },
    {
      title: "Tentor of Database Course in ISC (Informatics Study Club)",
      company: "HMIF UNSOED (Informatics Student Association UNSOED)",
      period: "Okt 2023 & Dec 2023",
      image: "assets/image/hmif.png",
      documents: [
        "assets/documentary/tentor1.jpg",
        "assets/documentary/tentor2.jpg",
        "assets/documentary/tentor3.jpg"
      ],
      description: [
        "Developed and delivered PowerPoint presentations on database material.",
        "Conducted engaging presentations and Q&A sessions for 70 participants, aiming to prepare them for midterm and final semester tests.",
        "Provided clear explanations of database concepts to the audience."
      ]
    },
    {
      title: "Staff of Soedirman Technophoria Security Division",
      company: "HMIF UNSOED (Informatics Student Association UNSOED)",
      period: "Okt 2022 - Nov 2022",
      image: "assets/image/hmif.png",
      documents: [
        "assets/documentary/stech.jpg"
      ],
      description: [
        "Served as security division staff for Soedirman Technophoria event, developing 10 committee regulations including licensing procedures and consequence policies.",
        "Coordinated security operations and facility management to ensure smooth event execution and maintain safety protocols.",
        "Provided guidance and assistance to participants throughout the event while ensuring adherence to safety guidelines."
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden">      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-start">
          {/* Enhanced Section Title */}
          <div className="mb-5 sm:mb-9 lg:mb-13">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Experiences
            </h2>
          </div>
          
          {/* Professional Experiences */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-700 mb-6">Professional Experiences</h3>
            <div className="relative">
              <div className="absolute left-3 sm:left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
              <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                {professionalExperiences.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    image={exp.image}
                    documents={exp.documents || []}
                    setIsNavbarHidden={setIsNavbarHidden}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Organizational Experiences */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-700 mb-6">Organizational Experiences</h3>
            <div className="relative">
              <div className="absolute left-3 sm:left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
              <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                {organizationalExperiences.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    image={exp.image}
                    documents={exp.documents || []}
                    setIsNavbarHidden={setIsNavbarHidden}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Committee Experiences */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-700 mb-6">Committee Experiences</h3>
            <div className="relative">
              <div className="absolute left-3 sm:left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
              <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                {committeeExperiences.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    image={exp.image}
                    documents={exp.documents || []}
                    setIsNavbarHidden={setIsNavbarHidden}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// BAGIAN PROJECTS SECTION
const ProjectCard = ({
  title,
  description,
  tags,
  image,
  link,
  role
}: {
  title: string;
  description: string;
  tags: { name: string, color: string }[];
  image: string;
  link: string;
  role: string;
}) => {
  return (
    <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2 animate-float bg-blue-100/60 backdrop-blur-lg">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 sm:h-52 lg:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5 sm:p-6 lg:p-7">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{title}</h3>
          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-md border border-purple-200/50 whitespace-nowrap ml-2">
            {role}
          </span>
        </div>
        <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 lg:mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1.5 ${tagBgColor[tag.color] || 'bg-gray-100'} ${tagTextColor[tag.color] || 'text-gray-700'} text-sm rounded-full font-medium ${tagBorderColor[tag.color] || 'border-gray-200'} border`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <a href={link} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
          View Project 
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px);}
          50% { transform: translateY(-18px);}
          100% { transform: translateY(0px);}
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

const tagBgColor: { [key: string]: string } = {
  blue: "bg-blue-100",
  sky: "bg-sky-100",
  yellow: "bg-yellow-100",
  orange: "bg-orange-100",
  emerald: "bg-emerald-100",
  purple: "bg-purple-100",
  pink: "bg-pink-100",
  red: "bg-red-100",
  cyan: "bg-cyan-100",
  indigo: "bg-indigo-100",
  green: "bg-green-100",
  violet: "bg-violet-100",
  teal: "bg-teal-100",
  rose: "bg-rose-100",
  amber: "bg-amber-100",
  lime: "bg-lime-100",
};

const tagTextColor: { [key: string]: string } = {
  blue: "text-blue-700",
  sky: "text-sky-700",
  yellow: "text-yellow-700",
  orange: "text-orange-700",
  emerald: "text-emerald-700",
  purple: "text-purple-700",
  pink: "text-pink-700",
  red: "text-red-700",
  cyan: "text-cyan-700",
  indigo: "text-indigo-700",
  green: "text-green-700",
  violet: "text-violet-700",
  teal: "text-teal-700",
  rose: "text-rose-700",
  amber: "text-amber-700",
  lime: "text-lime-700",
};

const tagBorderColor: { [key: string]: string } = {
  blue: "border-blue-200",
  sky: "border-sky-200",
  yellow: "border-yellow-200",
  orange: "border-orange-200",
  emerald: "border-emerald-200",
  purple: "border-purple-200",
  pink: "border-pink-200",
  red: "border-red-200",
  cyan: "border-cyan-200",
  indigo: "border-indigo-200",
  green: "border-green-200",
  violet: "border-violet-200",
  teal: "border-teal-200",
  rose: "border-rose-200",
  amber: "border-amber-200",
  lime: "border-lime-200",
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "PDAM Portal Website for Customer Registration",
      description: "PDAM Portal Site for Customer Registration is a website created using the Laravel framework and Midtrans as a payment gateway",
      tags: [
        { name: "laravel", color: "blue" },
        { name: "MySQL", color: "sky" },
        { name: "Javascript", color: "yellow" },
        { name: "Midtrans", color: "orange" },
        { name: "Ngrok", color: "emerald" }
      ],
      image: "assets/image/pdam.png",
      link: "https://github.com/ellfataa/Portal-PDAM-Banyumas",
      role: "Fullstack"
    },
    {
      title: "JT Law Firm",
      description: "JT Law Firm is a UI/UX design project for a legal consulting agency focused on accessible legal services.",
      tags: [
        { name: "Figma", color: "blue" }
      ],
      image: "assets/image/jt law.png",
      link: "https://bit.ly/JTLawFirm-UIUX",
      role: "UI/UX Designer"
    },
    {
      title: "KreasiKita",
      description: "KreasiKita is an online donation platform for Indonesian creators to fund their projects.",
      tags: [
        { name: "Figma", color: "blue" }
      ],
      image: "assets/image/kreasikita.png",
      link: "https://bit.ly/KreasiKitaUIUX",
      role: "UI/UX Designer"
    },
    {
      title: "SoalPedia",
      description: "SoalPedia is a web-based question bank for learning, accessible anywhere.",
      tags: [
        { name: "PHP", color: "purple" },
        { name: "MySQL", color: "sky" },
        { name: "HTML/CSS", color: "orange" },
        { name: "Javascript", color: "yellow" }
      ],
      image: "assets/image/soalpedia.png",
      link: "https://soal-pedia-frontend.vercel.app/",
      role: "Frontend"
    },
    {
      title: "Lingkar Pendidikan",
      description: "Lingkar Pendidikan is a website for preparing to enter universities and official schools.",
      tags: [
        { name: "PHP", color: "purple" },
        { name: "MySQL", color: "sky" },
        { name: "HTML/CSS", color: "orange" },
        { name: "Javascript", color: "yellow" },
        { name: "Figma", color: "blue" }
      ],
      image: "assets/image/lingkar.png",
      link: "https://github.com/ellfataa/Lingkar-Pendidikan",
      role: "Fullstack"
    },
    {
      title: "DemonWard",
      description: "DemonWard is a website that provides various information related to the Demon Slayer anime.",
      tags: [
        { name: "HTML/CSS", color: "orange" },
        { name: "Javascript", color: "yellow" },
        { name: "Bootstrap", color: "purple" },
        { name: "Figma", color: "blue" }
      ],
      image: "assets/image/kimetsu.png",
      link: "https://demon-ward-frontend.vercel.app/",
      role: "Frontend"
    },
    {
      title: "Queasy",
      description: "Queasy is a story-based quiz learning platform with various categories.",
      tags: [
        { name: "PHP", color: "purple" },
        { name: "MySQL", color: "sky" },
        { name: "Bootstrap", color: "pink" },
        { name: "Javascript", color: "yellow" }
      ],
      image: "assets/image/queasy.png",
      link: "https://qumon.fun/",
      role: "Fullstack"
    },
    {
      title: "SekulLegend",
      description: "SekulLegend is a mini classroom platform for classes, discussions, and learning materials.",
      tags: [
        { name: "CodeIgniter", color: "red" },
        { name: "Tailwind", color: "cyan" },
        { name: "Javascript", color: "yellow" },
        { name: "Figma", color: "blue" }
      ],
      image: "assets/image/sekullegend.png",
      link: "https://github.com/ellfataa/SekulLegend",
      role: "Fullstack"
    },
    {
      title: "Expert System",
      description: "Expert System is a chest disease diagnostic tool using Naive Bayes.",
      tags: [
        { name: "Naive Bayes", color: "emerald" },
        { name: "PHP", color: "purple" },
        { name: "MySQL", color: "sky" },
        { name: "Tailwind", color: "cyan" },
        { name: "Javascript", color: "yellow" }
      ],
      image: "assets/image/sispak.png",
      link: "https://github.com/ellfataa/Sispak-Penyakit-Dada",
      role: "Fullstack"
    },
    {
      title: "Cloud Service Decision Support System",
      description: "CloudSelect DSS is a TOPSIS-based tool for cloud service selection.",
      tags: [
        { name: "TOPSIS", color: "indigo" },
        { name: "Google Form", color: "green" },
        { name: "Google Colab", color: "orange" },
        { name: "Python", color: "blue" }
      ],
      image: "assets/image/spk.png",
      link: "https://bit.ly/LayananCloud_TOPSIS",
      role: "Data Analyst"
    },
    {
      title: "Credit Risk Classification",
      description: "The Credit Risk Classification enhances banking decisions and risk management through predictive insights.",
      tags: [
        { name: "Backpropagation", color: "violet" },
        { name: "SMOTE", color: "teal" },
        { name: "Deep Neural Network", color: "rose" },
        { name: "Gradient Descent", color: "amber" },
        { name: "Adam Optimization", color: "lime" }
      ],
      image: "assets/image/datmin.png",
      link: "https://bit.ly/CreditRisk_ADAM",
      role: "Data Analyst"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-start">
          {/* Enhanced Section Title */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mt-2 mb-4 pb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent animate-fadeInUp">
              Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: `${0.15 + index * 0.13}s`,
                  animationFillMode: "forwards",
                  animationDuration: "0.8s"
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  link={project.link}
                  role={project.role}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating animation keyframes and fadeInUp */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px);}
          50% { transform: translateY(-18px);}
          100% { transform: translateY(0px);}
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
        }
      `}</style>
    </section>
  );
};

// BAGIAN CERTIFICATE SECTION
const CertificateSection = () => {
  const certificates = [
    {
      id: 1,
      image: "/assets/certificate/ibm analista.jpg",
      title: "Data Analyst Course with Python",
      description: "Comprehensive course on data analysis using Python, covering data manipulation, visualization, and machine learning techniques.",
      year: "2025",
      issuer: "IBM (International Business Machines Corporation)"
    },
    {
      id: 2,
      image: "/assets/certificate/ibm bigdata.jpg",
      title: "Big Data 101",
      description: "Completed Big Data 101 course covering fundamental concepts of big data analytics, data processing techniques, and tools for handling large-scale datasets.",
      year: "2025",
      issuer: "IBM (International Business Machines Corporation)"
    },
    {
      id: 3,
      image: "/assets/certificate/revou.jpg",
      title: "Intro to Data Analytics",
      description: "An introductory course on data analytics, focusing on fundamental concepts and practical applications in data analysis.",
      year: "2025",
      issuer: "RevoU Indonesia"
    },
    {
      id: 4,
      image: "/assets/certificate/google analytics.jpg",
      title: "Google Analytics for Beginners",
      description: "Beginner-level course on Google Analytics, teaching how to set up and use the platform for data tracking and analysis.",
      year: "2023",
      issuer: "Google Academy"
    },
    {
      id: 5,
      image: "/assets/certificate/asprak so.jpg",
      title: "Operating System Lab Assistant",
      description: "Assisted in the Operating System course, providing support to students in understanding OS concepts and practical applications.",
      year: "2024",
      issuer: "Informatics Laboratory Assistant"
    },
    {
      id: 6,
      image: "/assets/certificate/asprak bd.jpg",
      title: "Database Lab Assistant",
      description: "Assisted in the Database course, providing support to students in understanding database concepts and practical applications.",
      year: "2023",
      issuer: "Informatics Laboratory Assistant"
    },
    {
      id: 7,
      image: "/assets/certificate/bem u.jpg",
      title: "Data Analysis Staff of BEM UNSOED",
      description: "Role as a Data Analysis Staff in the Student Executive Board of Universitas Jenderal Soedirman, focusing on data collection, analysis, and reporting.",
      year: "2024",
      issuer: "BEM UNSOED"
    },
    {
      id: 8,
      image: "/assets/certificate/hmif.jpg",
      title: "Education Staff of HMIF UNSOED",
      description: "Served as an Education Staff in the Student Association of Informatics, focusing on educational programs and student development.",
      year: "2024",
      issuer: "HMIF UNSOED"
    },
    {
      id: 9,
      image: "/assets/certificate/osn mtk 2.jpg",
      title: "Gold Medalist in Olympic Festival Competition",
      description: "Achieved Gold Medal in Olympic Festival Competition, demonstrating excellence in competitive performance and athletic achievement.",
      year: "2022",
      issuer: "UNIVERSITY.ID"
    },
    {
      id: 10,
      image: "/assets/certificate/osn mtk 1.jpg",
      title: "Silver Medalist in the National Grand Science Olympiad online",
      description: "Achieved Silver Medal in the National Grand Science Olympiad online competition, demonstrating strong scientific knowledge and analytical problem-solving abilities.",
      year: "2021",
      issuer: "Yayasan Prestasi Indonesia"
    },
    {
      id: 11,
      image: "/assets/certificate/tentor basdat.jpg",
      title: "ISC (Informatic Study Club) Database Tentor",
      description: "Served as a tutor in the ISC Database, helping students grasp database concepts and practical skills.",
      year: "2023",
      issuer: "HMIF UNSOED"
    },
    {
      id: 12,
      image: "/assets/certificate/pengmas hmif.jpg",
      title: "Informatics Volunteers 'Pengabdian Masyarakat'",
      description: "Participated in community service activities organized by HMIF UNSOED, focusing on technology education and outreach.",
      year: "2023",
      issuer: "HMIF UNSOED"
    },
    {
      id: 13,
      image: "/assets/certificate/mm.jpg",
      title: "Informatics Makrab",
      description: "Conducted field engineering assessments for location approval and maintained security and order throughout all event activities from start to finish.",
      year: "2024",
      issuer: "HMIF UNSOED"
    },
    {
      id: 14,
      image: "/assets/certificate/stech.jpg",
      title: "Soedirman Technophoria",
      description: "Served as a committee member in the Soedirman Technophoria event, organizing activities related to technology and innovation.",
      year: "2022",
      issuer: "HMIF UNSOED"
    },
    {
      id: 15,
      image: "/assets/certificate/gammafest.jpg",
      title: "Participants of the Data Science Competition",
      description: "Participated in Data Science Competition focused on predicting citation relationships between papers in Citation Networks using advanced data analysis techniques.",
      year: "2025",
      issuer: "Himpro GSB Statistika IPB"
    },
    {
      id: 16,
      image: "/assets/certificate/ui 1.jpg",
      title: "UI/UX Design Competition",
      description: "Participated in UI/UX Design Competition, demonstrating skills in user interface design, user experience optimization, and design thinking methodologies.",
      year: "2025",
      issuer: "HMIF UNMA"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const groupCount = Math.ceil(certificates.length / 2);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % groupCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + groupCount) % groupCount);
  };

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
  setSelectedImage(null);
  };

  return (
    <section id="certificates" className="py-8 sm:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-start">
        {/* Enhanced Section Title */}
          <div className="mb-4 sm:mb-8 lg:mb-12 xl:mb-13">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mt-2 mb-4 pb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Certificates
            </h2>
          </div>
          {/* Certificate Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
            </button>

            {/* Certificate Cards Container */}
            <div className="overflow-hidden rounded-xl sm:rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {/* Group certificates by 2 */}
                {Array.from({ length: Math.ceil(certificates.length / 2) }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                      {certificates.slice(slideIndex * 2, slideIndex * 2 + 2).map((cert) => (
                        <div key={cert.id} className="bg-white rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2">
                          {/* Certificate Image */}
                          <div className="relative group">
                            <div 
                              className="aspect-[7/3] bg-gradient-to-br from-blue-100 to-purple-100 cursor-pointer overflow-hidden"
                              onClick={() => openImageModal(cert.image)}
                            >
                              <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Certificate Content */}
                          <div className="p-4 sm:p-5 lg:p-6">
                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                              {cert.title}
                            </h3>
                            
                            {/* Issuer */}
                            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                              {cert.issuer}
                            </div>
                            
                            {/* Description */}
                            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 text-sm">
                              {cert.description}
                            </p>
                            
                            {/* Year and Action */}
                            <div className="flex justify-between items-center">
                              <span className="text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                                {cert.year}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {Array.from({ length: Math.ceil(certificates.length / 2) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-xs sm:max-w-lg lg:max-w-3xl aspect-[16/10] bg-white rounded-lg shadow-2xl flex items-center justify-center">
            <button
              onClick={closeImageModal}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-full object-contain rounded-lg"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

// BAGIAN CONTACT SECTION
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMessage('');
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus('success');
        setFormMessage(data.message || 'Pesan berhasil terkirim!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 5000);
      } else {
        setFormStatus('error');
        if (data.errors) {
          // Handle validation errors
          const errorMessages = Object.values(data.errors).flat().join(' ');
          setFormMessage(`Gagal mengirim: ${errorMessages}`);
        } else {
          setFormMessage(data.message || 'Terjadi kesalahan saat mengirim pesan.');
        }
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Terjadi kesalahan koneksi. Pastikan server Laravel berjalan di http://127.0.0.1:8000');
      console.error('Fetch error:', error);
    }
  };

  return (
  <section id="contact" className="relative bg-white py-12 sm:py-14 lg:py-16 overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      {/* Contact Header with staggered animations */}
      <div className="text-left mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Contact
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent opacity-0 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          Connect with Me
        </h3>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed opacity-0 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          I've shared my contact details, if you're interested don't hesitate to get in touch - I'll be sure to respond.
        </p>
      </div>

      {/* Social Links with enhanced animations */}
      <div className="flex justify-start items-center gap-4 sm:gap-6 lg:gap-8 flex-wrap mb-10 sm:mb-14 lg:mb-16">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/luthfi-emillulfata/" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 sm:p-4 lg:p-5 bg-gray-100 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 opacity-0 animate-fadeInUp transform hover:-translate-y-1"
          style={{animationDelay: '0.6s'}}
        >
          <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-500 group-hover:text-blue-500 transition-all duration-300 group-hover:animate-bounce" />
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 group-hover:animate-pulse">
            LinkedIn
          </div>
          <div className="absolute inset-0 rounded-xl bg-blue-500 opacity-0 group-hover:opacity-10 group-hover:animate-ping transition-opacity duration-300"></div>
        </a>

        {/* Email */}
        <a 
          href="mailto:luthfi.efata@gmail.com" 
          className="group relative p-3 sm:p-4 lg:p-5 bg-gray-100 rounded-xl border border-gray-200 hover:border-red-500 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-red-500/20 opacity-0 animate-fadeInUp transform hover:-translate-y-1"
          style={{animationDelay: '0.8s'}}
        >
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-500 group-hover:text-red-500 transition-all duration-300 group-hover:animate-bounce" />
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 group-hover:animate-pulse">
            Email
          </div>
          <div className="absolute inset-0 rounded-xl bg-red-500 opacity-0 group-hover:opacity-10 group-hover:animate-ping transition-opacity duration-300"></div>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/ellfataa" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 sm:p-4 lg:p-5 bg-gray-100 rounded-xl border border-gray-200 hover:border-purple-500 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 opacity-0 animate-fadeInUp transform hover:-translate-y-1"
          style={{animationDelay: '1s'}}
        >
          <Github className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-500 group-hover:text-purple-500 transition-all duration-300 group-hover:animate-bounce" />
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 group-hover:animate-pulse">
            GitHub
          </div>
          <div className="absolute inset-0 rounded-xl bg-purple-500 opacity-0 group-hover:opacity-10 group-hover:animate-ping transition-opacity duration-300"></div>
        </a>
      </div>

      {/* Contact Form */}
      {/* <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-gray-100 backdrop-blur-sm bg-white/80"> */}
        {/* <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8"> */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> */}
            {/* Name Input */}
            {/* <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-700 text-sm sm:text-base font-semibold">
                Nama Lengkap *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                disabled={formStatus === 'loading'}
                placeholder="Masukkan nama lengkap Anda"
                className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-gray-800 text-sm sm:text-base bg-gray-50 hover:bg-white disabled:bg-gray-200 disabled:cursor-not-allowed placeholder-gray-400"
              />
            </div> */}

            {/* Email Input */}
            {/* <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700 text-sm sm:text-base font-semibold">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                disabled={formStatus === 'loading'}
                placeholder="nama@email.com"
                className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-gray-800 text-sm sm:text-base bg-gray-50 hover:bg-white disabled:bg-gray-200 disabled:cursor-not-allowed placeholder-gray-400"
              />
            </div> */}
          {/* </div> */}

          {/* Message Textarea */}
          {/* <div className="space-y-2">
            <label htmlFor="message" className="block text-gray-700 text-sm sm:text-base font-semibold">
              Pesan Anda *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              required
              rows={6}
              disabled={formStatus === 'loading'}
              placeholder="Tulis pesan Anda di sini... (minimal 10 karakter)"
              className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-gray-800 text-sm sm:text-base bg-gray-50 hover:bg-white disabled:bg-gray-200 disabled:cursor-not-allowed resize-y placeholder-gray-400"
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.message.length}/10 karakter minimum
            </p>
          </div> */}

          {/* Submit Button */}
          {/* <div className="flex flex-col items-center space-y-4"> */}
            {/* <button
              type="submit"
              disabled={formStatus === 'loading' || formData.message.length < 10}
              className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              {formStatus === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Mengirim Pesan...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Kirim Pesan
                </>
              )}
            </button> */}

            {/* Status Message */}
            {/* {formMessage && (
              <div className={`w-full p-4 rounded-lg text-center text-sm sm:text-base font-medium ${
                formStatus === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {formStatus === 'success' && (
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Berhasil!</span>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Error!</span>
                  </div>
                )}
                {formMessage}
              </div>
            )} */}
          {/* </div> */}
        {/* </form> */}
      {/* </div> */}
    </div>

    {/* Custom CSS animations */}
    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
      }
    `}</style>
  </section>
  );
};

// BAGIAN FOOTER
const Footer = () => {
  return (
  <footer className="bg-gray-50 border-t border-gray-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="py-4 sm:py-6 lg:py-8">
        <div className="text-left">
          <p className="text-sm sm:text-base lg:text-lg text-gray-500">
          © 2025 <span className="text-gray-800 font-medium">Luthfi Emillulfata</span>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
  );
};

// BAGIAN MEMANGGIL SEMUA FUNCTION SECTION
export default function Home() {
// Define the items array for GooeyNav
const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" }
];

// Smooth scroll handler for navbar links
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};

// Sidebar state for mobile nav
const [sidebarOpen, setSidebarOpen] = useState(false);

const [isNavbarHidden, setIsNavbarHidden] = useState(false);

return (
  <div className="min-h-screen overflow-x-hidden bg-white">
    {/* NAVBAR & HERO SECTION WITH PARTICLES */}
    <div className="relative">
      <div className="absolute inset-0 h-screen">
        <Particles
          particleColors={['#0C9AFF', '#BAE2FB']}
          particleCount={400}
          particleSpread={7}
          speed={0.4}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navbar 
        items={items} 
        handleNavClick={handleNavClick} 
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        isHidden={isNavbarHidden}
      />

      {/* HERO SECTION */}
      <HeroSection />
    </div>

    {/* ABOUT SECTION */}
    <AboutSection />

    {/* EXPERIENCE SECTION */}
    <ExperienceSection setIsNavbarHidden={setIsNavbarHidden} />

    {/* PROJECTS SECTION */}
    <ProjectsSection />

    {/* CERTIFICATES SECTION */}
    <CertificateSection />

    {/* CONTACT SECTION */}
    <ContactSection />

    {/* FOOTER */}
    <Footer />
  </div>
);
}