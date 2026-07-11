/* ══ NAV MÓVIL ══ */
export function nav(): void {
  const burger = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!burger || !links) return;
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).tagName === 'A') {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}
