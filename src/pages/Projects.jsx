import React, { useState } from "react";
import "./style.css";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Full Stack", "Frontend", "Automation", "C/C++"];

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
    HTML5:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "C++":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    Flutter:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  };

  const projectsData = [
    {
      title: "eCampus Frontend",
      desc: "A modern React-based LMS frontend for KIT eCampus. Features role-based access, student dashboards, and intuitive course navigation.",
      link: "https://github.com/hadileey/eCampus-frontend",
      github: "https://github.com/hadileey/eCampus-frontend",
      tech: ["React", "Vite", "Tailwind", "JavaScript"],
      category: "Full Stack",
    },
    {
      title: "Spare Parts Management",
      desc: "Full-stack inventory system for tracking spare parts, managing stock levels, and automated backend documentation.",
      link: "https://github.com/hadileey/Spare-parts",
      github: "https://github.com/hadileey/Spare-parts",
      tech: ["JavaScript", "Node.js", "Express.js"],
      category: "Full Stack",
    },

    {
      title: "Airbnb Clone UI",
      desc: "A pixel-perfect responsive replica of the Airbnb interface, focusing on modern CSS grid layouts and clean UI design.",
      link: "https://github.com/hadileey/Airbnb-Clone",
      github: "https://github.com/hadileey/Airbnb-Clone",
      tech: ["HTML5", "CSS", "JavaScript"],
      category: "Frontend",
    },
    {
      title: "Personal Portfolio",
      desc: "My official developer portfolio built with React, showcasing my projects, skills, and resume with a glassmorphism design.",
      link: "https://hadil-kk.netlify.app/",
      github: "https://github.com/hadileey/hadileey", 
      tech: ["React", "CSS", "JavaScript"],
      category: "Frontend",
    },

    {
      title: "Auto Filter Bot V2",
      desc: "A powerful Telegram automation bot script capable of filtering files, managing group members, and handling auto-replies.",
      link: "https://github.com/hadileey?tab=repositories",
      github: "https://github.com/hadileey",
      tech: ["Python", "Git"],
      category: "Automation",
    },

    {
      title: "Gym Management System",
      desc: "A robust console-based application built with C++ using OOP principles to manage members, memberships, and payments.",
      link: "https://github.com/hadileey/Gym-Management",
      github: "https://github.com/hadileey/Gym-Management",
      tech: ["C++"],
      category: "C/C++",
    },
    {
      title: "Student Grade Tracker",
      desc: "Efficient C program for calculating and tracking student grades, featuring data persistence and statistical analysis.",
      link: "https://github.com/hadileey/Student-Grade-Traker",
      github: "https://github.com/hadileey/Student-Grade-Traker",
      tech: ["C"],
      category: "C/C++",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="portfolio-wrapper">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-1"></div>

      <div className="container">
        <div className="glass-card">
          <div className="hvg"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <h1
                className="main-title"
                style={{ fontSize: "2.5rem", marginBottom: "10px" }}
              >
                <span className="new">Open Source</span>{" "}
                <span style={{ color: "#007AFF" }}>Projects</span>
              </h1>
              <p style={{ color: "var(--text-dim)", fontSize: "14px" }}>
                A collection of my work in <b>Full Stack</b>, <b>Automation</b>,
                and <b>System Programming</b>.
              </p>
            </div>

            <a
              href="https://github.com/hadileey"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Visit GitHub
            </a>
          </div>
        </div>

        <div className="glass-card" style={{ padding: "20px 40px" }}>
          <div
            className="tabs-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              borderBottom: "none",
              paddingBottom: "0",
              justifyContent: "center",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "10px 0",
                  background: "transparent",
                  border: "none",
                  borderBottom:
                    activeCategory === cat
                      ? "2px solid #007AFF"
                      : "2px solid transparent",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontFamily: "Unbounded, sans-serif",
                  fontWeight: activeCategory === cat ? "600" : "400",
                  color:
                    activeCategory === cat
                      ? "#ffffff"
                      : "rgba(255, 255, 255, 0.5)",
                  transition: "all 0.3s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid" style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
          }}>
          {filteredProjects.map((proj, i) => (
            <div
              key={i}
              className="project-card"
              style={{ minHeight: "280px" }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "10px",
                  }}
                >
                  <h3
                    style={{ margin: 0, fontSize: "1.2rem", lineHeight: "1.4" }}
                  >
                    {proj.title}
                  </h3>
                  <span
                    className="info-pill"
                    style={{ fontSize: "0.6rem", whiteSpace: "nowrap" }}
                  >
                    {proj.category}
                  </span>
                </div>

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
                    lineHeight: "1.6",
                  }}
                >
                  {proj.desc}
                </p>
              </div>

              <div
                className="project-actions"
                style={{ display: "flex", gap: "15px", marginTop: "auto" }}
              >
                <a
                  href={proj.link}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a
                  href={proj.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  GitHub
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer
          style={{
            textAlign: "center",
            padding: "40px 10px",
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

export default Projects;
