import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; 
import "./style.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const form = useRef();
  const [status, setStatus] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus(""), 5000); 
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  const tabs = ["All", "Languages", "Frontend", "Backend", "Mobile", "Tools"];

  const skillCategories = {
    Languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Dart",
      "HTML5",
      "CSS",
      "JSON",
    ],
    Frontend: ["React", "Tailwind", "Bootstrap", "jQuery"],
    Backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Firestore",
      "RESTful APIs",
    ],
    Mobile: ["Flutter", "Dart", "Android"],
    Tools: ["Git", "GitHub", "Heroku", "Figma", "Adobe XD"],
  };

  const data = {
    name: "Hadil",
    role: "Full-Stack Developer",
    objective:
      "Passionate about building scalable web apps and designing backend systems. I enjoy working with modern frameworks, optimizing APIs, and testable code with long-term growth.",
    skills: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "Tailwind",
      "Bootstrap",
      "jQuery",
      "Python",
      "Firebase",
      "Firestore",
      "Flutter",
      "Dart",
      "Android",
      "Git",
      "GitHub",
      "Heroku",
      "Figma",
      "Adobe XD",
      "JSON",
      "RESTful APIs",
    ],
    projects: [
      {
        title: "Full-Stack MERN Apps",
        desc: "Built and deployed responsive web applications with dynamic RESTful API exchange.",
        link: "https://github.com/nxt-stark",
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
      },
      {
        title: "Python Automation",
        desc: "Leveraged Pyrogram library to build real-time automation tools and interactive scripts.",
        link: "#",
        tech: ["Python", "RESTful APIs", "Git"],
      },
      {
        title: "Personal Portfolio",
        desc: "High-performance React-based portfolio with optimized UI/UX for mobile and desktop.",
        link: "https://hadil-kk.netlify.app/",
        tech: ["React", "JavaScript"],
      },
    ],
  };

  const displayedSkills =
    activeTab === "All" ? data.skills : skillCategories[activeTab];

  const skillIcons = {
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Express.js": "https://img.icons8.com/office/40/express-js.png",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    HTML5:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    Tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    jQuery:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    Flutter:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    Android:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    Firebase:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    Firestore:
      "https://img.icons8.com/color/48/000000/google-firebase-console.png",
    JSON: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-plain.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Heroku:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    Figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Adobe XD":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    "RESTful APIs": "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    margin: "8px 0",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "0.95rem",
    outline: "none",
    fontFamily: "inherit",
    transition: "border 0.3s ease",
  };

  return (
    <div className="portfolio-wrapper">
      <div className="blob blob-1"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-2"></div>

      <div className="container">
        <div className="glass-card header-card">
          <div className="header-grid">
            <div className="header-visual">
              <div className="profile-img">
                <img
                  src="https://i.ibb.co/1YxMC3Jm/Screenshot-2025-12-22-111928.png"
                  alt="Hadil K K"
                />
              </div>
              <div className="location-badge">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Coimbatore, TN
              </div>
            </div>

            <div className="header-info">
              <div className="badge-row">
                <span className="info-pill">Available for Internships</span>
                <span className="info-pill blue">2nd Year UG(BE-CSE)</span>
              </div>
              <h1 className="main-title">
                <span className="new">{data.name}</span>{" "}
                <span style={{ color: "#007AFF" }}>kk</span>
              </h1>
              <div className="role-tag">{data.role}</div>
              <p className="header-objective">{data.objective}</p>

              <div className="header-stats">
                <div className="stat-item">
                  <span className="stat-label">Graduating</span>
                  <span className="stat-value">June 2028</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Main Stack</span>
                  <span className="stat-value">MERN</span>
                </div>
              </div>

              <div className="contact-links header-links">
                <a href="mailto:hadilkk63@gmail.com" className="btn primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Contact
                </a>
                <a
                  href="https://linkedin.com/in/hadil-ibrahim"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://github.com/nxt-stark"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="header-right-side">
              <div className="activity-card">
                <div className="card-header">
                  <div className="dots">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                  </div>
                  <span className="card-title">current_focus.js</span>
                </div>
                <div className="card-content">
                  <code>
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-var">goal</span> ={" "}
                    <span className="code-string">"Internship @Microsoft"</span>
                    ;<br />
                    <span className="code-keyword">let</span>{" "}
                    <span className="code-var">skills</span> = [
                    <span className="code-string">"MERN"</span>,{" "}
                    <span className="code-string">"Python"</span>];
                    <br />
                    <span className="code-comment">
                      // Building scalable solutions...
                    </span>
                    <br />
                    <span className="code-var">status</span>:{" "}
                    <span className="code-string">"Coding 🚀"</span>
                  </code>
                </div>
              </div>

              <div className="stack-preview">
                <p>Primary Ecosystem</p>
                <div className="mini-stack-grid">
                  {[
                    "MongoDB",
                    "Express.js",
                    "React",
                    "Node.js",
                    "Flutter",
                    "Android",
                    "Python",
                  ].map((s) => (
                    <div key={s} className="stack-dot" title={s}>
                      <img
                        src={skillIcons[s]}
                        alt={s}
                        width={18}
                        height={18}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="glass-card">
          <h2
            className="section-title"
            style={{ fontWeight: "700", marginBottom: "20px" }}
          >
            Technical Skills
          </h2>

          <div
            className="tabs-container"
            style={{
              marginBottom: "20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              paddingBottom: "0px",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "0 0 10px 0",
                  background: "transparent",
                  border: "none",
                  borderBottom:
                    activeTab === tab
                      ? "2px solid #007AFF"
                      : "2px solid transparent",
                  borderRadius: "0",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontFamily: "Unbounded, sans-serif",
                  fontWeight: activeTab === tab ? "600" : "400",
                  color:
                    activeTab === tab ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                  transition: "all 0.3s ease",
                  outline: "none",
                  boxShadow: "none",
                  marginBottom: "-1px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="skills-container">
            {displayedSkills.map((skill) => (
              <span key={skill} className="skill-tag">
                <span className="skill-icon">
                  {skillIcons[skill] ? (
                    <img
                      src={skillIcons[skill]}
                      alt={skill}
                      width={18}
                      height={18}
                      loading="lazy"
                    />
                  ) : (
                    "⚡"
                  )}
                </span>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div
          className="section-title"
          style={{ fontWeight: "700", marginBottom: "20px" }}
        >
          <h2>Projects</h2>
        </div>
        <div className="grid">
          {data.projects.map((proj, i) => (
            <div key={i} className="project-card">
              <h3 style={{ marginTop: 0, marginBottom: "10px" }}>
                {proj.title}
              </h3>
              <div className="project-tech-stack">
                {proj.tech.map((t) => (
                  <div key={t} className="mini-icon" title={t}>
                    {skillIcons[t] ? (
                      <img
                        src={skillIcons[t]}
                        alt={t}
                        width={16}
                        height={16}
                        loading="lazy"
                      />
                    ) : (
                      "⚡"
                    )}
                  </div>
                ))}
              </div>
              <p
                style={{
                  color: "var(--text-dim)",
                  fontSize: "0.9rem",
                  marginBottom: "20px",
                }}
              >
                {proj.desc}
              </p>
              <a href={proj.link} className="project-link">
                View Project <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* EDUCATION SECTION */}
        <div className="glass-card down" style={{ marginTop: "30px" }}>
          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            Education
          </h2>
          <div
            style={{
              borderLeft: "2px solid #007AFF",
              paddingLeft: "20px",
            }}
          >
            <h4 style={{ margin: "0 0 5px 0" }}>
              Kalaignar Karunanidhi Institute of Technology
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                color: "var(--text-dim)",
              }}
            >
              BE in Computer Science (Expected 2028)
            </p>

            <h4 style={{ margin: "20px 0 5px 0" }}>
              Majlis Polytechnic College
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                color: "var(--text-dim)",
              }}
            >
              Diploma in Computer Engineering (2024)
            </p>
          </div>
        </div>

        {/* --- NEW CONTACT SECTION (Using EmailJS) --- */}
        <div className="glass-card" style={{ marginTop: "30px" }}>
          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            Get In Touch
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <p style={{ color: "var(--text-dim)", textAlign: "center" }}>
              Have a question or want to work together? Drop me a message below!
            </p>

            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                style={inputStyle}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                style={inputStyle}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                style={{ ...inputStyle, resize: "vertical" }}
              />

              <button
                type="submit"
                className="btn primary"
                style={{ width: "100%", marginTop: "10px" }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message 🚀"}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <p style={{ color: "#4ade80", marginTop: "10px", textAlign: "center" }}>
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "#f87171", marginTop: "10px", textAlign: "center" }}>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
        {/* --- END NEW CONTACT SECTION --- */}

        <footer
          style={{
            textAlign: "center",
            padding: "20px 10px",
            marginTop: "20px",
            color: "#555",
            fontSize: "0.8rem",
          }}
        >
          Portfolio Designed by Hadil K K • 2025
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;