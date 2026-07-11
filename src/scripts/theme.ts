/* ══ TEMA CLARO / OSCURO ══ */

/* aplica el tema guardado antes del primer paint, evita flash */
export function applyTheme(): void {
  const root = document.documentElement;
  let saved: string | null = null;
  try { saved = localStorage.getItem('kt-theme'); } catch (e) { /* storage disabled */ }
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.setAttribute('data-theme', 'dark');
  }
}

export function bindThemeToggle(): void {
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    if (dark) root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', 'dark');
    try { localStorage.setItem('kt-theme', dark ? 'light' : 'dark'); } catch (e) { /* storage disabled */ }
  });
}
