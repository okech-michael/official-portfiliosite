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

          {/* Scheme AI - WITH SCREENSHOT */}
          <div className="featured-card" data-animate="fade-up">
            <div className="featured-card-preview">
              <img src="/images/schemAI-screehsnit.jpg" alt="Scheme AI Platform" className="project-screenshot" />
            </div>
            <div className="featured-card-info">
              <span className="project-label">Featured · AI Platform</span>
              <h3 className="project-title">Scheme AI</h3>
              <p className="project-desc">An advanced AI platform for intelligent scheme planning and management. Leverages machine learning for data-driven insights and optimization.</p>
              <div className="project-stack">
                <span>Node.js</span><span>TypeScript</span><span>AI/ML</span><span>React</span><span>Vercel</span>
              </div>
              <div className="project-actions">
                <a href="https://scheme-ai-beryl.vercel.app/" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Live Demo ↗</a>
              </div>
            </div>
          </div>

          {/* DawaFront - WITH SCREENSHOT */}
          <div className="featured-card featured-card-reverse" data-animate="fade-up">
            <div className="featured-card-preview">
              <img src="/images/dawafront-healthcare-screenshot.jpg" alt="DawaFront Healthcare" className="project-screenshot" />
            </div>
            <div className="featured-card-info">
              <span className="project-label">Featured · Healthcare</span>
              <h3 className="project-title">DawaFront Healthcare Website</h3>
              <p className="project-desc">A comprehensive healthcare web platform designed to streamline hospital-patient interactions and modern medical services delivery.</p>
              <div className="project-stack">
                <span>Django</span><span>Python</span><span>HTML5</span><span>CSS</span><span>JavaScript</span><span>Vercel</span>
              </div>
              <div className="project-actions">
                <a href="https://dawafront-hospital.vercel.app/" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Live Demo ↗</a>
                <a href="https://github.com/okech-michael/dawafront-hospital" target="_blank" rel="noopener" className="btn btn-ghost btn-sm">View Code</a>
              </div>
            </div>
          </div>

          {/* eHealth Campaign - WITH SCREENSHOT */}
          <div className="featured-card" data-animate="fade-up">
            <div className="featured-card-preview">
              <img src="/images/Ehealth-platfrom-screenshot.jpg" alt="eHealth Campaign" className="project-screenshot" />
            </div>
            <div className="featured-card-info">
              <span className="project-label">Featured · Healthcare</span>
              <h3 className="project-title">eHealth Campaign System</h3>
              <p className="project-desc">A modern healthcare campaign platform designed to promote digital health initiatives and wellness programs to a broad audience.</p>
              <div className="project-stack">
                <span>Node.js</span><span>React</span><span>JavaScript</span><span>Vercel</span>
              </div>
              <div className="project-actions">
                <a href="https://ehealthwebsitecamp-5t4s.vercel.app/" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Live Demo ↗</a>
              </div>
            </div>
          </div>

          {/* Kasam Construction - WITH SCREENSHOT */}
          <div className="featured-card featured-card-reverse" data-animate="fade-up">
            <div className="featured-card-preview">
              <img src="/images/kasam-construction-web.jpg" alt="Kasam Construction Company" className="project-screenshot" />
            </div>
            <div className="featured-card-info">
              <span className="project-label">Featured · Corporate</span>
              <h3 className="project-title">Kasam Construction Company Website</h3>
              <p className="project-desc">A professional corporate website showcasing construction services, project portfolio, and contact functionality with a modern UI/UX design.</p>
              <div className="project-stack">
                <span>Node.js</span><span>TypeScript</span><span>React</span><span>Responsive Design</span>
              </div>
              <div className="project-actions">
                <a href="#" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Live Demo ↗</a>
                <a href="https://github.com/okech-michael/kasam-construction" target="_blank" rel="noopener" className="btn btn-ghost btn-sm">View Code</a>
              </div>
            </div>
          </div>

          {/* TerraSept Solutions - WITH SCREENSHOT */}
          <div className="featured-card" data-animate="fade-up">
            <div className="featured-card-preview">
              <img src="/images/terrasept-website.jpg" alt="TerraSept Solutions" className="project-screenshot" />
            </div>
            <div className="featured-card-info">
              <span className="project-label">Featured · Enterprise</span>
              <h3 className="project-title">TerraSept Solutions</h3>
              <p className="project-desc">A comprehensive enterprise solutions platform offering tech services and consulting for innovative businesses and organizations.</p>
              <div className="project-stack">
                <span>Modern Web Stack</span><span>Responsive Design</span><span>Enterprise Solutions</span>
              </div>
              <div className="project-actions">
                <a href="https://www.terraseptsolutions.com" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Live Demo ↗</a>
              </div>
            </div>
          </div>

          {/* SMACOM - NO SCREENSHOT */}
          <div className="featured-card featured-card-reverse" data-animate="fade-up">
            <div className="featured-card-preview">
              <div className="preview-browser">
                <div className="browser-bar">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="browser-url">smacom.co.ke</span>
                </div>
                <div className="preview-content smart-preview">
                  <div className="preview-icon">📱</div>
                  <p>Smart Community Platform</p>
                </div>
              </div>
            </div>
            <div className="featured-card-info">
              <span className="project-label">Featured · IoT & Smart Systems</span>
              <h3 className="project-title">SMACOM</h3>
              <p className="project-desc">A comprehensive smart community communication platform integrating IoT technologies for local coordination and information flow.</p>
              <div className="project-stack">
                <span>Express.js</span><span>Node.js</span><span>Firebase</span><span>Supabase</span><span>Python</span><span>JavaScript</span><span>MQTT</span><span>IoT Integrations</span>
              </div>
              <div className="project-actions">
                <a href="https://www.smacom.co.ke" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Live Demo ↗</a>
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
              <div className="project-card-tags"><span>Python</span><span>Django</span><span>Backend</span></div>
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
              <div className="project-card-tags"><span>AI</span><span>Python</span><span>React</span><span>Machine Learning</span></div>
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
              <div className="project-card-tags"><span>Healthcare</span><span>Django</span><span>In Development</span></div>
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
              <div className="project-card-tags"><span>Django</span><span>CSS3</span><span>Community Platform</span></div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;