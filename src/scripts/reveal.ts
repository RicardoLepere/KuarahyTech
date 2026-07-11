import { reducedMotion } from './reducedMotion';

/* ══ REVEAL AL SCROLL ══ */
export function reveals(): void {
  const els = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}
