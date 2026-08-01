import React from 'react';
import nexttDashboard from '../assets/nextt_dashboard.png';

const tags = ['Full-Stack', 'Web App', 'Resource Management', 'Vercel'];

const Projects = () => {
  return (
    <section className="page-container">
      <div className="section-label">Projects</div>

      <h2 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 800,
        marginBottom: 12,
      }}>
        Things I've{' '}
        <span style={{
          background: 'linear-gradient(135deg, #ff758c, #ffb199)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Built</span>
      </h2>
      <p style={{ fontSize: '1rem', color: 'rgba(45,36,36,0.6)', marginBottom: 52 }}>
        Live projects shipped and deployed.
      </p>

      <style>{`
        .project-card {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(255, 117, 140, 0.15);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 117, 140, 0.35);
          box-shadow: 0 24px 50px rgba(255, 117, 140, 0.1);
        }
        .project-image-sec {
          position: relative;
          overflow: hidden;
          min-height: 340px;
          border-right: 1px solid rgba(255, 117, 140, 0.15);
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover .project-image {
          transform: scale(1.04);
        }
        .project-details-sec {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 868px) {
          .project-card {
            grid-template-columns: 1fr;
          }
          .project-image-sec {
            min-height: 240px;
            border-right: none;
            border-bottom: 1px solid rgba(255, 117, 140, 0.15);
          }
          .project-details-sec {
            padding: 28px;
          }
        }
      `}</style>

      <div className="project-card">
        {/* Image Column */}
        <div className="project-image-sec">
          <img 
            src={nexttDashboard} 
            alt="Nextt Campus Dashboard Mockup" 
            className="project-image"
          />
          {/* Top colored line indicator */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: 4,
            background: 'linear-gradient(90deg, #ff758c, #ffb199)'
          }} />
        </div>

        {/* Details Column */}
        <div className="project-details-sec">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            marginBottom: 20, padding: '5px 12px', borderRadius: 99,
            background: 'rgba(255,117,140,0.08)', border: '1px solid rgba(255,117,140,0.18)',
            alignSelf: 'flex-start'
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff758c', boxShadow: '0 0 6px #ff758c' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: '#ff758c', textTransform: 'uppercase' }}>
              Live &amp; Deployed
            </span>
          </div>

          <h3 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 850, marginBottom: 8, lineHeight: 1.15,
            color: '#2d2424'
          }}>
            Nextt Campus
          </h3>

          <p style={{ fontSize: '0.98rem', fontWeight: 500, color: 'rgba(45,36,36,0.65)', marginBottom: 20 }}>
            Smart Campus Resource Optimization Platform
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
            {tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'rgba(45,36,36,0.72)', marginBottom: 28 }}>
            Web-based platform to streamline classroom, lab, and facility usage. Reduces scheduling
            conflicts, improves accessibility, and centralizes campus resource management.
          </p>

          <a
            href="https://nextt-campus.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="project-nextt-link"
            className="btn solid"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start' }}
          >
            <span>Visit Project</span>
            <span style={{ fontSize: '1rem' }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
