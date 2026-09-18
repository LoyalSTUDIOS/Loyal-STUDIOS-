/* ═══ LOYAL STUDIOS — DATA ═══ */
const WA_NUM = "59174267395";
const TIENDA = "Loyal Studios™";

const BRANDS = [
  { id:"nike",       name:"Nike",           wordmark:"NIKE",           img:"assets/brand-nike.avif" },
  { id:"jordan",     name:"Air Jordan",     wordmark:"AIR JORDAN",     img:"assets/brand-jordan.avif" },
  { id:"adidas",     name:"Adidas",         wordmark:"adidas",         img:"assets/brand-adidas.avif" },
  { id:"newbalance", name:"New Balance",    wordmark:"New Balance",    img:"assets/brand-newbalance.jpg" },
  { id:"tommy",      name:"Tommy Hilfiger", wordmark:"TOMMY HILFIGER", img:"assets/brand-tommy.webp" },
  { id:"calvin",     name:"Calvin Klein",   wordmark:"Calvin Klein",   img:"assets/brand-calvin.jpg" },
  { id:"guess",      name:"GUESS",          wordmark:"GUESS",          img:"assets/brand-guess-v2.jpg" },
  { id:"deprimera",  name:"De Primera",     wordmark:"De Primera ✦",   img:"assets/brand-deprimera.webp" },
  { id:"columbia",   name:"Columbia",       wordmark:"Columbia",       img:"assets/odp-2025-sportchek-lp-wk43-columbia-3tile-outerwearv2.avif" },
  { id:"northface",  name:"The North Face", wordmark:"THE NORTH FACE", img:"assets/brand-northface.jpg" }
];

const ITEMS = [

  // ─── DROP NIKE · SEP 2026 — recién llegado, exclusivo web ──
  // Precio y tallas pendientes de confirmación del dueño (Precio a confirmar).

  { id:77, genero:"hombre", marca:"Tommy Hilfiger", marca_id:"tommy", badge:"new", stock:true,
    nombre:"Tommy Jeans Washed Hoodie — Verde Musgo",
    precio:"Bs. 279", tallas:["L"],
    desc:"Hoodie washed en verde musgo, con logo bordado tono sobre tono. Fleece grueso, capucha forrada. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/77/IMG_2204.jpg","fotos_catalogo/Hombre/77/IMG_2210.jpg","fotos_catalogo/Hombre/77/IMG_2211.jpg","fotos_catalogo/Hombre/77/IMG_2213.jpg","fotos_catalogo/Hombre/77/IMG_2215.jpg","fotos_catalogo/Hombre/77/IMG_2216.jpg"]},

  { id:76, genero:"hombre", marca:"New Balance", marca_id:"newbalance", badge:"new", stock:true,
    nombre:"New Balance Mesh Shorts — Negro",
    precio:"Bs. 230", tallas:["XL"],
    desc:"Short de malla técnica en negro, con logo NB reflectante y cordón ajustable. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/76/IMG_1975.jpg","fotos_catalogo/Hombre/76/IMG_1977.jpg","fotos_catalogo/Hombre/76/IMG_1979.jpg","fotos_catalogo/Hombre/76/IMG_1980.jpg"]},

  { id:75, genero:"hombre", marca:"Nike", marca_id:"nike", badge:"new", stock:true,
    nombre:"Nike Sportswear Woven Pants — Azul Marino",
    precio:"Bs. 390", tallas:["L"],
    desc:"Pantalón woven azul marino, con Swoosh bordado al tono y cordón ajustable. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/75/IMG_1413.jpg","fotos_catalogo/Hombre/75/IMG_1405.jpg","fotos_catalogo/Hombre/75/IMG_1415.jpg","fotos_catalogo/Hombre/75/IMG_1418.jpg","fotos_catalogo/Hombre/75/IMG_1423.jpg"]},

  { id:74, genero:"hombre", marca:"Adidas", marca_id:"adidas", badge:"new", stock:true,
    nombre:"Adidas Double Cargo Pants — Negro",
    precio:"Bs. 420", tallas:["L"],
    notas:["Corte oversized, rinde hasta para un XL"],
    desc:"Cargo negro con doble bolsillo funcional, tela ripstop y corte relajado. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/74/IMG_1219.jpg","fotos_catalogo/Hombre/74/IMG_1222.jpg","fotos_catalogo/Hombre/74/IMG_1224.jpg","fotos_catalogo/Hombre/74/IMG_1226.jpg","fotos_catalogo/Hombre/74/IMG_1229.jpg"]},

  { id:73, genero:"hombre", marca:"Nike", marca_id:"nike", badge:"new", stock:true,
    nombre:"Nike Sportswear Graphic Tee — Blanco",
    precio:"Bs. 140", tallas:["S"],
    desc:"Remera blanca con gráfica del Swoosh en degradé de atardecer. Algodón de peso real. Nueva, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/73/IMG_0146.jpg","fotos_catalogo/Hombre/73/IMG_0147.jpg","fotos_catalogo/Hombre/73/IMG_0148.jpg","fotos_catalogo/Hombre/73/IMG_0149.jpg"]},

  { id:72, genero:"hombre", marca:"De Primera", marca_id:"deprimera", badge:"new", stock:true,
    nombre:"Stone Island Crewneck — Blanco",
    precio:"Bs. 319", tallas:["M"],
    notas:["Talla M justa, rinde hasta para una S"],
    desc:"Crewneck blanco con la brújula bordada tono sobre tono al pecho. Fleece pesado, silueta relajada. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/72/IMG_0071.jpg","fotos_catalogo/Hombre/72/IMG_0072.jpg","fotos_catalogo/Hombre/72/IMG_0073.jpg","fotos_catalogo/Hombre/72/IMG_0074.jpg","fotos_catalogo/Hombre/72/IMG_0076.jpg","fotos_catalogo/Hombre/72/IMG_0077.jpg","fotos_catalogo/Hombre/72/IMG_0078.jpg"]},

  { id:71, genero:"hombre", marca:"Air Jordan", marca_id:"jordan", badge:"new", stock:true,
    nombre:"Jordan Flight Essentials Hoodie — Crema",
    precio:"Bs. 379", tallas:["S","M"],
    desc:"Hoodie crema con el parche Flight bordado al pecho. Fleece premium, capucha forrada. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/71/IMG_0081.jpg","fotos_catalogo/Hombre/71/IMG_0082.jpg","fotos_catalogo/Hombre/71/IMG_0084.jpg","fotos_catalogo/Hombre/71/IMG_0085.jpg","fotos_catalogo/Hombre/71/IMG_0088.jpg"]},

  { id:70, genero:"hombre", marca:"Nike", marca_id:"nike", badge:"new", stock:true,
    nombre:"Nike Sportswear Cargo Pants — Canela",
    precio:"Bs. 390", tallas:["L"],
    desc:"Cargo en canela, con bolsillo funcional, Swoosh bordado y tela de peso real. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/70/IMG_2354.jpg","fotos_catalogo/Hombre/70/IMG_2346.jpg","fotos_catalogo/Hombre/70/IMG_2347.jpg","fotos_catalogo/Hombre/70/IMG_2356.jpg","fotos_catalogo/Hombre/70/IMG_2358.jpg","fotos_catalogo/Hombre/70/IMG_2361.jpg"]},

  { id:69, genero:"hombre", marca:"Air Jordan", marca_id:"jordan", badge:"new", stock:true,
    nombre:"Jordan Essentials Fleece — Conjunto Gris",
    precio:"Bs. 1190", tallas:["XL"],
    notas:["Conjunto: hoodie + jogger","Etiqueta marca XXL, pero es más una XL"],
    desc:"Hoodie full-zip y jogger gris jaspeado, con Jumpman bordado en ambas piezas. Fleece de peso real. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/69/IMG_0005.jpg","fotos_catalogo/Hombre/69/IMG_0009.jpg","fotos_catalogo/Hombre/69/IMG_0014.jpg","fotos_catalogo/Hombre/69/IMG_0015.jpg","fotos_catalogo/Hombre/69/IMG_0016.jpg","fotos_catalogo/Hombre/69/IMG_0018.jpg","fotos_catalogo/Hombre/69/IMG_0020.jpg"]},

  { id:68, genero:"hombre", marca:"The North Face", marca_id:"northface", badge:"new", stock:true,
    nombre:"The North Face Nuptse 700 — Azul Marino",
    precio:"Bs. 819", tallas:["XL"],
    notas:["700 Fill Down","Etiqueta marca XXL, pero calza más como una XL justa"],
    desc:"Puffer azul marino y negro, con relleno 700 y capucha ajustable. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/68/IMG_2973.jpg","fotos_catalogo/Hombre/68/IMG_2974.jpg","fotos_catalogo/Hombre/68/IMG_2975.jpg","fotos_catalogo/Hombre/68/IMG_2984.jpg","fotos_catalogo/Hombre/68/IMG_2986.jpg","fotos_catalogo/Hombre/68/IMG_2987.jpg","fotos_catalogo/Hombre/68/IMG_2988.jpg","fotos_catalogo/Hombre/68/IMG_2991.jpg","fotos_catalogo/Hombre/68/IMG_2993.jpg","fotos_catalogo/Hombre/68/IMG_2994.jpg","fotos_catalogo/Hombre/68/IMG_2995.jpg","fotos_catalogo/Hombre/68/IMG_2996.jpg"]},

  { id:67, genero:"hombre", marca:"Nike", marca_id:"nike", badge:"new", stock:true,
    nombre:"Nike Sportswear Coach Set — Azul Marino",
    precio:"Bs. 1090", tallas:["S"],
    notas:["Conjunto: casaca + jogger"],
    desc:"Casaca coach a presión y jogger azul marino, con box logo amarillo a todo color. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/67/IMG_0063.jpg","fotos_catalogo/Hombre/67/IMG_0064.jpg","fotos_catalogo/Hombre/67/IMG_0065.jpg","fotos_catalogo/Hombre/67/IMG_0066.jpg","fotos_catalogo/Hombre/67/IMG_0067.jpg","fotos_catalogo/Hombre/67/IMG_0068.jpg","fotos_catalogo/Hombre/67/IMG_0083.jpg","fotos_catalogo/Hombre/67/IMG_0084.jpg"]},

  { id:66, genero:"hombre", marca:"Nike", marca_id:"nike", badge:"new", stock:true,
    nombre:"Nike Sportswear Club Fleece — Conjunto Negro",
    precio:"Bs. 925", tallas:["S"],
    notas:["Conjunto: hoodie + jogger"],
    desc:"Hoodie full-zip y jogger negro, con Swoosh bordado en ambas piezas. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/66/IMG_0010.jpg","fotos_catalogo/Hombre/66/FullSizeRender.jpg","fotos_catalogo/Hombre/66/IMG_0011.jpg","fotos_catalogo/Hombre/66/IMG_0012.jpg","fotos_catalogo/Hombre/66/IMG_0013.jpg","fotos_catalogo/Hombre/66/IMG_0014.jpg","fotos_catalogo/Hombre/66/IMG_0015.jpg","fotos_catalogo/Hombre/66/IMG_0016.jpg"]},

  { id:65, genero:"hombre", marca:"Air Jordan", marca_id:"jordan", badge:"new", stock:true,
    nombre:"Jordan Flight MA-1 Bomber — Negro",
    precio:"Bs. 790", tallas:["XL"],
    desc:"Bomber negro con el parche Flight bordado al pecho, cuello y puños en rib, relleno ligero. Nuevo, con etiqueta.",
    fotos:["fotos_catalogo/Hombre/65/IMG_4714.jpg","fotos_catalogo/Hombre/65/IMG_4715.jpg","fotos_catalogo/Hombre/65/IMG_4716.jpg","fotos_catalogo/Hombre/65/IMG_4718.jpg","fotos_catalogo/Hombre/65/IMG_4719.jpg"]},

  // ─── VENDIDO — algo de lo que ya tuvimos y se fue ──────────

  { id:1, genero:"hombre", marca:"De Primera", marca_id:"deprimera", badge:"out", stock:false,
    nombre:"Underdog Mentality Mesh Shorts",
    precio:"Bs. 219", tallas:["L"],
    desc:"Cortos de malla negra con estampado all-over de tigres y el mensaje Underdog Mentality. Para los que nunca necesitaron que les dieran el lugar — se lo ganan solos. Tela liviana, perfecta para el calor. Únicas en Bolivia.",
    fotos:["fotos_catalogo/Hombre/1/IMG_1484.jpg","fotos_catalogo/Hombre/1/IMG_1486.jpg","fotos_catalogo/Hombre/1/IMG_1487.jpg","fotos_catalogo/Hombre/1/IMG_1488.jpg","fotos_catalogo/Hombre/1/IMG_1492.jpg","fotos_catalogo/Hombre/1/IMG_1497.jpg"]},

  { id:16, genero:"hombre", marca:"Air Jordan", marca_id:"jordan", badge:"out", stock:false,
    nombre:"Jordan MJ 23 Vintage Graphic Hoodie",
    precio:"Bs. 469", tallas:["M","XL"],
    desc:"Michael Jordan. Número 23. Chicago Bulls. Todo eso en un hoodie negro de peso real. Gráfica vintage con collage de MJ en acción, letras de impacto, fleece grueso premium. Para los que crecieron mirando los highlights — y nunca olvidaron el legado.",
    fotos:["fotos_catalogo/Hombre/16/IMG_1133.jpg","fotos_catalogo/Hombre/16/IMG_1138.jpg","fotos_catalogo/Hombre/16/IMG_1142.jpg","fotos_catalogo/Hombre/16/IMG_1146.jpg","fotos_catalogo/Hombre/16/IMG_1149.jpg"]},

  { id:20, genero:"hombre", marca:"Tommy Hilfiger", marca_id:"tommy", badge:"out", stock:false,
    nombre:"Tommy Jeans Washed Hoodie — Gris Carbón",
    precio:"Bs. 419", tallas:["XL"],
    desc:"Tommy Jeans lo lavó, lo desgastó, lo perfeccionó. Hoodie en gris carbón washed con logo bordado en el pecho — parece que lo llevás años, pero es nuevo. Fleece grueso, fit oversized, esa energía de los 90s que no se va nunca.",
    fotos:["fotos_catalogo/Hombre/20/IMG_2131.jpg","fotos_catalogo/Hombre/20/IMG_2132.jpg","fotos_catalogo/Hombre/20/IMG_2135.jpg","fotos_catalogo/Hombre/20/IMG_2138.jpg","fotos_catalogo/Hombre/20/IMG_2139.jpg","fotos_catalogo/Hombre/20/IMG_2142.jpg","fotos_catalogo/Hombre/20/IMG_2144.jpg"]},

  { id:22, genero:"hombre", marca:"Nike", marca_id:"nike", badge:"out", stock:false,
    nombre:"Nike Dri-FIT Mesh Shorts — Azul Royal",
    precio:"Bs. 319", tallas:["L"],
    desc:"El azul royal que se roba la cancha. Shorts Nike de malla Dri-FIT, cintura elástica con cordón blanco, Swoosh bordado discreto. Tela que respira y aguanta. Para el gym, para la calle, para los que siempre están en movimiento.",
    fotos:["fotos_catalogo/Hombre/22/IMG_2057.jpg","fotos_catalogo/Hombre/22/IMG_2059.jpg","fotos_catalogo/Hombre/22/IMG_2061.jpg","fotos_catalogo/Hombre/22/IMG_2063.jpg","fotos_catalogo/Hombre/22/IMG_2065.jpg"]},

  { id:25, genero:"hombre", marca:"Columbia", marca_id:"columbia", badge:"out", stock:false,
    nombre:"Columbia Down Jacket — Gris Plata",
    precio:"Bs. 789", tallas:["L"],
    notas:["Unisex"],
    desc:"Calor sin compromiso. Relleno de plumas premium con tecnología Omni-Heat™ que refleja tu propio calor de vuelta. Superficie plateada que no necesita presentación. Corte unisex talla L, nueva con etiqueta. Columbia pasó décadas en la montaña para hacer esto — y se nota.",
    fotos:["fotos_catalogo/Hombre/23/IMG_3024.jpg","fotos_catalogo/Hombre/23/IMG_3043.jpg","fotos_catalogo/Hombre/23/IMG_3030.jpg","fotos_catalogo/Hombre/23/IMG_3041.jpg","fotos_catalogo/Hombre/23/IMG_3046.jpg","fotos_catalogo/Hombre/23/IMG_3051.jpg","fotos_catalogo/Hombre/23/IMG_3052.jpg","fotos_catalogo/Hombre/23/IMG_3039.jpg","fotos_catalogo/Hombre/23/IMG_3048.jpg","fotos_catalogo/Hombre/23/IMG_3053.jpg"]},

  { id:26, genero:"hombre", marca:"Columbia", marca_id:"columbia", badge:"out", stock:false,
    nombre:"Columbia Down Jacket — Negro y Crema",
    precio:"Bs. 799", tallas:["XXL"],
    notas:["Unisex"],
    desc:"Cuerpo negro, brazos en crema — el contraste que convierte una chaqueta técnica en pieza de estilo. Relleno de plumas certificado, construcción premium, nueva con etiqueta. Unisex talla XXL. El abrigo que funciona igual para él o ella.",
    fotos:["fotos_catalogo/Hombre/24/IMG_2453.jpg","fotos_catalogo/Hombre/24/IMG_2452.jpg","fotos_catalogo/Hombre/24/IMG_2471.jpg","fotos_catalogo/Hombre/24/IMG_2468.jpg","fotos_catalogo/Hombre/24/IMG_2467.jpg","fotos_catalogo/Hombre/24/IMG_2478.jpg","fotos_catalogo/Hombre/24/IMG_2444.jpg","fotos_catalogo/Hombre/24/IMG_2470.jpg","fotos_catalogo/Hombre/24/IMG_2481.jpg","fotos_catalogo/Hombre/24/IMG_2488.jpg","fotos_catalogo/Hombre/24/IMG_2447.jpg","fotos_catalogo/Hombre/24/IMG_2465.jpg","fotos_catalogo/Hombre/24/IMG_2466.jpg","fotos_catalogo/Hombre/24/IMG_2503.jpg"]},

  { id:28, genero:"hombre", marca:"The North Face", marca_id:"northface", badge:"out", stock:false,
    nombre:"The North Face Puffer — Verde Oliva",
    precio:"Bs. 969", tallas:["XXL"],
    notas:["Unisex","Capucha desmontable","Ajustadores de precisión en capucha y cintura"],
    desc:"Verde oliva con todos los detalles que definen a TNF: capucha removible, ajustadores en capucha y cintura, relleno de plumas premium. Unisex talla XXL, nueva con etiqueta. La chaqueta que los que saben reconocen de lejos.",
    fotos:["fotos_catalogo/Hombre/26/IMG_2932.jpg","fotos_catalogo/Hombre/26/IMG_2969.jpg","fotos_catalogo/Hombre/26/IMG_2936.jpg","fotos_catalogo/Hombre/26/IMG_2966.jpg","fotos_catalogo/Hombre/26/IMG_2952.jpg","fotos_catalogo/Hombre/26/IMG_2971.jpg","fotos_catalogo/Hombre/26/IMG_2940.jpg","fotos_catalogo/Hombre/26/IMG_2967.jpg"]},

  { id:30, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"out", stock:false,
    nombre:"Calza Deportiva — Marble Print Negro",
    precio:"Bs. 79", tallas:["M"],
    desc:"Calza de compresión en negro con efecto marble/stone-wash — tela técnica que se adapta y respira. Forro interior en lila, logo minimalista. De Primera ✦. Para el gym o para la calle, siempre a punto.",
    fotos:["fotos_catalogo/Mujer/5/IMG_2586.jpg","fotos_catalogo/Mujer/5/IMG_2595.jpg","fotos_catalogo/Mujer/5/IMG_2593.jpg","fotos_catalogo/Mujer/5/IMG_2590.jpg","fotos_catalogo/Mujer/5/IMG_2587.jpg","fotos_catalogo/Mujer/5/IMG_2591.jpg","fotos_catalogo/Mujer/5/IMG_2596.jpg"]}

];
