import { buildSun, type SunCell } from './pixelSun';
import { reducedMotion } from './reducedMotion';

/* ══ AMANECER ▸ escena de la coming soon ══
   Noche → la luna baja y se oculta, las estrellas se desvanecen,
   el cielo se tiñe de amanecer y el sol pixel sale desde el horizonte.
   Todo relativo al contenedor: sirve igual ventaneado (desktop) o fullscreen (mobile). */

/* ── helpers ── */
function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v));
}
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}
function easeInCubic(t: number): number {
  return t * t * t;
}
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
function lerpColor(a: string, b: string, t: number): string {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ar = (pa >> 16) & 255, ag = (pa >> 8) & 255, ab = pa & 255;
  const br = (pb >> 16) & 255, bg = (pb >> 8) & 255, bb = pb & 255;
  const r = Math.round(lerp(ar, br, t));
  const g = Math.round(lerp(ag, bg, t));
  const bl = Math.round(lerp(ab, bb, t));
  return `rgb(${r}, ${g}, ${bl})`;
}

/* ── luna pixel: disco menos disco = medialuna, abierta hacia la derecha ── */
function moonCells(size: number): { x: number; y: number }[] {
  const cells: { x: number; y: number }[] = [];
  const r = size / 2;
  const cx = r - 0.5, cy = r - 0.5;
  const cutDx = r * 0.72;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const inMain = Math.hypot(x - cx, y - cy) <= r - 0.5;
      const inCut = Math.hypot(x - (cx + cutDx), y - (cy - r * 0.1)) <= (r - 0.5) * 0.98;
      if (inMain && !inCut) cells.push({ x, y });
    }
  }
  return cells;
}

const MOON_SIZE = 7;

function buildMoon(container: HTMLElement, unit: number): void {
  container.innerHTML = '';
  container.style.width = `${MOON_SIZE * unit}px`;
  container.style.height = `${MOON_SIZE * unit}px`;
  for (const c of moonCells(MOON_SIZE)) {
    const d = document.createElement('div');
    d.className = 'px';
    d.style.left = `${c.x * unit}px`;
    d.style.top = `${c.y * unit}px`;
    d.style.width = `${unit}px`;
    d.style.height = `${unit}px`;
    d.style.background = '#F7F5EF';
    container.appendChild(d);
  }
}

export function initSunrise(): void {
  const scene = document.getElementById('csScene');
  const sky = document.getElementById('csSky');
  const dawn = document.getElementById('csDawn');
  const horizon = document.getElementById('csHorizon');
  const sunEl = document.getElementById('csSun');
  const moonEl = document.getElementById('csMoon');
  const stars = document.getElementById('csStars');
  if (!scene || !sky || !dawn || !horizon || !sunEl || !moonEl || !stars) return;

  let sunCellsArr: SunCell[] = [];
  let sunEls: HTMLDivElement[] = [];
  let sunStartTop = 0, sunRestTop = 0, moonStartTop = 0, moonEndTop = 0;
  let lastP = 0;

  function layout(): void {
    const skyW = sky!.clientWidth;
    const skyH = sky!.clientHeight;
    const sceneH = scene!.clientHeight;

    /* sol */
    const sunUnit = clamp(Math.floor(skyW / 26), 6, 14);
    const built = buildSun(sunEl!, sunUnit);
    sunCellsArr = built.cells;
    sunEls = built.els;
    sunEls.forEach((el) => { el.style.opacity = '1'; });
    const sunW = 13 * sunUnit;
    const sunH = 8 * sunUnit;
    sunEl!.style.position = 'absolute';
    sunEl!.style.left = `${(skyW - sunW) / 2}px`;
    sunRestTop = skyH * 0.44 - sunH * 0.5;
    sunStartTop = skyH + sunUnit * 2;

    /* luna */
    const moonUnit = clamp(Math.floor(skyW / 60), 3, 6);
    buildMoon(moonEl!, moonUnit);
    const moonW = MOON_SIZE * moonUnit;
    const moonH = MOON_SIZE * moonUnit;
    moonEl!.style.position = 'absolute';
    moonEl!.style.left = `${skyW * 0.5 - moonW / 2}px`;
    moonStartTop = skyH * 0.16;
    moonEndTop = skyH + moonH * 0.2;

    /* degradé de amanecer con la banda brillante sobre el horizonte */
    const hp = clamp(Math.round((skyH / sceneH) * 100), 20, 80);
    dawn!.style.background =
      `linear-gradient(to bottom,` +
      ` #10141C 0%,` +
      ` #241a2b ${Math.max(hp - 30, 4)}%,` +
      ` #7a2f22 ${Math.max(hp - 14, 8)}%,` +
      ` #FF6B35 ${Math.max(hp - 4, 10)}%,` +
      ` #FFB020 ${hp}%,` +
      ` #FF6B35 ${Math.min(hp + 7, 95)}%,` +
      ` #8a3c17 ${Math.min(hp + 24, 98)}%,` +
      ` #1c0f08 100%)`;
  }

  function render(p: number): void {
    lastP = p;

    stars!.style.opacity = String(1 - smoothstep(0, 0.5, p));

    const moonTop = lerp(moonStartTop, moonEndTop, easeInCubic(p));
    moonEl!.style.top = `${moonTop}px`;
    moonEl!.style.opacity = String(1 - smoothstep(0.55, 0.95, p));

    dawn!.style.opacity = String(smoothstep(0.1, 1, p));

    horizon!.style.background = lerpColor('#3A2E1A', '#FF6B35', smoothstep(0.1, 0.85, p));
    horizon!.style.opacity = String(0.5 + 0.5 * smoothstep(0.1, 0.8, p));

    if (p <= 0.42) {
      sunEl!.style.opacity = '0';
    } else {
      const sp = clamp((p - 0.42) / 0.58, 0, 1);
      sunEl!.style.opacity = String(clamp(sp * 1.8, 0, 1));
      sunEl!.style.top = `${lerp(sunStartTop, sunRestTop, easeOutCubic(sp))}px`;
    }

    const showRays = p >= 1;
    for (let i = 0; i < sunCellsArr.length; i++) {
      if (sunCellsArr[i].ray) sunEls[i].classList.toggle('ray-glow', showRays);
    }
  }

  layout();
  render(0);

  if (reducedMotion) {
    render(1);
  } else {
    const HOLD = 0.8, DAWN = 4.8;
    /* t0 se fija en el primer frame real: si la página carga en una pestaña de fondo,
       la animación arranca desde cero cuando el usuario la mira, no "gastada". */
    let t0 = 0;
    const frame = (now: number): void => {
      if (!t0) t0 = now;
      const t = (now - t0) / 1000;
      render(clamp((t - HOLD) / DAWN, 0, 1));
      if (t < HOLD + DAWN) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  /* recalcula la geometría cuando la escena toma su tamaño real (FOUC) o al redimensionar.
     ResizeObserver para el tamaño del elemento + resize de ventana como respaldo. */
  const relayout = (): void => { layout(); render(lastP); };
  new ResizeObserver(relayout).observe(scene);
  window.addEventListener('resize', relayout);
}
