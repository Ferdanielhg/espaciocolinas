/* ==========================================================================
   ESPACIO COLINAS - SCROLL REVEAL ANIMATIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const revealElements = document.querySelectorAll('[data-reveal]');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, unobserve to free resources
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  });

  revealElements.forEach(el => {
    el.classList.add('reveal-init');
    revealObserver.observe(el);
  });
});
