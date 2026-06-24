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

// Copy del fardo: HONESTO con lo que hay (retorno + algo nuevo + relleno),
// pero sólido y vendedor. Sin tablita de cantidades ni cuentas de reventa.
const FARDO_DESC =
  "Un fardo de 20 prendas listo para revender. La mayoría son prendas de retorno de marca: " +
  "vienen con algún pequeño detalle de fábrica (una costura, una etiqueta, un mínimo defecto que casi no se nota) " +
  "y por eso las conseguís muy por debajo de su precio real. También entran prendas nuevas sin ningún detalle, " +
  "y algunas piezas para completar el surtido. Mezcla pareja de hombre y mujer. " +
  "Te mostramos la foto real del lote antes de comprar — lo que ves es lo que llega. " +
  "Honestos con lo que hay, para que vendas tranquilo y con buen margen.";

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
