import { useEffect } from 'react';

const Skills: React.FC = () => {
  useEffect(() => {
    // Scroll reveal animation
    const animEls = document.querySelectorAll('[data-animate]');
    if (animEls.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      animEls.forEach(el => {
        (el as HTMLElement).style.animationPlayState = 'paused';
        observer.observe(el);
      });
    }
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner" data-animate="fade-up">
            <span className="page-label">What I bring</span>
            <h1 className="page-title">Skills &amp; <span className="accent">Experience</span></h1>
            <p className="page-subtitle">A focused toolkit built for building production-grade software.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section">
        <div className="container">

          <div className="skills-block" data-animate="fade-up">
            <h2 className="section-heading">Technical Skills</h2>

            <div className="skill-category">
              <h3 className="category-title">Web Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Node.js</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C++</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Specialisations</h3>
              <div className="skill-tags">
                <span className="skill-tag">API Development</span>
                <span className="skill-tag">Mobile App Development</span>
                <span className="skill-tag">Android Studio</span>
                <span className="skill-tag">Data Analysis</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Cybersecurity Fundamentals</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section">
        <div className="container">
          <h2 className="section-heading" data-animate="fade-up">Experience</h2>
          <div className="timeline">

            <div className="timeline-item" data-animate="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Co-Founder & CEO — Terrasept Solutions</h3>
                  <span className="timeline-period">2026 – Present</span>
                </div>
                <p className="timeline-desc">Leading innovative solutions and building a scalable tech enterprise from the ground up.</p>
              </div>
            </div>

            <div className="timeline-item" data-animate="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Digital Skills Trainer — Nyamira County ICT Hub</h3>
                  <span className="timeline-period">Nov 2025 – Present</span>
                </div>
                <p className="timeline-desc">Training and upskilling community members in digital literacy and tech competencies at the county ICT hub.</p>
              </div>
            </div>

            <div className="timeline-item" data-animate="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Chairperson — Ajira Digital Program at Kisii University</h3>
                  <span className="timeline-period">2025 – Present</span>
                </div>
                <p className="timeline-desc">Leading the Ajira Digital initiative at Kisii University, mentoring students in digital work and tech entrepreneurship.</p>
              </div>
            </div>

            <div className="timeline-item" data-animate="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Mobile Application Developer — Upwork</h3>
                  <span className="timeline-period">2025 – Present</span>
                </div>
                <p className="timeline-desc">Developing Android mobile applications using Android Studio and Java, delivering high-quality solutions for global clients.</p>
              </div>
            </div>

            <div className="timeline-item" data-animate="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Data Expert — Reliabl (Washington DC)</h3>
                  <span className="timeline-period">Oct 2025 – Feb 2026</span>
                </div>
                <p className="timeline-desc">Remote data analysis and expert consulting role supporting data-driven decision making for a Washington DC-based organization.</p>
              </div>
            </div>

            <div className="timeline-item" data-animate="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Community Lead — Lakeside Developers Community</h3>
                  <span className="timeline-period">2024 – Present</span>
                </div>
                <p className="timeline-desc">Building and nurturing a vibrant developer community, organizing events, and fostering collaboration among tech professionals.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;