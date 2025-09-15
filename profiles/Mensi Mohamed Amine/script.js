function contactMe() {
    window.location.href = "mailto:example@example.com?subject=Contact%20from%20Portfolio";
}

// Optional: smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
