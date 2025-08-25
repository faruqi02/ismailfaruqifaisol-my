function Contact({ theme }) {
  return (
    <div className="container mt-5 text-center" id="contact">
      <h2 className="mb-4">Contact Me</h2>
      <p>If you’d like to get in touch, feel free to reach out via:</p>

      <ul className="list-unstyled">
        <li>
          📧 Email: <a href="mailto:ismailfaruqifaisol@gmail.com">ismailfaruqifaisol@gmail.com</a>
        </li>
        <li>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ismail-faruqi-faisol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ismail-faruqi-faisol
          </a>
        </li>
        <li>
          🐙 GitHub:{" "}
          <a
            href="https://github.com/faruqi02"
            target="_blank"
            rel="noopener noreferrer"
          >
            faruqi02
          </a>
        </li>
      </ul>

      <p className="mt-4">Or simply drop me a message on social media! 🚀</p>
    </div>
  );
}

export default Contact;
