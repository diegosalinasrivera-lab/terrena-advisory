(function () {
  'use strict';

  // ── header sólido al hacer scroll ─────────────────────
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 30) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── menú móvil ────────────────────────────────────────
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    ham.setAttribute('aria-expanded', String(open));
  };
  ham.addEventListener('click', () => {
    setMenu(!document.body.classList.contains('menu-open'));
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  // ── año dinámico en el footer ─────────────────────────
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

})();
