// scroll-reveal.js
// Anima elementos com a classe .scroll-reveal ao rolar a página

document.addEventListener('DOMContentLoaded', function () {
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.scroll-reveal');
        const windowHeight = window.innerHeight;
        reveals.forEach(function (el) {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 80) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Revela elementos já visíveis ao carregar
}); 