import React, { useRef, useEffect } from 'react';

const BlossomBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mouse interaction state
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle definition
    class Petal {
      constructor() {
        this.reset();
        // Distribute initially across the screen height
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -Math.random() * 200 - 50; // Start above screen
        this.size = Math.random() * 4 + 3; // 3 to 7 px
        this.speedY = Math.random() * 1.5 + 0.5; // fall speed
        this.speedX = Math.random() * 2 - 1; // drift speed
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.1; // rotation speed
        this.opacity = Math.random() * 0.5 + 0.3; // 0.3 to 0.8
        
        // Vibrant Electric Blue & Cyan shades for dark background
        const colors = [
          'rgba(51, 51, 255, ',   // Electric Blue (#3333FF)
          'rgba(0, 200, 255, ',   // Vivid Cyan (#00C8FF)
          'rgba(99, 102, 241, ',  // Indigo Accent (#6366F1)
          'rgba(59, 130, 246, '   // Sapphire Blue (#3B82F6)
        ];
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.angle) * 0.5 + this.speedX; // wavy drift
        this.angle += this.spin;

        // Mouse Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // push away
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= forceDirectionX * force * 5;
          this.y -= forceDirectionY * force * 5;
        }

        // Reset if off screen
        if (this.y > canvas.height + 50 || this.x > canvas.width + 50 || this.x < -50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        // Draw petal shape
        ctx.beginPath();
        // A simple teardrop/petal shape using bezier curves
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size, this.size, -this.size, this.size * 2, 0, this.size * 2);
        ctx.bezierCurveTo(this.size, this.size * 2, this.size, this.size, 0, 0);
        
        ctx.fillStyle = this.colorBase + this.opacity + ')';
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    const particleCount = Math.min(window.innerWidth / 15, 100); // responsive count
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Petal());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Allow clicks to pass through
        zIndex: 0, // Behind content
        background: 'radial-gradient(ellipse at top, #0d1527 0%, #070a14 60%, #04060c 100%)', // Rich deep dark blue background
      }}
    />
  );
};

export default BlossomBackground;
