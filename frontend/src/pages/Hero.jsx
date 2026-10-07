import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="page-container" style={{ alignItems: 'flex-start', gap: 0 }}>

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '6px 14px',
        border: '1px solid rgba(51, 51, 255, 0.35)',
        borderRadius: 99,
        background: 'rgba(51, 51, 255, 0.1)',
        backdropFilter: 'blur(8px)',
        marginBottom: 28,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: '50%', background: '#3333FF',
          boxShadow: '0 0 8px #3333FF', animation: 'pulse 2s infinite'
        }} />
        <span style={{
          fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em',
          color: 'rgba(226, 232, 240, 0.85)', textTransform: 'uppercase',
          fontFamily: "'Outfit', sans-serif",
        }}>Available for opportunities</span>
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(3.2rem, 9vw, 7rem)',
        fontWeight: 900,
        lineHeight: 1.0,
        marginBottom: 18,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1) 0.1s',
      }}>
        <span style={{ color: '#ffffff' }}>JEET</span>
        <br />
        <span style={{
          background: 'linear-gradient(135deg, #3333FF 0%, #00C8FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>VARSHNEY</span>
      </h1>

      {/* Subtitle */}
      <h2 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
        fontWeight: 400,
        color: 'rgba(226, 232, 240, 0.75)',
        marginBottom: 36,
        letterSpacing: '0.02em',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1) 0.2s',
      }}>
        Full-Stack Developer &nbsp;·&nbsp; Cybersecurity &nbsp;·&nbsp; Problem Solver
      </h2>

      {/* Bio Card */}
      <div style={{
        maxWidth: 680,
        marginBottom: 48,
        padding: '24px 28px',
        background: 'rgba(13, 19, 36, 0.75)',
        border: '1px solid rgba(51, 51, 255, 0.25)',
        borderLeft: '4px solid #3333FF',
        borderRadius: 14,
        backdropFilter: 'blur(10px)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition: 'all 0.75s cubic-bezier(0.16,1,0.3,1) 0.3s',
      }}>
        <p style={{
          fontSize: '1.05rem',
          lineHeight: 1.75,
          color: 'rgba(248, 250, 252, 0.88)',
          fontStyle: 'italic',
        }}>
          "A driven learner blending full-stack development, cybersecurity, and problem-solving,
          who values perfection over speed and thrives under challenge. Calm under pressure…
          until things break — then turns it into a comeback."
        </p>
      </div>

      {/* CTAs */}
      <div style={{
        display: 'flex', gap: 14, flexWrap: 'wrap',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.75s cubic-bezier(0.4,0,0.2,1) 0.4s',
      }}>
        <NavLink to="/projects" className="btn solid" id="hero-projects-btn">
          <span>View Projects</span>
          <span style={{ fontSize: '1.1rem' }}>→</span>
        </NavLink>
        <NavLink to="/contact" className="btn" id="hero-contact-btn">
          <span>Contact Me</span>
        </NavLink>
      </div>

      {/* Floating decorative orb */}
      <div style={{
        position: 'absolute',
        top: '10%', right: '-5%',
        width: 380, height: 380,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(51, 51, 255, 0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
        animation: 'orbFloat 8s ease-in-out infinite alternate',
      }} />
    </section>
  );
};

export default Hero;
