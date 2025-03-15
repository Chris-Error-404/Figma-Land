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
        observer.observe(header);document.addEventListener('DOMContentLoaded', function() {
            const headers = document.querySelectorAll('.hero-text-1 h1');
        
            const observerOptions = {
                threshold: 0.1
            };
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    } else {
                        entry.target.classList.remove('is-visible'); // Remove class when out of view
                    }
                });
            }, observerOptions);
        
            headers.forEach(header => {
                observer.observe(header);
            });
        });
        
    });
});

//features h1 fade up
document.addEventListener('DOMContentLoaded', function() {
    // Select all h1 elements inside .section-header
    const headers = document.querySelectorAll('.section-header h1');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible'); // Remove class when out of view
            }
        });
    }, observerOptions);

    // Observe each header
    headers.forEach(header => observer.observe(header));
});




//CUSTOM CURSOR SCRIPT
(function() {
    // Create and append the custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Variables for current and target positions
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    // Update target position on mouse move
    document.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      // Ensure the cursor is visible when within the viewport
      cursor.style.opacity = 1;
    });

    // Optionally hide the cursor if the mouse leaves the document area
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = 0;
    });

    // Smooth animation loop using requestAnimationFrame
    function animate() {
      // Use linear interpolation for smooth movement
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      // Update the position of the custom cursor using translate
      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    }

    animate();
  })();