import React, { useEffect, useState } from 'react';

const skillsData = [
  { name: 'HTML', percent: 85, icon: '📄', category: 'Frontend', color: '#f97316' },
  { name: 'CSS', percent: 80, icon: '🎨', category: 'Frontend', color: '#6366f1' },
  { name: 'Node.js', percent: 72, icon: '⚡', category: 'Backend', color: '#22d3ee' },
  { name: 'Python', percent: 68, icon: '🐍', category: 'Cyber / Scripting', color: '#a78bfa' },
  { name: 'C / C++', percent: 65, icon: '⚙️', category: 'Systems', color: '#34d399' },
  { name: 'Canva', percent: 78, icon: '✨', category: 'Design', color: '#f472b6' },
];

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="page-container">
      <div className="section-label">Core Competencies</div>

      <h2 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 800,
        marginBottom: 12,
      }}>
        My{' '}
        <span style={{
          background: 'linear-gradient(135deg, #ff758c, #ffb199)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Tech Stack</span>
      </h2>
      <p style={{ fontSize: '1rem', color: 'rgba(45,36,36,0.6)', marginBottom: 48 }}>
        Skills I actively use to build and ship products.
      </p>

      {/* Inject styling for premium hover mechanics and glow */}
      <style>{`
        .skills-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .skills-card:hover {
          transform: translateY(-6px) scale(1.02) !important;
          background: rgba(255, 255, 255, 0.85) !important;
          border-color: var(--bar-color) !important;
          box-shadow: 0 14px 40px rgba(45, 36, 36, 0.05), var(--bar-color) 0px 0px 20px -5px !important;
        }
        .skill-icon-container {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .skills-card:hover .skill-icon-container {
          transform: scale(1.1) rotate(6deg);
        }
        .skill-progress-bar {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .skills-card:hover .skill-progress-bar {
          box-shadow: 0 0 14px var(--bar-color);
        }
      `}</style>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 20 }}>
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="card skills-card"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
              '--bar-color': skill.color,
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div 
                  className="skill-icon-container"
                  style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: `${skill.color}18`,
                    border: `1px solid ${skill.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem',
                  }}
                >
                  {skill.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1rem' }}>
                    {skill.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(45,36,36,0.6)', marginTop: 2 }}>
                    {skill.category}
                  </div>
                </div>
              </div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: '1.4rem',
                color: skill.color,
                lineHeight: 1,
              }}>
                {skill.percent}%
              </div>
            </div>

            {/* Progress Track */}
            <div style={{
              width: '100%', height: 5,
              background: 'rgba(45,36,36,0.05)',
              borderRadius: 99, overflow: 'hidden',
            }}>
              <div 
                className="skill-progress-bar"
                style={{
                  height: '100%',
                  width: mounted ? `${skill.percent}%` : '0%',
                  background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                  borderRadius: 99,
                  transition: `width 1.4s cubic-bezier(0.1, 0.8, 0.3, 1) ${index * 0.1}s`,
                  boxShadow: `0 0 10px ${skill.color}60`,
                }} 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
