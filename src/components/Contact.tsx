import { useEffect, useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since this is frontend only, just show success message
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner" data-animate="fade-up">
            <span className="page-label">Get in touch</span>
            <h1 className="page-title">Let's <span className="accent">Connect</span></h1>
            <p className="page-subtitle availability-statement">
              I am open to full-time roles, contract work, and freelance opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* INFO */}
            <div className="contact-info" data-animate="fade-up">
              <h2 className="contact-info-title">Direct Contact</h2>
              <div className="contact-item">
                <span className="contact-icon">&#9993;</span>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:okechmichael2004@gmail.com" className="contact-value">okechmichael2004@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">&#128222;</span>
                <div>
                  <p className="contact-label">Phone</p>
                  <a href="tel:+254741145911" className="contact-value">0741 145 911</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">&#128187;</span>
                <div>
                  <p className="contact-label">GitHub</p>
                  <a href="https://github.com/okech-michael" target="_blank" rel="noopener" className="contact-value">github.com/okech-michael</a>
                </div>
              </div>

              <div className="availability-card">
                <div className="avail-dot"></div>
                <p>Currently available for new projects</p>
              </div>
            </div>

            {/* FORM */}
            <div className="contact-form-wrap" data-animate="fade-up">
              <h2 className="contact-info-title">Send a Message</h2>
              {submitted ? (
                <div className="form-message success">
                  Message sent! I'll get back to you soon.
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;