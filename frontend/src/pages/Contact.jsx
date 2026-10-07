import React from 'react';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const contactLinks = [
  { label: 'Email', value: 'Jeetvarshney2007@gmail.com', action: 'Send Message', link: 'mailto:Jeetvarshney2007@gmail.com', color: '#ff4d4d', icon: <MailIcon /> },
  { label: 'GitHub', value: 'Jeet-Varshney', action: 'View Profile', link: 'https://github.com/Jeet-Varshney', color: '#38bdf8', icon: <GitHubIcon /> },
  { label: 'LinkedIn', value: 'jeetvarshney', action: 'Connect', link: 'https://www.linkedin.com/in/jeetvarshney', color: '#60a5fa', icon: <LinkedInIcon /> },
  { label: 'Twitter / X', value: 'jeet7varshney', action: 'Follow', link: 'https://x.com/jeet7varshney', color: '#818cf8', icon: <TwitterIcon /> },
];

const Contact = () => {
  return (
    <section className="page-container" style={{ overflow: 'hidden' }}>
      <div className="section-label">Contact</div>

      <h2 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 800,
        marginBottom: 12,
      }}>
        Pick a{' '}
        <span style={{
          background: 'linear-gradient(135deg, #3333FF, #00C8FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Card</span>
      </h2>
      <p style={{ fontSize: '1rem', color: 'rgba(226, 232, 240, 0.70)' }}>
        Hover over the cards to view details and connect.
      </p>

      <style>{`
        .card-hand .contact-card:nth-child(1) { transform: rotate(-15deg) translateX(-18px); }
        .card-hand .contact-card:nth-child(2) { transform: rotate(-5deg) translateX(-5px); }
        .card-hand .contact-card:nth-child(3) { transform: rotate(5deg) translateX(5px); }
        .card-hand .contact-card:nth-child(4) { transform: rotate(15deg) translateX(18px); }

        .card-hand:hover .contact-card {
          opacity: 0.65;
          z-index: 1;
        }

        .card-hand .contact-card {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-hand:hover .contact-card:nth-child(1) { transform: rotate(-28deg) translateX(-64px) translateY(12px) !important; }
        .card-hand:hover .contact-card:nth-child(2) { transform: rotate(-9deg) translateX(-20px) translateY(2px) !important; }
        .card-hand:hover .contact-card:nth-child(3) { transform: rotate(9deg) translateX(20px) translateY(2px) !important; }
        .card-hand:hover .contact-card:nth-child(4) { transform: rotate(28deg) translateX(64px) translateY(12px) !important; }

        .card-hand:hover .contact-card:hover {
          transform: translateY(-64px) rotate(0deg) scale(1.15) !important;
          opacity: 1 !important;
          z-index: 100 !important;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.60), 0 0 40px rgba(51, 51, 255, 0.35) !important;
        }
        
        .contact-card:hover .action-btn {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      <div 
        className="card-hand"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 80,
          marginBottom: 80,
          height: 400,
          position: 'relative',
        }}
      >
        <div style={{ position: 'relative', width: 240, height: 350 }}>
          {contactLinks.map((c, i) => {
            return (
              <a
                key={i}
                className="contact-card"
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  textDecoration: 'none', 
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%', height: '100%',
                  zIndex: i,
                  transformOrigin: '50% 120%',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgba(13, 19, 36, 0.88)',
                    borderRadius: 16,
                    border: '1px solid rgba(51, 51, 255, 0.30)',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.50)',
                    backdropFilter: 'blur(16px)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 14,
                    position: 'relative',
                  }}
                >
                  <div style={{ 
                    display: 'flex', flexDirection: 'column', alignItems: 'center', 
                    position: 'absolute', top: 18, left: 18,
                    color: c.color, fontSize: '1.6rem', lineHeight: 1,
                  }}>
                    {c.icon}
                  </div>

                  <div style={{ 
                    flex: 1, display: 'flex', flexDirection: 'column', 
                    alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', padding: '0 20px',
                  }}>
                     <div style={{ 
                       fontSize: '4.5rem', 
                       marginBottom: 16,
                       color: c.color,
                     }}>
                       {c.icon}
                     </div>
                     <h3 style={{ 
                       fontFamily: "'Outfit', sans-serif", fontSize: '1.8rem', 
                       color: '#ffffff', margin: 0, lineHeight: 1.1 
                     }}>
                       {c.label}
                     </h3>
                     <span style={{ 
                       fontSize: '0.85rem', color: 'rgba(226, 232, 240, 0.70)', 
                       marginTop: 8, fontWeight: 500 
                     }}>
                       {c.value}
                     </span>
                     
                     <div 
                       className="action-btn"
                       style={{
                         marginTop: 20,
                         padding: '8px 20px',
                         background: c.color,
                         color: '#fff',
                         borderRadius: 99,
                         fontSize: '0.8rem',
                         fontWeight: 700,
                         letterSpacing: '0.05em',
                         textTransform: 'uppercase',
                         opacity: 0,
                         transform: 'translateY(10px)',
                         transition: 'all 0.4s ease 0.1s',
                         boxShadow: `0 4px 14px ${c.color}60`
                       }}
                     >
                       {c.action}
                     </div>
                  </div>

                  <div style={{ 
                    display: 'flex', flexDirection: 'column', alignItems: 'center', 
                    position: 'absolute', bottom: 18, right: 18,
                    color: c.color, fontSize: '1.6rem', lineHeight: 1,
                  }}>
                    {c.icon}
                  </div>

                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
