/* ═══ LOYAL STUDIOS — DATA ═══ */
const WA_NUM = "59175613517";
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

  // ─── HOMBRE ───────────────────────────────────────────────

  { id:1, genero:"hombre", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Underdog Mentality Mesh Shorts",
    precio:"Bs. 219", precio_antes:"Bs. 319", tallas:["L"],
    desc:"Cortos de malla negra con estampado all-over de tigres y el mensaje Underdog Mentality. Para los que nunca necesitaron que les dieran el lugar — se lo ganan solos. Tela liviana, perfecta para el calor. Únicas en Bolivia.",
    fotos:["fotos_catalogo/Hombre/1/IMG_1484.jpg","fotos_catalogo/Hombre/1/IMG_1486.jpg","fotos_catalogo/Hombre/1/IMG_1487.jpg","fotos_catalogo/Hombre/1/IMG_1488.jpg","fotos_catalogo/Hombre/1/IMG_1492.jpg","fotos_catalogo/Hombre/1/IMG_1497.jpg"]},

  { id:2, genero:"hombre", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Chasing Dreams Tee — Future Is Color",
    precio:"Bs. 249", tallas:["M"],
    notas:["Corte boxy"],
    desc:"Remera de la marca independiente Chasing Dreams, Est. 2020. Gráfica oversize en el pecho, algodón pesado, corte boxy que cae solo. El streetwear de autor que vale más que cualquier logo — porque acá hay historia real detrás.",
    fotos:["fotos_catalogo/Hombre/2/IMG_1472.jpg","fotos_catalogo/Hombre/2/IMG_1475.jpg","fotos_catalogo/Hombre/2/IMG_1476.jpg","fotos_catalogo/Hombre/2/IMG_1477.jpg","fotos_catalogo/Hombre/2/IMG_1481.jpg","fotos_catalogo/Hombre/2/IMG_1482.jpg"]},

  { id:3, genero:"hombre", marca:"Adidas", marca_id:"adidas", badge:"new", stock:true,
    nombre:"Adidas Originals Cargo Pants",
    precio:"Bs. 579", tallas:["L"],
    desc:"El pantalón cargo que Adidas Originals diseñó para la calle — no para el gym. Tela técnica premium, bolsillos de tapa funcionales, corte recto que cae perfecto. Del skatepark al café: misma energía, distintas canchas.",
    fotos:["fotos_catalogo/Hombre/3/IMG_1451.jpg","fotos_catalogo/Hombre/3/IMG_1463.jpg","fotos_catalogo/Hombre/3/IMG_1470.jpg","fotos_catalogo/Hombre/3/IMG_1471.jpg"]},

  { id:4, genero:"hombre", marca:"New Balance", marca_id:"newbalance", badge:"new", stock:true,
    nombre:"New Balance Classic Tee — Coral",
    precio:"Bs. 229", precio_antes:"Bs. 289", tallas:["L"],
    notas:["Corte oversize"],
    desc:"NB tiene algo que pocas marcas logran: calidad callada. Esta tee en coral intenso lleva su logo Classic. bordado al pecho — sin gritarlo, sin apuros. Algodón pesado, corte oversize que cae solo. Ese color que se roba todas las miradas sin pedir permiso.",
    fotos:["fotos_catalogo/Hombre/4/IMG_1429.jpg","fotos_catalogo/Hombre/4/IMG_1430.jpg","fotos_catalogo/Hombre/4/IMG_1431.jpg","fotos_catalogo/Hombre/4/IMG_1435.jpg"]},

  { id:5, genero:"hombre", marca:"Nike", marca_id:"nike", badge:"new", stock:true,
    nombre:"Nike Sportswear Woven Pants",
    precio:"Bs. 549", tallas:["L"],
    desc:"El pantalón de Nike que resolvió el dilema comfort-estilo de una vez. Tela woven ligera pero estructurada, cintura elástica con cordón, Swoosh bordado discreto en el muslo. Para salir cómodo sin que parezca que te importó poco.",
    fotos:["fotos_catalogo/Hombre/5/IMG_1405.jpg","fotos_catalogo/Hombre/5/IMG_1407.jpg","fotos_catalogo/Hombre/5/IMG_1413.jpg","fotos_catalogo/Hombre/5/IMG_1415.jpg","fotos_catalogo/Hombre/5/IMG_1418.jpg","fotos_catalogo/Hombre/5/IMG_1423.jpg"]},

  { id:6, genero:"hombre", marca:"GUESS", marca_id:"guess", badge:"new", stock:true,
    nombre:"GUESS Originals LA Crewneck — Beige",
    precio:"Bs. 389", precio_antes:"Bs. 489", tallas:["XL"],
    notas:["Tela pesada premium"],
    desc:"GUESS LA desde 1981 — y este crewneck lo sabe. Bordado a tono sobre tela premium en beige arena, tela pesada de peso real, perfecta para el frío. El lujo tranquilo que no necesita colores estridentes para llamar la atención.",
    fotos:["fotos_catalogo/Hombre/6/IMG_1380.jpg","fotos_catalogo/Hombre/6/IMG_1382.jpg","fotos_catalogo/Hombre/6/IMG_1383.jpg","fotos_catalogo/Hombre/6/IMG_1384.jpg","fotos_catalogo/Hombre/6/IMG_1387.jpg"]},

  { id:7, genero:"hombre", marca:"Adidas", marca_id:"adidas", badge:"new", stock:true,
    nombre:"Adidas Aeroready Training Tee",
    precio:"Bs. 229", tallas:["L"],
    notas:["Tejido de compresión"],
    desc:"Tejido de compresión Aeroready de Adidas: lleva el sudor lejos de la piel y te mantiene seco en movimiento. Logo clásico en el pecho izquierdo, azul marino que combina con todo. Para entrenar en serio — o parecer que sí.",
    fotos:["fotos_catalogo/Hombre/7/IMG_1369.jpg","fotos_catalogo/Hombre/7/IMG_1372.jpg","fotos_catalogo/Hombre/7/IMG_1373.jpg","fotos_catalogo/Hombre/7/IMG_1375.jpg"]},

  { id:8, genero:"hombre", marca:"Tommy Hilfiger", marca_id:"tommy", badge:"new", stock:true,
    nombre:"Tommy Jeans Gothic Logo Crewneck",
    precio:"Bs. 289", tallas:["L"],
    notas:["⚠️ Detalle de costura en espalda (fábrica)"],
    desc:"Tommy Jeans Gothic Logo Crewneck — fleece celeste pastel, letras góticas en arco, banderita bordada al pecho. Prenda 100% original. Nota: tiene un pequeño detalle de costura en la espalda que viene así de fábrica — por eso el precio rebajado. A la vista es imperceptible, pero lo aclaramos porque en Loyal Studios la honestidad no es opcional.",
    fotos:["fotos_catalogo/Hombre/8/IMG_1351.jpg","fotos_catalogo/Hombre/8/IMG_1359.jpg","fotos_catalogo/Hombre/8/IMG_1360.jpg","fotos_catalogo/Hombre/8/IMG_1361.jpg","fotos_catalogo/Hombre/8/IMG_1363.jpg","fotos_catalogo/Hombre/8/IMG_1367.jpg"]},

  { id:9, genero:"hombre", marca:"New Balance", marca_id:"newbalance", badge:"new", stock:true,
    nombre:"New Balance Athletics Slim Jogger",
    precio:"Bs. 319", precio_antes:"Bs. 379", tallas:["L"],
    desc:"El jogger que NB diseñó para quien toma en serio el movimiento — y el estilo. Tela French Terry premium en gris lavanda, logo a tono bordado, corte tapered que queda bien con cualquier zapatilla. Comodidad que no es excusa.",
    fotos:["fotos_catalogo/Hombre/9/IMG_1339.jpg","fotos_catalogo/Hombre/9/IMG_1343.jpg","fotos_catalogo/Hombre/9/IMG_1344.jpg","fotos_catalogo/Hombre/9/IMG_1346.jpg","fotos_catalogo/Hombre/9/IMG_1347.jpg"]},

  { id:10, genero:"hombre", marca:"New Balance", marca_id:"newbalance", badge:"new", stock:true,
    nombre:"New Balance Essential Logo Tee",
    precio:"Bs. 229", precio_antes:"Bs. 249", tallas:["S","M","L","XL"],
    desc:"Lo básico hecho con criterio. Remera azul marino de NB con logo bordado pequeño al pecho — sin estridencias, puro algodón pesado. La pieza que combinás con cualquier cosa y siempre quedás bien. Calidad que habla sola.",
    fotos:["fotos_catalogo/Hombre/10/IMG_1327.jpg","fotos_catalogo/Hombre/10/IMG_1334.jpg","fotos_catalogo/Hombre/10/IMG_1335.jpg"]},

  { id:11, genero:"hombre", marca:"Adidas", marca_id:"adidas", badge:"new", stock:true,
    nombre:"Adidas Originals x Real Madrid Icon Jersey",
    precio:"Bs. 479", tallas:["M"],
    desc:"Adidas Originals x Real Madrid — la colaboración que une el fútbol más grande con el streetwear definitivo. Jersey oficial Real Icon, escudo del Madrid bordado en el pecho, trébol Originals al centro. Coleccionable. Irrepetible.",
    fotos:["fotos_catalogo/Hombre/11/IMG_1317.jpg","fotos_catalogo/Hombre/11/IMG_1318.jpg","fotos_catalogo/Hombre/11/IMG_1323.jpg","fotos_catalogo/Hombre/11/IMG_1324.jpg"]},

  { id:12, genero:"hombre", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Future Is Color Long Sleeve — Chasing Dreams",
    precio:"Bs. 279", precio_antes:"Bs. 319", tallas:["XL"],
    desc:"Manga larga de la marca Chasing Dreams con Future Is Color en rojo impacto. Cuerpo blanco, mangas negras, estampado técnico a doble cara. Streetwear de autor que mezcla energía deportiva con actitud artística. Única en Bolivia.",
    fotos:["fotos_catalogo/Hombre/12/IMG_1198.jpg","fotos_catalogo/Hombre/12/IMG_1200.jpg","fotos_catalogo/Hombre/12/IMG_1209.jpg"]},

  { id:13, genero:"hombre", marca:"Adidas", marca_id:"adidas", badge:"new", stock:true,
    nombre:"Adidas Originals Trefoil Tee — Multicolor",
    precio:"Bs. 249", tallas:["M"],
    desc:"El trébol icónico de Adidas Originals en su versión más expresiva — verde, negro y naranja sobre base crema. Algodón premium, corte relaxed, una gráfica que resiste el tiempo porque es diseño puro. Lo clásico siempre vuelve.",
    fotos:["fotos_catalogo/Hombre/13/IMG_1212.jpg","fotos_catalogo/Hombre/13/IMG_1213.jpg","fotos_catalogo/Hombre/13/IMG_1215.jpg"]},

  { id:14, genero:"hombre", marca:"Adidas", marca_id:"adidas", badge:"new", stock:true,
    nombre:"Adidas Originals Cargo Pant — Negro",
    precio:"Bs. 519", precio_antes:"Bs. 579", tallas:["L"],
    desc:"Adidas Originals construyó el cargo definitivo. Tela liviana de secado rápido, bolsillos laterales funcionales, cintura con cordón, elástico en tobillo. El trébol al muslo lo firma. Entre lo técnico y el streetwear — exactamente donde querés estar.",
    fotos:["fotos_catalogo/Hombre/14/IMG_1219.jpg","fotos_catalogo/Hombre/14/IMG_1222.jpg","fotos_catalogo/Hombre/14/IMG_1224.jpg","fotos_catalogo/Hombre/14/IMG_1226.jpg"]},

  { id:15, genero:"hombre", marca:"Nike", marca_id:"nike", badge:"new", stock:true,
    nombre:"Nike Sportswear Club Fleece Shorts",
    precio:"Bs. 319", precio_antes:"Bs. 379", tallas:["XXL"],
    desc:"El short que Nike tiene en su línea desde siempre — y por algo es. Fleece suave por dentro, cintura con cordón, logo NIKE grande en la pierna. Blanco limpio que va con todo. Para la calle, el gym, o quedarte en casa como si fuera intencional.",
    fotos:["fotos_catalogo/Hombre/15/IMG_1246.jpg","fotos_catalogo/Hombre/15/IMG_1251.jpg","fotos_catalogo/Hombre/15/IMG_1252.jpg","fotos_catalogo/Hombre/15/IMG_1256.jpg"]},

  { id:16, genero:"hombre", marca:"Air Jordan", marca_id:"jordan", badge:"out", stock:false,
    nombre:"Jordan MJ 23 Vintage Graphic Hoodie",
    precio:"Bs. 469", tallas:["M","XL"],
    desc:"Michael Jordan. Número 23. Chicago Bulls. Todo eso en un hoodie negro de peso real. Gráfica vintage con collage de MJ en acción, letras de impacto, fleece grueso premium. Para los que crecieron mirando los highlights — y nunca olvidaron el legado.",
    fotos:["fotos_catalogo/Hombre/16/IMG_1133.jpg","fotos_catalogo/Hombre/16/IMG_1138.jpg","fotos_catalogo/Hombre/16/IMG_1142.jpg","fotos_catalogo/Hombre/16/IMG_1146.jpg","fotos_catalogo/Hombre/16/IMG_1149.jpg"]},

  // ─── MUJER ────────────────────────────────────────────────

  { id:17, genero:"mujer", marca:"GUESS", marca_id:"guess", badge:"new", stock:true,
    nombre:"GUESS Triangle Logo Crewneck — Taupe",
    precio:"Bs. 249", precio_antes:"Bs. 349", tallas:["XL"],
    desc:"GUESS lo hace simple y lo hace con clase. Crewneck en taupe oscuro con el triángulo icónico en bordado tono sobre tono — elegancia sin esfuerzo. Tela gruesa premium, corte femenino relaxed. Del brunch al after: una sola pieza, mil ocasiones.",
    fotos:["fotos_catalogo/Mujer/1/IMG_1440.jpg","fotos_catalogo/Mujer/1/IMG_1442.jpg","fotos_catalogo/Mujer/1/IMG_1443.jpg","fotos_catalogo/Mujer/1/IMG_1444.jpg","fotos_catalogo/Mujer/1/IMG_1445.jpg"]},

  { id:18, genero:"hombre", marca:"Calvin Klein", marca_id:"calvin", badge:"new", stock:true,
    nombre:"Calvin Klein Jeans Crewneck — Blanco",
    precio:"Bs. 339", precio_antes:"Bs. 419", tallas:["XL"],
    desc:"CK lo hizo simple y lo hizo atemporal. Crewneck en blanco puro con el badge CK bordado en el pecho izquierdo — sutil, preciso, inconfundible. Tela premium French Terry, corte relaxed que cae perfecto. El minimalismo que no necesita explicación.",
    fotos:["fotos_catalogo/Hombre/18/IMG_2164.jpg","fotos_catalogo/Hombre/18/IMG_2166.jpg","fotos_catalogo/Hombre/18/IMG_2167.jpg","fotos_catalogo/Hombre/18/IMG_2168.jpg","fotos_catalogo/Hombre/18/IMG_2169.jpg","fotos_catalogo/Hombre/18/IMG_2171.jpg"]},

  { id:19, genero:"hombre", marca:"Calvin Klein", marca_id:"calvin", badge:"new", stock:true,
    nombre:"Calvin Klein Jeans Est 1978 Crewneck — Arena",
    precio:"Bs. 359", precio_antes:"Bs. 399", tallas:["S","M"],
    desc:"Calvin Klein Jeans est 1978 — cuatro décadas de herencia en relieve tono sobre tono. Crewneck arena lavado, corte ligeramente crop, texto en la espalda que nadie espera y todos voltean a ver. Vintage sin esfuerzo, moderno sin gritar.",
    fotos:["fotos_catalogo/Hombre/19/IMG_2077.jpg","fotos_catalogo/Hombre/19/IMG_2082.jpg","fotos_catalogo/Hombre/19/IMG_2087.jpg","fotos_catalogo/Hombre/19/IMG_2090.jpg","fotos_catalogo/Hombre/19/IMG_2091.jpg"]},

  { id:20, genero:"hombre", marca:"Tommy Hilfiger", marca_id:"tommy", badge:"out", stock:false,
    nombre:"Tommy Jeans Washed Hoodie — Gris Carbón",
    precio:"Bs. 419", tallas:["XL"],
    desc:"Tommy Jeans lo lavó, lo desgastó, lo perfeccionó. Hoodie en gris carbón washed con logo bordado en el pecho — parece que lo llevás años, pero es nuevo. Fleece grueso, fit oversized, esa energía de los 90s que no se va nunca.",
    fotos:["fotos_catalogo/Hombre/20/IMG_2131.jpg","fotos_catalogo/Hombre/20/IMG_2132.jpg","fotos_catalogo/Hombre/20/IMG_2135.jpg","fotos_catalogo/Hombre/20/IMG_2138.jpg","fotos_catalogo/Hombre/20/IMG_2139.jpg","fotos_catalogo/Hombre/20/IMG_2142.jpg","fotos_catalogo/Hombre/20/IMG_2144.jpg"]},

  { id:21, genero:"hombre", marca:"Tommy Hilfiger", marca_id:"tommy", badge:"new", stock:true,
    nombre:"Tommy Jeans Badge Crewneck — Verde Oliva",
    precio:"Bs. 289", precio_antes:"Bs. 389", tallas:["M"],
    desc:"Verde oliva como los mejores looks de los 90s. Crewneck Tommy Jeans con badge bordado tono sobre tono, fleece premium de peso real. No hace falta que lo veas gritando para saber que es calidad — lo sentís cuando te lo ponés.",
    fotos:["fotos_catalogo/Hombre/21/IMG_2148.jpg","fotos_catalogo/Hombre/21/IMG_2151.jpg","fotos_catalogo/Hombre/21/IMG_2152.jpg","fotos_catalogo/Hombre/21/IMG_2157.jpg"]},

  { id:22, genero:"hombre", marca:"Nike", marca_id:"nike", badge:"new", stock:true,
    nombre:"Nike Dri-FIT Mesh Shorts — Azul Royal",
    precio:"Bs. 319", precio_antes:"Bs. 389", tallas:["L"],
    desc:"El azul royal que se roba la cancha. Shorts Nike de malla Dri-FIT, cintura elástica con cordón blanco, Swoosh bordado discreto. Tela que respira y aguanta. Para el gym, para la calle, para los que siempre están en movimiento.",
    fotos:["fotos_catalogo/Hombre/22/IMG_2057.jpg","fotos_catalogo/Hombre/22/IMG_2059.jpg","fotos_catalogo/Hombre/22/IMG_2061.jpg","fotos_catalogo/Hombre/22/IMG_2063.jpg","fotos_catalogo/Hombre/22/IMG_2065.jpg"]},

  { id:23, genero:"mujer", marca:"GUESS", marca_id:"guess", badge:"new", stock:true,
    nombre:"GUESS Active Crop Quarter-Zip — Burdeos",
    precio:"Bs. 299", precio_antes:"Bs. 389", tallas:["XS","L"],
    desc:"GUESS reescribió el crop. Quarter-zip activo en burdeos intenso, GUESS en letras grandes en el ribete — logo que marca territorio. Tela técnica premium, corte femenino ceñido que favorece. Del entrenamiento al café sin cambiar de ropa.",
    fotos:["fotos_catalogo/Mujer/2/IMG_2021.jpg","fotos_catalogo/Mujer/2/IMG_2018.jpg","fotos_catalogo/Mujer/2/IMG_2022.jpg","fotos_catalogo/Mujer/2/IMG_2024.jpg","fotos_catalogo/Mujer/2/IMG_2027.jpg"]},

  { id:24, genero:"mujer", marca:"GUESS", marca_id:"guess", badge:"last", stock:true,
    nombre:"GUESS Active Crop Quarter-Zip — Negro",
    precio:"Bs. 289", precio_antes:"Bs. 379", tallas:["S"],
    desc:"El negro que GUESS convirtió en declaración. Mismo quarter-zip icónico, mismo ribete con el logo que no pasa desapercibido — en negro total, más actitud. Combinalo con todo o dejalo hablar solo. Siempre funciona.",
    fotos:["fotos_catalogo/Mujer/3/IMG_2028.jpg","fotos_catalogo/Mujer/3/IMG_2005.jpg","fotos_catalogo/Mujer/3/IMG_2030.jpg","fotos_catalogo/Mujer/3/IMG_2032.jpg","fotos_catalogo/Mujer/3/IMG_2033.jpg","fotos_catalogo/Mujer/3/IMG_2034.jpg"]},

  // ─── HOMBRE — Columbia & The North Face Unisex (nuevas con etiqueta) ──────

  { id:25, genero:"hombre", marca:"Columbia", marca_id:"columbia", badge:"new", stock:true,
    nombre:"Columbia Down Jacket — Gris Plata",
    precio:"Bs. 889", tallas:["L"],
    notas:["Unisex"],
    desc:"Calor sin compromiso. Relleno de plumas premium con tecnología Omni-Heat™ que refleja tu propio calor de vuelta. Superficie plateada que no necesita presentación. Corte unisex talla L, nueva con etiqueta. Columbia pasó décadas en la montaña para hacer esto — y se nota.",
    fotos:["fotos_catalogo/Hombre/23/IMG_3024.jpg","fotos_catalogo/Hombre/23/IMG_3043.jpg","fotos_catalogo/Hombre/23/IMG_3030.jpg","fotos_catalogo/Hombre/23/IMG_3041.jpg","fotos_catalogo/Hombre/23/IMG_3046.jpg","fotos_catalogo/Hombre/23/IMG_3051.jpg","fotos_catalogo/Hombre/23/IMG_3052.jpg","fotos_catalogo/Hombre/23/IMG_3039.jpg","fotos_catalogo/Hombre/23/IMG_3048.jpg","fotos_catalogo/Hombre/23/IMG_3053.jpg"]},

  { id:26, genero:"hombre", marca:"Columbia", marca_id:"columbia", badge:"new", stock:true,
    nombre:"Columbia Down Jacket — Negro y Crema",
    precio:"Bs. 899", tallas:["XXL"],
    notas:["Unisex"],
    desc:"Cuerpo negro, brazos en crema — el contraste que convierte una chaqueta técnica en pieza de estilo. Relleno de plumas certificado, construcción premium, nueva con etiqueta. Unisex talla XXL. El abrigo que funciona igual para él o ella.",
    fotos:["fotos_catalogo/Hombre/24/IMG_2452.jpg","fotos_catalogo/Hombre/24/IMG_2471.jpg","fotos_catalogo/Hombre/24/IMG_2468.jpg","fotos_catalogo/Hombre/24/IMG_2467.jpg","fotos_catalogo/Hombre/24/IMG_2478.jpg","fotos_catalogo/Hombre/24/IMG_2444.jpg","fotos_catalogo/Hombre/24/IMG_2470.jpg","fotos_catalogo/Hombre/24/IMG_2481.jpg","fotos_catalogo/Hombre/24/IMG_2488.jpg","fotos_catalogo/Hombre/24/IMG_2447.jpg","fotos_catalogo/Hombre/24/IMG_2453.jpg","fotos_catalogo/Hombre/24/IMG_2465.jpg","fotos_catalogo/Hombre/24/IMG_2466.jpg","fotos_catalogo/Hombre/24/IMG_2503.jpg"]},

  { id:27, genero:"hombre", marca:"The North Face", marca_id:"northface", badge:"new", stock:true,
    nombre:"The North Face Puffer — Crema",
    precio:"Bs. 1079", tallas:["M"],
    notas:["Unisex", "Capucha desmontable"],
    desc:"El colorway crema que la gente busca y no encuentra. Relleno de plumas certificado, capucha desmontable para cambiar el look cuando quieras. Nueva con etiqueta, unisex talla M. Una The North Face no es una compra — es una inversión.",
    fotos:["fotos_catalogo/Hombre/25/IMG_2894.jpg","fotos_catalogo/Hombre/25/IMG_2911.jpg","fotos_catalogo/Hombre/25/IMG_2915.jpg","fotos_catalogo/Hombre/25/IMG_2923.jpg","fotos_catalogo/Hombre/25/IMG_2910.jpg","fotos_catalogo/Hombre/25/IMG_2895.jpg","fotos_catalogo/Hombre/25/IMG_2897.jpg","fotos_catalogo/Hombre/25/IMG_2926.jpg","fotos_catalogo/Hombre/25/IMG_2931.jpg"]},

  { id:28, genero:"hombre", marca:"The North Face", marca_id:"northface", badge:"new", stock:true,
    nombre:"The North Face Puffer — Verde Oliva",
    precio:"Bs. 1069", tallas:["XXL"],
    notas:["Unisex", "Capucha desmontable", "Ajustadores de precisión en capucha y cintura"],
    desc:"Verde oliva con todos los detalles que definen a TNF: capucha removible, ajustadores en capucha y cintura, relleno de plumas premium. Unisex talla XXL, nueva con etiqueta. La chaqueta que los que saben reconocen de lejos.",
    fotos:["fotos_catalogo/Hombre/26/IMG_2969.jpg","fotos_catalogo/Hombre/26/IMG_2936.jpg","fotos_catalogo/Hombre/26/IMG_2966.jpg","fotos_catalogo/Hombre/26/IMG_2932.jpg","fotos_catalogo/Hombre/26/IMG_2952.jpg","fotos_catalogo/Hombre/26/IMG_2971.jpg","fotos_catalogo/Hombre/26/IMG_2940.jpg","fotos_catalogo/Hombre/26/IMG_2967.jpg"]},

  // ─── MUJER NUEVAS ─────────────────────────────────────────────────────────

  { id:29, genero:"mujer", marca:"Nike", marca_id:"nike", badge:"dp", stock:true,
    nombre:"Nike Running Dri-FIT Tee — Azul Cobalto",
    precio:"Bs. 99", tallas:["S"],
    desc:"Remera Nike Running Dri-FIT en azul cobalto, con el gráfico NIKE RUNNING al frente. Tela técnica que lleva el sudor lejos de la piel — liviana, transpirable, hecha para moverse. De Primera ✦: excelente condición. Del run de la mañana a la calle sin cambiarte.",
    fotos:["fotos_catalogo/Mujer/4/IMG_2581.jpg","fotos_catalogo/Mujer/4/IMG_2584.jpg","fotos_catalogo/Mujer/4/IMG_2582.jpg","fotos_catalogo/Mujer/4/IMG_2583.jpg","fotos_catalogo/Mujer/4/IMG_2585.jpg"]},

  { id:32, genero:"mujer", marca:"Adidas", marca_id:"adidas", badge:"dp", stock:true,
    nombre:"Adidas x Stella McCartney Skort — Negro",
    precio:"Bs. 119", tallas:["M"],
    desc:"La colección que Adidas y Stella McCartney crearon para las que se niegan a elegir entre performance y diseño. Skort negro con paneles perforados, corte premium, talla M. De Primera ✦: excelente condición. Coleccionable.",
    fotos:["fotos_catalogo/Mujer/7/IMG_2606.jpg","fotos_catalogo/Mujer/7/IMG_2612.jpg","fotos_catalogo/Mujer/7/IMG_2613.jpg","fotos_catalogo/Mujer/7/IMG_2611.jpg","fotos_catalogo/Mujer/7/IMG_2610.jpg","fotos_catalogo/Mujer/7/IMG_2609.jpg"]},

  { id:34, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Short de Compresión — Graffiti Print",
    precio:"Bs. 29", tallas:["M"],
    desc:"Short de compresión con estampado graffiti en negro, rosa y cyan — arte en tela técnica. Talla M (10/12). De Primera ✦. El gym también puede ser una declaración.",
    fotos:["fotos_catalogo/Mujer/9/IMG_2685.jpg","fotos_catalogo/Mujer/9/IMG_2687.jpg","fotos_catalogo/Mujer/9/IMG_2686.jpg","fotos_catalogo/Mujer/9/IMG_2688.jpg"]},

  { id:35, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"new", stock:true,
    nombre:"YOGO Leggings — Gris",
    precio:"Bs. 29", tallas:["M"],
    desc:"Leggings YOGO de alta compresión en gris neutro — se amoldan sin restringir, respiran sin perder forma. Talla M, nueva con etiqueta. Para el yoga, el gym o simplemente moverse con intención.",
    fotos:["fotos_catalogo/Mujer/10/IMG_2689.jpg","fotos_catalogo/Mujer/10/IMG_2694.jpg","fotos_catalogo/Mujer/10/IMG_2691.jpg","fotos_catalogo/Mujer/10/IMG_2692.jpg","fotos_catalogo/Mujer/10/IMG_2693.jpg"]},

  { id:36, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"H&M Sport Calza Deportiva — Animal Print",
    precio:"Bs. 49", tallas:["M"],
    desc:"Calza deportiva H&M Sport en print animal marrón y negro — esa textura salvaje que te va a hacer mirar dos veces. Tela técnica transpirable, compresión media, talla M. De Primera ✦. Para entrenar con actitud.",
    fotos:["fotos_catalogo/Mujer/11/IMG_2698.jpg","fotos_catalogo/Mujer/11/IMG_2695.jpg","fotos_catalogo/Mujer/11/IMG_2697.jpg"]},

  { id:37, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Set Deportivo — Leggings Malla + Top Floral",
    precio:"Bs. 29", tallas:["L"],
    desc:"Set completo: leggings negros con paneles de malla en las rodillas más top floral multicolor. Dos prendas, un solo precio. De Primera ✦, talla L. El outfit que hace que quieras ir al gym aunque no tengas ganas.",
    fotos:["fotos_catalogo/Mujer/12/IMG_2702.jpg","fotos_catalogo/Mujer/12/IMG_2704.jpg","fotos_catalogo/Mujer/12/IMG_2699.jpg","fotos_catalogo/Mujer/12/IMG_2701.jpg","fotos_catalogo/Mujer/12/IMG_2703.jpg"]},

  { id:38, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Short Deportivo — Verde Sage",
    precio:"Bs. 35", tallas:["XL"],
    desc:"Short en verde sage — ese tono suave que hace que el wellness parezca tu estilo de vida. Talla XL, De Primera ✦. Comodidad que no se esfuerza para verse bien.",
    fotos:["fotos_catalogo/Mujer/13/IMG_2705.jpg","fotos_catalogo/Mujer/13/IMG_2710.jpg","fotos_catalogo/Mujer/13/IMG_2711.jpg","fotos_catalogo/Mujer/13/IMG_2709.jpg"]},

  { id:39, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Athletic Works Set Ribbed — Verde Sage",
    precio:"Bs. 39", tallas:["M"],
    desc:"Set ribbed seamless Athletic Works en verde sage coordinado. Tela suave y elástica, talla M. De Primera ✦. Cada entrenamiento empieza mejor cuando el outfit combina.",
    fotos:["fotos_catalogo/Mujer/14/IMG_2717.jpg","fotos_catalogo/Mujer/14/IMG_2719.jpg","fotos_catalogo/Mujer/14/IMG_2722.jpg","fotos_catalogo/Mujer/14/IMG_2718.jpg","fotos_catalogo/Mujer/14/IMG_2721.jpg","fotos_catalogo/Mujer/14/IMG_2720.jpg"]},

  { id:40, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"AVIA Leggings Camo — Negro/Gris",
    precio:"Bs. 49", tallas:["M"],
    desc:"Leggings camo AVIA en negro y gris — el camuflaje que no pasa desapercibido en el gym. Compresión media, talla M. De Primera ✦. Para las que prefieren moverse en modo stealth.",
    fotos:["fotos_catalogo/Mujer/15/IMG_2726.jpg","fotos_catalogo/Mujer/15/IMG_2723.jpg","fotos_catalogo/Mujer/15/IMG_2725.jpg","fotos_catalogo/Mujer/15/IMG_2724.jpg"]},

  { id:41, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"DryMore Tech Leggings — Gris",
    precio:"Bs. 35", tallas:["S"],
    desc:"Leggings DryMore Tech en gris neutro. Tela de secado rápido, corte ajustado, talla S. De Primera ✦. Simple, técnico, sin pretensiones — exactamente lo que necesitás para entrenar de verdad.",
    fotos:["fotos_catalogo/Mujer/16/IMG_2732.jpg","fotos_catalogo/Mujer/16/IMG_2727.jpg","fotos_catalogo/Mujer/16/IMG_2730.jpg","fotos_catalogo/Mujer/16/IMG_2729.jpg"]},

  { id:42, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Under Armour Compression Shorts — Gris",
    precio:"Bs. 75", tallas:["M"],
    notas:["⚠️ Logo levemente craqueado"],
    desc:"Shorts de compresión Under Armour HeatGear® en gris. Tecnología que mueve el calor lejos de la piel, talla M. De Primera ✦: nota — logo con detalle de craqueado, por eso el precio. El rendimiento Under Armour intacto.",
    fotos:["fotos_catalogo/Mujer/17/IMG_2753.jpg","fotos_catalogo/Mujer/17/IMG_2756.jpg","fotos_catalogo/Mujer/17/IMG_2757.jpg","fotos_catalogo/Mujer/17/IMG_2755.jpg"]},

  { id:43, genero:"mujer", marca:"Nike", marca_id:"nike", badge:"dp", stock:true,
    nombre:"Nike Dri-FIT Sports Bra — Gris",
    precio:"Bs. 99", tallas:["L"],
    desc:"Sports bra Nike Dri-FIT en gris jaspeado. Tecnología que lleva el sudor lejos de la piel, soporte medio, talla L. De Primera ✦. Nike lleva décadas entendiendo el rendimiento femenino — en esta bra se nota.",
    fotos:["fotos_catalogo/Mujer/18/IMG_2758.jpg","fotos_catalogo/Mujer/18/IMG_2760.jpg","fotos_catalogo/Mujer/18/IMG_2761.jpg","fotos_catalogo/Mujer/18/IMG_2759.jpg"]},

  { id:44, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Gymshark Sports Bra — Naranja Coral",
    precio:"Bs. 129", tallas:["M"],
    desc:"Sports bra Gymshark en naranja coral — ese tono que te energiza solo de mirarlo. Tela sin costuras, soporte firme, talla M. De Primera ✦. Gymshark tiene comunidad porque entrega — esta bra lo demuestra.",
    fotos:["fotos_catalogo/Mujer/19/IMG_2762.jpg","fotos_catalogo/Mujer/19/IMG_2764.jpg","fotos_catalogo/Mujer/19/IMG_2768.jpg","fotos_catalogo/Mujer/19/IMG_2767.jpg","fotos_catalogo/Mujer/19/IMG_2763.jpg"]},

  { id:45, genero:"mujer", marca:"Adidas", marca_id:"adidas", badge:"dp", stock:true,
    nombre:"Adidas Climalite® Shorts — Rosa Coral Polka Dot",
    precio:"Bs. 49", tallas:["S"],
    desc:"Shorts Adidas Climalite® en rosa coral con micro print de lunares — deporte con personalidad. Tela transpirable de secado rápido, talla S. De Primera ✦. Los tres rayas en su versión más juguetona.",
    fotos:["fotos_catalogo/Mujer/20/IMG_2783.jpg","fotos_catalogo/Mujer/20/IMG_2779.jpg","fotos_catalogo/Mujer/20/IMG_2780.jpg","fotos_catalogo/Mujer/20/IMG_2784.jpg","fotos_catalogo/Mujer/20/IMG_2782.jpg"]},

  { id:46, genero:"mujer", marca:"Nike", marca_id:"nike", badge:"dp", stock:true,
    nombre:"Nike Leggings Camo — Negro/Blanco/Gris",
    precio:"Bs. 139", tallas:["S"],
    desc:"Leggings Nike en camo negro, blanco y gris — disrupción visual que funciona igual en el gym que en la calle. Tela elástica de 4 vías, talla S. De Primera ✦. El Swoosh lo dice todo.",
    fotos:["fotos_catalogo/Mujer/21/IMG_2792.jpg","fotos_catalogo/Mujer/21/IMG_2798.jpg","fotos_catalogo/Mujer/21/IMG_2794.jpg","fotos_catalogo/Mujer/21/IMG_2797.jpg","fotos_catalogo/Mujer/21/IMG_2795.jpg","fotos_catalogo/Mujer/21/IMG_2796.jpg","fotos_catalogo/Mujer/21/IMG_2793.jpg"]},

  { id:47, genero:"mujer", marca:"Adidas", marca_id:"adidas", badge:"dp", stock:true,
    nombre:"Adidas Climalite® Top — Magenta",
    precio:"Bs. 59", tallas:["M"],
    desc:"Top Adidas Climalite® en magenta intenso — el tono que no pasa desapercibido en ningún gym. Tecnología de secado rápido, talla M. De Primera ✦. Los tres rayas en el color más llamativo.",
    fotos:["fotos_catalogo/Mujer/22/IMG_2888.jpg","fotos_catalogo/Mujer/22/IMG_2891.jpg","fotos_catalogo/Mujer/22/IMG_2892.jpg","fotos_catalogo/Mujer/22/IMG_2889.jpg","fotos_catalogo/Mujer/22/IMG_2890.jpg"]},

  { id:30, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Calza Deportiva — Marble Print Negro",
    precio:"Bs. 79", tallas:["M"],
    desc:"Calza de compresión en negro con efecto marble/stone-wash — tela técnica que se adapta y respira. Forro interior en lila, logo minimalista. De Primera ✦. Para el gym o para la calle, siempre a punto.",
    fotos:["fotos_catalogo/Mujer/5/IMG_2586.jpg","fotos_catalogo/Mujer/5/IMG_2595.jpg","fotos_catalogo/Mujer/5/IMG_2593.jpg","fotos_catalogo/Mujer/5/IMG_2590.jpg","fotos_catalogo/Mujer/5/IMG_2587.jpg","fotos_catalogo/Mujer/5/IMG_2591.jpg","fotos_catalogo/Mujer/5/IMG_2596.jpg"]},

  { id:31, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Calza Corta Under Armour — Gris",
    precio:"Bs. 89", tallas:["M"],
    desc:"Calza corta Under Armour en gris jaspeado. Compresión HeatGear® que se siente como segunda piel — tecnología que lleva el calor lejos del cuerpo. De Primera ✦. Para entrenar en serio sin pensar en lo que llevás puesto.",
    fotos:["fotos_catalogo/Mujer/6/IMG_2598.jpg","fotos_catalogo/Mujer/6/IMG_2603.jpg","fotos_catalogo/Mujer/6/IMG_2600.jpg","fotos_catalogo/Mujer/6/IMG_2601.jpg"]},

  { id:33, genero:"mujer", marca:"De Primera", marca_id:"deprimera", badge:"new", stock:true,
    nombre:"Reebok Sports Bra — Navy Marble · Nueva",
    precio:"Bs. 85", tallas:["L"],
    desc:"Sports bra Reebok en azul navy con banda inferior en degradé marble azul/blanco. Cross-back straps, soporte medio, tela técnica transpirable. Nueva con etiqueta original. Para el gym que se toma en serio.",
    fotos:["fotos_catalogo/Mujer/8/IMG_2615.jpg","fotos_catalogo/Mujer/8/IMG_2618.jpg","fotos_catalogo/Mujer/8/IMG_2616.jpg","fotos_catalogo/Mujer/8/IMG_2617.jpg"]}

];
