/* ═══════════════════════════════════════════════════════
   LOYAL STUDIOS™ — Premium Effects v2
   Desktop : Cursor · 3D Tilt · Magnetic Buttons
   Mobile  : Card Cascade · Tap Feedback · Swipe Gallery
═══════════════════════════════════════════════════════ */

const TOUCH = window.matchMedia('(hover:none)').matches;

/* ─────────────────────────────────────────────────────
   DESKTOP 1 — CUSTOM CURSOR
   Anillo amarillo con mix-blend-mode:difference
   Punto blanco en posición exacta
───────────────────────────────────────────────────── */
function initCursor() {
  const ring = document.createElement('div'); ring.className = 'ls-cursor-ring';
  const dot  = document.createElement('div'); dot.className  = 'ls-cursor-dot';
  document.body.append(ring, dot);

  let tx = -200, ty = -200;
  let rx = -200, ry = -200;
  const HR = 18, HD = 2;

  document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    dot.style.transform = `translate(${tx - HD}px,${ty - HD}px)`;
  });

  (function tick() {
    rx += (tx - rx) * 0.1;
    ry += (ty - ry) * 0.1;
    ring.style.transform = `translate(${rx - HR}px,${ry - HR}px)`;
    requestAnimationFrame(tick);
  })();

  function wireHover(el) {
    el.addEventListener('mouseenter', () => ring.classList.add('big'));
    el.addEventListener('mouseleave', () => ring.classList.remove('big'));
  }

  document.querySelectorAll('a,button,.card,.d-sz,.d-thumb,.brand-card,.social-card').forEach(wireHover);

  const grid = document.getElementById('grid');
  if (grid) new MutationObserver(() =>
    grid.querySelectorAll('.card:not([data-cur])').forEach(el => {
      el.dataset.cur = '1'; wireHover(el);
    })
  ).observe(grid, { childList: true });

  document.documentElement.addEventListener('mouseleave', () => { ring.style.opacity='0'; dot.style.opacity='0'; });
  document.documentElement.addEventListener('mouseenter', () => { ring.style.opacity='1'; dot.style.opacity='1'; });
}

/* ─────────────────────────────────────────────────────
   DESKTOP 2 — 3D CARD TILT + SHINE
   Las cards se inclinan siguiendo el cursor
   Capa de brillo que simula luz real
───────────────────────────────────────────────────── */
function initCardTilt() {
  function wire(card) {
    if (card.dataset.tilt) return;
    card.dataset.tilt = '1';

    let shine = card.querySelector('.card-shine');
    if (!shine) {
      shine = document.createElement('div');
      shine.className = 'card-shine';
      (card.querySelector('.card-img') || card).appendChild(shine);
    }

    let raf;
    card.addEventListener('mousemove', e => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r  = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top)  / r.height;
        const rx = -(py - 0.5) * 16;
        const ry =  (px - 0.5) * 16;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.01)`;
        card.style.boxShadow = `${-ry * 2}px ${rx * 2}px 48px rgba(0,0,0,.55)`;
        card.style.transition = 'transform .05s, box-shadow .05s';
        card.style.zIndex     = '10';
        shine.style.background = `radial-gradient(circle at ${px*100}% ${py*100}%, rgba(255,255,255,.22) 0%, transparent 62%)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      cancelAnimationFrame(raf);
      card.style.transform  = '';
      card.style.boxShadow  = '';
      card.style.transition = 'transform .65s cubic-bezier(.22,1,.36,1), box-shadow .5s';
      card.style.zIndex     = '';
      shine.style.background = 'none';
    });
  }

  document.querySelectorAll('.card').forEach(wire);
  const grid = document.getElementById('grid');
  if (grid) new MutationObserver(() => grid.querySelectorAll('.card').forEach(wire)).observe(grid, { childList: true });
}

/* ─────────────────────────────────────────────────────
   DESKTOP 3 — BOTONES MAGNÉTICOS
   Los botones se atraen hacia el cursor al acercarse
───────────────────────────────────────────────────── */
function initMagnetic() {
  const SEL    = '.hero-btn, .nav-wa, .drops-cta, .cart-wa-btn, .d-buy';
  const RADIUS = 85;
  const PULL   = 0.40;

  function wire(el) {
    if (el.dataset.mag) return;
    el.dataset.mag = '1';
    el.addEventListener('mousemove', e => {
      const r  = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width  / 2);
      const dy = e.clientY - (r.top  + r.height / 2);
      if (Math.hypot(dx, dy) < RADIUS) {
        el.style.transform = `translate(${dx * PULL}px, ${dy * PULL}px)`;
        el.style.transition = 'transform .15s cubic-bezier(.22,1,.36,1)';
      }
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform  = '';
      el.style.transition = 'transform .55s cubic-bezier(.22,1,.36,1)';
    });
  }

  document.querySelectorAll(SEL).forEach(wire);
  new MutationObserver(() => document.querySelectorAll(SEL).forEach(wire))
    .observe(document.body, { childList: true, subtree: true });
}

/* ─────────────────────────────────────────────────────
   MOBILE 1 — CARD CASCADE
   Al entrar el catálogo en pantalla, las cards aparecen
   en cascada una por una con stagger de 60ms.
   Efecto "waterfall" como apps de moda premium.
───────────────────────────────────────────────────── */
function initCardCascade() {
  let cascadeQueued = false;

  function triggerCascade() {
    const cards = document.querySelectorAll('.card:not([data-cas])');
    cards.forEach((card, i) => {
      card.dataset.cas = '1';
      card.style.setProperty('--cas-i', i % 8); // Reset stagger each 8 cards
      card.classList.add('card-cascade');
    });
  }

  // Observer sobre el grid completo
  const grid = document.getElementById('grid');
  if (!grid) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !cascadeQueued) {
        cascadeQueued = true;
        triggerCascade();
        io.disconnect();
      }
    });
  }, { threshold: 0.05 });

  io.observe(grid);

  // Re-trigger cuando el grid cambia (filtros)
  new MutationObserver(() => {
    cascadeQueued = false;
    // Reset y re-observa
    setTimeout(() => {
      triggerCascade();
    }, 20);
  }).observe(grid, { childList: true });
}

/* ─────────────────────────────────────────────────────
   MOBILE 2 — TAP FEEDBACK EN CARDS
   Al tocar una card, escala brevemente hacia abajo
   y rebota — da sensación física premium (como iOS)
───────────────────────────────────────────────────── */
function initTouchTap() {
  const grid = document.getElementById('grid');
  if (!grid) return;

  function wire(card) {
    if (card.dataset.tap) return;
    card.dataset.tap = '1';

    card.addEventListener('touchstart', () => {
      card.classList.add('card-pressed');
    }, { passive: true });

    card.addEventListener('touchend', () => {
      card.classList.remove('card-pressed');
    }, { passive: true });

    card.addEventListener('touchcancel', () => {
      card.classList.remove('card-pressed');
    }, { passive: true });
  }

  document.querySelectorAll('.card').forEach(wire);
  new MutationObserver(() => grid.querySelectorAll('.card').forEach(wire)).observe(grid, { childList: true });
}

/* ─────────────────────────────────────────────────────
   MOBILE 3 — SWIPE GALLERY EN DETALLE
   En la página de producto, deslizá izquierda/derecha
   para cambiar fotos. Indicador visual de swipe.
───────────────────────────────────────────────────── */
function initSwipeGallery() {
  const mainImg = document.getElementById('d-main');
  if (!mainImg) return;

  let startX = 0, startY = 0, moved = false;
  const MIN_SWIPE = 45;

  mainImg.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    moved  = false;
  }, { passive: true });

  mainImg.addEventListener('touchmove', e => {
    // Detectar si es swipe horizontal (no scroll)
    const dx = Math.abs(e.touches[0].clientX - startX);
    const dy = Math.abs(e.touches[0].clientY - startY);
    if (dx > dy && dx > 10) moved = true;
  }, { passive: true });

  mainImg.addEventListener('touchend', e => {
    if (!moved) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < MIN_SWIPE) return;

    // navImg está definido en app.js
    if (typeof navImg === 'function') {
      navImg(dx < 0 ? 1 : -1);
      // Flash visual de feedback
      mainImg.style.transition = 'opacity .12s';
      mainImg.style.opacity    = '.7';
      setTimeout(() => { mainImg.style.opacity = '1'; }, 120);
    }
  }, { passive: true });

  // Indicador "deslizá para ver más" — aparece una vez y desaparece
  function showSwipeHint() {
    const el = document.getElementById('d-main-wrap');
    if (!el || el.dataset.hint) return;
    el.dataset.hint = '1';
    const hint = document.createElement('div');
    hint.className = 'swipe-hint';
    hint.innerHTML = '← deslizá las fotos →';
    el.appendChild(hint);
    setTimeout(() => hint.classList.add('hide'), 2200);
    setTimeout(() => hint.remove(), 2700);
  }

  // Se activa cuando se abre la página de detalle
  const detailPage = document.getElementById('page-detail');
  if (detailPage) {
    new MutationObserver(() => {
      if (detailPage.classList.contains('active')) {
        setTimeout(showSwipeHint, 600);
      }
    }).observe(detailPage, { attributes: true, attributeFilter: ['class'] });
  }
}

/* ─────────────────────────────────────────────────────
   SCROLL REVEAL — mejorado para ambas plataformas
───────────────────────────────────────────────────── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ─────────────────────────────────────────────────────
   BOOT
───────────────────────────────────────────────────── */
(function boot() {

  // ── Desktop only ──────────────────────────────────
  if (!TOUCH) {
    initCursor();
    initMagnetic();

    function tryCardTilt() {
      if (document.querySelectorAll('.card').length > 0) initCardTilt();
      else setTimeout(tryCardTilt, 300);
    }
    if (document.readyState === 'loading')
      document.addEventListener('DOMContentLoaded', () => setTimeout(tryCardTilt, 500));
    else setTimeout(tryCardTilt, 500);
  }

  // ── Mobile only ───────────────────────────────────
  if (TOUCH) {
    initCardCascade();
    initTouchTap();
    initSwipeGallery();
  }

  // ── Ambas plataformas ─────────────────────────────
  initReveal();

})();
