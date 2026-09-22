// Active nav-link highlighting as report sections scroll into view.
// Deliberately no scroll-reveal-on-everything here — the page reads like a
// printed report, and the one animated moment (the VERIFIED stamp) is enough.
const navLinks = document.querySelectorAll('.doc-nav a[href^="#"]');
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`.doc-nav a[href="#${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach((l) => (l.style.color = ''));
        link.style.color = 'var(--ink)';
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach((section) => navObserver.observe(section));
}
