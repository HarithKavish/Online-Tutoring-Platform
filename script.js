document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects to cards and images
    const cards = document.querySelectorAll('.species-card, .application-card, .experience-card');
    const illustrations = document.querySelectorAll('.glow-effect img');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    illustrations.forEach(illustration => {
        illustration.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.5)';
        });

        illustration.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
        });
    });

    // Add animation to the hero section on scroll
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', function() {
        if (window.scrollY > heroSection.offsetTop - 100) {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }
    });

    // Initialize animations
    setTimeout(() => {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }, 100);
});