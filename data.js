/* ═══ LOYAL STUDIOS — DATA (FARDOS / MAYORISTA) ═══ */
const WA_NUM = "59175613517"; // WhatsApp del bot de Loyal Studios
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

// Copy del fardo: texto APROBADO por Rodrigo (marketing honesto, sin desglose).
const FARDO_DESC =
  "El fardo ideal para dar tus primeras ventas. Una selección cuidadosamente armada de prendas deportivas y casuales, " +
  "con presencia de marcas reconocidas y piezas elegidas por su potencial de reventa. Encontrarás una combinación de prendas nuevas, " +
  "ropa de retorno con mínimos detalles de fábrica y artículos deportivos en excelente estado o de muy poco uso, " +
  "ofreciendo variedad y valor dentro de un mismo lote. Cada fardo es único. Las fotografías muestran exactamente el contenido que recibirás, " +
  "sin reemplazos ni sorpresas. \"Tu próxima venta empieza acá.\"";

// 11 fardos Loyal Starter disponibles, cada uno con la foto REAL de su lote.
const FARDO_FOTOS = { 1:4, 2:6, 3:8, 4:7, 5:7, 6:7, 7:8, 8:7, 9:7, 10:6, 11:8 };
// Fardos ya VENDIDOS: siguen mostrándose en su lugar, marcados como vendidos.
const FARDOS_VENDIDOS = [3, 6, 9];
const ITEMS = [];
for (let _i = 1; _i <= 11; _i++) {
  const fotos = [];
  for (let _f = 1; _f <= FARDO_FOTOS[_i]; _f++) fotos.push("assets/fardos/fardo-" + _i + "-" + _f + ".jpg");
  const vendido = FARDOS_VENDIDOS.includes(_i);
  ITEMS.push({
    id: _i,
    genero: "20 prendas",
    marca: "Fardo de marca",
    marca_id: "loyal",
    badge: "",
    stock: !vendido,
    nombre: "Fardo Loyal Starter Nº" + _i,
    precio: "Bs. 1.350",
    tallas: [],
    desc: FARDO_DESC,
    fotos: fotos
  });
}
