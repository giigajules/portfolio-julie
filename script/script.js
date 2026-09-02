document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. Scroll-Animation (Intersection Observer)
    // ==========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));


    // ==========================================
    // 2. Lightbox-Funktion (Für Bilder)
    // ==========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    if (lightbox && lightboxImg) {
        const images = document.querySelectorAll('.post-image img, .screenshot-grid img');
        images.forEach(image => {
            image.addEventListener('click', (e) => {
                lightboxImg.src = e.target.src;
                lightbox.classList.add('show');
            });
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('show');
            }
        });
    }
});