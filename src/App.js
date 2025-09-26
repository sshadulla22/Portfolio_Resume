import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from './assets/Shadulla_resume_.pdf';
import {
  faPhone,
  faEnvelope,
  faExternalLinkAlt,
  faDatabase,
  faLaptopCode,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faReact } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="container">
      {/* Sidebar */}
    <aside className="sidebar">
  <h2>Shadulla Shaikh</h2>
  <h3 style={{marginTop:"-20px"}}>Computer Science & Engineering</h3>
  <p>
    <strong>AI’s Kalsekar Technical Campus</strong>
    <br /> Navi Mumbai
  </p>
  <p><FontAwesomeIcon icon={faPhone} /> +91-9833755209</p>
  <p>
    <FontAwesomeIcon icon={faEnvelope} />{" "}
    <a href="mailto:sshadulla22@gmail.com">sshadulla22@gmail.com</a>
  </p>
  <p>
    <FontAwesomeIcon icon={faLinkedin} />{" "}
    <a
      href="https://www.linkedin.com/in/shadulla-shaikh-2a3354231/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>
    <br />
    <FontAwesomeIcon icon={faGithub} />{" "}
    <a
      href="https://github.com/sshadulla22"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  </p>

  <br />

  {/* About */}
  <section>
    <h2 className="section-title">About Me</h2>
    <p>
      I am a Computer Engineering student passionate about web development,
      AI-driven solutions, and design innovation. With experience in
      real-world projects, hackathon-winning applications, and technical
      leadership, I aim to leverage technology for impactful
      problem-solving.
    </p>

    {/* Resume Button */}
    <div className="button" style={{marginTop: "15px"}}>
  <a href={Resume} download="Shadulla_Shaikh_Resume.pdf" rel="noreferrer">
    📄 Download Resume
  </a>
</div>
  </section>
</aside>


      {/* Main Content */}
      <main className="main">

        {/* Experience + Skills */}
        <div className="exp-skills">

          {/* Experience */}
          <section>
            <h2 className="section-title">Experience</h2>
            <h3 style={{ marginTop: "-17px",paddingTop:"8px" }}>Web Developer & Graphic Designer – Remote</h3>
            <p style={{ marginTop: "-10px" }}>
              Envee Wheeels Pvt. Ltd. (Aug 2023 – Nov 2023)
            </p>
            <ul className="ul-excp">
              <li>Designed and deployed a website for the launch of BULL 007 bike.</li>
              <li>Managed brand presence across Instagram, Facebook, LinkedIn, and X.</li>
              <li><strong>Tech Stack:</strong> Node.js, SQL, cPanel, Figma, Canva</li>
            </ul>
            <div className="button">
              <FontAwesomeIcon icon={faExternalLinkAlt} />{" "}
              <a
                href="https://envee-intern.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </section>

          {/* Skills */}
          <section className="skills">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-box">
                <FontAwesomeIcon icon={faLaptopCode} /> <strong>Programming:</strong>
                <p>Python, JavaScript</p>
              </div>
              <div className="skill-box">
                <FontAwesomeIcon icon={faReact} /> <strong>Web Development:</strong>
                <p>React.js, HTML, CSS, Bootstrap, Tailwind CSS</p>
              </div>
              <div className="skill-box">
                <FontAwesomeIcon icon={faDatabase} /> <strong>Database:</strong>
                <p>SQL</p>
              </div>
              <div className="skill-box">
                <FontAwesomeIcon icon={faPaintBrush} /> <strong>Design & Modeling:</strong>
                <p>Figma, Canva, Blender, UE5</p>
              </div>
              <div className="skill-box">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> <strong>Deployment:</strong>
                <p>Hostinger, GoDaddy (cPanel), Render, Netlify, Versel</p>
              </div>
            </div>
          </section>
        </div>

        {/* Projects */}
        <section>
          <h2 className="section-title">Key Projects</h2>
          <div className="projects">
            <div className="project-card">
              <h3>TooConvert.in</h3>
              <p>
                React-based platform for file conversion and utilities like PDF,
                image, QR, and JSON tools.
              </p>
              <p><strong>Tech Stack:</strong> React.js, FastAPI, Python</p>
              <a
                href="https://tooconvert.in/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Live
              </a>
            </div>
            <div className="project-card">
              <h3>MammoCare</h3>
              <p>
                AI-driven mammogram software for deblurring, pectoral removal,
                and 3D/4D tumor visualization.
              </p>
              <p><strong>Tech Stack:</strong> Python, Streamlit, aiXplain</p>
              <a
                href="https://github.com/sshadulla22/MammoCareV3"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Courses & Certifications */}
        <section className="extra-section">
          <h2 className="section-title">Courses & Certifications</h2>
          <div className="grid-box">
            <div className="card">
              <p>
                <strong>QSpider/JSpider/PSpider:</strong> Web Technologies, React.js,
                Python, SQL, Manual Testing
              </p>
            </div>
            <div className="card">
              <p><strong>ExcelR:</strong> Fundamentals of Full Stack Development</p>
            </div>
          </div>
        </section>

        {/* Achievements & Awards */}
        <section className="extra-section">
          <h2 className="section-title">Achievements & Awards</h2>
          <ul className="list">
            <li>
              Secured <strong>1st Rank</strong> out of 200+ teams in AiCodex Intercollegiate Hackathon,
              sponsored by <em>aixplain</em> and organized by M.H. Saboo Siddik College of Engineering, Mumbai (2024–25).
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="extra-section">
          <h2 className="section-title">Education</h2>
          <div className="grid-box">
            <div className="card">
              <p><strong>AI’s Kalsekar Technical Campus, Navi Mumbai</strong></p>
              <p>Computer Science & Engineering (2021–2025)</p>
              <p>CGPI – 7.82</p>
            </div>
            <div className="card">
              <p><strong>M.H. Saboo Siddik College of Engineering, Mumbai</strong></p>
              <p>12th Board | Science (2020–2021)</p>
              <p>Marks – 74%</p>
            </div>
          </div>
        </section>
  {/* Positions of Responsibility */}
        <section className="extra-section">
          <h2 className="section-title">Positions of Responsibility</h2>
          <ul className="list">
            <li>Student Coordinator at Programmers Club, AIKTC (2024–25)</li>
            <li>Technical Secretary at AIKTC School Of Engineering & Technology (2023–24)</li>
            <li>Technical Strategy Assistant at Google Developer Student Club, AIKTC (2022–23)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
