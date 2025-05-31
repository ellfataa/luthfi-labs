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

export default function Home() {
  // Define the items array for GooeyNav
  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
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
  

  // Certificate data
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
      image: "/assets/certificate/gammafest.jpg",
      title: "Gammafest Competition for Data Science",
      description: "Participation in a prestigious data science competition, showcasing skills in data analysis, machine learning, and problem solving.",
      year: "2025",
      issuer: "IPB University"
    },
    {
      id: 3,
      image: "/assets/certificate/bem u.jpg",
      title: "Data Analysis Staff of BEM UNSOED",
      description: "Role as a Data Analysis Staff in the Student Executive Board of Universitas Jenderal Soedirman, focusing on data collection, analysis, and reporting.",
      year: "2025",
      issuer: "BEM UNSOED"
    },
    {
      id: 4,
      image: "/assets/certificate/asprak so.jpg",
      title: "Operating System Lab Assistant",
      description: "Assisted in the Operating System course, providing support to students in understanding OS concepts and practical applications.",
      year: "2024",
      issuer: "Informatics Laboratory Assistant"
    },
    {
      id: 5,
      image: "/assets/certificate/asprak bd.jpg",
      title: "Database Lab Assistant",
      description: "Assisted in the Database course, providing support to students in understanding database concepts and practical applications.",
      year: "2023",
      issuer: "Informatics Laboratory Assistant"
    },
    {
      id: 6,
      image: "/assets/certificate/tentor basdat.jpg",
      title: "Study Club Informatics Database Tentor",
      description: "Served as a tutor in the Study Club Informatics Database, helping students grasp database concepts and practical skills.",
      year: "2023",
      issuer: "HMIF UNSOED"
    },
    {
      id: 7,
      image: "/assets/certificate/pengmas hmif.jpg",
      title: "Community Service Volunteer",
      description: "Participated in community service activities organized by HMIF UNSOED, focusing on technology education and outreach.",
      year: "2023",
      issuer: "HMIF UNSOED"
    },
    {
      id: 8,
      image: "/assets/certificate/sol.jpg",
      title: "Soedirman Technophoria",
      description: "Served as a committee member in the Soedirman Technophoria event, organizing activities related to technology and innovation.",
      year: "2022",
      issuer: "HMIF UNSOED"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Calculate the number of groups (2 certificates per group)
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

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex justify-between items-center py-3 sm:py-4 lg:py-5">
              <div className="text-xl sm:text-2xl lg:text-2xl font-bold text-blue-600">LF</div>
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
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center pt-6 sm:pt-10 lg:pt-14">
              {/* Text Content */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-justify order-2 lg:order-1">
                <div>
                  <RotatingText
                    texts={['Web Developer', 'UI/UX Design Enthusiast', 'Data Analyst Enthusiast']}
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
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                  
                  <BlurText
                    text="As a prospective candidate with a bachelor's degree in Computer Science and interested in Web Developer, UI/UX Design, and Data Analyst. I am also an outstanding student and team member with good time management, laboratory assistant, problem solving, teamwork, and leadership skills."
                    className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-justify"
                    delay={100}
                    stepDuration={0.5}
                    direction="top"
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                </div>

                <div className="pt-2 sm:pt-4 lg:pt-6">
                  <a
                    href="#contact"
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
      </div>

      {/* SESI ABOUT */}
      <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-start">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 mt-2">About Me</h2>
            
            <BlurText
              text="I am a dedicated web developer with expertise in modern technology and a passion for creating amazing digital experiences. I am most enthusiastic about UI/UX Designer, thus after creating a design I usually proceed to develop the design into web. I'm also an enthusiastic Data Analyst doing analysis and research which I find fun and challenging."
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8 mx-auto text-justify"
              delay={100}
              stepDuration={0.5}
              direction="top"
              threshold={0.1}
              rootMargin="-100px"
            />

            <BlurText
              text="I develop the web with the principles of being efficient, interactive, and responsive to users. Using technologies such as React, Laravel, CodeIgniter, Next.Js, Tailwind, and Bootstrap. In data analysis and observation I use Python, Google Colab, and Kaggle. All of which I do because it's my passion and favorite."
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-12 mx-auto text-justify"
              delay={100}
              stepDuration={0.5}
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
                {/* React */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '0s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/react.png" alt="React" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">React</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Frontend Framework</p>
                    </div>
                  </div>
                </div>

                {/* Tailwind */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '0.2s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/tailwind.png" alt="Tailwind" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Tailwind</h3>
                      <p className="text-xs sm:text-sm text-gray-600">CSS Framework</p>
                    </div>
                  </div>
                </div>

                {/* Javascript */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '0.4s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/javascript.png" alt="JavaScript" className="w-9 h-8 sm:w-11 sm:h-10 md:w-14 md:h-12 lg:w-18 lg:h-15" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Javascript</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Programming Language</p>
                    </div>
                  </div>
                </div>

                {/* Bootstrap */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '0.6s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/bootstrap.png" alt="Bootstrap" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Bootstrap</h3>
                      <p className="text-xs sm:text-sm text-gray-600">CSS Framework</p>
                    </div>
                  </div>
                </div>

                {/* Laravel */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '0.8s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/laravel.png" alt="Laravel" className="w-9 h-8 sm:w-11 sm:h-10 md:w-14 md:h-12 lg:w-18 lg:h-15" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Laravel</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Web Framework</p>
                    </div>
                  </div>
                </div>

                {/* Next Js */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '1.0s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/next js.png" alt="Next.js" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Next.Js</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Web Framework</p>
                    </div>
                  </div>
                </div>

                {/* Codeigniter */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '1.2s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/codeigniter.png" alt="CodeIgniter" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Codeigniter</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Web Framework</p>
                    </div>
                  </div>
                </div>

                {/* Git */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '1.4s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/git.png" alt="Git" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Git</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Version Control System</p>
                    </div>
                  </div>
                </div>

                {/* Github */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '1.6s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/github.png" alt="GitHub" className="w-10 h-9 sm:w-12 sm:h-11 md:w-16 md:h-14 lg:w-20 lg:h-17" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">GitHub</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Cloud-based Services</p>
                    </div>
                  </div>
                </div>

                {/* PHP Language */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '1.8s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/php lang.png" alt="PHP" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">PHP</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Programming Language</p>
                    </div>
                  </div>
                </div>

                {/* Figma */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '2.0s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/figma.png" alt="Figma" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Figma</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Design Tool</p>
                    </div>
                  </div>
                </div>

                {/* Wordpress */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '2.2s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/wordpress.png" alt="WordPress" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">WordPress</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Content Management System (CMS)</p>
                    </div>
                  </div>
                </div>

                {/* Google Colab */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '2.4s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/colab.png" alt="Google Colab" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Google Colab</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Machine Learning Tool</p>
                    </div>
                  </div>
                </div>

                {/* Python */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '2.6s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/python.png" alt="Python" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Python</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Programming Language</p>
                    </div>
                  </div>
                </div>

                {/* Kaggle */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '2.8s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/kaggle.png" alt="Kaggle" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Kaggle</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Machine Learning Tool</p>
                    </div>
                  </div>
                </div>

                {/* VS Code */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '3.0s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/vscode.png" alt="VS Code" className="w-8 h-7 sm:w-10 sm:h-9 md:w-12 md:h-11 lg:w-15 lg:h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Visual Studio Code</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Code Editor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESI EXPERIENCE */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden">      
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-start">
            {/* Enhanced Section Title */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Experience
              </h2>
            </div>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 sm:left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
              
              <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                {/* HMIF */}
                <div className="group relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1 sm:left-2 lg:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                  
                  {/* Content Card */}
                  <div className="ml-8 sm:ml-12 lg:ml-20 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 sm:gap-4">
                        <div className="flex items-start gap-3 sm:gap-4 flex-1">
                          {/* Logo with Hover Effect */}
                          <div className="relative flex-shrink-0">
                            <img
                              src="assets/image/hmif.png"
                              alt="HMIF UNSOED"
                              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="mb-2 sm:mb-3">
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                                Staff of the Education Division
                              </h3>
                              <p className="text-blue-600 font-semibold text-sm sm:text-base lg:text-lg flex items-center gap-2">
                                HMIF UNSOED (Himpunan Mahasiswa Informatika UNSOED)
                              </p>
                            </div>
                            
                            {/* Enhanced Bullet Points */}
                            <ul className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Manages the Education Division to enhance academic potential and provide academic resources for Informatics students at Unsoed through structured programs.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Leads the "Simpul Pintar" Question & Material Bank program collecting and storing previous exam questions and course materials in an accessible platform.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Develops and maintains the academic repository including creating the database system and gathering exam materials from various sources.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Coordinates with lecturers and seniors to obtain exam questions and ensure comprehensive preparation materials for students.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        {/* Enhanced Date Badge */}
                        <div className="flex-shrink-0 mt-2 lg:mt-0">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            Mar - Dec 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BEM U */}
                <div className="group relative">
                  <div className="absolute left-1 sm:left-2 lg:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                  
                  <div className="ml-8 sm:ml-12 lg:ml-20 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 sm:gap-4">
                        <div className="flex items-start gap-3 sm:gap-4 flex-1">
                          <div className="relative flex-shrink-0">
                            <img
                              src="assets/image/bemu.png"
                              alt="BEM UNSOED"
                              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="mb-2 sm:mb-3">
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                                Staff of the Directorate General of Data Analysis
                              </h3>
                              <p className="text-blue-600 font-semibold text-sm sm:text-base lg:text-lg flex items-center gap-2">
                                BEM UNSOED (Badan Eksekutif Mahasiswa UNSOED)
                              </p>
                            </div>
                            
                            <ul className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Conducts research and surveys to support other BEM UNSOED ministries while maintaining benefits for Unsoed Student Family (KBMU).</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Serves in Data Analysis Directorate responsible for managing collected data using Excel, Google Colab, and spreadsheets.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Performs data processing and analysis using tools like Excel and Python to generate insights.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Creates analysis reports and coordinates with relevant parties to ensure data-driven decision making.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0 mt-2 lg:mt-0">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            Feb - Dec 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PDAM BANYUMAS */}
                <div className="group relative">
                  <div className="absolute left-1 sm:left-2 lg:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                  
                  <div className="ml-8 sm:ml-12 lg:ml-20 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 sm:gap-4">
                        <div className="flex items-start gap-3 sm:gap-4 flex-1">
                          <div className="relative flex-shrink-0">
                            <img
                              src="assets/image/pdam.jpg"
                              alt="PDAM BANYUMAS"
                              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="mb-2 sm:mb-3">
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                                Perumdam Member Portal Registration Backend Developer
                              </h3>
                              <p className="text-blue-600 font-semibold text-sm sm:text-base lg:text-lg flex items-center gap-2">
                                Perumda Air Minum Tirta Satria Banyumas
                              </p>
                            </div>
                            
                            <ul className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Practical work for one month by collaborating with Perumdam's IT division to develop a member registration portal.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Creating data flow in the registration process both use cases, sequence diagrams, activity diagrams, and class diagrams.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Building strong relationships with Perumdam employees.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Present the progress of the backend development for the Perumdam member registration portal to the field supervisor.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0 mt-2 lg:mt-0">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            Jul - Aug 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laboratory Assistant of Operating Systems */}
                <div className="group relative">
                  <div className="absolute left-1 sm:left-2 lg:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                  
                  <div className="ml-8 sm:ml-12 lg:ml-20 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 sm:gap-4">
                        <div className="flex items-start gap-3 sm:gap-4 flex-1">
                          <div className="relative flex-shrink-0">
                            <img
                              src="assets/image/asprak.jpg"
                              alt="ASPRAK INFORMATIKA"
                              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="mb-2 sm:mb-3">
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                                Laboratory Assistant of Operating Systems
                              </h3>
                              <p className="text-blue-600 font-semibold text-sm sm:text-base lg:text-lg flex items-center gap-2">
                                Aslab Informatika UNSOED (Laboratory Assistant Informatika UNSOED)
                              </p>
                            </div>
                            
                            <ul className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Selected as Operating Systems Lab Assistant through rigorous administrative and interview screening process.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Teach Operating Systems course by preparing presentations, sharing learning modules, and explaining concepts to Informatics students.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Coordinate with lecturers to align teaching methods and ensure effective course delivery.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Develop and evaluate student assessments including creating assignments/exams, grading work, and inputting final grades.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0 mt-2 lg:mt-0">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            Mar - Jun 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laboratory Assistant of Database */}
                <div className="group relative">
                  <div className="absolute left-1 sm:left-2 lg:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                  
                  <div className="ml-8 sm:ml-12 lg:ml-20 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 sm:gap-4">
                        <div className="flex items-start gap-3 sm:gap-4 flex-1">
                          <div className="relative flex-shrink-0">
                            <img
                              src="assets/image/asprak.jpg"
                              alt="ASPRAK INFORMATIKA"
                              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="mb-2 sm:mb-3">
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                                Laboratory Assistant of Database
                              </h3>
                              <p className="text-blue-600 font-semibold text-sm sm:text-base lg:text-lg flex items-center gap-2">
                                Aslab Informatika UNSOED (Laboratory Assistant Informatika UNSOED)
                              </p>
                            </div>
                            
                            <ul className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Selected as Database Lab Assistant through competitive administrative and interview process.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Teach Database course material by preparing presentations, explaining concepts, and sharing learning modules.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Coordinate with lecturers to align teaching methods and ensure effective course delivery.</span>
                              </li>
                              <li className="flex items-start gap-2 sm:gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Create and evaluate student assessments including developing assignments/exams, grading work, and recording final grades.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0 mt-2 lg:mt-0">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            Sep - Dec 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESI PROJECT */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-start">
            {/* Enhanced Section Title */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mt-2 mb-4 pb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Projects
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* JT LAW FIRM */}
              <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2 animate-float bg-blue-100/60 backdrop-blur-lg">
                <div className="relative overflow-hidden">
                  <img
                    src="assets/image/jt law.png"
                    alt="JT Law Firm"
                    className="h-48 sm:h-52 lg:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">JT Law Firm</h3>
                  <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">JT Law Firm is a UI/UX design for a legal consulting agency handling client cases.</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 lg:mb-6">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200/50">Figma</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* KREASIKITA */}
              <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2 animate-float bg-blue-100/60 backdrop-blur-lg">
                <div className="relative overflow-hidden">
                  <img
                    src="assets/image/kreasikita.png"
                    alt="KreasiKita"
                    className="h-48 sm:h-52 lg:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">KreasiKita</h3>
                  <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">KreasiKita is an online donation platform for Indonesian creators to fund their projects.</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 lg:mb-6">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-green-50 text-green-700 text-sm rounded-full font-medium border border-green-200/50">Next.Js</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-cyan-50 text-cyan-700 text-sm rounded-full font-medium border border-cyan-200/50">Tailwind</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-red-100 to-red-50 text-red-700 text-sm rounded-full font-medium border border-red-200/50">Nest.Js</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 text-sm rounded-full font-medium border border-orange-200/50">Midtrans</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* SOALPEDIA */}
              <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2 animate-float bg-blue-100/60 backdrop-blur-lg">
                <div className="relative overflow-hidden">
                  <img
                    src="assets/image/soalpedia.png"
                    alt="SoalPedia"
                    className="h-48 sm:h-52 lg:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">SoalPedia</h3>
                  <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">SoalPedia is a web-based question bank for learning, accessible anywhere.</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 lg:mb-6">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 text-sm rounded-full font-medium border border-purple-200/50">PHP</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200/50">MySQL</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 text-sm rounded-full font-medium border border-orange-200/50">HTML/CSS</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-700 text-sm rounded-full font-medium border border-yellow-200/50">Javascript</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* LINGKAR PENDIDIKAN */}
              <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2 animate-float bg-blue-100/60 backdrop-blur-lg">
                <div className="relative overflow-hidden">
                  <img
                    src="assets/image/lingkar.png"
                    alt="Lingkar Pendidikan"
                    className="h-48 sm:h-52 lg:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Lingkar Pendidikan</h3>
                  <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">Lingkar Pendidikan is a website for preparing to enter universities and official schools.</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 lg:mb-6">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 text-sm rounded-full font-medium border border-purple-200/50">PHP</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200/50">MySQL</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 text-sm rounded-full font-medium border border-orange-200/50">HTML/CSS</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-700 text-sm rounded-full font-medium border border-yellow-200/50">Javascript</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* DEMONWARD */}
              <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2 animate-float bg-blue-100/60 backdrop-blur-lg">
                <div className="relative overflow-hidden">
                  <img
                    src="assets/image/kimetsu.png"
                    alt="Demonward"
                    className="h-48 sm:h-52 lg:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">DemonWard</h3>
                  <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">DemonWard is a website that provides various information related to the Demon Slayer anime.</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 lg:mb-6">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 text-sm rounded-full font-medium border border-purple-200/50">PHP</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200/50">MySQL</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 text-sm rounded-full font-medium border border-orange-200/50">HTML/CSS</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-700 text-sm rounded-full font-medium border border-yellow-200/50">Javascript</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* QUEASY */}
              <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2 animate-float bg-blue-100/60 backdrop-blur-lg">
                <div className="relative overflow-hidden">
                  <img
                    src="assets/image/queasy.png"
                    alt="Queasy"
                    className="h-48 sm:h-52 lg:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Queasy</h3>
                  <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">Queasy is a story-based quiz learning platform with various categories.</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 lg:mb-6">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 text-sm rounded-full font-medium border border-purple-200/50">PHP</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200/50">MySQL</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-pink-100 to-pink-50 text-pink-700 text-sm rounded-full font-medium border border-pink-200/50">Bootstrap</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-700 text-sm rounded-full font-medium border border-yellow-200/50">Javascript</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* SekulLegend */}
              <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2 animate-float bg-blue-100/60 backdrop-blur-lg">
                <div className="relative overflow-hidden">
                  <img
                    src="assets/image/sekullegend.png"
                    alt="SekulLegend"
                    className="h-48 sm:h-52 lg:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">SekulLegend</h3>
                  <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">SekulLegend is a mini classroom platform for classes, discussions, and learning materials.</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 lg:mb-6">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-red-100 to-red-50 text-red-700 text-sm rounded-full font-medium border border-red-200/50">CodeIgniter</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-cyan-50 text-cyan-700 text-sm rounded-full font-medium border border-cyan-200/50">Tailwind</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-700 text-sm rounded-full font-medium border border-yellow-200/50">Javascript</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* SISPAK */}
              <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2 animate-float bg-blue-100/60 backdrop-blur-lg">
                <div className="relative overflow-hidden">
                  <img
                    src="assets/image/sispak.png"
                    alt="SisPak"
                    className="h-48 sm:h-52 lg:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Expert System</h3>
                  <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">Expert System is a chest disease diagnostic tool using Naive Bayes.</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 lg:mb-6">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 text-sm rounded-full font-medium border border-emerald-200/50">Naive Bayes</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 text-sm rounded-full font-medium border border-purple-200/50">PHP</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200/50">MySQL</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-cyan-50 text-cyan-700 text-sm rounded-full font-medium border border-cyan-200/50">Tailwind</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-700 text-sm rounded-full font-medium border border-yellow-200/50">Javascript</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* SPK LAYANAN CLOUD*/}
              <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2 animate-float bg-blue-100/60 backdrop-blur-lg">
                <div className="relative overflow-hidden">
                  <img
                    src="assets/image/spk.png"
                    alt="SPK Layanan Cloud"
                    className="h-48 sm:h-52 lg:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Cloud Service Decision Support System</h3>
                  <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">CloudSelect DSS is a TOPSIS-based tool for cloud service selection.</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 lg:mb-6">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-700 text-sm rounded-full font-medium border border-indigo-200/50">TOPSIS</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-green-50 text-green-700 text-sm rounded-full font-medium border border-green-200/50">Google Form</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 text-sm rounded-full font-medium border border-orange-200/50">Google Colab</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200/50">Python</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Credit Risk */}
            <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2 animate-float bg-blue-100/60 backdrop-blur-lg">
                <div className="relative overflow-hidden">
                  <img
                    src="assets/image/datmin.png"
                    alt="Credit Risk Classification"
                    className="h-48 sm:h-52 lg:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Credit Risk Classification</h3>
                  <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">The Credit Risk Classification enhances banking decisions and risk management through predictive insights.</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 lg:mb-6">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-violet-100 to-violet-50 text-violet-700 text-sm rounded-full font-medium border border-violet-200/50">Backpropagation</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-teal-100 to-teal-50 text-teal-700 text-sm rounded-full font-medium border border-teal-200/50">SMOTE</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-rose-100 to-rose-50 text-rose-700 text-sm rounded-full font-medium border border-rose-200/50">Deep Neural Network</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-sm rounded-full font-medium border border-amber-200/50">Gradient Descent</span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-lime-100 to-lime-50 text-lime-700 text-sm rounded-full font-medium border border-lime-200/50">Adam Optimization</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Floating animation keyframes */}
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px);}
            50% { transform: translateY(-18px);}
            100% { transform: translateY(0px);}
          }
          .animate-float {
            animation: float 3.5s ease-in-out infinite;
          }
          .delay-200 { animation-delay: 0.2s !important; }
          .delay-400 { animation-delay: 0.4s !important; }
          .delay-600 { animation-delay: 0.6s !important; }
          .delay-800 { animation-delay: 0.8s !important; }
          .delay-1000 { animation-delay: 1s !important; }
          .delay-1200 { animation-delay: 1.2s !important; }
          .delay-1400 { animation-delay: 1.4s !important; }
          .delay-1600 { animation-delay: 1.6s !important; }
          .delay-1800 { animation-delay: 1.8s !important; }
        `}</style>
      </section>

      {/* SESI CERTIFICATE */}
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

      {/* CONTACT SECTION */}
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
          <div className="flex justify-start items-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
            {/* LinkedIn */}
            <a 
              href="#" 
              className="group relative p-3 sm:p-4 lg:p-5 bg-gray-100 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 opacity-0 animate-fadeInUp transform hover:-translate-y-1"
              style={{animationDelay: '0.6s'}}
            >
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-500 group-hover:text-blue-500 transition-all duration-300 group-hover:animate-bounce" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 group-hover:animate-pulse">
                LinkedIn
              </div>
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl bg-blue-500 opacity-0 group-hover:opacity-10 group-hover:animate-ping transition-opacity duration-300"></div>
            </a>

            {/* Email */}
            <a 
              href="mailto:your.email@example.com" 
              className="group relative p-3 sm:p-4 lg:p-5 bg-gray-100 rounded-xl border border-gray-200 hover:border-red-500 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-red-500/20 opacity-0 animate-fadeInUp transform hover:-translate-y-1"
              style={{animationDelay: '0.8s'}}
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-500 group-hover:text-red-500 transition-all duration-300 group-hover:animate-bounce" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 group-hover:animate-pulse">
                Email
              </div>
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl bg-red-500 opacity-0 group-hover:opacity-10 group-hover:animate-ping transition-opacity duration-300"></div>
            </a>

            {/* GitHub */}
            <a 
              href="#" 
              className="group relative p-3 sm:p-4 lg:p-5 bg-gray-100 rounded-xl border border-gray-200 hover:border-purple-500 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 opacity-0 animate-fadeInUp transform hover:-translate-y-1"
              style={{animationDelay: '1s'}}
            >
              <Github className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-500 group-hover:text-purple-500 transition-all duration-300 group-hover:animate-bounce" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 group-hover:animate-pulse">
                GitHub
              </div>
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl bg-purple-500 opacity-0 group-hover:opacity-10 group-hover:animate-ping transition-opacity duration-300"></div>
            </a>
          </div>
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

      {/* FOOTER SECTION */}
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
    </div>
  );
}