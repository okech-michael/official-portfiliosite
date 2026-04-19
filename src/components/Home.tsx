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
            </div>
          </div>
          <div className="hero-image-wrap" data-animate="fade-left">
            <div className="image-glow"></div>
            <div className="image-frame">
              <img src="/images/mike3.png" alt="Michael Onyango" className="profile-img" onError={(e) => {
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
              I'm a full-stack software engineer focused on building reliable, performant web and mobile applications. I thrive on turning complex problems into elegant, user-centric solutions that deliver real-world impact.
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
    </>
  );
};

export default Home;