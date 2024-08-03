// scripts.js
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'yellow';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    });
});
