// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu-container ul a.links-menu');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 60;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});