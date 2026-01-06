import {
  BrowserRouter,
  Link,
  NavLink, 
  Route,
  Routes,
} from "react-router-dom";
import Portfolio from "./pages/portfolio"; 


function Navigation() {
  return (
    <nav className="portfolio-header">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="linear">Hadil</span>
          <span>kk</span>
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
        </ul>

        <div className="nav-cta">
          <a href="mailto:hadilkk63@gmail.com" className="contact-btn">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap"
        rel="stylesheet"
      />
      

      <BrowserRouter>
        <Navigation />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </div>
      </BrowserRouter>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: #050505; 
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          cursor: none; /* OPTIONAL: Hides the default arrow cursor for full immersion */
        }
        
        /* If you hide the cursor above, make sure links still show a pointer or style the butterfly */
        a, button {
           cursor: pointer; 
        }

        /* ... REST OF YOUR CSS ... */
        
        /* --- PORTFOLIO HEADER --- */
        .portfolio-header {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          height: 70px; /* Increased height slightly for better fit */
          z-index: 1000;
          font-family: 'Unbounded', sans-serif;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          display: flex;
          align-items: center;
          padding: 0 30px;
        }

        .linear {
          color: white;
          background: linear-gradient(180deg, #FFFFFF 30%, #a1a1aada 90%) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          color: transparent !important;
        }

        .nav-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 1.4rem;
          font-weight: 800;
          text-decoration: none;
          color: #fff;
          letter-spacing: -1px;
        }

        .nav-logo span {
          color: #007AFF;
          margin-left: 5px;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .nav-links a {
          text-decoration: none;
          color: #a1a1a1;
          font-size: 0.95rem;
          font-weight: 500;
          transition: 0.3s ease;
        }

        .nav-links a:hover, .nav-links a.active {
          color: #fff;
        }

        .contact-btn {
          background: #fff;
          color: #000;
          padding: 10px 20px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          background: #007AFF;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 122, 255, 0.4);
        }

        .page-content {
          padding-top: 120px; 
          min-height: 100vh;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .portfolio-header { width: 95%; padding: 0 20px; }
          .nav-logo { font-size: 1.1rem; }
        }
      `}</style>
    </>
  );
}

export default App;