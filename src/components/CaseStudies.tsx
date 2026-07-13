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
      title: "Scheme AI Platform",
      category: "AI · Web Platform",
      problem: "The client needed a modern AI-powered platform that could simplify complex planning workflows while providing a premium user experience.",
      solution: "Built a scalable AI platform featuring intelligent workflows, responsive dashboards, authentication, and a polished user experience optimized for speed and usability.",
      results: "Delivered a production-ready platform that strengthened the company's digital credibility, improved user confidence, and established a strong foundation for future AI capabilities.",
      impact: ["Digital Credibility", "Improved User Confidence", "Foundational AI Platform"]
    },
    {
      id: 2,
      title: "DawaFront Healthcare",
      category: "Healthcare · Full-Stack",
      problem: "The healthcare provider lacked a professional digital presence where patients could easily discover services and reach healthcare professionals.",
      solution: "Developed a modern healthcare website with service directories, patient information, contact channels, and responsive design for all devices.",
      results: "Enhanced the organization's online visibility, improved accessibility for patients, and increased trust through a professional healthcare presence.",
      impact: ["Stronger Online Visibility", "Improved Patient Access", "Greater Trust"]
    },
    {
      id: 3,
      title: "Kasam Construction",
      category: "Construction · Corporate",
      problem: "The company needed a modern website that reflected the quality of its construction services and generated new business opportunities.",
      solution: "Built a corporate website showcasing completed projects, company services, project galleries, and clear contact pathways for prospective clients.",
      results: "Elevated the company's professional image, improved online discoverability, and made it easier for potential clients to inquire about projects.",
      impact: ["Professional Brand Image", "Increased Lead Generation", "Better Discoverability"]
    },
    {
      id: 4,
      title: "TerraSept Solutions",
      category: "Corporate · Branding",
      problem: "Establish a strong digital identity for a technology company offering software development and digital transformation services.",
      solution: "Created an enterprise-grade corporate website highlighting software solutions, technical expertise, industry services, and business value.",
      results: "Positioned TerraSept Solutions as a credible technology partner capable of delivering enterprise software across multiple industries.",
      impact: ["Credible Digital Identity", "Stronger Brand Positioning", "Enterprise Appeal"]
    },
    {
      id: 5,
      title: "Ntarakwai Pure & Natural Honey",
      category: "E-commerce · Brand",
      problem: "The business required an online platform to market premium honey products and expand beyond local sales.",
      solution: "Built an e-commerce-ready website with product showcases, storytelling, responsive shopping experience, and brand-focused design.",
      results: "Strengthened customer trust, increased product visibility, and laid the foundation for online sales and broader market reach.",
      impact: ["Higher Product Visibility", "Improved Trust", "Sales-Ready Presence"]
    },
    {
      id: 6,
      title: "SnowSea & Shoform Foods",
      category: "Food · Marketing",
      problem: "The food company needed a modern online presence that reflected product quality and strengthened customer confidence.",
      solution: "Designed a premium food industry website emphasizing product quality, company values, and customer engagement.",
      results: "Improved the company's professional image, enhanced brand recognition, and created an effective digital marketing platform.",
      impact: ["Stronger Brand Recognition", "Customer Confidence", "Marketing-Ready Website"]
    },
    {
      id: 7,
      title: "Wazee wa Mazingira CBO",
      category: "Nonprofit · Community",
      problem: "The conservation organization needed greater visibility to attract donors, volunteers, conservation partners, and supporters.",
      solution: "Built a modern organizational website featuring conservation programs, project showcases, volunteer information, donation integration, and organizational storytelling.",
      results: "Expanded the organization's online visibility, strengthened stakeholder confidence, and provided a professional platform for community engagement and fundraising initiatives.",
      impact: ["Increased Visibility", "Stronger Stakeholder Trust", "Community Engagement"]
    },
    {
      id: 8,
      title: "MC Maticha Events",
      category: "Events · Promotional",
      problem: "The entertainer lacked a professional booking platform that could showcase services and attract event organizers.",
      solution: "Developed a visually engaging promotional website featuring event services, media galleries, booking inquiries, and brand identity.",
      results: "Increased online visibility, simplified client inquiries, and strengthened the entertainer's professional brand.",
      impact: ["Better Booking Visibility", "Simplified Inquiries", "Professional Event Brand"]
    },
    {
      id: 9,
      title: "Umoja Housing Agency",
      category: "Real Estate · Service",
      problem: "The agency needed a digital platform where customers could discover available properties and engage with agents more efficiently.",
      solution: "Built a modern real estate platform featuring property listings, agent profiles, inquiry management, and scalable architecture for future expansion.",
      results: "Improved customer engagement, strengthened trust, and simplified the property discovery process for prospective buyers and tenants.",
      impact: ["Improved Customer Engagement", "Stronger Trust", "Easier Property Discovery"]
    },
    {
      id: 10,
      title: "Jibar Technologies",
      category: "Technology · Corporate",
      problem: "The company required a professional website to showcase its technology services and attract new business opportunities.",
      solution: "Designed and developed a corporate website highlighting services, expertise, and business capabilities.",
      results: "Established a credible online presence that improved brand visibility and increased customer confidence.",
      impact: ["Credible Online Presence", "Improved Brand Visibility", "Customer Confidence"]
    },
    {
      id: 11,
      title: "Standard Furniture",
      category: "Retail · Showroom",
      problem: "The furniture business needed a digital showroom to showcase products and strengthen its brand identity.",
      solution: "Built a responsive product showcase featuring furniture collections, company information, and customer contact pathways.",
      results: "Enhanced the company's digital presence and created an engaging platform for showcasing products to potential customers.",
      impact: ["Stronger Brand Identity", "Improved Product Showcase", "Engaging Customer Experience"]
    },
    {
      id: 12,
      title: "SMACOM Platform",
      category: "IoT · Smart Systems",
      problem: "Develop a smart community management platform capable of digitizing waste management, learning, communication, and community services.",
      solution: "Designed and developed a scalable platform supporting authentication, IoT integrations, workflow automation, role-based dashboards, M-Pesa integration, and cloud infrastructure.",
      results: "Built a scalable foundation for a smart community platform capable of supporting digital transformation initiatives, operational efficiency, and future expansion across multiple communities.",
      impact: ["Digital Transformation", "Operational Efficiency", "Scalable Community Platform"]
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
