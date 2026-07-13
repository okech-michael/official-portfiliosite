import { useEffect } from 'react';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      id: 1,
      role: "Co-Founder & CEO",
      company: "Terrasept Solutions",
      type: "Technology Company",
      period: "Present",
      description: "Co-founder and chief executive responsible for driving the strategic direction, growth, and execution of Terrasept Solutions. Leads the company's vision, product development strategy, and business expansion across digital solutions and software development services.",
      responsibilities: [
        "Lead overall company strategy, product direction, and technical execution across web and software projects",
        "Oversee development of client solutions including websites, platforms, and digital systems",
        "Drive business growth, client acquisition, and service delivery standards",
        "Coordinate technical teams and project execution workflows",
        "Establish operational structure for scaling digital service offerings"
      ]
    },
    {
      id: 2,
      role: "Digital Skills Trainer",
      company: "Nyamira County ICT Hub",
      period: "Nov 2025 – April 2026",
      description: "Delivered structured digital training programs focused on software development, freelancing, and workplace digital transformation. Empowered youth and professionals with practical, job-ready skills.",
      achievements: [
        "Trained 300+ youth in digital skills, including web development, transcription, and online work readiness",
        "Supported 50+ web development trainees in securing internships in Nairobi and Mombasa tech ecosystems",
        "Mentored 70+ learners into successful freelance careers on platforms such as GoTranscript and Upwork",
        "Delivered corporate training for county employees on AI tools for professionals and interpersonal workplace skills, improving productivity and digital adoption"
      ]
    },
    {
      id: 3,
      role: "Chairperson",
      company: "Ajira Digital Club",
      type: "Kisii University",
      period: "Nov 2025 – April 2026",
      description: "Leading a student digital empowerment organization focused on freelancing, software development, and digital career readiness.",
      achievements: [
        "Lead strategic direction for student digital skills development programs",
        "Organize training sessions on web development, online work, and cybersecurity awareness",
        "Promote online safety education and responsible digital engagement",
        "Support students in transitioning into online earning opportunities and remote work",
        "Helped create a growing ecosystem of student freelancers supporting their own financial independence"
      ]
    }
  ];

  const previousRoles = [
    { role: "Vice Chairperson", description: "Supported leadership operations, coordination, and training initiatives", company: "Ajira Digital Club – Kisii University" },
    { role: "Publicity Secretary", description: "Managed communications, outreach, and digital engagement campaigns", company: "Ajira Digital Club – Kisii University" }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner" data-animate="fade-up">
            <span className="page-label">Career Journey</span>
            <h1 className="page-title">Professional <span className="accent">Experience</span></h1>
            <p className="page-subtitle">Leadership, innovation, and impact across technology and education sectors.</p>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <h2 className="section-heading" data-animate="fade-up">Current & Recent Roles</h2>
          
          <div className="experience-timeline">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="experience-item" data-animate="fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="experience-marker">
                  <span className="marker-icon"></span>
                </div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-group">
                      <h3 className="experience-role">{exp.role}</h3>
                      <p className="experience-company">
                        {exp.company}
                        {exp.type && <span className="experience-type"> • {exp.type}</span>}
                      </p>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="experience-details">
                    <h4 className="details-title">
                      {exp.responsibilities ? "Key Responsibilities & Impact" : "Key Achievements"}
                    </h4>
                    <ul className="details-list">
                      {(exp.responsibilities || exp.achievements)?.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PREVIOUS ROLES */}
          <div className="previous-roles-section" data-animate="fade-up">
            <h3 className="section-subheading">Previous Roles</h3>
            <div className="previous-roles-grid">
              {previousRoles.map((role, idx) => (
                <div key={idx} className="previous-role-card">
                  <h4 className="role-title">{role.role}</h4>
                  <p className="role-company">{role.company}</p>
                  <p className="role-description">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
