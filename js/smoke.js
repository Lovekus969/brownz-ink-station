document.addEventListener("DOMContentLoaded", function() {
    // Create canvas and append to hero section
    const hero = document.querySelector('.hero');
    const canvas = document.createElement('canvas');
    hero.appendChild(canvas);

    // Set canvas to cover hero section
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0'; // behind hero content
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;

    const ctx = canvas.getContext('2d');

    // Smoke particle setup
    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 60 + 40,
            alpha: Math.random() * 0.1 + 0.05,
            speed: Math.random() * 0.3 + 0.1
        });
    }

    // Draw and animate particles
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            // Move upward
            p.y -= p.speed;
            p.x += Math.sin(p.y * 0.01) * 0.5; // slight horizontal drift

            // Reset particle to bottom when it moves out
            if (p.y + p.size < 0) {
                p.y = canvas.height + p.size;
                p.x = Math.random() * canvas.width;
                p.size = Math.random() * 60 + 40;
                p.alpha = Math.random() * 0.1 + 0.05;
                p.speed = Math.random() * 0.3 + 0.1;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();

    // Update canvas size on window resize
    window.addEventListener('resize', () => {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    });
});
