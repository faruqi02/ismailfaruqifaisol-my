import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    subtitle: "React · Bootstrap · Responsive",
    description: "A modern portfolio website built with React to showcase skills, experience, and selected work in a clean, responsive layout.",
    tags: ["React", "Bootstrap", "UI"],
    link: "https://github.com/faruqi02",
    cta: "View on GitHub",
  },
  {
    title: "POS System",
    subtitle: "Google Apps Script · Sheets · Automation",
    description: "A point-of-sale system with inventory and customer management built using Google Apps Script and Google Sheets.",
    tags: ["Apps Script", "Automation", "Sheets"],
    link: "#",
    cta: "View Project",
  },
  {
    title: "Drone Noise Cancellation",
    subtitle: "Research · Signal Processing · ANC",
    description: "A research project exploring active noise cancellation techniques for reducing drone sound during flight.",
    tags: ["Research", "Signal Processing", "Drone Tech"],
    link: "#",
    cta: "Learn More",
  },
  {
    title: "Inventory Dashboard",
    subtitle: "Data Visualization · Excel · BI",
    description: "A live inventory dashboard designed to track stock levels, sales trends, and reorder alerts for small businesses.",
    tags: ["Dashboard", "Analytics", "Inventory"],
    link: "#",
    cta: "View Demo",
  },
  {
    title: "Task Tracker App",
    subtitle: "React · Local Storage · Productivity",
    description: "A task management app with drag-and-drop organization, due dates, and persistence using browser storage.",
    tags: ["React", "UX", "Productivity"],
    link: "#",
    cta: "Open App",
  },
  {
    title: "Invoice Generator",
    subtitle: "JavaScript · PDF Export · Business",
    description: "An automatic invoice generator that creates printable invoices from customer and order details.",
    tags: ["JavaScript", "PDF", "Business"],
    link: "#",
    cta: "Try It",
  },
  {
    title: "Smart Garden Monitor",
    subtitle: "IoT · Sensors · Environmental Data",
    description: "A smart garden proof-of-concept using sensor data to monitor humidity, temperature, and growth conditions.",
    tags: ["IoT", "Sensors", "Prototype"],
    link: "#",
    cta: "See Details",
  },
  {
    title: "Event Countdown Hub",
    subtitle: "React · Animations · Landing Page",
    description: "An event countdown experience with animated timers, event cards, and easy sharing for upcoming launches.",
    tags: ["React", "Animations", "Events"],
    link: "#",
    cta: "Visit Page",
  },
  {
    title: "Career Blog",
    subtitle: "Content · Writing · Personal Brand",
    description: "A blog concept focusing on career tips, project stories, and technical learning resources for developers.",
    tags: ["Blog", "Content", "Branding"],
    link: "#",
    cta: "Read More",
  },
];

function Projects({ theme }) {
  const cardTheme = theme === "dark" ? "bg-dark text-white" : "";
  const tagColors = {
    React: "#61dafb",
    Bootstrap: "#7952b3",
    UI: "#0d6efd",
    "Apps Script": "#0f9d58",
    Automation: "#ffba08",
    Sheets: "#0f9d58",
    Research: "#6f42c1",
    "Signal Processing": "#0dcaf0",
    "Drone Tech": "#6610f2",
    Dashboard: "#198754",
    Analytics: "#0d6efd",
    Inventory: "#fd7e14",
    UX: "#0dcaf0",
    Productivity: "#6610f2",
    JavaScript: "#f7df1e",
    PDF: "#d63384",
    Business: "#0d6efd",
    IoT: "#20c997",
    Sensors: "#0dcaf0",
    Prototype: "#6c757d",
    Animations: "#fd7e14",
    Events: "#6610f2",
    Blog: "#6f42c1",
    Content: "#0d6efd",
    Branding: "#d63384",
  };

  return (
    <div className="container mt-5" id="projects">
      <div className="text-center mb-5">
        <span className="badge bg-primary mb-3">Featured Work</span>
        <h2 className="mb-3">My Projects</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          Explore a range of practical projects spanning web development, automation, research, and productivity tools.
        </p>
      </div>

      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.title} className="col-sm-12 col-md-6 col-lg-4">
            <div className={`card h-100 shadow-sm border-0 ${cardTheme}`}>
              <div className="card-body d-flex flex-column">
                <div className="mb-3">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="text-muted small mb-3">{project.subtitle}</p>
                </div>
                <p className="card-text flex-grow-1">{project.description}</p>
                <div className="mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge me-1 mb-1"
                      style={{
                        backgroundColor: tagColors[tag] || "#6c757d",
                        color: tagColors[tag] === "#f7df1e" ? "#000" : "#fff",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto text-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {project.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
