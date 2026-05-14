/* ═══ LOYAL STUDIOS — APP ═══ */

// State
let fB = "all", fG = "all";
let cur = null, curImg = 0, curSize = null;
let savedScrollY = 0; // guarda posición al abrir detalle
let cart = JSON.parse(localStorage.getItem("ls_cart") || "[]");
// Migración: descarta items cuyo producto ya no exista y refresca datos
cart = cart.filter(it => {
  const p = ITEMS.find(x => x.id === it.id);
  if (!p) return false;
  it.foto  = p.fotos[0];
  it.nombre = p.nombre;
  it.precio = p.precio;
  it.marca  = p.marca;
  it.qty    = it.qty || 1;
  return true;
});
localStorage.setItem("ls_cart", JSON.stringify(cart));

// ═══ INTRO ═══
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").classList.add("gone");
    document.getElementById("site").classList.add("show");
    document.querySelector(".hero").classList.add("lit");
    setTimeout(() => document.getElementById("intro").remove(), 500);
  }, 4700);
});

// ═══ ROUTING ═══
function showPage(name) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page-" + name).classList.add("active");
  document.querySelector(".nav-back").style.display = name === "detail" ? "flex" : "none";
}

function goHome() {
  showPage("home");
  window.scrollTo({ top: savedScrollY, behavior: "instant" }); // vuelve donde estabas
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
  btn.classList.add("on");
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

function cardHTML(p) {
  const uid = "NK-" + String(p.id).padStart(2, "0");
  // FOMO en card: talla única o 2 tallas sin badge especial
  let fomoTag = "";
  if (p.badge !== "last" && p.badge !== "out") {
    if (p.tallas.length === 1) {
      fomoTag = `<div class="card-fomo">⚡ Última talla · ${p.tallas[0]}</div>`;
    } else if (p.tallas.length === 2) {
      fomoTag = `<div class="card-fomo">🔥 Pocas tallas</div>`;
    }
  }
  return `
    <article class="card" onclick="openDetail(${p.id})">
      <div class="card-img">
        <img src="${p.fotos[0]}" alt="${p.nombre}" loading="lazy" decoding="async">
        ${badge(p.badge)}
        <div class="card-uid">${uid}</div>
        <div class="card-cta">Ver producto →</div>
      </div>
      <div class="card-body">
        <div class="card-brand">${p.marca}</div>
        <div class="card-name">${p.nombre}</div>
        <div class="card-foot">
          <span class="card-price">${p.precio}</span>
          <span class="card-gen">${p.genero}</span>
        </div>
        ${fomoTag}
      </div>
    </article>`;
}

function render() {
  const list = ITEMS.filter(p =>
    (fG === "all" || p.genero === fG) &&
    (fB === "all" || p.marca_id === fB)
  );
  const grid = document.getElementById("grid");
  document.getElementById("cat-count").textContent =
    `${list.length} ${list.length === 1 ? "pieza" : "piezas"}`;
  document.getElementById("dp-banner").classList.toggle("show", fB === "deprimera");

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
  document.getElementById("d-uid").textContent = "NK-" + String(cur.id).padStart(2, "0");
  document.getElementById("d-name").textContent = cur.nombre;
  document.getElementById("d-price").textContent = cur.precio;
  document.getElementById("d-desc").textContent = cur.desc;

  // Notas destacadas
  const notasEl = document.getElementById("d-notas");
  if (cur.notas && cur.notas.length) {
    notasEl.innerHTML = cur.notas.map(n => `<span class="d-nota-chip">✦ ${n}</span>`).join("");
    notasEl.style.display = "flex";
  } else {
    notasEl.innerHTML = "";
    notasEl.style.display = "none";
  }

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

  // FOMO en detalle
  const fomoEl = document.getElementById("d-fomo");
  if (cur.badge === "last") {
    fomoEl.innerHTML = `<span class="d-fomo-msg d-fomo-urgent">⚠️ Últimas unidades — ¡Date prisa!</span>`;
    fomoEl.style.display = "flex";
  } else if (cur.tallas.length === 1) {
    fomoEl.innerHTML = `<span class="d-fomo-msg">⚡ Solo queda talla ${cur.tallas[0]} — Última disponible</span>`;
    fomoEl.style.display = "flex";
  } else if (cur.tallas.length === 2) {
    fomoEl.innerHTML = `<span class="d-fomo-msg">🔥 Pocas tallas — ${cur.tallas.join(" y ")}</span>`;
    fomoEl.style.display = "flex";
  } else {
    fomoEl.innerHTML = "";
    fomoEl.style.display = "none";
  }

  savedScrollY = window.scrollY; // guarda posición antes de abrir detalle
  showPage("detail");
  window.scrollTo({ top: 0, behavior: "instant" });
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
  const btn = document.getElementById("d-add-cart");
  if (btn.disabled) return; // evita spam

  const existing = cart.find(it => it.id === cur.id && it.talla === curSize);
  if (existing) {
    // Ya está en el carrito — no agregar duplicado
    btn.classList.add("added");
    btn.querySelector("span").textContent = "✓ Ya está en el carrito";
    btn.disabled = true;
    setTimeout(() => {
      btn.classList.remove("added");
      btn.querySelector("span").textContent = "Agregar al carrito";
      btn.disabled = false;
    }, 1800);
    return;
  }

  cart.push({
    id: cur.id, nombre: cur.nombre, precio: cur.precio,
    talla: curSize, foto: cur.fotos[0], marca: cur.marca, qty: 1
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

  btn.classList.add("added");
  btn.querySelector("span").textContent = "✓ Agregado";
  btn.disabled = true;
  setTimeout(() => {
    btn.classList.remove("added");
    btn.querySelector("span").textContent = "Agregar al carrito";
    btn.disabled = false;
  }, 1600);
}

// ═══ CART ═══
function cartTotalQty() {
  return cart.length;
}
function priceOf(it) {
  const p = ITEMS.find(x => x.id === it.id);
  const raw = (p && p.precio) || it.precio || "0";
  const num = parseInt(String(raw).replace(/[^0-9]/g, ""), 10);
  return isNaN(num) ? 0 : num;
}
function cartTotalPrice() {
  return cart.reduce((sum, it) => sum + priceOf(it), 0);
}

function updateCartUI() {
  const totalQty = cartTotalQty();

  const fab = document.querySelector(".cart-fab");
  if (fab) fab.classList.toggle("has-items", totalQty > 0);

  const badge = document.getElementById("cart-badge");
  badge.textContent = totalQty;
  badge.classList.toggle("show", totalQty > 0);

  const itemsEl  = document.getElementById("cart-items");
  const footerEl = document.getElementById("cart-footer-bar");

  // ⚠️ Siempre usamos innerHTML — nunca movemos nodos del DOM
  // (mover con appendChild + sobreescribir con innerHTML destruye referencias y rompe las actualizaciones)
  if (!cart.length) {
    itemsEl.innerHTML = `
    <div class="cart-empty">
      <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L20.88 4.5c.08-.14.12-.31.12-.5 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
      <p>Sin productos aún</p>
    </div>`;
    footerEl.style.display = "none";
    return;
  }

  footerEl.style.display = "block";
  itemsEl.innerHTML = cart.map((it, i) => {
    const price = priceOf(it);
    return `
    <div class="cart-item" data-cart-idx="${i}">
      <div class="cart-item-img-wrap">
        <img class="cart-item-img" src="${it.foto}" alt="${it.nombre}" loading="lazy">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${it.nombre}</div>
        <div class="cart-item-meta">${it.marca}${it.talla ? " · Talla " + it.talla : ""}</div>
        <div class="cart-item-bottom">
          <div class="cart-item-price">Bs. ${price}</div>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${i})" aria-label="Quitar producto">×</button>
    </div>`;
  }).join("");

  document.getElementById("cart-total").textContent = "Bs. " + cartTotalPrice().toFixed(0);
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
  const lines = cart.map(it => {
    const price = priceOf(it);
    return `• ${it.nombre}${it.talla ? " (T: " + it.talla + ")" : ""} — Bs. ${price}`;
  }).join("\n");
  const total = cartTotalPrice();
  const msg = encodeURIComponent(
    `Hola ${TIENDA}, quiero pedir:\n\n${lines}\n\nTotal: Bs. ${total}`
  );
  if (typeof fbq === "function") {
    fbq("track", "InitiateCheckout", {
      value: total, currency: "BOB",
      contents: cart.map(it => ({ id: String(it.id), quantity: 1 })),
      content_type: "product",
      num_items: cartTotalQty()
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

// ═══ INIT ═══
function init() {
  // Build brand monogram cards
  const bg = document.getElementById("brands-grid");
  bg.innerHTML = BRANDS.map(b => {
    const isLogo = b.fit === "contain";
    const style = isLogo
      ? `background-image:url('${b.img}');background-size:contain;background-color:${b.bg || "#fff"};background-position:center;background-repeat:no-repeat;`
      : `background-image:url('${b.img}')`;
    return `
    <div class="brand-card ${isLogo ? "is-logo" : ""} reveal" onclick="filterBrand('${b.id}', document.querySelector('[data-b=\\'${b.id}\\']'))">
      <div class="brand-card-img" style="${style}"></div>
      <div class="brand-card-overlay"></div>
      <div class="brand-card-info">
        ${isLogo ? "" : `<div class="brand-wordmark wm-${b.id}">${b.wordmark}</div>`}
        <div class="brand-count">${ITEMS.filter(i => i.marca_id === b.id).length} piezas</div>
      </div>
    </div>`;
  }).join("");

  render();
  updateCartUI();
  onScroll();
}
document.addEventListener("DOMContentLoaded", init);
