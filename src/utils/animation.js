// Function to observe elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the visible class when in view
        }
    });
});

// Select elements to animate
const elements = document.querySelectorAll('.animate');
elements.forEach((el) => observer.observe(el));