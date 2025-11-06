import { useEffect } from 'react';
import './timeline.css';

const Timeline = () => {
  useEffect(() => {
    // Scroll-reveal: fade/slide items in when they enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.timeline__item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section">
      <div className="timeline-bridge">
        <h2>My Experience</h2>
        <p>Roles and projects that have shaped my learning journey.</p>
      </div>

      <div className="timeline-main">
        <div className="timeline">
          <div className="timeline__line" aria-hidden="true" />
          <ul className="timeline__list">

            <li className="timeline__item">
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <h3 className="timeline__title">Developer/QA Tester</h3>
                  <h3 className="timeline__date">(May 2025 - Dec 2025) ~ 8 mos</h3>
                </div>
                <h3 className="timeline__company">Ontario Public Service (MPBSDP)</h3>
                <br />
                <p className="timeline__desc">
                  Ensure applications run smoothly through regression and end-to-end testing, bug tracking, and test case execution. Work closely with cross-functional teams to maintain stable releases. Contributed to both the Development and Business Analysis teams by creating a key template for a new system feature and supported the project from start to first release.
                </p>
              </div>
            </li>

            <li className="timeline__item">
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <h3 className="timeline__title">Web Designer</h3>
                  <h3 className="timeline__date">(May 2025 - Sep 2025) ~ 5 mos</h3>
                </div>
                <h3 className="timeline__company">Run the Flex</h3>
                <br />
                <p className="timeline__desc">
                  Designed and built a website for a dance studio’s new kids program using a web design platform and custom components to enhance functionality. Created Figma prototypes to guide the design process and ensure a playful, user-friendly experience that highlighted the studio’s brand and offerings.
                </p>
              </div>
            </li>

            <li className="timeline__item">
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <h3 className="timeline__title">Co-Chair/Club President</h3>
                  <h3 className="timeline__date">(May 2025 - Present) ~ 2 yrs</h3>
                </div>
                <h3 className="timeline__company">ElleHacks</h3>
                <br />
                <p className="timeline__desc">
                  Worked with ElleHacks in multiple roles over two years, eventually earning the position of Co-Chair. Led the IT team in developing the official website and communication platforms, including a custom automation bot to streamline registration, verification, and event communication. As Co-Chair, oversee all club operations, manage subteams, and drive the planning and execution of one of Canada’s largest student-run hackathons for Women and Gender diverse students.
                </p>
              </div>
            </li>

            <li className="timeline__item">
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <h3 className="timeline__title">Junior Project Coordinator</h3>
                  <h3 className="timeline__date">(May 2024 - Dec 2024) ~ 8 mos</h3>
                </div>
                <h3 className="timeline__company">Ontario Public Service (TBS)</h3>
                <br />
                <p className="timeline__desc">
                  Collaborated with various sub teams to maintain and support project documentation across multiple Agile sprints. Updated organization charts, project timelines, product backlog, project risks, and presentation materials, ensuring teams had the latest information for decision-making. Captured detailed meeting minutes for sprint planning, retrospectives, and other key Agile ceremonies to keep teams aligned on decisions, blockers, and action items.
                </p>
              </div>
            </li>

            <li className="timeline__item">
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <h3 className="timeline__title">Program Instructor</h3>
                  <h3 className="timeline__date">(May 2025 - Present) ~ 4 yrs</h3>
                </div>
                <h3 className="timeline__company">City Of Vaughan</h3>
                <br />
                <p className="timeline__desc">
                  Instructed and supervised a wide range of recreational and educational programs for children and teens aged 3–17, including STEM, web development, dance, and sports. Designed engaging lesson plans, adapted teaching methods to diverse learning styles, and created a positive, inclusive environment that encouraged creativity, teamwork, and skill development.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
