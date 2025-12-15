import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  const features = [
    {
      title: 'Regulatory Intelligence',
      description: 'Stay ahead of evolving compliance requirements across jurisdictions with real-time regulatory monitoring',
      icon: '🛡️',
      gradient: 'cyan'
    },
    {
      title: 'Risk Assessment',
      description: 'Identify and mitigate compliance risks before they become regulatory issues',
      icon: '📊',
      gradient: 'green'
    },
    {
      title: 'Policy Development',
      description: 'Frameworks tailored to your institution\'s unique operational model and risk profile',
      icon: '📋',
      gradient: 'cyan'
    },
    {
      title: 'Audit Readiness',
      description: 'Comprehensive documentation and controls designed to withstand regulatory scrutiny',
      icon: '✓',
      gradient: 'pink'
    },
    {
      title: 'Training Programs',
      description: 'Educate your team on compliance requirements and best practices industry-wide',
      icon: '📚',
      gradient: 'green'
    },
    {
      title: 'Ongoing Operations',
      description: 'Sustained compliance support with continuous monitoring and optimization',
      icon: '⚙️',
      gradient: 'pink'
    }
  ];

  const trustItems = [
    'Policies',
    'Programs',
    'Independent Reviews',
    'Training',
    'Licensing'
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-icon">◆</span>
              <span className="logo-text">BitAML</span>
            </div>
            <button className="nav-cta">Contact Us</button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Trusted by leading crypto institutions globally
            </div>
            <h1 className="hero-title">
              Compliance Engineering for
              <br />
              <span className="gradient-text">Crypto Institutions</span>
            </h1>
            <h2 className="hero-subtitle-main">
              Designed, Built, and Operationalized for Regulated Financial Platforms
            </h2>
            <p className="hero-description">
              BitAML collaborates with exchanges, OTC desks, DeFi protocols, lenders, and financial institutions to deliver compliance frameworks that withstand regulatory scrutiny — with clarity, precision, and real-world efficacy.
            </p>
            <div className="hero-cta-group">
              <button className="cta-button primary-cta">
                Talk to a Compliance Leader
                <span className="button-arrow">→</span>
              </button>
              <button className="cta-button secondary-cta">
                Explore Services
              </button>
            </div>
            <p className="hero-footnote">No credit card required • Expert consultation included</p>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <p className="trust-label">Our comprehensive approach covers</p>
          <div className="trust-items">
            {trustItems.map((item, index) => (
              <div key={index} className="trust-item">
                <span className="trust-icon">→</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">
              End-to-End Compliance
              <span className="gradient-text"> Excellence</span>
            </h2>
            <p className="section-description">
              Purpose-built frameworks for crypto and regulated financial institutions
            </p>
          </div>

          <div className="bento-grid">
            {features.map((feature, index) => (
              <div key={index} className={`bento-card bento-card-${index + 1} gradient-${feature.gradient}`}>
                <div className="card-content">
                  <div className="card-icon">{feature.icon}</div>
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-description">{feature.description}</p>
                </div>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Transform Your Compliance Strategy</h2>
            <p className="cta-description">
              Achieve regulatory excellence while maintaining operational efficiency
            </p>
            <button className="cta-button-large">
              Schedule a Consultation
              <span className="button-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="logo">
                <span className="logo-icon">◆</span>
                <span className="logo-text">BitAML</span>
              </div>
              <p className="footer-tagline">Compliance engineering for crypto institutions</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#policies">Policies</a>
                <a href="#programs">Programs</a>
                <a href="#reviews">Reviews</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#careers">Careers</a>
                <a href="#blog">Blog</a>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#training">Training</a>
                <a href="#licensing">Licensing</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 BitAML. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
