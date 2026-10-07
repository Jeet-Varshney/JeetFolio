import React, { useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import BlossomBackground from './BlossomBackground';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <BlossomBackground />
      
      <nav style={{
        position: 'fixed',
        top: 18,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        height: 64,
        borderRadius: 16,
        background: 'rgba(11, 16, 30, 0.75)',
        border: '1px solid rgba(51, 51, 255, 0.25)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.40)',
        zIndex: 1000,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transition: 'all 0.3s ease',
      }}>
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 9,
            background: 'linear-gradient(135deg, #3333FF, #00C8FF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Outfit', sans-serif", fontWeight: 900,
            fontSize: '0.95rem', color: '#fff', letterSpacing: '-0.03em',
            boxShadow: '0 0 15px rgba(51, 51, 255, 0.40)',
          }}>J</div>
          <span style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.1rem',
            color: '#f8fafc', letterSpacing: '-0.02em',
          }}>Jeet<span style={{ color: '#00C8FF' }}>.</span></span>
        </NavLink>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              id={`nav-${item.toLowerCase()}`}
              style={({ isActive }) => ({
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                padding: '6px 14px',
                borderRadius: 10,
                color: isActive ? '#fff' : 'rgba(226, 232, 240, 0.70)',
                background: isActive
                  ? 'linear-gradient(135deg, #3333FF, #00C8FF)'
                  : 'transparent',
                boxShadow: isActive ? '0 4px 14px rgba(51, 51, 255, 0.40)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              })}
              onMouseEnter={e => {
                const isActive = e.currentTarget.getAttribute('aria-current') === 'page';
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(51, 51, 255, 0.15)';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={e => {
                const isActive = e.currentTarget.getAttribute('aria-current') === 'page';
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(226, 232, 240, 0.70)';
                }
              }}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </nav>

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
      }}>
        <Outlet />
      </div>

      <footer style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1100, margin: '0 auto',
        padding: '28px 24px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#3333FF',
            boxShadow: '0 0 10px #3333FF',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{ fontSize: '0.82rem', color: 'rgba(226,232,240,0.6)', fontFamily: "'Outfit', sans-serif" }}>
            JEET VARSHNEY &copy; 2025
          </span>
        </div>
        <span style={{ fontSize: '0.82rem', color: 'rgba(226,232,240,0.45)', fontFamily: "'Outfit', sans-serif" }}>
          Built with React &amp; ❤️
        </span>
      </footer>
    </>
  );
};

export default Layout;
