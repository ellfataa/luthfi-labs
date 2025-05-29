import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import Particles from "./components/Particles/Particles";

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
                    className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mt-2 sm:mt-4"
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-9xl sm:text-7xl font-bold text-gray-800 mb-6 sm:mb-8">About Me</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12">
              I'm a dedicated web developer with expertise in modern technologies and a passion for creating 
              exceptional digital experiences. My journey in web development combines technical skills with 
              creative design thinking to deliver solutions that are both functional and beautiful.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Frontend Development</h3>
                <p className="text-gray-600">Creating responsive and interactive user interfaces with modern frameworks.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">UI/UX Design</h3>
                <p className="text-gray-600">Designing intuitive and aesthetically pleasing user experiences.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance</h3>
                <p className="text-gray-600">Optimizing applications for speed and excellent user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">Experience</h2>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Frontend Developer</h3>
                    <p className="text-blue-600 font-medium">Tech Company</p>
                    <p className="text-gray-600 mt-2">
                      Developed responsive web applications using React, Next.js, and modern CSS frameworks.
                      Collaborated with design teams to implement pixel-perfect UI components.
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">2023 - Present</span>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Junior Web Developer</h3>
                    <p className="text-blue-600 font-medium">Digital Agency</p>
                    <p className="text-gray-600 mt-2">
                      Built and maintained client websites using HTML, CSS, JavaScript, and various CMS platforms.
                      Gained experience in responsive design and cross-browser compatibility.
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">2022 - 2023</span>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Freelance Developer</h3>
                    <p className="text-blue-600 font-medium">Self-Employed</p>
                    <p className="text-gray-600 mt-2">
                      Worked with various clients to create custom web solutions.
                      Specialized in small business websites and landing pages.
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">2021 - 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">Projects</h2>
            
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