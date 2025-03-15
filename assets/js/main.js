document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.hero-text-1 h1');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    headers.forEach(header => {
        observer.observe(header);
    });
});
