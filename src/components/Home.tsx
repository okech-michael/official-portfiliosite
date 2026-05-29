import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
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
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text" data-animate="fade-up">
            <div className="hero-badge">Available for opportunities</div>
            <h1 className="hero-name">Michael<br /><span className="accent">Onyango</span></h1>
            <p className="hero-title">Software Engineer</p>
            <p className="hero-tagline">Building scalable digital solutions with clean code and intelligent systems.</p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link to="/contact" className="btn btn-ghost">Contact Me</Link>
              <a href="/Michael_Onyango_Resume (1).docx" download className="btn btn-ghost">Download Resume</a>
            </div>
          </div>
          <div className="hero-image-wrap" data-animate="fade-left">
            <div className="image-glow"></div>
            <div className="image-frame">
              <img src="/images/mikaels.jpeg" alt="Michael Onyango" className="profile-img" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('no-img');
              }} />
              <div className="img-placeholder">
                <span className="placeholder-initials">MO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-inner" data-animate="fade-up">
            <p className="intro-text">
              I'm a curious and self-driven builder who enjoys solving problems, learning new things, and creating meaningful digital experiences that help people and businesses grow. I value discipline, creativity, teamwork, and continuous improvement, and I approach every project with a strong sense of responsibility and attention to detail.
            </p>
            <p className="intro-text">
              Beyond technology, I'm passionate about leadership, mentorship, and empowering young people through digital skills and innovation. I enjoy collaborating with people, sharing knowledge, and turning ideas into practical, impactful solutions that create real value.
            </p>
            <p className="intro-text">
              I'm always open to meaningful collaborations, exciting projects, and opportunities to grow, contribute, and build something exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid" data-animate="fade-up">
            <div className="highlight-card">
              <div className="highlight-icon">&#9670;</div>
              <p>Full-Stack Development</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">&#9670;</div>
              <p>Strong Communication</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">&#9670;</div>
              <p>Leadership — Ajira Digital</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">&#9670;</div>
              <p>Interpersonal Excellence</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">&#9670;</div>
              <p>Problem-Solving Focus</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">&#9670;</div>
              <p>Real-World Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner" data-animate="fade-up">
            <h2 className="cta-title">Let's <span className="accent">build something amazing</span></h2>
            <p className="cta-subtitle">Ready to start your next project? Let's collaborate and create something exceptional.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;