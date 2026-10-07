import React from 'react';
import garajDashboard from '../assets/garaj_dashboard.png';
import nexttDashboard from '../assets/nextt_dashboard.png';

const garajTags = [
  'React',
  'Vite',
  'JavaScript',
  'FastAPI',
  'Python',
  'WebSocket',
  'PyTorch',
  'Wav2Vec2 / XLS-R',
  'AASIST',
  'Torchaudio',
  'AI / Cybersecurity',
];

const garajFeatures = [
  'Real-time audio streaming & detection (16 kHz mono processing)',
  'Hindi and English voice spectro-temporal audio analysis',
  'Wav2Vec2 / XLS-R feature extraction with AASIST anti-spoofing architecture',
  'FastAPI backend with WebSocket live detection telemetry',
  'Designed for future ASR, transcript analysis & social-engineering prevention',
];

const nexttTags = ['Full-Stack', 'Web App', 'Resource Management', 'Vercel'];

const Projects = () => {
  return (
    <section className="page-container">
      <div className="section-label">Projects</div>

      <h2
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          marginBottom: 12,
        }}
      >
        Things I've{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, #3333FF, #00C8FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Built
        </span>
      </h2>
      <p style={{ fontSize: '1rem', color: 'rgba(226, 232, 240, 0.70)', marginBottom: 52 }}>
        Featured major projects shipped, deployed, and under active development.
      </p>

      <style>{`
        .projects-wrapper {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .project-card {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          background: rgba(13, 19, 36, 0.75);
          border: 1px solid rgba(51, 51, 255, 0.25);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 200, 255, 0.45);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45);
        }
        .project-image-sec {
          position: relative;
          overflow: hidden;
          min-height: 360px;
          border-right: 1px solid rgba(51, 51, 255, 0.15);
          background: #0f1319;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
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
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          line-height: 1.5;
          color: rgba(226, 232, 240, 0.80);
        }
        .feature-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3333FF;
          margin-top: 7px;
          flex-shrink: 0;
        }
        .action-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        @media (max-width: 868px) {
          .project-card {
            grid-template-columns: 1fr;
          }
          .project-image-sec {
            min-height: 240px;
            border-right: none;
            border-bottom: 1px solid rgba(51, 51, 255, 0.15);
          }
          .project-details-sec {
            padding: 28px;
          }
          .action-buttons {
            flex-direction: column;
            align-items: stretch;
          }
          .action-buttons .btn {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>

      <div className="projects-wrapper">
        <div className="project-card">
          <div className="project-image-sec">
            <img
              src={garajDashboard}
              alt="GARAJ AI Real-Time Voice Cloning Detection Dashboard"
              className="project-image"
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: 4,
                background: 'linear-gradient(90deg, #3333FF, #6666FF)',
              }}
            />
          </div>

          <div className="project-details-sec">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                marginBottom: 18,
                padding: '5px 12px',
                borderRadius: 99,
                background: 'rgba(51, 51, 255, 0.08)',
                border: '1px solid rgba(51, 51, 255, 0.18)',
                alignSelf: 'flex-start',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#3333FF',
                  boxShadow: '0 0 6px #3333FF',
                }}
              />
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#3333FF',
                  textTransform: 'uppercase',
                }}
              >
                Live &amp; Deployed &nbsp;·&nbsp; AI / Cybersecurity
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: 850,
                marginBottom: 6,
                lineHeight: 1.15,
                color: '#ffffff',
              }}
            >
              GARAJ
            </h3>

            <p
              style={{
                fontSize: '0.98rem',
                fontWeight: 600,
                color: 'rgba(226, 232, 240, 0.75)',
                marginBottom: 16,
              }}
            >
              AI-Powered Real-Time Voice Cloning Detection
            </p>

            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.65,
                color: 'rgba(226, 232, 240, 0.70)',
                marginBottom: 20,
              }}
            >
              An actively developed AI-powered real-time cybersecurity system designed to detect synthetic and voice-cloned speech across Hindi and English audio. GARAJ streams incoming speech channels and analyzes spectro-temporal features to differentiate between authentic (REAL) and voice-cloned (SYNTHETIC) speech.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginBottom: 22,
                background: 'rgba(51, 51, 255, 0.04)',
                padding: '16px 18px',
                borderRadius: 12,
                border: '1px solid rgba(51, 51, 255, 0.1)',
              }}
            >
              {garajFeatures.map((feat, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-bullet" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {garajTags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="action-buttons">
              <a
                href="https://garaj-voice.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                id="project-garaj-demo-link"
                className="btn solid"
              >
                <span>Live Demo</span>
                <span style={{ fontSize: '1rem' }}>↗</span>
              </a>

              <a
                href="https://github.com/Jeet-Varshney/GARAJ"
                target="_blank"
                rel="noopener noreferrer"
                id="project-garaj-github-link"
                className="btn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ opacity: 0.85 }}
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
                <span style={{ fontSize: '0.9rem' }}>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image-sec">
            <img
              src={nexttDashboard}
              alt="Nextt Campus Dashboard Mockup"
              className="project-image"
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: 4,
                background: 'linear-gradient(90deg, #3333FF, #6666FF)',
              }}
            />
          </div>

          <div className="project-details-sec">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                marginBottom: 20,
                padding: '5px 12px',
                borderRadius: 99,
                background: 'rgba(51, 51, 255, 0.08)',
                border: '1px solid rgba(51, 51, 255, 0.18)',
                alignSelf: 'flex-start',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#3333FF',
                  boxShadow: '0 0 6px #3333FF',
                }}
              />
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#3333FF',
                  textTransform: 'uppercase',
                }}
              >
                Live &amp; Deployed
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: 850,
                marginBottom: 8,
                lineHeight: 1.15,
                color: '#ffffff',
              }}
            >
              Nextt Campus
            </h3>

            <p
              style={{
                fontSize: '0.98rem',
                fontWeight: 500,
                color: 'rgba(226, 232, 240, 0.75)',
                marginBottom: 20,
              }}
            >
              Smart Campus Resource Optimization Platform
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {nexttTags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.7,
                color: 'rgba(226, 232, 240, 0.70)',
                marginBottom: 28,
              }}
            >
              Web-based platform to streamline classroom, lab, and facility usage. Reduces scheduling
              conflicts, improves accessibility, and centralizes campus resource management.
            </p>

            <div className="action-buttons">
              <a
                href="https://nextt-campus.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                id="project-nextt-link"
                className="btn solid"
                style={{ alignSelf: 'flex-start' }}
              >
                <span>Visit Project</span>
                <span style={{ fontSize: '1rem' }}>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
