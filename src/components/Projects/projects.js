import './projects.css';
import ellehacksImg from '../../assets/ellehacks.png';
import visionaiImg from '../../assets/visionai.png';
import compassImg from '../../assets/compass.png';
import discordImg from '../../assets/discord.png';
import battleImg from '../../assets/battle.png';
import personalImg from '../../assets/site.png';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>Selected work I’m proud of — shipped, shown, and still improving.</p>
      </div>

      <div className="projects-grid">
        <article className="project" tabIndex="0">
          <img src={personalImg} alt="Personal site preview" />
          <h3>Personal Website</h3>
          <p>
            A portfolio site built with React (Vite) to showcase my projects, skills, and experience. Designed with a focus on clean UI, accessibility, and smooth animations, it serves as both a creative outlet and a platform to present my development work.
          </p>
          <div className="project-actions">
            <a href="http://juliadasilva.me" target="_blank" rel="noreferrer">
              <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              <span>You&apos;re looking at it!</span>
            </a>
          </div>
        </article>

        <article className="project" tabIndex="0">
          <img src={compassImg} alt="Course Compass app preview" />
          <h3>Course Compass</h3>
          <p>
            Course Compass simplifies university course selection. Built using the MERN stack — React (Vite) using TypeScript for the front end and Node.js + MongoDB for the back end. It aims to help students easily explore courses with clear details on prerequisites, professor ratings, and workload estimates, all in one place.
          </p>
          <div className="project-actions">
            <a href="https://github.com/hvpham-yorku/Group2_CourseCompass/tree/main" target="_blank" rel="noreferrer">
              <i className="fab fa-github" aria-hidden="true"></i>
              <span>View on Github</span>
            </a>
          </div>
        </article>

        <article className="project" tabIndex="0">
          <img src={ellehacksImg} alt="ElleHacks website preview" />
          <h3>ElleHacks Website</h3>
          <p>
            I’ve been supporting the development of the ElleHacks site for several years, adapting and rebuilding it annually as our needs evolve. The 2026 edition is built with React (Vite) and TypeScript by an amazing team of developers. It continues to be the central showcase for our hackathon’s online presence.
          </p>
          <div className="project-actions">
            <a href="https://ellehacks.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-github" aria-hidden="true"></i>
              <span>View Our Site</span>
            </a>
          </div>
        </article>

        <article className="project" tabIndex="0">
          <img src={visionaiImg} alt="VisionAI project preview" />
          <h3>VisionAI</h3>
          <p>
            Empowering Visual Independence with AI. Attended GenAI Genesis, Canada&apos;s largest AI Hackathon
            focused on using Generative AI to tackle the UN&apos;s 17 SDGs.
          </p>
          <div className="project-actions">
            <a href="https://devpost.com/software/visionai-97a6pk" target="_blank" rel="noreferrer">
              <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              <span>View On Devpost</span>
            </a>
          </div>
        </article>

        <article className="project" tabIndex="0">
          <img src={discordImg} alt="ElleHacks Discord bot preview" />
          <h3>ElleHacks Discord Bot</h3>
          <p>
            Developed the ElleHacks Discord server and programmed a custom bot in Python to enhance user
            engagement and streamline event operations during the hackathon.
          </p>
          <div className="project-actions">
            <a href="https://ellehacks.com/" target="_blank" rel="noreferrer">
              <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              <span>Check Out Our Site</span>
            </a>
          </div>
        </article>

        <article className="project" tabIndex="0">
          <img src={battleImg} alt="Battleship game preview" />
          <h3>Battleship Replica</h3>
          <p>
            Battleship Replica is a multiplayer Battleship game built in Java using Greenfoot as my high school final project. It’s one I’m especially proud of, as it marked the beginning of my passion for building cool projects.
          </p>
          <div className="project-actions">
            <a href="https://github.com/JuliaDaSilva/Project-BattleshipGame/" target="_blank" rel="noreferrer">
              <i className="fab fa-github" aria-hidden="true"></i>
              <span>View on Github</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
