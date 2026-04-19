import { useEffect } from 'react';

const Projects: React.FC = () => {
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
            <span className="page-label">What I've built</span>
            <h1 className="page-title">My <span className="accent">Projects</span></h1>
            <p className="page-subtitle">Production deployments, real users, real problems solved.</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-heading" data-animate="fade-up">Featured Work</h2>

          {/* Dawafront */}
          <div className="featured-card" data-animate="fade-up">
            <div className="featured-card-preview">
              <div className="preview-browser">
                <div className="browser-bar">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="browser-url">dawafront-hospital.up.railway.app</span>
                </div>
                <div className="preview-content healthcare-preview">
                  <div className="preview-icon">&#9877;</div>
                  <p>Healthcare Platform</p>
                </div>
              </div>
            </div>
            <div className="featured-card-info">
              <span className="project-label">Featured · Healthcare</span>
              <h3 className="project-title">Dawafront Healthcare Website</h3>
              <p className="project-desc">A comprehensive healthcare web platform designed to streamline hospital-patient interactions. Built with Django, deployed on Railway.</p>
              <div className="project-stack">
                <span>Django</span><span>Python</span><span>HTML/CSS</span><span>Railway</span>
              </div>
              <div className="project-actions">
                <a href="https://dawafront-hospital.up.railway.app/" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Live Demo ↗</a>
                <a href="https://github.com/okech-michael/dawafront-hospital" target="_blank" rel="noopener" className="btn btn-ghost btn-sm">View Code</a>
              </div>
            </div>
          </div>

          {/* Apex Construction */}
          <div className="featured-card featured-card-reverse" data-animate="fade-up">
            <div className="featured-card-preview">
              <div className="preview-browser">
                <div className="browser-bar">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="browser-url">apex-construction-ltd-company.up.railway.app</span>
                </div>
                <div className="preview-content construction-preview">
                  <div className="preview-icon">&#9962;</div>
                  <p>Construction Company</p>
                </div>
              </div>
            </div>
            <div className="featured-card-info">
              <span className="project-label">Featured · Corporate</span>
              <h3 className="project-title">Apex Construction Website</h3>
              <p className="project-desc">A professional corporate website for a construction company. Showcases services, portfolio, and contact functionality with a polished UI.</p>
              <div className="project-stack">
                <span>Django</span><span>JavaScript</span><span>CSS3</span><span>Railway</span>
              </div>
              <div className="project-actions">
                <a href="https://apex-construction-ltd-company.up.railway.app/" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Live Demo ↗</a>
                <a href="https://github.com/okech-michael/apex-construction" target="_blank" rel="noopener" className="btn btn-ghost btn-sm">View Code</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="other-projects">
        <div className="container">
          <h2 className="section-heading" data-animate="fade-up">Other Projects</h2>
          <div className="projects-grid">

            <div className="project-card" data-animate="fade-up">
              <div className="project-card-top">
                <span className="project-card-icon">&#128273;</span>
                <div className="project-card-links">
                  <a href="https://github.com/okech-michael/KaziVerify" target="_blank" rel="noopener" title="View Code">&#60;/&#62;</a>
                </div>
              </div>
              <h3 className="project-card-title">KaziVerify</h3>
              <p className="project-card-desc">A verification platform for freelancers and digital workers — establishing credibility in the gig economy.</p>
              <div className="project-card-tags"><span>Python</span><span>Django</span></div>
            </div>

            <div className="project-card" data-animate="fade-up">
              <div className="project-card-top">
                <span className="project-card-icon">&#129504;</span>
                <div className="project-card-links">
                  <a href="https://github.com/okech-michael/EDUSYNC-AI" target="_blank" rel="noopener" title="View Code">&#60;/&#62;</a>
                </div>
              </div>
              <h3 className="project-card-title">EduSync AI</h3>
              <p className="project-card-desc">An AI-powered education platform built to personalise and synchronise learning experiences for students.</p>
              <div className="project-card-tags"><span>AI</span><span>Python</span><span>React</span></div>
            </div>

            <div className="project-card" data-animate="fade-up">
              <div className="project-card-top">
                <span className="project-card-icon">&#128138;</span>
                <div className="project-card-links">
                  <span className="coming-soon">In Progress</span>
                </div>
              </div>
              <h3 className="project-card-title">AfyaLink</h3>
              <p className="project-card-desc">A digital health-linking platform connecting patients with community health services and providers.</p>
              <div className="project-card-tags"><span>Healthcare</span><span>Django</span></div>
            </div>

            <div className="project-card" data-animate="fade-up">
              <div className="project-card-top">
                <span className="project-card-icon">&#128225;</span>
                <div className="project-card-links">
                  <span className="coming-soon">In Progress</span>
                </div>
              </div>
              <h3 className="project-card-title">SMACOM</h3>
              <p className="project-card-desc">A smart community communication tool designed to improve local coordination and information flow.</p>
              <div className="project-card-tags"><span>Node.js</span><span>React</span></div>
            </div>

            <div className="project-card" data-animate="fade-up">
              <div className="project-card-top">
                <span className="project-card-icon">&#127979;</span>
                <div className="project-card-links">
                  <span className="coming-soon">Live</span>
                </div>
              </div>
              <h3 className="project-card-title">Kisii University Ajira Club</h3>
              <p className="project-card-desc">Official website for the Kisii University Ajira Digital Club — events, resources, and membership portal.</p>
              <div className="project-card-tags"><span>Django</span><span>CSS</span></div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;