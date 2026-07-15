import { useState } from "react";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";

function Contact({ theme }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const darkMode = theme === "dark";
  const panelTheme = darkMode ? "contact-panel-dark" : "contact-panel-light";
  const cardTheme = darkMode ? "contact-card-dark" : "contact-card-light";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Opening email client...");

    const subject = encodeURIComponent(`Project inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:ismailfaruqif@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactItems = [
    {
      icon: <FiMail className="contact-icon" />,
      title: "Email",
      value: "ismailfaruqif@gmail.com",
      link: "mailto:ismailfaruqif@gmail.com",
      action: "Send email",
    },
    {
      icon: <FiPhone className="contact-icon" />,
      title: "WhatsApp",
      value: "(+60)17 596 4958",
      link: "https://wa.me/60175964958",
      action: "Message on WhatsApp",
    },
    {
      icon: <FiLinkedin className="contact-icon" />,
      title: "LinkedIn",
      value: "ismail-faruqi-faisol",
      link: "https://www.linkedin.com/in/ismail-faruqi-faisol/",
      action: "View profile",
    },
    {
      icon: <FiGithub className="contact-icon" />,
      title: "GitHub",
      value: "faruqi02",
      link: "https://github.com/faruqi02",
      action: "View repos",
    },
  ];

  return (
    <div className="container py-5" id="contact">
      <div className="row gy-4 align-items-start">
        <div className="col-lg-5">
          <div className={`p-4 rounded-4 shadow contact-panel ${panelTheme}`}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <p className="text-uppercase text-primary fw-bold mb-1">Contact</p>
                <h2 className="mb-0">Let’s build your next product.</h2>
              </div>
              <div className="contact-badge">Dev</div>
            </div>

            <pre className="contact-code mb-4">
{`const contact = {
  email: "ismailfaruqif@gmail.com",
  linkedIn: "ismail-faruqi-faisol",
  github: "faruqi02",
  whatsapp: "(+60)17 596 4958"
};`}
            </pre>

            <p className="text-muted mb-4">
              Modern, professional communication with fast response times. Choose the best channel for your project and I’ll get back to you quickly.
            </p>

            <div className="d-flex flex-column gap-3">
              <div className="contact-feature">
                <strong>Fast response</strong>
                <span>Priority replies for business and project inquiries.</span>
              </div>
              <div className="contact-feature">
                <strong>Clear scope</strong>
                <span>Share your goals, and I’ll help define the next steps.</span>
              </div>
              <div className="contact-feature">
                <strong>Polished delivery</strong>
                <span>Professional communication from proposal to launch.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className={`row g-3 contact-grid ${cardTheme}`}>
            {contactItems.map((item, index) => (
              <div key={item.title} className={`col-md-6 fade-in-up delay-${index}`}>
                <div className={`p-4 rounded-4 shadow-sm contact-card ${cardTheme}`}>
                  <div className="contact-title mb-3">
                    {item.icon}
                    <h5 className="mb-0">{item.title}</h5>
                  </div>
                  <p className="mb-3 text-muted">{item.value}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    {item.action}
                  </a>
                </div>
              </div>
            ))}

            <div className="col-12 fade-in-up delay-4">
              <div className={`p-4 rounded-4 shadow-sm contact-card ${cardTheme}`}>
                <h5 className="mb-3">Send a message</h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control contact-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control contact-input"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control contact-input contact-textarea"
                      placeholder="Tell me about your project or inquiry"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2">
                    <FiSend /> Send message
                  </button>
                  {status && <p className="contact-form-status mt-3">{status}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
