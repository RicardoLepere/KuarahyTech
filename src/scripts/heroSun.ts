import { buildSun } from './pixelSun';

/* ══ SOL DEL HERO ▸ completo, rayos con pulso permanente ══ */
export function heroSun(): void {
  const el = document.getElementById('heroSun');
  if (!el || !el.parentNode) return;

  function render() {
    const parent = el!.parentNode as HTMLElement;
    const unit = Math.min(16, Math.floor((parent.clientWidth - 40) / 13));
    const sun = buildSun(el!, Math.max(unit, 9));
    sun.els.forEach((d, i) => {
      d.style.opacity = '1';
      if (sun.cells[i].ray) d.classList.add('ray-glow');
    });
  }
  render();
  let rt: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(render, 200);
  });
}
