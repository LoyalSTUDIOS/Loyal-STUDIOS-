/* ═══════════════════════════════════════════════════════
   LOYAL STUDIOS™ — Premium Effects
   Cursor · 3D Tilt · Parallax · Magnetic Buttons
═══════════════════════════════════════════════════════ */

const TOUCH = window.matchMedia('(hover:none)').matches;

/* ─────────────────────────────────────────────────────
   1. CUSTOM CURSOR
   Círculo amarillo con mix-blend-mode:difference
   Se expande al pasar sobre elementos interactivos
───────────────────────────────────────────────────── */
function initCursor() {
  const ring = document.createElement('div'); ring.className = 'ls-cursor-ring';
  const dot  = document.createElement('div'); dot.className  = 'ls-cursor-dot';
  document.body.append(ring, dot);

  let tx = -200, ty = -200;   // target (mouse exact)
  let rx = -200, ry = -200;   // ring current (lerped)
  const HALF_R = 18, HALF_D = 2;

  document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    dot.style.transform = `translate(${tx - HALF_D}px,${ty - HALF_D}px)`;
  });

  (function tick() {
    rx += (tx - rx) * 0.1;
    ry += (ty - ry) * 0.1;
    ring.style.transform = `translate(${rx - HALF_R}px,${ry - HALF_R}px)`;
    requestAnimationFrame(tick);
  })();

  function wireHover(el) {
    el.addEventListener('mouseenter', () => ring.classList.add('big'));
    el.addEventListener('mouseleave', () => ring.classList.remove('big'));
  }

  // Initial wiring
  document.querySelectorAll('a,button,.card,.d-sz,.d-thumb,.brand-card,.social-card').forEach(wireHover);

  // Re-wire when grid re-renders
  const grid = document.getElementById('grid');
  if (grid) new MutationObserver(() =>
    grid.querySelectorAll('.card:not([data-cur])').forEach(el => {
      el.dataset.cur = '1'; wireHover(el);
    })
  ).observe(grid, { childList: true });

  // Fade on leave/enter window
  document.documentElement.addEventListener('mouseleave', () => {
    ring.style.opacity = '0'; dot.style.opacity = '0';
  });
  document.documentElement.addEventListener('mouseenter', () => {
    ring.style.opacity = '1'; dot.style.opacity = '1';
  });
}

/* ─────────────────────────────────────────────────────
   2. 3D CARD TILT + SHINE
   Las cards del catálogo se inclinan siguiendo el cursor
   Un gradiente de brillo sigue la luz
───────────────────────────────────────────────────── */
function initCardTilt() {
  function wire(card) {
    if (card.dataset.tilt) return;
    card.dataset.tilt = '1';

    // Capa de brillo
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
        const r   = card.getBoundingClientRect();
        const px  = (e.clientX - r.left) / r.width;   // 0 → 1
        const py  = (e.clientY - r.top)  / r.height;  // 0 → 1
        const rotX = -(py - 0.5) * 16;
        const rotY =  (px - 0.5) * 16;
        const shadow = `${-rotY * 2}px ${rotX * 2}px 48px rgba(0,0,0,.55)`;

        card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px) scale(1.01)`;
        card.style.boxShadow = shadow;
        card.style.transition = 'transform .05s, box-shadow .05s';
        card.style.zIndex = '10';
        shine.style.background =
          `radial-gradient(circle at ${px*100}% ${py*100}%, rgba(255,255,255,.22) 0%, transparent 62%)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      cancelAnimationFrame(raf);
      card.style.transform = '';
      card.style.boxShadow = '';
      card.style.transition = 'transform .65s cubic-bezier(.22,1,.36,1), box-shadow .5s';
      card.style.zIndex = '';
      shine.style.background = 'none';
    });
  }

  document.querySelectorAll('.card').forEach(wire);

  const grid = document.getElementById('grid');
  if (grid) new MutationObserver(() =>
    grid.querySelectorAll('.card').forEach(wire)
  ).observe(grid, { childList: true });
}

/* ─────────────────────────────────────────────────────
   3. HERO PARALLAX MULTICAPA
   Fondo · Texto · Grano se mueven a velocidades distintas
   Crea profundidad 3D real sin WebGL
───────────────────────────────────────────────────── */
function initParallax() {
  const hero      = document.querySelector('.hero');
  const heroBg    = document.querySelector('.hero-bg');
  const heroInner = document.querySelector('.hero-inner');
  const heroGrain = document.querySelector('.hero-grain');
  const heroVig   = document.querySelector('.hero-vignette');

  if (!hero || !heroBg) return;

  let ticking = false;

  function update() {
    const y = window.scrollY;
    const h = hero.offsetHeight;
    if (y > h * 1.3) { ticking = false; return; }

    const p = Math.min(y / h, 1); // 0→1 progress

    // Fondo: se mueve más lento (queda "atrás")
    heroBg.style.transform = `scale(1.12) translateY(${y * 0.45}px)`;

    // Texto: se eleva suavemente
    if (heroInner) heroInner.style.transform = `translateY(${y * 0.22}px)`;

    // Grano: movimiento contrario sutil
    if (heroGrain) heroGrain.style.transform = `translateY(${-y * 0.08}px)`;

    // Vignette: se intensifica al scrollear
    if (heroVig) heroVig.style.opacity = 1 + p * 0.6;

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  update(); // run once on load
}

/* ─────────────────────────────────────────────────────
   4. BOTONES MAGNÉTICOS
   Los botones se atraen hacia el cursor al acercarse
   Efecto premium de sitios de lujo
───────────────────────────────────────────────────── */
function initMagnetic() {
  const SEL = '.hero-btn, .nav-wa, .drops-cta, .cart-wa-btn, .d-buy';
  const PULL_RADIUS = 85;
  const STRENGTH    = 0.40;

  function wire(el) {
    if (el.dataset.mag) return;
    el.dataset.mag = '1';

    el.addEventListener('mousemove', e => {
      const r  = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width  / 2);
      const dy = e.clientY - (r.top  + r.height / 2);
      const d  = Math.hypot(dx, dy);
      if (d < PULL_RADIUS) {
        el.style.transform = `translate(${dx * STRENGTH}px, ${dy * STRENGTH}px)`;
        el.style.transition = 'transform .15s cubic-bezier(.22,1,.36,1)';
      }
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.transition = 'transform .55s cubic-bezier(.22,1,.36,1)';
    });
  }

  document.querySelectorAll(SEL).forEach(wire);

  // Re-wire cuando se abra el carrito u otras partes
  const obs = new MutationObserver(() => document.querySelectorAll(SEL).forEach(wire));
  obs.observe(document.body, { childList: true, subtree: true });
}

/* ─────────────────────────────────────────────────────
   5. SCROLL REVEAL MEJORADO
   Las secciones entran con stagger y depth 3D
───────────────────────────────────────────────────── */
function initReveal3D() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ─────────────────────────────────────────────────────
   BOOT
───────────────────────────────────────────────────── */
(function boot() {
  if (!TOUCH) {
    initCursor();
    initMagnetic();
  }

  initParallax();
  initReveal3D();

  // Card tilt arranca después de que render() llena el grid
  function tryCardTilt() {
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
      if (!TOUCH) initCardTilt();
    } else {
      setTimeout(tryCardTilt, 300);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(tryCardTilt, 500));
  } else {
    setTimeout(tryCardTilt, 500);
  }
})();
