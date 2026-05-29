import { useEffect } from 'react';

const CaseStudies: React.FC = () => {
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

  const caseStudies = [
    {
      id: 1,
      title: "Kasam Construction Company Website",
      category: "Web Development · SEO",
      problem: "Kasam Construction was operating with very low online visibility and was mostly known only within Kisumu and surrounding areas. The company had no strong digital presence, making it difficult to attract clients beyond local referrals.",
      solution: "I designed and developed a professional company website and implemented SEO optimization strategies to improve search visibility and online discoverability.",
      results: "Since launch, Kasam Construction gained increased online visibility and started receiving client inquiries from a wider geographical reach beyond their immediate locality, significantly improving their business exposure.",
      impact: ["Expanded Market Reach", "Increased Client Inquiries", "Improved Online Visibility"]
    },
    {
      id: 2,
      title: "DawaFront Healthcare System",
      category: "Healthcare · Full-Stack",
      problem: "DawaFront faced challenges in patient management, including inefficient follow-ups after treatment, reliance on phone calls and text messages for drug orders, and lack of structured remote patient monitoring.",
      solution: "I developed a web-based healthcare system to streamline patient management, including structured patient records, pharmacy stock tracking, payment handling, remote consultation support, and improved communication channels.",
      results: "The system improved patient follow-up efficiency, simplified drug ordering, enhanced pharmacy stock monitoring, and enabled better remote patient engagement and healthcare delivery workflows.",
      impact: ["Improved Patient Follow-ups", "Streamlined Drug Ordering", "Enhanced Remote Care"]
    },
    {
      id: 3,
      title: "SMACOM Solutions Platform",
      category: "IoT · Smart Systems",
      problem: "SMACOM initially struggled with low awareness and relied on manual outreach in Kisumu and Kisii. Their waste management operations were decentralized, with no structured system to monitor compost pits, waste processing stages, or learner activities.",
      solution: "I developed a digital platform integrating IoT and backend systems to centralize operations, monitor compost processes, track waste management workflows, and support digital learning and coordination.",
      results: "The platform improved operational visibility, streamlined waste management processes, and enabled better monitoring and coordination of activities, making operations more structured and scalable.",
      impact: ["Centralized Operations", "Process Monitoring", "Scalable Infrastructure"]
    },
    {
      id: 4,
      title: "Scheme AI Platform",
      category: "AI · Educational Technology",
      problem: "Scheme AI lacked a structured system for managing learners, leads, and remote engagement for AI and digital skills training programs.",
      solution: "I developed a system using modern web technologies to manage learners, streamline communication, and support remote training operations and digital outreach.",
      results: "The system improved learner management, increased operational efficiency, and enabled better coordination of remote AI training programs and digital skill delivery.",
      impact: ["Better Learner Management", "Increased Efficiency", "Remote Training Support"]
    },
    {
      id: 5,
      title: "Terrasept Solutions Website",
      category: "Corporate · Branding",
      problem: "Terrasept Solutions needed a professional digital presence to represent their services and improve visibility in the technology and solutions space.",
      solution: "I designed and developed a modern, responsive company website aligned with their branding and service offerings.",
      results: "The website improved their online presence, strengthened brand credibility, and provided a central platform for showcasing services and attracting clients.",
      impact: ["Enhanced Brand Presence", "Client Attraction", "Improved Credibility"]
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner" data-animate="fade-up">
            <span className="page-label">Real-World Solutions</span>
            <h1 className="page-title">Case <span className="accent">Studies</span></h1>
            <p className="page-subtitle">Proven strategies and measurable results that drive business growth.</p>
          </div>
        </div>
      </section>

      <section className="case-studies-section">
        <div className="container">
          <div className="case-studies-grid">
            {caseStudies.map((study) => (
              <div key={study.id} className="case-study-card" data-animate="fade-up">
                <div className="case-study-header">
                  <span className="case-study-number">0{study.id}</span>
                  <span className="case-study-category">{study.category}</span>
                </div>

                <h3 className="case-study-title">{study.title}</h3>

                <div className="case-study-content">
                  <div className="case-study-block">
                    <h4 className="block-title">Problem</h4>
                    <p className="block-text">{study.problem}</p>
                  </div>

                  <div className="case-study-block">
                    <h4 className="block-title">Solution</h4>
                    <p className="block-text">{study.solution}</p>
                  </div>

                  <div className="case-study-block">
                    <h4 className="block-title">Results</h4>
                    <p className="block-text">{study.results}</p>
                  </div>
                </div>

                <div className="case-study-impact">
                  <h5 className="impact-title">Key Outcomes</h5>
                  <div className="impact-tags">
                    {study.impact.map((item, idx) => (
                      <span key={idx} className="impact-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
