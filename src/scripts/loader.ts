import { buildSun } from './pixelSun';
import { reducedMotion } from './reducedMotion';

/* ══ LOADER ▸ construye una vez, 3 parpadeos y sale ══ */
export function runLoader(): void {
  const loader = document.getElementById('loader');
  const sunEl = document.getElementById('loaderSun');
  const pctEl = document.getElementById('loaderPct');
  if (!loader || !sunEl) return;

  function finish() {
    loader!.classList.add('done');
    document.body.classList.remove('loading');
    loader!.addEventListener('transitionend', () => loader!.remove());
    setTimeout(() => { if (loader!.parentNode) loader!.remove(); }, 800);
  }

  if (reducedMotion) { finish(); return; }

  document.body.classList.add('loading');
  const unit = Math.min(18, Math.floor((window.innerWidth * 0.6) / 13));
  const sun = buildSun(sunEl, Math.max(unit, 10));
  const N = sun.cells.length;

  const BUILD = 1.7, BLINK = 0.65, HOLD = 0.25; // segundos
  const t0 = performance.now();

  function squareBlink(tb: number) {
    const ph = (tb / BLINK) * 3;
    return (ph % 1 < 0.5) ? 0.15 : 1;
  }

  function frame(now: number) {
    const t = (now - t0) / 1000;
    const p = Math.min(t / BUILD, 1);

    sun.cells.forEach((c, i) => {
      const age = p * N - c.o;
      const el = sun.els[i];
      if (age <= 0) { el.style.opacity = '0'; return; }
      let op = 1;
      if (c.ray && t > BUILD) {
        const tb = t - BUILD;
        op = tb < BLINK ? squareBlink(tb) : 1;
      }
      el.style.opacity = String(op);
      el.classList.toggle('fresh', age > 0 && age < 1);
    });

    if (pctEl) pctEl.textContent = `${Math.floor(p * 100)}%`;

    if (t < BUILD + BLINK + HOLD) {
      requestAnimationFrame(frame);
    } else {
      finish();
    }
  }
  requestAnimationFrame(frame);
}
