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
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>mail_fill</title>{" "}
                      <g
                        id="页面-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Contact"
                          transform="translate(-144.000000, -48.000000)"
                          fill-rule="nonzero"
                        >
                          {" "}
                          <g
                            id="mail_fill"
                            transform="translate(144.000000, 48.000000)"
                          >
                            {" "}
                            <path
                              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                              id="MingCute"
                              fill-rule="nonzero"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M2.06773,5.48201 L10.9435,14.3578 C11.4926875,14.9069875 12.3617969,14.9413117 12.9508922,14.4607727 L13.0648,14.3578 L21.934,5.48861 C21.9627333,5.59743667 21.9824889,5.70988556 21.9924667,5.82513296 L22,6 L22,18 C22,19.0543909 21.18415,19.9181678 20.1492661,19.9945144 L20,20 L4,20 C2.94563773,20 2.08183483,19.18415 2.00548573,18.1492661 L2,18 L2,6 C2,5.88057333 2.01046667,5.76359111 2.03053481,5.64992148 L2.06773,5.48201 Z M20,4 C20.1210667,4 20.2396,4.01075111 20.3547111,4.03135259 L20.5247,4.06953 L12.0042,12.59 L3.48191,4.06776 C3.59207,4.03829333 3.70597667,4.018 3.82276481,4.00774519 L4,4 L20,4 Z"
                              id="形状"
                              fill="#ffffff"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
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
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>linkedin_fill</title>{" "}
                      <g
                        id="页面-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Brand"
                          transform="translate(-336.000000, -48.000000)"
                        >
                          {" "}
                          <g
                            id="linkedin_fill"
                            transform="translate(336.000000, 48.000000)"
                          >
                            {" "}
                            <path
                              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                              id="MingCute"
                              fill-rule="nonzero"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M18,3 C19.6569,3 21,4.34315 21,6 L21,18 C21,19.6569 19.6569,21 18,21 L6,21 C4.34315,21 3,19.6569 3,18 L3,6 C3,4.34315 4.34315,3 6,3 L18,3 Z M8,10 C7.44772,10 7,10.4477 7,11 L7,16 C7,16.5523 7.44772,17 8,17 C8.55228,17 9,16.5523 9,16 L9,11 C9,10.4477 8.55228,10 8,10 Z M11,9 C10.4477,9 10,9.44772 10,10 L10,16 C10,16.5523 10.4477,17 11,17 C11.5523,17 12,16.5523 12,16 L12,12.3398 C12.3049,11.9955 12.8207,11.5921 13.3933,11.3472 C13.7261,11.2048 14.2268,11.1479 14.5751,11.2574 C14.7274,11.3053 14.8143,11.3726 14.868,11.4451 C14.9201,11.5157 15,11.6707 15,12 L15,16 C15,16.5522 15.4477,17 16,17 C16.5523,17 17,16.5522 17,16 L17,12 C17,11.3292 16.8298,10.7342 16.4758,10.2556 C16.1232,9.77907 15.6476,9.4981 15.1749,9.34949 C14.2732,9.06594 13.2739,9.22295 12.6067,9.50837 C12.395,9.59892 12.1863,9.70435 11.9841,9.82128 C11.8998,9.35427 11.4913,9 11,9 Z M8,7 C7.44772,7 7,7.44772 7,8 C7,8.55228 7.44772,9 8,9 C8.55228,9 9,8.55228 9,8 C9,7.44772 8.55228,7 8,7 Z"
                              id="形状"
                              fill="#ffffff"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </a>
                <a
                  href="https://github.com/hadileey"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>github_fill</title>{" "}
                      <g
                        id="页面-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Logo"
                          transform="translate(-144.000000, -144.000000)"
                          fill-rule="nonzero"
                        >
                          {" "}
                          <g
                            id="github_fill"
                            transform="translate(144.000000, 144.000000)"
                          >
                            {" "}
                            <path
                              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                              id="MingCute"
                              fill-rule="nonzero"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M7.0236,2.31058 C7.64222,2.52096 8.40745,2.85626 9.14865,3.35611 C10.0469,3.12454 11.0061,3 12.0001,3 C12.993,3 13.9513,3.12429 14.8488,3.35541 C15.5898,2.85581 16.3549,2.52068 16.9733,2.31041 C17.6702,2.07347 18.6635,1.68873 19.2532,2.34204 C19.6536,2.78558 19.7529,3.52998 19.8243,4.09751 C19.9041,4.7317 19.9227,5.55836 19.7128,6.37797 C20.5157,7.41477 21.0001,8.65244 21.0001,10 C21.0001,12.0422 19.894,13.8148 18.2569,15.0426 C17.5034,15.6077 16.6274,16.0673 15.6667,16.3988 C15.8811,16.8891 16.0001,17.4307 16.0001,18 L16.0001,21 C16.0001,21.5523 15.5523,22 15.0001,22 L9.00005,22 C8.44777,22 8.00005,21.5523 8.00005,21 L8.00005,20.0087 C7.04473,20.1257 6.24413,20.0222 5.5626,19.7331 C4.85081,19.4311 4.35469,18.9627 3.98181,18.5152 C3.62811,18.0908 3.2425,17.1349 2.6838,16.9487 C2.15986,16.774 1.8767,16.2077 2.05134,15.6838 C2.22599,15.1598 2.79231,14.8767 3.31625,15.0513 C3.98203,15.2732 4.41554,15.7534 4.71319,16.1386 C5.19225,16.7585 5.58364,17.5695 6.3437,17.8919 C6.65626,18.0245 7.11546,18.1125 7.8323,18.0137 L8.0001,17.9802 C8.00283,17.4181 8.12149,16.8834 8.33341,16.3988 C7.37273,16.0673 6.49666,15.6077 5.7432,15.0426 C4.10606,13.8148 3.00005,12.0422 3.00005,10 C3.00005,8.65402 3.48329,7.41765 4.28448,6.38159 C4.07379,5.56134 4.09217,4.73379 4.17192,4.09897 C4.17352,4.08622 4.17512,4.07342 4.17673,4.06057 C4.24961,3.47909 4.33549,2.79383 4.74307,2.34215 C5.33266,1.6888 6.32676,2.07361 7.0236,2.31058 Z"
                              id="路径"
                              fill="#ffffff"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/hadileey"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </a>
                <a
                  href="https://t.me/Nxtstark"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>telegram_fill</title>{" "}
                      <g
                        id="页面-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Brand"
                          transform="translate(-672.000000, -48.000000)"
                        >
                          {" "}
                          <g
                            id="telegram_fill"
                            transform="translate(672.000000, 48.000000)"
                          >
                            {" "}
                            <path
                              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                              id="MingCute"
                              fill-rule="nonzero"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M19.7773,4.42984 C20.8652,3.97177 22.0315,4.8917 21.8394,6.05639 L19.5705,19.8131 C19.3517,21.1395 17.8949,21.9006 16.678,21.2396 C15.6597,20.6865 14.1489,19.8352 12.7873,18.9455 C12.1074,18.5012 10.0255,17.0766 10.2814,16.0625 C10.5002,15.1954 14.0001,11.9375 16.0001,10 C16.7857,9.23893 16.4279,8.79926 15.5001,9.5 C13.1985,11.2383 9.50332,13.8812 8.28136,14.625 C7.20323,15.2812 6.64031,15.3932 5.96886,15.2812 C4.74273,15.0769 3.60596,14.7605 2.67788,14.3758 C1.42351,13.8558 1.48461,12.132 2.67703,11.63 L19.7773,4.42984 Z"
                              id="路径"
                              fill="#ffffff"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
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
              <div className="stack-preview">
                <p>Resume</p>
                <button className="btn2" onClick={() => { window.location.href = "https://drive.google.com/uc?export=download&id=1usJKcDkJWIS-nrIvoFrv1B3RsUoKLqNU"; }} >
                  Download My Resume{" "}
                  <svg
                    viewBox="0 0 24 24"
                    width={"18"}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#ffffff"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>Download-2</title>{" "}
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g id="Download-2">
                          {" "}
                          <rect
                            id="Rectangle"
                            fill-rule="nonzero"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            {" "}
                          </rect>{" "}
                          <line
                            x1="12"
                            y1="14"
                            x2="12"
                            y2="20"
                            id="Path"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                          >
                            {" "}
                          </line>{" "}
                          <path
                            d="M15,19 L12.7071,21.2929 C12.3166,21.6834 11.6834,21.6834 11.2929,21.2929 L9,19"
                            id="Path"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M19.9495,16 C20.5978,15.3647 21,14.4793 21,13.5 C21,11.567 19.433,10 17.5,10 C17.3078,10 17.1192,10.0155 16.9354,10.0453 C16.4698,6.63095 13.5422,4 10,4 C6.13401,4 3,7.13401 3,11 C3,12.9587 3.80447,14.7295 5.10102,16"
                            id="Path"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

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
              <a href="/projects" className="project-link">
                View Project <span>→</span>
              </a>
            </div>
          ))}
        </div>

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

        <div
          className="glass-card"
          style={{ marginTop: "30px", padding: "40px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "50px",
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                height: "100%",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <h2
                    className="section-title"
                    style={{ margin: 0, textAlign: "left", fontSize: "1.8rem" }}
                  >
                    Get In Touch
                  </h2>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        width: "10px",
                        height: "10px",
                        background: "#34C759",
                        borderRadius: "50%",
                        opacity: "0.7",
                        animation:
                          "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                      }}
                    ></span>
                    <span
                      style={{
                        position: "relative",
                        width: "10px",
                        height: "10px",
                        background: "#34C759",
                        borderRadius: "50%",
                      }}
                    ></span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "#34C759",
                      fontWeight: "600",
                      letterSpacing: "0.5px",
                      background: "rgba(52, 199, 89, 0.1)",
                      padding: "4px 8px",
                      borderRadius: "12px",
                    }}
                  >
                    AVAILABLE
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--text-dim)",
                    lineHeight: "1.6",
                    fontSize: "1rem",
                    margin: 0,
                  }}
                >
                  I’m currently looking for new opportunities and
                  collaborations. Whether you have a question about my stack,
                  want to build a bot, or just want to say hi, I'll try my best
                  to get back to you!
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px", 
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "rgba(0, 122, 255, 0.1)",
                      borderRadius: "12px", 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#007AFF",
                      border: "1px solid rgba(0, 122, 255, 0.2)",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        color: "#888",
                        marginBottom: "2px",
                      }}
                    >
                      Email Me
                    </span>
                    <a
                      href="mailto:hadilkk63@gmail.com"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "1.05rem",
                      }}
                    >
                      hadilkk63@gmail.com
                    </a>
                  </div>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "rgba(52, 199, 89, 0.1)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#34C759",
                      border: "1px solid rgba(52, 199, 89, 0.2)",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        color: "#888",
                        marginBottom: "2px",
                      }}
                    >
                      Location
                    </span>
                    <span
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "1.05rem",
                      }}
                    >
                      Coimbatore, TN{" "}
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-dim)",
                          fontWeight: "400",
                        }}
                      >
                        (IST)
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "#888",
                    marginBottom: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  I can help you with
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {["MERN Stack", "Telegram Bots", "UI Design", "React"].map(
                    (tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.8rem",
                          padding: "8px 16px",
                          borderRadius: "8px",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#e2e2e2",
                        }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(255,255,255,0.1)",
                }}
              ></div>

              <div style={{ marginTop: "auto" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "#888",
                    marginBottom: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Connect with me
                </span>
                <div style={{ display: "flex", gap: "15px" }}>
                  <a
                    href="https://github.com/hadileey"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    style={{
                      padding: "10px",
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/hadil-ibrahim"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    style={{
                      padding: "10px",
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/Nxtstark"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    style={{
                      padding: "10px",
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.944 0c-6.597 0-11.944 5.347-11.944 11.944 0 6.597 5.347 11.944 11.944 11.944 6.597 0 11.944-5.347 11.944-11.944 0-6.597-5.347-11.944-11.944-11.944zm6.862 8.327c-.453 4.542-1.501 10.375-2.023 12.423-.385 1.508-1.514 1.258-2.231.841-3.669-2.127-5.934-3.804-5.934-3.804s-.484-.461-.137-1.22c.119-.261 4.545-4.453 4.706-4.908.016-.046.032-.215-.229-.161-.261.054-4.832 3.197-5.18 3.428-.49.323-1.428.6-2.046.4-1.031-.338-1.631-.631-1.631-.631s-.754-.461.461-1.077c4.662-2.369 9.877-4.477 12.292-5.461 1.092-.446 2.062.061 1.953 1.17z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/hadileey"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    style={{
                      padding: "10px",
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(0,0,0,0.2)",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div>
                  <label
                    style={{
                      fontSize: "0.85rem",
                      color: "#888",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: "0.85rem",
                      color: "#888",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: "0.85rem",
                      color: "#888",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn2 primary"
                  style={{
                    width: "100%",
                    padding: "14px",
                    fontSize: "1rem",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ marginLeft: "8px" }}
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div
                    style={{
                      padding: "10px",
                      background: "rgba(74, 222, 128, 0.1)",
                      border: "1px solid #4ade80",
                      borderRadius: "8px",
                      color: "#4ade80",
                      textAlign: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    Message sent successfully!
                  </div>
                )}
                {status === "error" && (
                  <div
                    style={{
                      padding: "10px",
                      background: "rgba(248, 113, 113, 0.1)",
                      border: "1px solid #f87171",
                      borderRadius: "8px",
                      color: "#f87171",
                      textAlign: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    Failed to send. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

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
