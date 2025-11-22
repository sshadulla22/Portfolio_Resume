import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Database,
  Palette,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Download,
  ChevronDown,
} from "lucide-react";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
     {
      title: "SelfDev Learning Platform",
      description:
        "Self-learning platform offering coding resources, interview prep tools, and productivity utilities.",
      tech: ["React.js", "JavaScript", "Vercel"],
      link: "https://self-dev-learning-platform.vercel.app/",
      gradient: "from-yellow-500 to-amber-600",
    },
    {
      title: "TooConvert.in",
      description:
        "React-based platform for file conversion and utilities like PDF, image, QR, and JSON tools.",
      tech: ["React.js", "FastAPI", "Python"],
      link: "https://tooconvert.in/",
      gradient: "from-blue-600 to-cyan-500",
    },
    
    {
      title: "MammoCare",
      description:
        "AI-driven mammogram software for deblurring, pectoral removal, and 3D/4D tumor visualization. Click to view the live app.",
      tech: ["Python", "Streamlit", "aiXplain"],
      link: "",
      gradient: "from-purple-600 to-pink-500",
     
    },
    {
      title: "Envee Wheeels",
      description:
        "Full website design and deployment for BULL 007 bike launch with brand management.",
      tech: ["Node.js", "SQL", "cPanel", "Figma"],
      link: "https://envee-intern.netlify.app/",
      gradient: "from-orange-600 to-red-500",
    },
    {
      title: "Email Reply Generator",
      description:
        "AI-powered email assistant that generates context-aware replies using GPT, built with React, Node.js, Express, and a Chrome extension.",
      tech: [
        "React.js",
        "Node.js",
        "Express",
        "REST API",
        "JavaScript",
        "Python",
        "Chrome Extension",
      ],
      link: "https://email-rg-frontend.onrender.com/",
      gradient: "from-green-600 to-emerald-500",
    },
 
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/80 backdrop-blur-xl -sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div className="font-semibold text-xl tracking-tight">Shadulla</div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="#about" className="hover:text-gray-600 transition">
                About
              </a>
              <a href="#projects" className="hover:text-gray-600 transition">
                Projects
              </a>
              <a href="#experience" className="hover:text-gray-600 transition">
                Experience
              </a>
              <a href="#contact" className="hover:text-gray-600 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

     {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-12 relative overflow-hidden  from-white via-gray-50 to-white">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:29px_29px]"></div>
          
          {/* Floating Orbs */}
          
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Profile Badge */}
         <div className="inline-block mb-6 relative group">
  {/* Glow background */}
  <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>

  {/* Image container */}
  <div className="relative rounded-full w-28 h-28 mx-auto flex items-center justify-center -2xl transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
    <img
      className="w-full h-full object-cover rounded-full"
      src="https://image2url.com/images/1763819136239-150457ff-cd58-428e-a5a7-46b18be439fc.jpg"
      alt="Profile"
    />
  </div>
</div>


          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight leading-none">
              <span className="bg-gradient-to-r from-gray-800 via-[black] to-[black] bg-clip-text text-transparent">
                Shadulla Shaikh
              </span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-black via-[black] to-[black] rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-3xl md:text-4xl text-gray-700 font-light tracking-wide">
            Computer Science & Engineering
          </p>

          {/* Description with Tags */}
          <div className="space-y-4">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building innovative solutions with AI and design
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 rounded-full text-sm font-semibold">
                🏆 Hackathon Winner
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-semibold">
                📚 Published Researcher
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold">
                💻 Full Stack Developer
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-1">
            <a
              href="https://www.linkedin.com/in/shadulla-shaikh-2a3354231/"
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all text-base font-semibold -lg hover:-xl hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="https://github.com/sshadulla22"
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all text-base font-semibold -lg hover:-xl hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="mailto:sshadulla22@gmail.com"
              className="group relative px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all text-base font-semibold -lg hover:-xl hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get in touch
              </span>
              
            </a>

             {/* <a
              href="https://www.linkedin.com/in/shadulla-shaikh-2a3354231/"
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all text-base font-semibold -lg hover:-xl hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a> */}
            
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12">
            <div className="text-center">
              {/* <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div> */}
              {/* <div className="text-sm text-gray-600 mt-1">Projects</div> */}
            </div>
            <div className="text-center">
              {/* <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1st</div> */}
              {/* <div className="text-sm text-gray-600 mt-1">Rank Winner</div> */}
            </div>
            <div className="text-center">
              {/* <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">3+</div> */}
              {/* <div className="text-sm text-gray-600 mt-1">Leadership Roles</div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#ACDBED]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold mb-12 text-center">
            About
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-start font-light">
            I am a Computer Science & Engineering passionate about web
            development, AI-driven solutions, and design innovation. With
            experience in real-world projects, hackathon-winning applications,
            and technical leadership, I aim to leverage technology for impactful
            problem-solving.
          </p>
        </div>
      </section>

        {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold mb-20 text-center">Experience</h2>
          <div className="space-y-16">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold">Web Developer & Graphic Designer</h3>
              <p className="text-xl text-gray-600">Envee Wheeels Pvt. Ltd. · Remote</p>
              <p className="text-lg text-gray-500">Aug 2023 – Nov 2023</p>
              <ul className="space-y-3 text-lg text-gray-600 mt-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Designed and deployed a website for the launch of BULL 007 bike</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Managed brand presence across Instagram, Facebook, LinkedIn, and X</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Tech Stack: Node.js, SQL, cPanel, Figma, Canva</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 px-4 bg-black text-white">
        <div className="max-w-8xl  mx-auto">
          <h2 className="text-5xl md:text-6xl  font-semibold mb-10 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="space-y-6">
                  <div className="aspect-video -2xl overflow-hidden bg-gray-900 -2xl ">
                    <div className="w-full max-w-5xl mx-auto -xl bg-[#f1f1f1] -2xl overflow-hidden">
                      {/* Chrome top bar */}
                      <div className="bg-[#e0e0e0] h-10 flex items-center px-4 gap-3">
                        {/* Traffic lights */}
                        <div className="flex gap-2">
                          <div className="w-3 h-3 -full bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 -full bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 -full bg-green-500 rounded-full"></div>
                        </div>

                        {/* URL bar */}
                        <div className="flex-1  bg-white -md h-6 flex items-center px-3 text-gray-500 text-sm">
                          {project.link}
                        </div>
                      </div>

                      {/* Website preview (iframe) */}
                      <div className="aspect-[16/10] bg-white">
                        <iframe
                          src={project.link}
                          className="w-full h-full border-0"
                          loading="lazy"
                          title={project.title}
                          sandbox="allow-scripts allow-same-origin"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/20 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition group/link"
                    >
                      <span>View project</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* Skills Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold mb-20 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Programming", items: ["C","Python", "JavaScript"] },
              { title: "Web Development", items: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind"] },
              { title: "Database & Others", items: ["SQL","Git/GitHub"] },
              { title: "Design & Modeling", items: ["Figma", "Canva", "Blender", "UE5"] },
              {title:"Deployment", items: ["Vercel","Render","Netlify","cPanel"]}
            ].map((skill, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-lg text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Achievements & Publications Section */}
<section className="py-32 px-6 bg-[#ACDBED]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl md:text-6xl font-semibold mb-20 text-center">Achievements & Publications</h2>
    <div className="grid md:grid-cols-2 gap-12">
      
      {/* Achievements */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Achievements</h3>
        <ul className="space-y-2 list-disc list-inside text-gray-600 text-lg">
          <li>
            <span className="font-medium">1st Rank - AiCodex Hackathon:</span> Secured 1st Rank out of 200+ teams in the AiCodex Hackathon, organized by aixplain (2024-25)
          </li>
        </ul>
      </div>

      {/* Research Publications */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Research Publication</h3>
        <ul className="space-y-2 list-disc list-inside text-gray-600 text-lg">
          <li>
            <span className="font-medium">Mammogram Image Deblurring, Pectoral Removal, and Tumor Visualization:</span> Published for Radiologists and Patients with AI-Powered Assistance in the Proceedings of MULTINOVA: The First International Conference on Artificial Intelligence in Engineering, Healthcare, and Sciences (ICAIEHS-2025), Atlantis Press, 2025.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>


      

     

      {/* Education & Leadership */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-semibold mb-12">Education</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    AI's Kalsekar Technical Campus
                  </h3>
                  <p className="text-lg text-gray-600">
                    Computer Science & Engineering
                  </p>
                  <p className="text-gray-500">2021–2025 · CGPI: 7.82</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    M.H. Saboo Siddik College
                  </h3>
                  <p className="text-lg text-gray-600">12th Board | Science</p>
                  <p className="text-gray-500">2020–2021 · 74%</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-semibold mb-12">Leadership</h2>
              <div className="space-y-6">
                {[
                  {
                    role: "Student Coordinator",
                    org: "Programmers Club, AIKTC",
                    year: "2024–25",
                  },
                  {
                    role: "Technical Secretary",
                    org: "AIKTC School Of Engineering",
                    year: "2023–24",
                  },
                  {
                    role: "Technical Strategy Assistant",
                    org: "Google Developer Student Club",
                    year: "2022–23",
                  },
                ].map((position, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold">{position.role}</h3>
                    <p className="text-gray-600">{position.org}</p>
                    <p className="text-sm text-gray-500">{position.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-semibold">Get in touch</h2>
          <p className="text-xl text-gray-400">
            Let's build something amazing together
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <a
              href="mailto:sshadulla22@gmail.com"
              className="flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 -full hover:bg-gray-100 transition font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>sshadulla22@gmail.com</span>
            </a>
            <a
              href="tel:+919833755209"
              className="px-8 py-4 border-2 border-white -full hover:bg-white hover:text-gray-900 transition font-medium"
            >
              +91-9833755209
            </a>
          </div>
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://www.linkedin.com/in/shadulla-shaikh-2a3354231/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/sshadulla22"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center text-gray-500 border-t border-gray-800">
        <p>© 2025 Shadulla Shaikh</p>
      </footer>
    </div>
  );
}
