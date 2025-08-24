import { useState, useEffect } from "react";
import { FaInstagram, FaTiktok, FaGithub, FaLinkedin } from "react-icons/fa"; 
import './App.css';

function App() {
  // Dark mode as default
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    document.body.style.backgroundColor = theme === "light" ? "white" : "#121212";
    document.body.style.color = theme === "light" ? "black" : "white";
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Icon colors depending on theme
  const iconColors = {
    instagram: theme === "light" ? "#E4405F" : "white",
    tiktok: theme === "light" ? "black" : "white",
    github: theme === "light" ? "#333" : "white",
    linkedin: theme === "light" ? "#0077B5" : "white", // LinkedIn blue in light mode
  };

  return (
    <div className="text-center mt-5">
      <h1 className="mb-3">Hello, I'm Ismail Faruqi</h1>
      <p className="mb-4">click below to connect with me </p>

      {/* Toggle Button */}
      <button onClick={toggleTheme} className="btn btn-secondary mb-4">
        Switch to {theme === "light" ? "🌙 Dark" : "🌞 Light"}
      </button>

      {/* Social Media Icons */}
      <div style={{ marginTop: "30px", fontSize: "2rem" }}>
        <a 
          href="https://www.instagram.com/ismailfaruqi._/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ margin: "0 15px", color: iconColors.instagram }}
        >
          <FaInstagram />
        </a>

        <a 
          href="https://www.tiktok.com/@ismailmultiverse" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ margin: "0 15px", color: iconColors.tiktok }}
        >
          <FaTiktok />
        </a>

        <a 
          href="https://github.com/faruqi02" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ margin: "0 15px", color: iconColors.github }}
        >
          <FaGithub />
        </a>

        <a 
          href="https://www.linkedin.com/in/ismail-faruqi-faisol/s" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ margin: "0 15px", color: iconColors.linkedin }}
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default App;
