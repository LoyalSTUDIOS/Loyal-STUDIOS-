/* ═══ LOYAL STUDIOS — DATA (FARDOS / MAYORISTA) ═══ */
const WA_NUM = "59175485831"; // temporal: WhatsApp personal de Rodrigo para los lives
const TIENDA = "Loyal Studios™";

// Marcas que TOCAN dentro de los fardos (showcase, no filtro).
// TNF y Columbia quedan fuera de acá (son abrigos premium, se venden por unidad).
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

// Copy del fardo: MARKETING honesto (vende la oportunidad, sin recitar el
// desglose exacto). La composición real la conoce el equipo; acá se vende bien.
const FARDO_DESC =
  "Tu arranque como revendedor: 20 prendas de marca elegidas para que las vuelvas a vender y te quede margen. " +
  "Adentro llevás piezas de hombre nuevas de marcas como Tommy, Adidas, Calvin Klein y New Balance —el gancho que entra por los ojos— " +
  "junto a una fuerte selección de ropa deportiva de mujer, entre prendas nuevas y otras de muy poco uso, todas en excelente estado y sin defectos. " +
  "Cada fardo es un lote único: te mostramos su foto real antes de comprar, así sabés exactamente qué llevás. " +
  "Comprás por lote a precio mayorista y tu ganancia está en revender cada prenda. Lo que ves es lo que llega — sin vueltas, sin humo.";

// 11 fardos Loyal Starter disponibles, cada uno con la foto REAL de su lote.
const FARDO_FOTOS = { 1:4, 2:6, 3:8, 4:7, 5:7, 6:7, 7:8, 8:7, 9:7, 10:6, 11:8 };
const ITEMS = [];
for (let _i = 1; _i <= 11; _i++) {
  const fotos = [];
  for (let _f = 1; _f <= FARDO_FOTOS[_i]; _f++) fotos.push("assets/fardos/fardo-" + _i + "-" + _f + ".jpg");
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
    fotos: fotos
  });
}
