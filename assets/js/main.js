//SECTION HEADER FADE UP SCRIPT
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



//  HERO TEXT FADE UP SCRIPT
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



//HERO IMAGE FADE UP SCRIPT
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-img-container');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    observer.observe(heroSection);
});



//TESTIMONIAL CARD FADE UP SCRIPT
document.addEventListener('DOMContentLoaded', function() {
    // Select all testimonial cards
    const cards = document.querySelectorAll('.testimonial-card');
  
    const observerOptions = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, observerOptions);
  
    // Observe each card in the grid
    cards.forEach(card => {
      observer.observe(card);
    });
});



// GALLery image script
document.addEventListener('DOMContentLoaded', function() {
    // Track scroll direction
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > lastScrollY) {
        scrollDirection = 'down';
      } else {
        scrollDirection = 'up';
      }
      lastScrollY = window.scrollY;
    });
  
    // Select all images in the gallery container
    const images = document.querySelectorAll('.gallery-flex-container img');
  
    const observerOptions = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const img = entry.target;
        if (entry.isIntersecting) {
          // Get the parent row and determine the image's index within that row
          const row = img.parentElement;
          const imagesInRow = Array.from(row.querySelectorAll('img'));
          const index = imagesInRow.indexOf(img);
          const total = imagesInRow.length;
          const delayInterval = 0.2; // seconds
  
          // Compute delay based on scroll direction
          let delay;
          if (scrollDirection === 'down') {
            delay = index * delayInterval;
          } else {
            delay = (total - index - 1) * delayInterval;
          }
          // Set inline transition delay for a staircase effect
          img.style.transitionDelay = `${delay}s`;
          img.classList.add('is-visible');
        } else {
          // Remove the visible class and reset delay when image leaves the viewport
          img.classList.remove('is-visible');
          img.style.transitionDelay = '';
        }
      });
    }, observerOptions);
  
    images.forEach(img => {
      observer.observe(img);
    });
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