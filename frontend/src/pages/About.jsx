import React from 'react';

const stats = [
  { label: 'Live Projects', value: '02' },
  { label: 'Stack Depth', value: '06+' },
  { label: 'Years Learning', value: '3+' },
];

const About = () => {
  return (
    <section className="page-container">
      <div className="section-label">About Me</div>

      <h2 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(2rem, 5vw, 3.2rem)',
        fontWeight: 800,
        marginBottom: 16,
        lineHeight: 1.2,
      }}>
        Building at the intersection of{' '}
        <span style={{
          background: 'linear-gradient(135deg, #3333FF, #00C8FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Code &amp; Security</span>
      </h2>

      <p style={{
        fontSize: '1.05rem', color: 'rgba(226, 232, 240, 0.75)',
        maxWidth: 620, marginBottom: 52, lineHeight: 1.8,
      }}>
        A driven learner blending full-stack development, cybersecurity, and creative
        problem-solving — who values perfection over speed and thrives under challenge.
      </p>

      {/* Stat Bar */}
      <div style={{
        display: 'flex', gap: 0,
        border: '1px solid rgba(51, 51, 255, 0.25)',
        borderRadius: 14,
        background: 'rgba(13, 19, 36, 0.75)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
        overflow: 'hidden',
        marginBottom: 40,
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            flex: 1, padding: '28px 24px', textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(51, 51, 255, 0.15)' : 'none',
          }}>
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #3333FF, #00C8FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
              marginBottom: 6,
            }}>{s.value}</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(226, 232, 240, 0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        <div className="card">
          <div style={{ fontSize: '1.6rem', marginBottom: 14 }}>🧠</div>
          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.15rem', fontWeight: 700, marginBottom: 12 }}>
            Who I Am
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(226, 232, 240, 0.75)', lineHeight: 1.75 }}>
            A driven learner blending full-stack development, cybersecurity, and problem-solving
            who values perfection over speed and thrives under challenge.
          </p>
        </div>

        <div className="card">
          <div style={{ fontSize: '1.6rem', marginBottom: 14 }}>🚀</div>
          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.15rem', fontWeight: 700, marginBottom: 12 }}>
            Current Focus
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(226, 232, 240, 0.75)', lineHeight: 1.75 }}>
            Constantly building, securing, and optimizing web platforms. Calm under pressure…
            until things break — then turns it into a comeback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
