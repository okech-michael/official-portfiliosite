import { useEffect } from 'react';

const Education: React.FC = () => {
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
            <span className="page-label">My Learning Journey</span>
            <h1 className="page-title">Academic &amp; <span className="accent">Professional Development</span></h1>
            <p className="page-subtitle">Continuous learning through formal education and specialized certifications.</p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="experience-section">
        <div className="container">
          <h2 className="section-heading" data-animate="fade-up">Education</h2>
          <div className="timeline">

            <div className="timeline-item" data-animate="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">BSc. Software Engineering — Kisii University</h3>
                  <span className="timeline-period">2024 – 2028</span>
                </div>
                <p className="timeline-desc">Pursuing a comprehensive degree in software engineering with focus on practical development and emerging technologies.</p>
              </div>
            </div>

            <div className="timeline-item" data-animate="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Cybersecurity Training — ICT Authority &amp; CyberShujaa</h3>
                  <span className="timeline-period">2026</span>
                </div>
                <p className="timeline-desc">Advanced cybersecurity training in partnership with ICT Authority of Kenya and CyberShujaa, building expertise in threat prevention and security protocols.</p>
              </div>
            </div>

            <div className="timeline-item" data-animate="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Artificial Intelligence Training — ICT Authority &amp; ADMI</h3>
                  <span className="timeline-period">2026</span>
                </div>
                <p className="timeline-desc">Specialized AI training through ICT Authority of Kenya in partnership with ADMI, exploring machine learning and intelligent systems.</p>
              </div>
            </div>

            <div className="timeline-item" data-animate="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Web Development — Emobilis Mobile Institute Technology</h3>
                  <span className="timeline-period">Aug – Dec 2025</span>
                </div>
                <p className="timeline-desc">Comprehensive web development bootcamp covering modern frameworks, responsive design, and full-stack development practices.</p>
              </div>
            </div>

            <div className="timeline-item" data-animate="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">Fundamentals of Cybersecurity &amp; Ethical Hacking — IBM</h3>
                  <span className="timeline-period">Jun – Aug 2025</span>
                </div>
                <p className="timeline-desc">Industry-leading certification course covering cybersecurity fundamentals, ethical hacking principles, and security best practices.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Education;