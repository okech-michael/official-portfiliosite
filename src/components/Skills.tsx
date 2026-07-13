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
            <h2 className="section-heading">Technical Expertise</h2>

            <div className="skill-category">
              <h3 className="category-title">Frontend Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Responsive Web Design</span>
                <span className="skill-tag">UI/UX Design</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Backend Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">RESTful API Design</span>
                <span className="skill-tag">Authentication Systems</span>
                <span className="skill-tag">Backend Architecture</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C++</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Databases & Data Management</h3>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Supabase</span>
                <span className="skill-tag">Database Design</span>
                <span className="skill-tag">Data Handling</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">APIs & Integrations</h3>
              <div className="skill-tags">
                <span className="skill-tag">REST API Design</span>
                <span className="skill-tag">Firebase Cloud Messaging</span>
                <span className="skill-tag">SendGrid</span>
                <span className="skill-tag">Stripe Payments</span>
                <span className="skill-tag">Third-Party SDKs</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Cloud & Deployment</h3>
              <div className="skill-tags">
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">Railway</span>
                <span className="skill-tag">AWS S3</span>
                <span className="skill-tag">Azure Static Web Apps</span>
                <span className="skill-tag">Docker</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">AI & Automation</h3>
              <div className="skill-tags">
                <span className="skill-tag">AI Integration</span>
                <span className="skill-tag">Automated Workflows</span>
                <span className="skill-tag">Data Automation</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Security & Best Practices</h3>
              <div className="skill-tags">
                <span className="skill-tag">Secure Authentication</span>
                <span className="skill-tag">Data Protection</span>
                <span className="skill-tag">Code Review Practices</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Tools & Version Control</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">ESLint</span>
                <span className="skill-tag">Prettier</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>

          </div>

          <div className="skills-block" data-animate="fade-up">
            <h2 className="section-heading">Professional & Leadership Skills</h2>

            <div className="skill-category">
              <h3 className="category-title">Leadership & Team Management</h3>
              <div className="skill-tags">
                <span className="skill-tag">Team Leadership</span>
                <span className="skill-tag">Team Coordination</span>
                <span className="skill-tag">Strategic Vision</span>
                <span className="skill-tag">Decision Making</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Communication & Community</h3>
              <div className="skill-tags">
                <span className="skill-tag">Technical Communication</span>
                <span className="skill-tag">Public Speaking</span>
                <span className="skill-tag">Community Engagement</span>
                <span className="skill-tag">Public Relations</span>
                <span className="skill-tag">Remote Collaboration</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Training & Mentorship</h3>
              <div className="skill-tags">
                <span className="skill-tag">Digital Skills Training</span>
                <span className="skill-tag">Youth Mentorship</span>
                <span className="skill-tag">Technical Mentorship</span>
                <span className="skill-tag">Web Development Training</span>
                <span className="skill-tag">Digital Literacy Education</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Professional Competencies</h3>
              <div className="skill-tags">
                <span className="skill-tag">Full-Stack Development</span>
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Data Analysis</span>
                <span className="skill-tag">Remote Work Experience</span>
                <span className="skill-tag">Freelance Development</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default Skills;