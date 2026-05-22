/* ═══ LOYAL STUDIOS — APP ═══ */

// State
let fB = "all", fG = "all";
let cur = null, curImg = 0, curSize = null;
let cart = JSON.parse(localStorage.getItem("ls_cart") || "[]");
// Migration: drop cart items whose product no longer exists OR whose stored
// foto URL does not match the current product's first photo (catalog updates)
cart = cart.filter(it => {
  const p = (typeof PRODS !== "undefined") && PRODS.find(x => x.id === it.id);
  if (!p) return false;
  it.foto = p.fotos[0]; // refresh image to current
  it.nombre = p.nombre;
  it.precio = p.precio;
  it.marca = p.marca;
  return true;
});
localStorage.setItem("ls_cart", JSON.stringify(cart));

// ═══ INTRO ═══
// El PRIMER reveal lo maneja un <script> inline en index.html para que se
// ejecute de inmediato (sin esperar a que descarguen/parseen estos JS en el
// celular). Acá sólo vive la lógica de "repetir intro".
const INTRO_DURATION = 4700;
function replayIntro(){
  const intro = document.getElementById("intro");
  const html = window.__LS_INTRO_HTML;
  if(!intro || !html) return;
  // Reset content (restarts all CSS animations from 0)
  window.__LS_REVEAL = null;            // permite que un nuevo reveal corra
  intro.style.display = "";
  intro.classList.remove("gone");
  intro.innerHTML = html;
  setTimeout(()=>{
    const i = document.getElementById("intro");
    if(!i) return;
    i.classList.add("gone");
    document.getElementById("site").classList.add("show");
    setTimeout(()=>{ i.style.display="none"; }, 500);
  }, INTRO_DURATION);
}

// ═══ ROUTING ═══
let _homeScrollY = 0;

function showPage(name) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page-" + name).classList.add("active");
  if (name === "detail") {
    _homeScrollY = window.scrollY;
    window.scrollTo({ top: 0, behavior: "instant" });
  } else if (name === "home") {
    // Restore scroll position when returning home
    requestAnimationFrame(() => {
      window.scrollTo({ top: _homeScrollY, behavior: "instant" });
    });
  } else {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  document.querySelector(".nav-back").style.display = name === "detail" ? "flex" : "none";
}

function goHome() {
  showPage("home");
}

function scrollCatalog() {
  document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
}

function filterGender(g) {
  fG = g; fB = "all";
  document.querySelectorAll("[data-g]").forEach(b => b.classList.remove("on"));
  const tab = document.querySelector(`[data-g="${g}"]`);
  if (tab) tab.classList.add("on");
  document.querySelectorAll("[data-b]").forEach(b => b.classList.remove("on"));
  document.querySelector('[data-b="all"]').classList.add("on");
  render();
  setTimeout(() => document.getElementById("catalog").scrollIntoView({ behavior: "smooth" }), 80);
}

function filterBrand(b, btn) {
  fB = b;
  document.querySelectorAll("[data-b]").forEach(el => el.classList.remove("on"));
  const tab = btn || document.querySelector(`[data-b="${b}"]`);
  if (tab) tab.classList.add("on");
  render();
  setTimeout(() => document.getElementById("catalog").scrollIntoView({ behavior: "smooth" }), 80);
}

function setG(v, btn) {
  fG = v;
  document.querySelectorAll("[data-g]").forEach(b => b.classList.remove("on"));
  btn.classList.add("on");
  render();
}

function setB(v, btn) {
  fB = v;
  document.querySelectorAll("[data-b]").forEach(b => b.classList.remove("on"));
  btn.classList.add("on");
  render();
}

// ═══ RENDER GRID ═══
function badge(b) {
  if (b === "new")  return '<div class="card-badge b-new">★ Nuevo</div>';
  if (b === "last") return '<div class="card-badge b-last">Última talla</div>';
  if (b === "out")  return '<div class="card-badge b-out">Agotado</div>';
  if (b === "dp")   return '<div class="card-badge b-dp">De Primera</div>';
  return "";
}

function uidOf(p) { return "NK-" + String(p.id).padStart(2, "0"); }

function cardHTML(p, i) {
  return `
    <article class="card" style="--i:${i || 0}" onclick="openDetail(${p.id})">
      <div class="card-img">
        <img src="${p.fotos[0]}" alt="${p.nombre}" loading="lazy" decoding="async">
        ${badge(p.badge)}
        <div class="card-uid">${uidOf(p)}</div>
        <div class="card-cta">Ver producto →</div>
      </div>
      <div class="card-body">
        <div class="card-brand">${p.marca}</div>
        <div class="card-name">${p.nombre}</div>
        <div class="card-foot">
          <span class="card-price">${p.precio}</span>
          <span class="card-gen">${p.genero}</span>
        </div>
      </div>
    </article>`;
}

function render() {
  const isSold = fB === "sold";
  const list = isSold
    ? ITEMS.filter(p => p.stock === false && (fG === "all" || p.genero === fG))
    : ITEMS.filter(p =>
        p.stock !== false &&
        (fG === "all" || p.genero === fG) &&
        (fB === "all" || p.marca_id === fB)
      );
  const grid = document.getElementById("grid");
  document.getElementById("cat-count").textContent =
    `${list.length} ${list.length === 1 ? "pieza" : "piezas"}`;
  document.getElementById("dp-banner").classList.toggle("show", fB === "deprimera");
  document.getElementById("catalog").classList.toggle("sold-view", isSold);

  if (!list.length) {
    grid.innerHTML = `<div class="empty" style="grid-column:1/-1">
      <div class="empty-h">Nada por ahora</div>
      <div class="empty-p">Probá otro filtro o escribinos al WhatsApp.</div>
    </div>`;
    return;
  }
  grid.innerHTML = list.map(cardHTML).join("");
}

// ═══ DETAIL ═══
function openDetail(id) {
  cur = ITEMS.find(p => p.id === id);
  if (!cur) return;
  curImg = 0;
  curSize = null;

  // Pixel
  if (typeof fbq === "function") {
    const price = parseInt(cur.precio.replace(/[^0-9]/g, ""), 10) || 0;
    fbq("track", "ViewContent", {
      content_name: cur.nombre,
      content_ids: [String(cur.id)],
      content_type: "product",
      value: price, currency: "BOB",
      content_category: cur.marca
    });
  }

  // Brand tag
  const tag = document.getElementById("d-brand");
  tag.textContent = cur.marca.toUpperCase();
  tag.className = "d-brand-tag" + (cur.marca_id === "deprimera" ? " dp" : "");

  document.getElementById("d-gen").textContent = cur.genero.toUpperCase();
  const dUid = document.getElementById("d-uid");
  if (dUid) dUid.textContent = uidOf(cur);
  document.getElementById("d-name").textContent = cur.nombre;
  document.getElementById("d-price").textContent = cur.precio;
  document.getElementById("d-desc").textContent = cur.desc;

  // Notes
  document.getElementById("dp-note").classList.toggle("show", cur.badge === "dp");
  document.getElementById("new-note").classList.toggle("show", cur.badge === "new");

  // Gallery
  document.getElementById("d-main").src = cur.fotos[0];
  const thumbs = document.getElementById("d-thumbs");
  thumbs.innerHTML = cur.fotos.map((f, i) =>
    `<img class="d-thumb${i === 0 ? " on" : ""}" src="${f}" onclick="setImg(${i})" alt="">`
  ).join("");

  // Sizes
  const sz = document.getElementById("d-sizes");
  sz.innerHTML = cur.tallas.map(t =>
    `<button class="d-sz" onclick="pickSize('${t}',this)">${t}</button>`
  ).join("");

  // Buy button
  const buy = document.getElementById("d-buy");
  if (!cur.stock) {
    buy.textContent = "Agotado";
    buy.classList.add("agotado");
  } else {
    buy.innerHTML = `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> Comprar por WhatsApp`;
    buy.classList.remove("agotado");
  }

  showPage("detail");
}

function setImg(i) {
  curImg = i;
  document.getElementById("d-main").src = cur.fotos[i];
  document.querySelectorAll(".d-thumb").forEach((t, k) => t.classList.toggle("on", k === i));
}

function navImg(dir) {
  if (!cur) return;
  curImg = (curImg + dir + cur.fotos.length) % cur.fotos.length;
  setImg(curImg);
}

function pickSize(t, btn) {
  curSize = t;
  document.querySelectorAll(".d-sz").forEach(b => b.classList.remove("on"));
  btn.classList.add("on");
}

function buyWA() {
  if (!cur || !cur.stock) return;
  if (!curSize && cur.tallas.length) {
    const sz = document.getElementById("d-sizes");
    sz.style.animation = "shakeX .4s";
    setTimeout(() => sz.style.animation = "", 400);
    return;
  }
  if (typeof fbq === "function") {
    const price = parseInt(cur.precio.replace(/[^0-9]/g, ""), 10) || 0;
    fbq("track", "InitiateCheckout", {
      content_name: cur.nombre,
      content_ids: [String(cur.id)],
      content_type: "product",
      value: price, currency: "BOB",
      num_items: 1,
      contents: [{ id: String(cur.id), quantity: 1, item_price: price }]
    });
  }
  const msg = encodeURIComponent(
    `Hola ${TIENDA}, quiero el ${cur.nombre}${curSize ? " (Talla " + curSize + ")" : ""} — ${cur.precio}`
  );
  window.open(`https://wa.me/${WA_NUM}?text=${msg}`, "_blank");
}

function addToCart() {
  if (!cur || !cur.stock) return;
  if (!curSize && cur.tallas.length) {
    const sz = document.getElementById("d-sizes");
    sz.style.animation = "shakeX .4s";
    setTimeout(() => sz.style.animation = "", 400);
    return;
  }
  cart.push({
    id: cur.id, nombre: cur.nombre, precio: cur.precio,
    talla: curSize, foto: cur.fotos[0], marca: cur.marca
  });
  localStorage.setItem("ls_cart", JSON.stringify(cart));
  updateCartUI();

  if (typeof fbq === "function") {
    const price = parseInt(cur.precio.replace(/[^0-9]/g, ""), 10) || 0;
    fbq("track", "AddToCart", {
      content_name: cur.nombre,
      content_ids: [String(cur.id)],
      content_type: "product",
      value: price, currency: "BOB",
      contents: [{ id: String(cur.id), quantity: 1, item_price: price }]
    });
  }

  const btn = document.getElementById("d-add-cart");
  btn.classList.add("added");
  btn.querySelector("span").textContent = "✓ Agregado";
  setTimeout(() => {
    btn.classList.remove("added");
    btn.querySelector("span").textContent = "Agregar al carrito";
  }, 1600);
}

// ═══ CART ═══
function updateCartUI() {
  const fab = document.querySelector(".cart-fab");
  if (fab) fab.classList.toggle("has-items", cart.length > 0);

  const badge = document.getElementById("cart-badge");
  badge.textContent = cart.length;
  badge.classList.toggle("show", cart.length > 0);

  const itemsEl = document.getElementById("cart-items");
  const emptyEl = document.getElementById("cart-empty");
  const footerEl = document.getElementById("cart-footer-bar");

  if (!cart.length) {
    itemsEl.innerHTML = "";
    itemsEl.appendChild(emptyEl);
    emptyEl.style.display = "flex";
    footerEl.style.display = "none";
    return;
  }

  emptyEl.style.display = "none";
  footerEl.style.display = "block";
  itemsEl.innerHTML = cart.map((it, i) => `
    <div class="cart-item">
      <img class="cart-item-img" src="${it.foto}" alt="">
      <div class="cart-item-info">
        <div class="cart-item-name">${it.nombre}</div>
        <div class="cart-item-meta">${it.marca}${it.talla ? " · T " + it.talla : ""}</div>
        <div class="cart-item-price">${it.precio}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${i})" aria-label="Quitar">×</button>
    </div>
  `).join("");

  const total = cart.reduce((s, it) => s + (parseInt(it.precio.replace(/[^0-9]/g, ""), 10) || 0), 0);
  document.getElementById("cart-total").textContent = "Bs. " + total;
}

function removeFromCart(i) {
  cart.splice(i, 1);
  localStorage.setItem("ls_cart", JSON.stringify(cart));
  updateCartUI();
}

function openCart() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("show");
}
function closeCart() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("show");
}

function cartCheckoutWA() {
  if (!cart.length) return;
  const lines = cart.map(it =>
    `• ${it.nombre}${it.talla ? " (T: " + it.talla + ")" : ""} — ${it.precio}`
  ).join("\n");
  const total = cart.reduce((s, it) => s + (parseInt(it.precio.replace(/[^0-9]/g, ""), 10) || 0), 0);
  const msg = encodeURIComponent(
    `Hola ${TIENDA}, quiero pedir:\n\n${lines}\n\nTotal: Bs. ${total}`
  );
  if (typeof fbq === "function") {
    fbq("track", "InitiateCheckout", {
      value: total, currency: "BOB",
      contents: cart.map(i => ({ id: String(i.id), quantity: 1 })),
      content_type: "product",
      num_items: cart.length
    });
  }
  window.open(`https://wa.me/${WA_NUM}?text=${msg}`, "_blank");
}

// ═══ LIGHTBOX ═══
function openLightbox() {
  if (!cur) return;
  const lb = document.getElementById("gallery-lightbox");
  document.getElementById("lightbox-img").src = cur.fotos[curImg];
  document.getElementById("lightbox-counter").textContent =
    `${curImg + 1} / ${cur.fotos.length}`;
  lb.classList.add("active");
}
function closeLightbox() {
  document.getElementById("gallery-lightbox").classList.remove("active");
}
function lightboxNav(dir) {
  if (!cur) return;
  curImg = (curImg + dir + cur.fotos.length) % cur.fotos.length;
  setImg(curImg);
  document.getElementById("lightbox-img").src = cur.fotos[curImg];
  document.getElementById("lightbox-counter").textContent =
    `${curImg + 1} / ${cur.fotos.length}`;
}

// ═══ SCROLL — paper transition + reveals ═══
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const cat = document.getElementById("catalog");
    const fb = document.getElementById("filter-bar");
    if (cat) {
      const r = cat.getBoundingClientRect();
      const lit = r.top < window.innerHeight * 0.5;
      cat.classList.toggle("lit", lit);
      if (fb) fb.classList.toggle("lit", lit);
    }
    // Cart FAB appears after scrolling past 50% of page
    const cartFab = document.querySelector(".cart-fab");
    if (cartFab) {
      const scrolled = window.scrollY + window.innerHeight;
      const halfway = document.documentElement.scrollHeight * 0.5;
      cartFab.classList.toggle("scroll-shown", scrolled > halfway);
    }
    document.querySelectorAll(".reveal").forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) el.classList.add("in");
    });
    ticking = false;
  });
}
window.addEventListener("scroll", onScroll, { passive: true });

// Lead pixel events
let scrollTracked = false;
window.addEventListener("scroll", () => {
  if (!scrollTracked && window.scrollY > 500 && typeof fbq === "function") {
    fbq("track", "Lead", { content_name: "Scroll 500px" });
    scrollTracked = true;
  }
}, { passive: true });
setTimeout(() => {
  if (typeof fbq === "function") fbq("track", "Lead", { content_name: "15s en página" });
}, 15000);

// Keyboard
document.addEventListener("keydown", e => {
  if (document.getElementById("gallery-lightbox").classList.contains("active")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxNav(-1);
    if (e.key === "ArrowRight") lightboxNav(1);
  }
});

// ═══ COVERFLOW 3D DE MARCAS ═══
// Manejado por TRANSFORMS (no por scroll). Por eso anima siempre en iOS
// Safari / Android gama baja, se auto-rota solo y responde al swipe.
// Solo transform/opacity → fluido en cualquier celular de Bolivia.
let _bcCards = [], _bcActive = 0;
let _bcDir = 1, _bcAutoTimer = null, _bcIdleTimer = null, _bcVisible = false;
const BC_INTERVAL = 2200;   // gira cada 2.2s (legible pero dinámico)
const BC_RESUME   = 3500;   // retoma 3.5s después de que sueltes

function bcLayout() {
  if (!_bcCards.length) return;
  const cw = _bcCards[0].offsetWidth || 280;
  const n = _bcCards.length;
  _bcCards.forEach((card, i) => {
    let off = i - _bcActive;
    const a = Math.abs(off);
    const cl = Math.max(-3, Math.min(3, off));
    const x  = cl * cw * 0.68;
    const ry = -cl * 32;
    const tz = -Math.min(a, 3) * 200;
    const sc = Math.max(1 - a * 0.13, 0.65);
    const op = a >= 3.2 ? 0 : Math.max(1 - a * 0.28, 0.30);
    card.style.transform =
      `translateX(${x.toFixed(1)}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc.toFixed(3)})`;
    card.style.opacity = op.toFixed(3);
    card.style.zIndex = String(60 - a);
    card.style.pointerEvents = a >= 3.2 ? "none" : "auto";
    card.classList.toggle("is-active", i === _bcActive);
  });
  const dots = document.querySelectorAll("#brands-dots .bc-dot");
  dots.forEach((d, i) => d.classList.toggle("on", i === _bcActive));
}

function bcGo(i) {
  const n = _bcCards.length;
  if (!n) return;
  _bcActive = Math.max(0, Math.min(n - 1, i));
  bcLayout();
}

function bcAutoStep() {
  if (_bcCards.length < 2) return;
  let next = _bcActive + _bcDir;
  if (next > _bcCards.length - 1) { _bcDir = -1; next = _bcActive - 1; }
  else if (next < 0) { _bcDir = 1; next = _bcActive + 1; }
  bcGo(next);
}
function bcAutoStart() {
  if (_bcAutoTimer || !_bcVisible || _bcCards.length < 2) return;
  _bcAutoTimer = setInterval(bcAutoStep, BC_INTERVAL);
}
function bcAutoStop() {
  if (_bcAutoTimer) { clearInterval(_bcAutoTimer); _bcAutoTimer = null; }
}
// El usuario interactuó → pausa y retoma solo tras inactividad
function bcUserTouch() {
  bcAutoStop();
  const h = document.getElementById("bc-hint");
  if (h) h.classList.add("gone");
  if (_bcIdleTimer) clearTimeout(_bcIdleTimer);
  _bcIdleTimer = setTimeout(() => { if (_bcVisible) bcAutoStart(); }, BC_RESUME);
}

function buildBrandsCarousel() {
  const track = document.getElementById("brands-track");
  const dots = document.getElementById("brands-dots");
  const stage = document.getElementById("brands-carousel");
  if (!track || !stage) return;

  track.innerHTML = BRANDS.map((b, i) => `
    <article class="bc-card" data-bid="${b.id}" data-i="${i}">
      <div class="bc-img" style="background-image:url('${b.img}')"></div>
      <div class="bc-overlay"></div>
      <div class="bc-info">
        <span class="bc-tag">Ver colección →</span>
        <div class="bc-wordmark wm-${b.id}">${b.wordmark}</div>
        <div class="bc-count">${ITEMS.filter(it => it.marca_id === b.id).length} piezas</div>
      </div>
    </article>`).join("");

  dots.innerHTML = BRANDS.map((b, i) =>
    `<button class="bc-dot${i === 0 ? " on" : ""}" aria-label="Ir a ${b.name}" data-i="${i}"></button>`
  ).join("");

  _bcCards = Array.from(track.children);
  _bcActive = 0;

  // Snap instantly to initial positions — disable CSS transition so cards
  // don't slowly drift in from center on first render.
  _bcCards.forEach(c => { c.style.transition = "none"; });
  bcLayout();
  // Force reflow so the browser commits the "no-transition" state, then restore.
  if (_bcCards[0]) _bcCards[0].getBoundingClientRect();
  requestAnimationFrame(() => _bcCards.forEach(c => { c.style.transition = ""; }));

  dots.querySelectorAll(".bc-dot").forEach(d => {
    d.addEventListener("click", () => { bcUserTouch(); bcGo(parseInt(d.dataset.i, 10)); });
  });

  // Tap en card: si es la activa → abre la colección; si no → la trae al centro
  let _sx = 0, _sy = 0, _st = 0, _moved = false;
  stage.addEventListener("touchstart", e => {
    bcUserTouch();
    const t = e.touches[0]; _sx = t.clientX; _sy = t.clientY; _st = Date.now(); _moved = false;
  }, { passive: true });
  stage.addEventListener("touchmove", e => {
    const t = e.touches[0];
    if (Math.abs(t.clientX - _sx) > 8 || Math.abs(t.clientY - _sy) > 8) _moved = true;
  }, { passive: true });
  stage.addEventListener("touchend", e => {
    const t = e.changedTouches[0];
    const dx = t.clientX - _sx, dy = t.clientY - _sy;
    if (Math.abs(dx) > 38 && Math.abs(dx) > Math.abs(dy)) {
      bcGo(_bcActive + (dx < 0 ? 1 : -1));
    } else if (!_moved) {
      bcCardTap(e.target);
    }
  });
  // Click (desktop / sin touch)
  stage.addEventListener("click", e => {
    if (_moved) return;
    if (e.pointerType === "touch" || ("ontouchstart" in window)) return;
    bcUserTouch(); bcCardTap(e.target);
  });

  ["pointerdown", "wheel", "keydown"].forEach(ev =>
    stage.addEventListener(ev, bcUserTouch, { passive: true })
  );
  document.addEventListener("keydown", e => {
    if (!_bcVisible) return;
    if (e.key === "ArrowRight") { bcUserTouch(); bcGo(_bcActive + 1); }
    if (e.key === "ArrowLeft")  { bcUserTouch(); bcGo(_bcActive - 1); }
  });

  window.addEventListener("resize", () => requestAnimationFrame(bcLayout), { passive: true });

  // Arranca el autoplay YA — el usuario quiere movimiento desde el primer
  // segundo, no esperar a que IO dispare. IO solo lo pausa cuando estás muy
  // lejos del carrusel (ahorro de batería).
  _bcVisible = true;
  bcAutoStart();

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(entries => {
      const e = entries[0];
      _bcVisible = e.isIntersecting;
      if (_bcVisible) { bcLayout(); bcAutoStart(); } else bcAutoStop();
    }, { rootMargin: "200% 0px 200% 0px", threshold: 0 }).observe(stage);
  }

  // Layout pass al ratito por si la fuente o las imágenes cambian tamaños.
  [80, 300, 700, 1500].forEach(t => setTimeout(bcLayout, t));

  // "Teaser" en el primer segundo para que se note que se puede deslizar:
  // avanza una, vuelve, avanza otra. Suficiente para que el usuario vea el
  // movimiento aunque todavía no haya scrolleado.
  setTimeout(() => { if (_bcCards.length > 1) bcGo(1); }, 900);
  setTimeout(() => { if (_bcCards.length > 1) bcGo(0); }, 2100);
}

function bcCardTap(targetEl) {
  const card = targetEl.closest ? targetEl.closest(".bc-card") : null;
  if (!card) return;
  const idx = parseInt(card.dataset.i, 10);
  if (idx === _bcActive) {
    const bid = card.dataset.bid;
    const tab = document.querySelector(`[data-b='${bid}']`);
    filterBrand(bid, tab);
  } else {
    bcGo(idx);
  }
}

// ═══ INIT ═══
// El carrusel de marcas se construye lo antes posible (no espera a la intro)
// para que la animación ya esté corriendo cuando el usuario llegue a esa
// sección. El catálogo principal sí espera al intro reveal por performance.
function _bootCarouselEarly() {
  if (window.__LS_CAROUSEL_BUILT) return;
  if (typeof BRANDS === "undefined") return;
  if (!document.getElementById("brands-track")) return;
  window.__LS_CAROUSEL_BUILT = true;
  buildBrandsCarousel();
}

function init() {
  if (!window.__LS_CAROUSEL_BUILT) buildBrandsCarousel();
  render();
  updateCartUI();
  initDropVideos();
  onScroll();
}

// ═══ DROP SECTION VIDEOS (Columbia + TNF) ═══
// Carga los videos solo cuando se acercan al viewport. Respeta Save-Data:
// si el usuario lo tiene activo, se queda con la foto y no descarga el mp4.
function initDropVideos() {
  const videos = document.querySelectorAll(".drop-video[data-src]");
  if (!videos.length) return;

  // Save-Data: usuario en plan de datos limitado → no descargar videos
  const conn = navigator.connection || navigator.webkitConnection;
  if (conn && (conn.saveData || conn.effectiveType === "slow-2g" || conn.effectiveType === "2g")) {
    return;
  }

  if (!("IntersectionObserver" in window)) return;

  // La clase "video-playing" (que muestra el video encima de la foto) SOLO se
  // añade cuando el video realmente está reproduciéndose. Si el autoplay falla
  // (iOS en Modo Bajo Consumo bloquea autoplay aunque esté muted), la foto-
  // poster se queda visible y NUNCA se ve el fondo gris.
  videos.forEach(v => {
    v.addEventListener("playing", () => v.parentElement.classList.add("video-playing"));
    // Si el video se pausa, vacía o falla, volvemos a mostrar la foto.
    ["pause", "emptied", "error", "stalled", "waiting"].forEach(ev =>
      v.addEventListener(ev, () => {
        if (v.paused || v.readyState < 3) v.parentElement.classList.remove("video-playing");
      })
    );
  });

  function tryPlay(v) {
    if (!v.src && v.dataset.src) { v.src = v.dataset.src; v.load(); }
    const p = v.play();
    if (p && p.catch) p.catch(() => {
      // Autoplay bloqueado → la foto queda visible (sin gris).
      v.parentElement.classList.remove("video-playing");
    });
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting) {
        tryPlay(v);
      } else {
        v.pause();
      }
    });
  }, { rootMargin: "150px 0px 150px 0px", threshold: 0.1 });

  videos.forEach(v => io.observe(v));

  // Reintento global: si el usuario toca/scrollea la página (gesto que iOS
  // acepta para desbloquear media), reintentamos reproducir los visibles.
  let retried = false;
  function retryVisible() {
    if (retried) return;
    retried = true;
    videos.forEach(v => {
      const r = v.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) tryPlay(v);
    });
  }
  ["touchstart", "click", "scroll"].forEach(ev =>
    window.addEventListener(ev, () => { retried = false; retryVisible(); }, { passive: true })
  );
}

// ═══ ARRANQUE DEL CATÁLOGO ═══
// El catálogo NO se construye durante la intro: en el celular, armar las
// tarjetas + decodificar imágenes mientras corre la animación pesada de la
// intro ahoga al iPhone y la congela justo en el logo. Lo construimos recién
// cuando la intro terminó (el hero se ve primero; el catálogo está más abajo).
function _bootCatalog(){
  if (window.__LS_BOOTED) return;
  window.__LS_BOOTED = true;
  init();
}

// Arranque temprano del carrusel: en cuanto el DOM esté listo, no esperamos
// la intro. La sección está debajo del fold y no compite con la animación
// inicial — solo asegura que cuando el usuario scrollee, ya está moviéndose.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", _bootCarouselEarly);
} else {
  _bootCarouselEarly();
}
if (window.__LS_REVEALED) {
  // La intro ya terminó antes de que cargaran estos JS → armar ya mismo.
  _bootCatalog();
} else {
  // Esperar al reveal de la intro (lo dispara el <script> inline del HTML).
  window.__LS_ON_REVEAL = _bootCatalog;
}
// Salvaguarda: si por alguna razón el reveal no lo disparó, armar en load.
window.addEventListener("load", () => setTimeout(_bootCatalog, 50));
