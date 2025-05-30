import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import Particles from "./components/Particles/Particles";
import Orb from "./components/Orb/Orb";

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
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-600">LF</div>
              <div className="hidden md:flex space-x-6 lg:space-x-8">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="relative text-gray-700 font-medium py-2 px-1 group transition-all duration-300 ease-out overflow-hidden"
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

        {/* SESI HERO */}
        <section id="home" className="min-h-screen flex items-center pt-2 sm:pt-6">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="space-y-4 sm:space-y-6 text-start order-2 lg:order-1">
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

                <div>
                  <SplitText
                    text="I'm Luthfi Emillulfata"
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
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
                    className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mt-2 sm:mt-4 text-justify"
                    delay={100}
                    stepDuration={0.5}
                    direction="top"
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                </div>

                <div className="flex gap-4 pt-2 sm:pt-4">
                  <a
                    href="#contact"
                    className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition-colors duration-300 font-medium text-base sm:text-lg"
                  >
                    Look at my CV
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-full max-w-lg sm:max-w-xl">
                  <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SESI ABOUT */}
      <section id="about" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-start">
            <h2 className="text-7xl font-bold text-gray-800 mb-6 sm:mb-8">About Me</h2>
            <BlurText
              text="I am a dedicated web developer with expertise in modern technology and a passion for creating amazing digital experiences. I am most enthusiastic about UI/UX Designer, thus after creating a design I usually proceed to develop the design into web. I'm also an enthusiastic Data Analyst doing analysis and research which I find fun and challenging."
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-5 sm:mb-8 mx-auto text-justify"
              delay={100}
              stepDuration={0.5}
              direction="top"
              threshold={0.1}
              rootMargin="-100px"
            />

            <BlurText
              text="I develop the web with the principles of being efficient, interactive, and responsive to users. Using technologies such as React, Laravel, CodeIgniter, Next.Js, Tailwind, and Bootstrap. In data analysis and observation I use Python, Google Colab, and Kaggle. All of which I do because it's my passion and favorite."
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12 mx-auto text-justify"
              delay={100}
              stepDuration={0.5}
              direction="top"
              threshold={0.1}
              rootMargin="-100px"
            />

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-10 text-justify">
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
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-none mx-auto">
                {/* React */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '0s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/react.png" alt="React" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">React</h3>
                      <p className="text-sm text-gray-600">Frontend Framework</p>
                    </div>
                  </div>
                </div>

                {/* Tailwind */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '0.2s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/tailwind.png" alt="Tailwind" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Tailwind</h3>
                      <p className="text-sm text-gray-600">CSS Framework</p>
                    </div>
                  </div>
                </div>

                {/* Javascript */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '0.4s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/javascript.png" alt="JavaScript" className="w-18 h-15" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Javascript</h3>
                      <p className="text-sm text-gray-600">Programming Language</p>
                    </div>
                  </div>
                </div>

                {/* Bootstrap */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '0.6s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/bootstrap.png" alt="Bootstrap" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Bootstrap</h3>
                      <p className="text-sm text-gray-600">CSS Framework</p>
                    </div>
                  </div>
                </div>

                {/* Laravel */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '0.8s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/laravel.png" alt="Laravel" className="w-18 h-15" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Laravel</h3>
                      <p className="text-sm text-gray-600">Web Framework</p>
                    </div>
                  </div>
                </div>

                {/* Next Js */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '1.0s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/next js.png" alt="Next.js" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Next.Js</h3>
                      <p className="text-sm text-gray-600">Web Framework</p>
                    </div>
                  </div>
                </div>

                {/* Codeigniter */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '1.2s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/codeigniter.png" alt="CodeIgniter" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Codeigniter</h3>
                      <p className="text-sm text-gray-600">Web Framework</p>
                    </div>
                  </div>
                </div>

                {/* Git */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '1.4s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/git.png" alt="Git" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Git</h3>
                      <p className="text-sm text-gray-600">Version Control System</p>
                    </div>
                  </div>
                </div>

                {/* Github */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '1.6s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/github.png" alt="GitHub" className="w-20 h-17" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">GitHub</h3>
                      <p className="text-sm text-gray-600">Cloud-based Services</p>
                    </div>
                  </div>
                </div>

                {/* PHP Language */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '1.8s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/php lang.png" alt="PHP" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">PHP</h3>
                      <p className="text-sm text-gray-600">Programming Language</p>
                    </div>
                  </div>
                </div>

                {/* Figma */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '2.0s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/figma.png" alt="Figma" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Figma</h3>
                      <p className="text-sm text-gray-600">Design Tool</p>
                    </div>
                  </div>
                </div>

                {/* Wordpress */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '2.2s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/wordpress.png" alt="WordPress" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">WordPress</h3>
                      <p className="text-sm text-gray-600">Content Management System (CMS)</p>
                    </div>
                  </div>
                </div>

                {/* Google Colab */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '2.4s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/colab.png" alt="Google Colab" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Google Colab</h3>
                      <p className="text-sm text-gray-600">Machine Learning Tool</p>
                    </div>
                  </div>
                </div>

                {/* Python */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '2.6s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/python.png" alt="Python" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Python</h3>
                      <p className="text-sm text-gray-600">Programming Language</p>
                    </div>
                  </div>
                </div>

                {/* Kaggle */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '2.8s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/kaggle.png" alt="Kaggle" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Kaggle</h3>
                      <p className="text-sm text-gray-600">Machine Learning Tool</p>
                    </div>
                  </div>
                </div>

                {/* VS Code */}
                <div className="bg-blue-100/60 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full animate-pulse hover:animate-none" style={{animationDelay: '3.0s', animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src="assets/image/vscode.png" alt="VS Code" className="w-15 h-13" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1">Visual Studio Code</h3>
                      <p className="text-sm text-gray-600">Code Editor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESI EXPERIENCE */}
      <section id="experience" className="py-16 sm:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-200/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-start">
            {/* Enhanced Section Title */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Experience
              </h2>
            </div>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
              
              <div className="space-y-8 sm:space-y-12">
                {/* HMIF */}
                <div className="group relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                  
                  {/* Content Card */}
                  <div className="ml-12 md:ml-20 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          {/* Logo with Hover Effect */}
                          <div className="relative">
                            <img
                              src="assets/image/hmif.png"
                              alt="HMIF UNSOED"
                              className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="mb-3">
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                                Staff of the Education Division
                              </h3>
                              <p className="text-blue-600 font-semibold text-lg flex items-center gap-2">
                                HMIF UNSOED (Himpunan Mahasiswa Informatika UNSOED)
                              </p>
                            </div>
                            
                            {/* Enhanced Bullet Points */}
                            <ul className="space-y-3 text-gray-700 leading-relaxed">
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Manages the Education Division to enhance academic potential and provide academic resources for Informatics students at Unsoed through structured programs.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Leads the "Simpul Pintar" Question & Material Bank program collecting and storing previous exam questions and course materials in an accessible platform.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Develops and maintains the academic repository including creating the database system and gathering exam materials from various sources.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Coordinates with lecturers and seniors to obtain exam questions and ensure comprehensive preparation materials for students.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        {/* Enhanced Date Badge */}
                        <div className="flex-shrink-0">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            Mar - Dec 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BEM U */}
                <div className="group relative">
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                  
                  <div className="ml-12 md:ml-20 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="relative">
                            <img
                              src="assets/image/bemu.png"
                              alt="BEM UNSOED"
                              className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="mb-3">
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                                Staff of the Directorate General of Data Analysis
                              </h3>
                              <p className="text-blue-600 font-semibold text-lg flex items-center gap-2">
                                BEM UNSOED (Badan Eksekutif Mahasiswa UNSOED)
                              </p>
                            </div>
                            
                            <ul className="space-y-3 text-gray-700 leading-relaxed">
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Conducts research and surveys to support other BEM UNSOED ministries while maintaining benefits for Unsoed Student Family (KBMU).</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Serves in Data Analysis Directorate responsible for managing collected data using Excel, Google Colab, and spreadsheets.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Performs data processing and analysis using tools like Excel and Python to generate insights.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Creates analysis reports and coordinates with relevant parties to ensure data-driven decision making.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            Feb - Dec 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PDAM BANYUMAS */}
                <div className="group relative">
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                  
                  <div className="ml-12 md:ml-20 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="relative">
                            <img
                              src="assets/image/pdam.jpg"
                              alt="PDAM BANYUMAS"
                              className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="mb-3">
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                                Perumdam Member Portal Registration Backend Developer
                              </h3>
                              <p className="text-blue-600 font-semibold text-lg flex items-center gap-2">
                                Perumda Air Minum Tirta Satria Banyumas
                              </p>
                            </div>
                            
                            <ul className="space-y-3 text-gray-700 leading-relaxed">
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Practical work for one month by collaborating with Perumdam's IT division to develop a member registration portal.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Creating data flow in the registration process both use cases, sequence diagrams, activity diagrams, and class diagrams.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Building strong relationships with Perumdam employees.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Present the progress of the backend development for the Perumdam member registration portal to the field supervisor.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            Jul - Aug 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laboratory Assistant of Operating Systems */}
                <div className="group relative">
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                  
                  <div className="ml-12 md:ml-20 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="relative">
                            <img
                              src="assets/image/asprak.jpg"
                              alt="ASPRAK INFORMATIKA"
                              className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="mb-3">
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                                Laboratory Assistant of Operating Systems
                              </h3>
                              <p className="text-blue-600 font-semibold text-lg flex items-center gap-2">
                                Aslab Informatika UNSOED (Laboratory Assistant Informatika UNSOED)
                              </p>
                            </div>
                            
                            <ul className="space-y-3 text-gray-700 leading-relaxed">
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Selected as Operating Systems Lab Assistant through rigorous administrative and interview screening process.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Teach Operating Systems course by preparing presentations, sharing learning modules, and explaining concepts to Informatics students.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Coordinate with lecturers to align teaching methods and ensure effective course delivery.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Develop and evaluate student assessments including creating assignments/exams, grading work, and inputting final grades.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            Mar - Jun 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laboratory Assistant of Database */}
                <div className="group relative">
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                  
                  <div className="ml-12 md:ml-20 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="relative">
                            <img
                              src="assets/image/asprak.jpg"
                              alt="ASPRAK INFORMATIKA"
                              className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="mb-3">
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                                Laboratory Assistant of Database
                              </h3>
                              <p className="text-blue-600 font-semibold text-lg flex items-center gap-2">
                                Aslab Informatika UNSOED (Laboratory Assistant Informatika UNSOED)
                              </p>
                            </div>
                            
                            <ul className="space-y-3 text-gray-700 leading-relaxed">
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Selected as Database Lab Assistant through competitive administrative and interview process.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Teach Database course material by preparing presentations, explaining concepts, and sharing learning modules.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Coordinate with lecturers to align teaching methods and ensure effective course delivery.</span>
                              </li>
                              <li className="flex items-start gap-3 group/item hover:text-gray-800 transition-colors duration-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-200"></span>
                                <span className="text-justify">Create and evaluate student assessments including developing assignments/exams, grading work, and recording final grades.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
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


      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-start">
            <h2 className="text-7xl font-bold text-gray-800 mb-6 sm:mb-8">Project</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">E-Commerce Platform</h3>
                  <p className="text-gray-600 mb-4">A full-stack e-commerce solution built with React and Node.js</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">MongoDB</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">View Project →</a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Task Management App</h3>
                  <p className="text-gray-600 mb-4">A productivity app with real-time collaboration features</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">Prisma</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">View Project →</a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Portfolio Website</h3>
                  <p className="text-gray-600 mb-4">A responsive portfolio site with smooth animations</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">GSAP</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">Tailwind</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">View Project →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">Certificates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">React Developer Certification</h3>
                <p className="text-blue-600 font-medium mb-2">Meta (Facebook)</p>
                <p className="text-gray-600 mb-4">
                  Comprehensive certification covering React fundamentals, hooks, state management, and advanced patterns.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Issued: 2023</span>
                  <a href="#" className="text-blue-600 hover:underline">View Certificate</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Full Stack Web Development</h3>
                <p className="text-blue-600 font-medium mb-2">freeCodeCamp</p>
                <p className="text-gray-600 mb-4">
                  Complete full-stack curriculum covering HTML, CSS, JavaScript, Node.js, React, and databases.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Issued: 2022</span>
                  <a href="#" className="text-blue-600 hover:underline">View Certificate</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">UI/UX Design Fundamentals</h3>
                <p className="text-blue-600 font-medium mb-2">Google UX Design</p>
                <p className="text-gray-600 mb-4">
                  Professional certificate program covering user research, wireframing, prototyping, and design systems.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Issued: 2023</span>
                  <a href="#" className="text-blue-600 hover:underline">View Certificate</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">JavaScript Algorithms</h3>
                <p className="text-blue-600 font-medium mb-2">freeCodeCamp</p>
                <p className="text-gray-600 mb-4">
                  Advanced JavaScript certification focusing on algorithms, data structures, and problem-solving.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Issued: 2022</span>
                  <a href="#" className="text-blue-600 hover:underline">View Certificate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">Get In Touch</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Let's Work Together</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a project in mind or just want to chat about web development, 
                    feel free to reach out!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">your.email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600">📱</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Location</p>
                      <p className="text-gray-600">Your City, Country</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <span>in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <span>gh</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <span>tw</span>
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p>&copy; 2024 Your Name. All rights reserved.</p>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}