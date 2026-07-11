/* ══ SOL PIXEL ▸ grilla 13×8, orden: horizonte → destellos → cuerpo → corona → rayos ══ */
export interface SunCell {
  x: number;
  y: number;
  col: 'y' | 'o';
  ray: boolean;
  o: number;
}

export function sunCells(): SunCell[] {
  const c: SunCell[] = [];
  let o = 0;
  let x: number, y: number;
  for (x = 0; x <= 12; x++) c.push({ x, y: 7, col: 'y', ray: false, o: o++ }); // barra horizonte
  [0, 1, 11, 12].forEach((gx) => c.push({ x: gx, y: 5, col: 'y', ray: false, o: o++ })); // guiones
  for (y = 5; y >= 4; y--) for (x = 4; x <= 8; x++) c.push({ x, y, col: 'o', ray: false, o: o++ }); // bloque grande
  for (x = 5; x <= 7; x++) c.push({ x, y: 3, col: 'o', ray: false, o: o++ }); // corona
  c.push({ x: 3, y: 1, col: 'y', ray: true, o: o++ });
  c.push({ x: 6, y: 1, col: 'y', ray: true, o: o++ });
  c.push({ x: 6, y: 0, col: 'y', ray: true, o: o++ });
  c.push({ x: 9, y: 1, col: 'y', ray: true, o: o++ });
  return c;
}

export const PALETTE: Record<'y' | 'o', string> = { y: '#FFB020', o: '#FF6B35' };

export interface BuiltSun {
  cells: SunCell[];
  els: HTMLDivElement[];
}

export function buildSun(container: HTMLElement, unit: number): BuiltSun {
  container.innerHTML = '';
  container.style.width = `${13 * unit}px`;
  container.style.height = `${8 * unit}px`;
  const cells = sunCells();
  const els = cells.map((c) => {
    const d = document.createElement('div');
    d.className = `px${c.ray ? ' is-ray' : ''}`;
    d.style.left = `${c.x * unit}px`;
    d.style.top = `${c.y * unit}px`;
    d.style.width = `${unit}px`;
    d.style.height = `${unit}px`;
    d.style.background = PALETTE[c.col];
    d.style.opacity = '0';
    container.appendChild(d);
    return d;
  });
  return { cells, els };
}
