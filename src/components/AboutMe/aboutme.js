import './aboutme.css';

const AboutMe = () => {
  return (
    <section className="aboutme-back">
      <div className="aboutme-main vertical">
        <h2 className="aboutme-title">About Me</h2>

        <div className="aboutme-text">
          <p>
            Hello! My name is Julia Da Silva, and I am a dedicated Computer Science major at York University in my fourth
            year. As a First-Generation student, I am passionate about embracing every opportunity to expand my knowledge
            and develop my professional skillset. With a strong foundation in programming and project management, I am
            eager to explore internships and co-op positions that challenge me and allow me to contribute to innovative
            projects!
          </p>
          <p>
            Looking ahead, I am excited to apply my skills across multiple areas of computer science! Whether that’s in
            software development, quality assurance, or project management. I’m passionate about using technology to solve
            real-world problems and continuously improving through hands-on experience. My time working on team-based class
            projects, in student-run organizations, and during co-op placements has strengthened my adaptability,
            leadership, and technical problem-solving abilities. I’m eager to keep growing as a professional and make a
            meaningful impact in the tech industry.
          </p>
        </div>

        <div className="aboutme-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2Oe2-7G8OkU?si=842vxGNPn7MfcV6-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
