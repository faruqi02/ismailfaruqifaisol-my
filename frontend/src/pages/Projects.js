function Projects({ theme }) {
  return (
    <div className="container mt-5 text-center" id="projects">
      <h2 className="mb-4">My Projects</h2>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className={`card shadow ${theme === "dark" ? "bg-dark text-white" : ""}`}>
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">
                A personal portfolio built with React showcasing my skills and projects.
              </p>
              <a href="https://github.com/faruqi02" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className={`card shadow ${theme === "dark" ? "bg-dark text-white" : ""}`}>
            <div className="card-body">
              <h5 className="card-title">POS System</h5>
              <p className="card-text">
                A cashier & customer management system using Google Apps Script and Sheets.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className={`card shadow ${theme === "dark" ? "bg-dark text-white" : ""}`}>
            <div className="card-body">
              <h5 className="card-title">Drone Noise Cancellation</h5>
              <p className="card-text">
                Research on Active Noise Cancellation (ANC) applied in drone technology.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
