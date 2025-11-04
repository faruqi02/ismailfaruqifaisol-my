import { ReactTyped } from "react-typed";
import {
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

function Home({ theme }) {
  return (
    <div className="text-center mt-5" id="home">
      <h1 className="mb-3">
        <ReactTyped
          strings={["Hello, I'm Ismail Faruqi."]}
          typeSpeed={50}
          backSpeed={30}
          backDelay={1500}
          loop
        />
      </h1>
      <p className="mb-4">Let's connect with me!</p>

      <div
        style={{ marginTop: "30px", marginBottom: "30px", fontSize: "2rem" }}
      >
        <a
          href="https://www.instagram.com/ismailfaruqi._/"
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon instagram ${theme}`}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@ismailmultiverse"
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon tiktok ${theme}`}
        >
          <FaTiktok />
        </a>
        <a
          href="https://github.com/faruqi02"
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon github ${theme}`}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ismail-faruqi-faisol/"
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon linkedin ${theme}`}
        >
          <FaLinkedin />
        </a>
        {/* 🟢 WhatsApp link added */}
        <a
          href="https://wa.me/60175964958?text=Hi%20Im%20from%20your%20website!%20My%20name%20is%20"
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon whatsapp ${theme}`}
        >
          <FaWhatsapp />
        </a>
      </div>

      <img
        src={profilePic}
        alt="Ismail Faruqi"
        className="img-fluid rounded shadow"
        style={{
          maxWidth: "400px",
          borderRadius: "5%",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />
    </div>
  );
}

export default Home;
