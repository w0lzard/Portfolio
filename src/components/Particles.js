/**
 * Particles.js
 * High-performance, interactive, and theme-adaptive background particle system.
 * Creates an elegant neural-net/constellation effect that responds to mouse movements.
 */

export function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Particle settings
    let particles = [];
    let particleCount = 80;
    const connectionDist = 110;
    const mouseRadius = 160;

    // Shooting stars settings
    let shootingStars = [];
    const maxShootingStars = 4;

    // Mouse coordinates tracking
    const mouse = {
        x: null,
        y: null,
        active: false
    };

    // Color management for smooth transition
    // Light mode base RGB: 10, 10, 10
    // Dark mode base RGB: 249, 250, 251
    const themeColors = {
        light: { r: 10, g: 10, b: 10 },
        dark: { r: 249, g: 250, b: 251 }
    };

    // Current color coordinates (will lerp towards targets)
    const activeColor = { r: 10, g: 10, b: 10 };

    function getTargetColor() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        return isDark ? themeColors.dark : themeColors.light;
    }

    // Linearly interpolate colors
    function updateColors() {
        const target = getTargetColor();
        activeColor.r += (target.r - activeColor.r) * 0.08;
        activeColor.g += (target.g - activeColor.g) * 0.08;
        activeColor.b += (target.b - activeColor.b) * 0.08;
    }

    // Set canvas dimensions
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Dynamic particle count based on screen size
        const area = canvas.width * canvas.height;
        particleCount = Math.min(120, Math.floor(area / 12000));
        
        // Re-initialize particles to avoid empty spaces
        if (particles.length === 0) {
            initParticlesArray();
        } else {
            // Adjust length if screen size dramatically changes
            if (particles.length < particleCount) {
                while (particles.length < particleCount) {
                    particles.push(new Particle());
                }
            } else if (particles.length > particleCount) {
                particles.splice(particleCount);
            }
        }
    }

    // Particle Class Definition
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 1.5 + 0.8; // subtle, thin dots
            
            // Very slow, ambient movement
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            
            // Standard drift speeds
            this.baseVx = this.vx;
            this.baseVy = this.vy;

            // Individual alpha variations for depth
            this.alpha = Math.random() * 0.4 + 0.2;
        }

        update() {
            // Mouse repulsion logic (fluid flow)
            if (mouse.active && mouse.x !== null && mouse.y !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.hypot(dx, dy);

                if (dist < mouseRadius) {
                    // Calculate repulsion vector force (stronger when closer)
                    const force = (mouseRadius - dist) / mouseRadius;
                    const angle = Math.atan2(dy, dx);
                    
                    // Add repulsion force to particle velocity
                    const pushX = Math.cos(angle) * force * 1.2;
                    const pushY = Math.sin(angle) * force * 1.2;

                    this.vx += (pushX - this.vx) * 0.1;
                    this.vy += (pushY - this.vy) * 0.1;
                } else {
                    // Slowly recover original ambient drift velocity
                    this.vx += (this.baseVx - this.vx) * 0.03;
                    this.vy += (this.baseVy - this.vy) * 0.03;
                }
            } else {
                // Slowly recover original ambient drift velocity
                this.vx += (this.baseVx - this.vx) * 0.03;
                this.vy += (this.baseVy - this.vy) * 0.03;
            }

            // Move particle
            this.x += this.vx;
            this.y += this.vy;

            // Screen boundary wrapping with padding to prevent visual popping
            const pad = 20;
            if (this.x < -pad) this.x = canvas.width + pad;
            if (this.x > canvas.width + pad) this.x = -pad;
            if (this.y < -pad) this.y = canvas.height + pad;
            if (this.y > canvas.height + pad) this.y = -pad;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${Math.round(activeColor.r)}, ${Math.round(activeColor.g)}, ${Math.round(activeColor.b)}, ${this.alpha})`;
            ctx.fill();
        }
    }

    // ShootingStar Class Definition
    class ShootingStar {
        constructor() {
            this.reset();
        }

        reset() {
            // Spawn along top-right or right edge to slide down-left
            if (Math.random() < 0.5) {
                this.x = Math.random() * canvas.width * 0.8 + canvas.width * 0.2;
                this.y = -50;
            } else {
                this.x = canvas.width + 50;
                this.y = Math.random() * canvas.height * 0.5;
            }
            
            this.speed = Math.random() * 6 + 5; // Fast, elegant movement
            this.angle = Math.PI * 0.78 + (Math.random() - 0.5) * 0.08; // Diagonal fall angle (approx 140 deg)
            this.vx = Math.cos(this.angle) * this.speed;
            this.vy = Math.sin(this.angle) * this.speed;
            
            this.length = Math.random() * 90 + 70; // Trail length
            this.thickness = Math.random() * 1.2 + 0.8; // Sleek and elegant
            
            this.alpha = 0; // Starts transparent, fades in, then fades out
            this.fadeInSpeed = Math.random() * 0.04 + 0.04;
            this.fadeOutSpeed = Math.random() * 0.015 + 0.01;
            this.stage = 'fadein'; // 'fadein', 'moving', 'fadeout'
            this.active = true;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.stage === 'fadein') {
                this.alpha += this.fadeInSpeed;
                if (this.alpha >= 1) {
                    this.alpha = 1;
                    this.stage = 'moving';
                }
            } else if (this.stage === 'moving') {
                // Trigger fade out as it starts leaving screen or after travel
                if (this.x < -this.length || this.y > canvas.height + this.length) {
                    this.stage = 'fadeout';
                }
            } else if (this.stage === 'fadeout') {
                this.alpha -= this.fadeOutSpeed;
                if (this.alpha <= 0) {
                    this.alpha = 0;
                    this.active = false;
                }
            }
            
            // Hard boundary check to ensure no runaway shooting stars
            if (this.x < -300 || this.y > canvas.height + 300) {
                this.active = false;
            }
        }

        draw() {
            if (!this.active) return;

            // Calculate tail position
            const tailX = this.x - Math.cos(this.angle) * this.length;
            const tailY = this.y - Math.sin(this.angle) * this.length;

            // Create elegant linear gradient matching active theme colors
            const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
            const r = Math.round(activeColor.r);
            const g = Math.round(activeColor.g);
            const b = Math.round(activeColor.b);

            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.85})`);
            gradient.addColorStop(0.12, `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.5})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(tailX, tailY);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = this.thickness;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Glowing head
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.thickness * 1.3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`;
            ctx.fill();
        }
    }

    function initParticlesArray() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Draw neural connections
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];
                
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.hypot(dx, dy);

                if (dist < connectionDist) {
                    // Fades linearly as distance increases
                    const alpha = (1 - dist / connectionDist) * 0.11;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(${Math.round(activeColor.r)}, ${Math.round(activeColor.g)}, ${Math.round(activeColor.b)}, ${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        updateColors();

        // Draw connections first (behind dots)
        drawConnections();

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        // Randomly spawn shooting stars
        if (shootingStars.length < maxShootingStars && Math.random() < 0.008) {
            shootingStars.push(new ShootingStar());
        }

        // Update, draw, and filter active shooting stars
        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const star = shootingStars[i];
            star.update();
            star.draw();
            if (!star.active) {
                shootingStars.splice(i, 1);
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    // Event listeners
    window.addEventListener('resize', resizeCanvas);

    const onMouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    };

    const onMouseLeave = () => {
        mouse.active = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Initial setups
    // Sync active color immediately before animating
    const target = getTargetColor();
    activeColor.r = target.r;
    activeColor.g = target.g;
    activeColor.b = target.b;

    resizeCanvas();
    animate();

    // Return cleanup function to prevent memory leaks if component is re-created
    return () => {
        window.removeEventListener('resize', resizeCanvas);
        window.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseleave', onMouseLeave);
        cancelAnimationFrame(animationFrameId);
    };
}
