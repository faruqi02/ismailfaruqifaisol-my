import profile from "../assets/profile.jpg";
import {
  FaLaptopCode,
  FaBrain,
  FaCode,
  FaRocket,
} from "react-icons/fa";

function About({ theme }) {
  return (
    <section
      id="about"
      className={`py-5 ${
        theme === "dark"
          ? "bg-dark text-light"
          : "bg-light text-dark"
      }`}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Profile Image */}
          <div className="col-lg-5 text-center mb-5 mb-lg-0">
            <img
              src={profile}
              alt="Ismail Faruqi"
              className="rounded-circle shadow-lg img-fluid"
              style={{
                width: "280px",
                height: "280px",
                objectFit: "cover",
                border: "6px solid #0d6efd",
              }}
            />
          </div>

          {/* About Content */}
          <div className="col-lg-7">
            <h5 className="text-primary fw-bold">ABOUT ME</h5>

            <h2 className="fw-bold mb-3">
              Hi, I'm <span className="text-primary">Ismail Faruqi</span> 👋
            </h2>

            <p className="lead">
              I am a passionate software developer who enjoys creating
              modern, responsive, and user-friendly web applications.
            </p>

            <p>
              I have a strong interest in web development, artificial
              intelligence, and learning new technologies. I enjoy solving
              real-world problems through programming and continuously
              improving my technical skills.
            </p>

            {/* Cards */}
            <div className="row mt-4">

              <div className="col-md-6 mb-3">
                <div
                  className={`p-4 rounded shadow-sm h-100 ${
                    theme === "dark"
                      ? "bg-secondary text-light"
                      : "bg-white"
                  }`}
                >
                  <FaLaptopCode className="fs-1 text-primary mb-3" />
                  <h5>Web Development</h5>
                  <p className="mb-0">
                    Building responsive and modern websites using React,
                    Bootstrap, HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div
                  className={`p-4 rounded shadow-sm h-100 ${
                    theme === "dark"
                      ? "bg-secondary text-light"
                      : "bg-white"
                  }`}
                >
                  <FaBrain className="fs-1 text-success mb-3" />
                  <h5>Artificial Intelligence</h5>
                  <p className="mb-0">
                    Exploring AI and machine learning to develop smart and
                    innovative solutions.
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div
                  className={`p-4 rounded shadow-sm h-100 ${
                    theme === "dark"
                      ? "bg-secondary text-light"
                      : "bg-white"
                  }`}
                >
                  <FaCode className="fs-1 text-danger mb-3" />
                  <h5>Programming</h5>
                  <p className="mb-0">
                    Writing clean, efficient, and maintainable code while
                    continuously learning new technologies.
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div
                  className={`p-4 rounded shadow-sm h-100 ${
                    theme === "dark"
                      ? "bg-secondary text-light"
                      : "bg-white"
                  }`}
                >
                  <FaRocket className="fs-1 text-warning mb-3" />
                  <h5>Career Goal</h5>
                  <p className="mb-0">
                    To become a skilled software engineer and create
                    technology that makes a positive impact.
                  </p>
                </div>
              </div>

            </div>

            {/* Skills */}
            <div className="mt-4">
              <h4 className="mb-3">Skills</h4>

              <span className="badge bg-primary me-2 mb-2 p-2">
                React
              </span>

              <span className="badge bg-success me-2 mb-2 p-2">
                JavaScript
              </span>

              <span className="badge bg-info text-dark me-2 mb-2 p-2">
                HTML
              </span>

              <span className="badge bg-warning text-dark me-2 mb-2 p-2">
                CSS
              </span>

              <span className="badge bg-secondary me-2 mb-2 p-2">
                Bootstrap
              </span>

              <span className="badge bg-danger me-2 mb-2 p-2">
                Git
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;