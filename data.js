/* ═══ LOYAL STUDIOS — DATA (FARDOS / MAYORISTA) ═══ */
const WA_NUM = "59175485831"; // temporal: WhatsApp personal de Rodrigo para los lives
const TIENDA = "Loyal Studios™";

// Marcas que TOCAN dentro de los fardos (showcase, no filtro).
// TNF y Columbia quedan fuera de acá (son abrigos premium, no entran al fardo).
const BRANDS = [
  { id:"nike",       name:"Nike",           wordmark:"NIKE",           img:"assets/brand-nike.avif" },
  { id:"jordan",     name:"Air Jordan",     wordmark:"AIR JORDAN",     img:"assets/brand-jordan.avif" },
  { id:"adidas",     name:"Adidas",         wordmark:"adidas",         img:"assets/brand-adidas.avif" },
  { id:"newbalance", name:"New Balance",    wordmark:"New Balance",    img:"assets/brand-newbalance.jpg" },
  { id:"tommy",      name:"Tommy Hilfiger", wordmark:"TOMMY HILFIGER", img:"assets/brand-tommy.webp" },
  { id:"calvin",     name:"Calvin Klein",   wordmark:"Calvin Klein",   img:"assets/brand-calvin.jpg" },
  { id:"guess",      name:"GUESS",          wordmark:"GUESS",          img:"assets/brand-guess-v2.jpg" },
  { id:"deprimera",  name:"De Primera",     wordmark:"De Primera ✦",   img:"assets/brand-deprimera.webp" }
];

// Copy premium del fardo (sin tablita de cantidades ni cuentas de reventa).
const FARDO_DESC =
  "20 prendas de marca original, elegidas a mano y listas para revender. " +
  "Una mezcla equilibrada de hombre y mujer — entre nuevas con etiqueta y de muy poco uso, " +
  "todas en excelente estado. Cada fardo es único: te mostramos la foto real del lote antes de comprar. " +
  "Tu próximo negocio, en una sola caja.";

// 11 fardos Loyal Starter disponibles. Cada uno tendrá su foto real (placeholder por ahora).
const ITEMS = [];
for (let _i = 1; _i <= 11; _i++) {
  ITEMS.push({
    id: _i,
    genero: "20 prendas",
    marca: "Fardo de marca",
    marca_id: "loyal",
    badge: "",
    stock: true,
    nombre: "Fardo Loyal Starter Nº" + _i,
    precio: "Bs. 1.350",
    tallas: [],
    desc: FARDO_DESC,
    fotos: ["assets/logo-big.jpeg"] // ← se reemplaza por la foto real de cada lote
  });
}
