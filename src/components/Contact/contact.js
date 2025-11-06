import './contact.css';
import { FaLinkedinIn, FaEnvelope, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-main">
      <h2 className="contact-title">Let’s Connect!</h2>
      <p className="contact-subtext">
        Have a project in mind, want to collaborate, or just say hi?  
        I’d love to hear from you!
      </p>

      <div className="contact-links">
        <a
          href="www.linkedin.com/in/juliapereiradasilva"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="contact-icon linkedin"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/JuliaDaSilva"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="contact-icon github"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:julia6pds@gmail.com"
          aria-label="Mail"
          className="contact-icon email"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Contact;
