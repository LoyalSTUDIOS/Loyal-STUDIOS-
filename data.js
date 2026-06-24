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

// Copy del fardo: composición EXACTA y honesta (lo que de verdad viene), sólido
// y vendedor. Los saltos de línea se respetan en la web (.d-desc white-space).
const FARDO_DESC =
  "20 prendas pensadas para revender, mayormente ropa deportiva de mujer con piezas de hombre nuevas que levantan el lote:\n\n" +
  "★ 4 de hombre NUEVAS y de marca (Tommy, Adidas, Calvin Klein, New Balance), entre casual y deportivo — el gancho del fardo.\n" +
  "★ 1 de mujer NUEVA de marca.\n" +
  "★ 7 de mujer de marca, de muy poco uso y sin ningún detalle, deportivas.\n" +
  "★ 8 de mujer de marca americana, de muy poco uso, deportivas.\n\n" +
  "Lo nuevo es nuevo; el resto es de muy poco uso, sin defectos. Te mostramos la foto real de cada lote antes de comprar — lo que ves es lo que llega.";

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
