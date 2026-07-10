/* ═══════════════════════════════════════════════
   KUARAHY TECH ▸ main.js
   Loader sol pixel · nav · tema claro/oscuro · reveals
   ═══════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ══ SOL PIXEL ▸ grilla 13×8, orden: horizonte → destellos → cuerpo → corona → rayos ══ */
  function sunCells() {
    var c = [];
    var o = 0;
    var x, y;
    for (x = 0; x <= 12; x++) c.push({ x: x, y: 7, col: 'y', ray: false, o: o++ });      // barra horizonte
    [0, 1, 11, 12].forEach(function (gx) { c.push({ x: gx, y: 5, col: 'y', ray: false, o: o++ }); }); // guiones
    for (y = 5; y >= 4; y--) for (x = 4; x <= 8; x++) c.push({ x: x, y: y, col: 'o', ray: false, o: o++ }); // bloque grande
    for (x = 5; x <= 7; x++) c.push({ x: x, y: 3, col: 'o', ray: false, o: o++ });       // corona
    c.push({ x: 3, y: 1, col: 'y', ray: true, o: o++ });
    c.push({ x: 6, y: 1, col: 'y', ray: true, o: o++ });
    c.push({ x: 6, y: 0, col: 'y', ray: true, o: o++ });
    c.push({ x: 9, y: 1, col: 'y', ray: true, o: o++ });
    return c;
  }

  var PALETTE = { y: '#FFB020', o: '#FF6B35' };

  function buildSun(container, unit) {
    container.innerHTML = '';
    container.style.width = (13 * unit) + 'px';
    container.style.height = (8 * unit) + 'px';
    var cells = sunCells();
    var els = cells.map(function (c) {
      var d = document.createElement('div');
      d.className = 'px' + (c.ray ? ' is-ray' : '');
      d.style.left = (c.x * unit) + 'px';
      d.style.top = (c.y * unit) + 'px';
      d.style.width = unit + 'px';
      d.style.height = unit + 'px';
      d.style.background = PALETTE[c.col];
      d.style.opacity = '0';
      container.appendChild(d);
      return d;
    });
    return { cells: cells, els: els };
  }

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ══ LOADER ▸ construye una vez, 3 parpadeos y sale ══ */
  function runLoader() {
    var loader = document.getElementById('loader');
    var sunEl = document.getElementById('loaderSun');
    var pctEl = document.getElementById('loaderPct');
    if (!loader || !sunEl) return;

    function finish() {
      loader.classList.add('done');
      document.body.classList.remove('loading');
      loader.addEventListener('transitionend', function () { loader.remove(); });
      setTimeout(function () { if (loader.parentNode) loader.remove(); }, 800);
    }

    if (reducedMotion) { finish(); return; }

    document.body.classList.add('loading');
    var unit = Math.min(18, Math.floor((window.innerWidth * 0.6) / 13));
    var sun = buildSun(sunEl, Math.max(unit, 10));
    var N = sun.cells.length;

    var BUILD = 1.7, BLINK = 0.65, HOLD = 0.25; // segundos
    var t0 = performance.now();

    function squareBlink(tb) {
      var ph = (tb / BLINK) * 3;
      return (ph % 1 < 0.5) ? 0.15 : 1;
    }

    function frame(now) {
      var t = (now - t0) / 1000;
      var p = Math.min(t / BUILD, 1);

      sun.cells.forEach(function (c, i) {
        var age = p * N - c.o;
        var el = sun.els[i];
        if (age <= 0) { el.style.opacity = '0'; return; }
        var op = 1;
        if (c.ray && t > BUILD) {
          var tb = t - BUILD;
          op = tb < BLINK ? squareBlink(tb) : 1;
        }
        el.style.opacity = String(op);
        el.classList.toggle('fresh', age > 0 && age < 1);
      });

      if (pctEl) pctEl.textContent = Math.floor(p * 100) + '%';

      if (t < BUILD + BLINK + HOLD) {
        requestAnimationFrame(frame);
      } else {
        finish();
      }
    }
    requestAnimationFrame(frame);
  }

  /* ══ SOL DEL HERO ▸ completo, rayos con pulso permanente ══ */
  function heroSun() {
    var el = document.getElementById('heroSun');
    if (!el) return;
    function render() {
      var unit = Math.min(16, Math.floor((el.parentNode.clientWidth - 40) / 13));
      var sun = buildSun(el, Math.max(unit, 9));
      sun.els.forEach(function (d, i) {
        d.style.opacity = '1';
        if (sun.cells[i].ray) d.classList.add('ray-glow');
      });
    }
    render();
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(render, 200);
    });
  }

  /* ══ NAV MÓVIL ══ */
  function nav() {
    var burger = document.getElementById('hamburger');
    var links = document.getElementById('navLinks');
    if (!burger || !links) return;
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ══ TEMA CLARO / OSCURO ══ */
  function theme() {
    var toggle = document.getElementById('themeToggle');
    var root = document.documentElement;
    var saved = null;
    try { saved = localStorage.getItem('kt-theme'); } catch (e) {}
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.setAttribute('data-theme', 'dark');
    }
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') === 'dark';
      if (dark) root.removeAttribute('data-theme');
      else root.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('kt-theme', dark ? 'light' : 'dark'); } catch (e) {}
    });
  }

  /* ══ REVEAL AL SCROLL ══ */
  function reveals() {
    var els = document.querySelectorAll('.reveal');
    if (reducedMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  theme();
  document.addEventListener('DOMContentLoaded', function () {
    runLoader();
    heroSun();
    nav();
    reveals();
  });
})();
