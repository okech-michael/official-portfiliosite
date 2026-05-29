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
              <h3 className="category-title">APIs & Third-Party Integrations</h3>
              <div className="skill-tags">
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Firebase Cloud Messaging</span>
                <span className="skill-tag">SendGrid Email Integration</span>
                <span className="skill-tag">Payment Processing</span>
                <span className="skill-tag">API Integration</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Cloud & Deployment</h3>
              <div className="skill-tags">
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">Railway</span>
                <span className="skill-tag">Cloud Services</span>
                <span className="skill-tag">Deployment & DevOps</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">AI & Emerging Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">AI Integration</span>
                <span className="skill-tag">Machine Learning Concepts</span>
                <span className="skill-tag">Emerging Tech Stack</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Security & Best Practices</h3>
              <div className="skill-tags">
                <span className="skill-tag">Cybersecurity Fundamentals</span>
                <span className="skill-tag">Data Protection</span>
                <span className="skill-tag">Secure Authentication</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Tools & Version Control</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Development Tools</span>
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