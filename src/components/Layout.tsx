import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Navbar scroll shadow
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      const toggle = document.getElementById('navToggle');
      if (toggle) {
        toggle.setAttribute('aria-expanded', isOpen.toString());
        const spans = toggle.querySelectorAll('span') as NodeListOf<HTMLElement>;
        if (isOpen) {
          spans[0].style.transform = 'translateY(8px) rotate(45deg)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      }
    }
  };

  const closeNav = () => {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
      navLinks.classList.remove('open');
      const spans = document.querySelectorAll('#navToggle span') as NodeListOf<HTMLElement>;
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  };

  return (
    <>
      {/* NAV */}
      <nav className="navbar" id="navbar">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={closeNav}>
            <span className="logo-bracket">&lt;</span>MO<span className="logo-bracket">/&gt;</span>
          </Link>
          <button className="nav-toggle" id="navToggle" aria-label="Toggle menu" onClick={toggleNav}>
            <span></span><span></span><span></span>
          </button>
          <ul className="nav-links" id="navLinks">
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeNav}>Home</Link></li>
            <li><Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`} onClick={closeNav}>Skills</Link></li>
            <li><Link to="/education" className={`nav-link ${location.pathname === '/education' ? 'active' : ''}`} onClick={closeNav}>Education</Link></li>
            <li><Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={closeNav}>Projects</Link></li>
            <li><Link to="/contact" className={`nav-link nav-cta ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeNav}>Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main>
        {children}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-name">Michael Onyango</p>
          <p className="footer-copy">© 2025 · Terrasept Solutions Limited · All rights reserved</p>
          <div className="footer-links">
            <a href="https://github.com/okech-michael" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/michael-onyango-179291372/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bru5S8zKoRlaWgWApBikV4A%3D%3D" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:okechmichael2004@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;