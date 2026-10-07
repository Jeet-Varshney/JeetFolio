import React, { useRef, useEffect } from 'react';

const BlossomBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

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

    class Petal {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -Math.random() * 200 - 50;
        this.size = Math.random() * 4 + 3;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 2 - 1;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.1;
        this.opacity = Math.random() * 0.5 + 0.3;

        const colors = [
          'rgba(51, 51, 255, ',
          'rgba(0, 200, 255, ',
          'rgba(99, 102, 241, ',
          'rgba(59, 130, 246, '
        ];
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.angle) * 0.5 + this.speedX;
        this.angle += this.spin;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= forceDirectionX * force * 5;
          this.y -= forceDirectionY * force * 5;
        }

        if (this.y > canvas.height + 50 || this.x > canvas.width + 50 || this.x < -50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size, this.size, -this.size, this.size * 2, 0, this.size * 2);
        ctx.bezierCurveTo(this.size, this.size * 2, this.size, this.size, 0, 0);

        ctx.fillStyle = this.colorBase + this.opacity + ')';
        ctx.fill();
        ctx.restore();
      }
    }

    const particleCount = Math.min(window.innerWidth / 15, 100);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Petal());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

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
        pointerEvents: 'none',
        zIndex: 0,
        background: 'radial-gradient(ellipse at top, #0d1527 0%, #070a14 60%, #04060c 100%)',
      }}
    />
  );
};

export default BlossomBackground;
