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
  { id:"deprimera",  name:"De Primera",     wordmark:"De Primera ✦",   img:"assets/brand-deprimera.webp" }
];

const ITEMS = [

  // ─── HOMBRE ───────────────────────────────────────────────

  { id:1, genero:"hombre", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Underdog Mentality Mesh Shorts",
    precio:"Consultar",
    tallas:[],
    desc:"Cortos de malla negra con estampado all-over de tigres y el mensaje Underdog Mentality. Para los que nunca necesitaron que les dieran el lugar — se lo ganan solos. Tela liviana, perfecta para el calor. Únicas en Bolivia.",
    fotos:[
      "fotos_catalogo/Hombre/1/IMG_1484.jpg",
      "fotos_catalogo/Hombre/1/IMG_1486.jpg",
      "fotos_catalogo/Hombre/1/IMG_1487.jpg",
      "fotos_catalogo/Hombre/1/IMG_1488.jpg",
      "fotos_catalogo/Hombre/1/IMG_1492.jpg",
      "fotos_catalogo/Hombre/1/IMG_1497.jpg"
    ]},

  { id:2, genero:"hombre", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Chasing Dreams Tee — Future Is Color",
    precio:"Consultar",
    tallas:[],
    desc:"Remera de la marca independiente Chasing Dreams, Est. 2020. Gráfica oversize en el pecho, algodón pesado, corte boxy que cae solo. El streetwear de autor que vale más que cualquier logo — porque acá hay historia real detrás.",
    fotos:[
      "fotos_catalogo/Hombre/2/IMG_1472.jpg",
      "fotos_catalogo/Hombre/2/IMG_1475.jpg",
      "fotos_catalogo/Hombre/2/IMG_1476.jpg",
      "fotos_catalogo/Hombre/2/IMG_1477.jpg",
      "fotos_catalogo/Hombre/2/IMG_1481.jpg",
      "fotos_catalogo/Hombre/2/IMG_1482.jpg"
    ]},

  { id:3, genero:"hombre", marca:"Adidas", marca_id:"adidas", badge:"new", stock:true,
    nombre:"Adidas Originals Cargo Pants",
    precio:"Consultar",
    tallas:[],
    desc:"El pantalón cargo que Adidas Originals diseñó para la calle — no para el gym. Tela técnica premium, bolsillos de tapa funcionales, corte recto que cae perfecto. Del skatepark al café: misma energía, distintas canchas.",
    fotos:[
      "fotos_catalogo/Hombre/3/IMG_1451.jpg",
      "fotos_catalogo/Hombre/3/IMG_1463.jpg",
      "fotos_catalogo/Hombre/3/IMG_1470.jpg",
      "fotos_catalogo/Hombre/3/IMG_1471.jpg"
    ]},

  { id:4, genero:"hombre", marca:"New Balance", marca_id:"newbalance", badge:"new", stock:true,
    nombre:"New Balance Classic Tee — Coral",
    precio:"Consultar",
    tallas:[],
    desc:"NB tiene algo que pocas marcas logran: calidad callada. Esta tee en coral intenso lleva su logo Classic. bordado al pecho — sin gritarlo, sin apuros. Algodón pesado, corte relaxed, ese color que se roba todas las miradas sin pedir permiso.",
    fotos:[
      "fotos_catalogo/Hombre/4/IMG_1429.jpg",
      "fotos_catalogo/Hombre/4/IMG_1430.jpg",
      "fotos_catalogo/Hombre/4/IMG_1431.jpg",
      "fotos_catalogo/Hombre/4/IMG_1435.jpg"
    ]},

  { id:5, genero:"hombre", marca:"Nike", marca_id:"nike", badge:"new", stock:true,
    nombre:"Nike Sportswear Woven Pants",
    precio:"Consultar",
    tallas:[],
    desc:"El pantalón de Nike que resolvió el dilema comfort-estilo de una vez. Tela woven ligera pero estructurada, cintura elástica con cordón, Swoosh bordado discreto en el muslo. Para salir cómodo sin que parezca que te importó poco.",
    fotos:[
      "fotos_catalogo/Hombre/5/IMG_1405.jpg",
      "fotos_catalogo/Hombre/5/IMG_1407.jpg",
      "fotos_catalogo/Hombre/5/IMG_1413.jpg",
      "fotos_catalogo/Hombre/5/IMG_1415.jpg",
      "fotos_catalogo/Hombre/5/IMG_1418.jpg",
      "fotos_catalogo/Hombre/5/IMG_1423.jpg"
    ]},

  { id:6, genero:"hombre", marca:"GUESS", marca_id:"guess", badge:"new", stock:true,
    nombre:"GUESS Originals LA Crewneck — Beige",
    precio:"Consultar",
    tallas:[],
    desc:"GUESS LA desde 1981 — y este crewneck lo sabe. Bordado a tono sobre tela premium en beige arena, peso perfecto para el clima cochabambino. El lujo tranquilo que no necesita colores estridentes para llamar la atención.",
    fotos:[
      "fotos_catalogo/Hombre/6/IMG_1380.jpg",
      "fotos_catalogo/Hombre/6/IMG_1382.jpg",
      "fotos_catalogo/Hombre/6/IMG_1383.jpg",
      "fotos_catalogo/Hombre/6/IMG_1384.jpg",
      "fotos_catalogo/Hombre/6/IMG_1387.jpg"
    ]},

  { id:7, genero:"hombre", marca:"Adidas", marca_id:"adidas", badge:"new", stock:true,
    nombre:"Adidas Aeroready Training Tee",
    precio:"Consultar",
    tallas:[],
    desc:"La tecnología Aeroready de Adidas lleva el sudor lejos de la piel — pero esta tee no es solo para el deporte. Logo clásico en el pecho izquierdo, azul marino que combina con todo. Funcional sin sacrificar una pizca de estilo.",
    fotos:[
      "fotos_catalogo/Hombre/7/IMG_1369.jpg",
      "fotos_catalogo/Hombre/7/IMG_1372.jpg",
      "fotos_catalogo/Hombre/7/IMG_1373.jpg",
      "fotos_catalogo/Hombre/7/IMG_1375.jpg"
    ]},

  { id:8, genero:"hombre", marca:"Tommy Hilfiger", marca_id:"tommy", badge:"new", stock:true,
    nombre:"Tommy Jeans Gothic Logo Crewneck",
    precio:"Consultar",
    tallas:[],
    desc:"Tommy Jeans tomó su clásico preppy y lo pasó por el filtro del streetwear. Letras góticas en arco sobre fleece celeste pastel, banderita bordada en el pecho. Suave, oversized, para quien entiende que la moda no es seria — es divertida.",
    fotos:[
      "fotos_catalogo/Hombre/8/IMG_1351.jpg",
      "fotos_catalogo/Hombre/8/IMG_1359.jpg",
      "fotos_catalogo/Hombre/8/IMG_1360.jpg",
      "fotos_catalogo/Hombre/8/IMG_1361.jpg",
      "fotos_catalogo/Hombre/8/IMG_1363.jpg",
      "fotos_catalogo/Hombre/8/IMG_1367.jpg"
    ]},

  { id:9, genero:"hombre", marca:"New Balance", marca_id:"newbalance", badge:"new", stock:true,
    nombre:"New Balance Athletics Slim Jogger",
    precio:"Consultar",
    tallas:[],
    desc:"El jogger que NB diseñó para quien toma en serio el movimiento — y el estilo. Tela French Terry premium en gris lavanda, logo a tono bordado, corte tapered que queda bien con cualquier zapatilla. Comodidad que no es excusa.",
    fotos:[
      "fotos_catalogo/Hombre/9/IMG_1339.jpg",
      "fotos_catalogo/Hombre/9/IMG_1343.jpg",
      "fotos_catalogo/Hombre/9/IMG_1344.jpg",
      "fotos_catalogo/Hombre/9/IMG_1346.jpg",
      "fotos_catalogo/Hombre/9/IMG_1347.jpg"
    ]},

  { id:10, genero:"hombre", marca:"New Balance", marca_id:"newbalance", badge:"new", stock:true,
    nombre:"New Balance Essential Logo Tee",
    precio:"Consultar",
    tallas:[],
    desc:"Lo básico hecho con criterio. Remera azul marino de NB con logo bordado pequeño al pecho — sin estridencias, puro algodón pesado. La pieza que combinás con cualquier cosa y siempre quedás bien. Calidad que habla sola.",
    fotos:[
      "fotos_catalogo/Hombre/10/IMG_1327.jpg",
      "fotos_catalogo/Hombre/10/IMG_1334.jpg",
      "fotos_catalogo/Hombre/10/IMG_1335.jpg"
    ]},

  { id:11, genero:"hombre", marca:"Adidas", marca_id:"adidas", badge:"new", stock:true,
    nombre:"Adidas Originals x Real Madrid Icon Jersey",
    precio:"Consultar",
    tallas:[],
    desc:"Adidas Originals x Real Madrid — la colaboración que une el fútbol más grande con el streetwear definitivo. Jersey oficial Real Icon, escudo del Madrid bordado en el pecho, trébol Originals al centro. Coleccionable. Irrepetible.",
    fotos:[
      "fotos_catalogo/Hombre/11/IMG_1317.jpg",
      "fotos_catalogo/Hombre/11/IMG_1318.jpg",
      "fotos_catalogo/Hombre/11/IMG_1323.jpg",
      "fotos_catalogo/Hombre/11/IMG_1324.jpg"
    ]},

  { id:12, genero:"hombre", marca:"De Primera", marca_id:"deprimera", badge:"dp", stock:true,
    nombre:"Future Is Color Long Sleeve — Chasing Dreams",
    precio:"Consultar",
    tallas:[],
    desc:"Manga larga de la marca Chasing Dreams con Future Is Color en rojo impacto. Cuerpo blanco, mangas negras, estampado técnico a doble cara. Streetwear de autor que mezcla energía deportiva con actitud artística. Única en Bolivia.",
    fotos:[
      "fotos_catalogo/Hombre/12/IMG_1198.jpg",
      "fotos_catalogo/Hombre/12/IMG_1200.jpg",
      "fotos_catalogo/Hombre/12/IMG_1209.jpg"
    ]},

  { id:13, genero:"hombre", marca:"Adidas", marca_id:"adidas", badge:"new", stock:true,
    nombre:"Adidas Originals Trefoil Tee — Multicolor",
    precio:"Consultar",
    tallas:[],
    desc:"El trébol icónico de Adidas Originals en su versión más expresiva — verde, negro y naranja sobre base crema. Algodón premium, corte relaxed, una gráfica que resiste el tiempo porque es diseño puro. Lo clásico siempre vuelve.",
    fotos:[
      "fotos_catalogo/Hombre/13/IMG_1212.jpg",
      "fotos_catalogo/Hombre/13/IMG_1213.jpg",
      "fotos_catalogo/Hombre/13/IMG_1215.jpg"
    ]},

  { id:14, genero:"hombre", marca:"Adidas", marca_id:"adidas", badge:"new", stock:true,
    nombre:"Adidas Originals Cargo Pant — Negro",
    precio:"Consultar",
    tallas:[],
    desc:"Adidas Originals construyó el cargo definitivo. Tela liviana de secado rápido, bolsillos laterales funcionales, cintura con cordón, elástico en tobillo. El trébol al muslo lo firma. Entre lo técnico y el streetwear — exactamente donde querés estar.",
    fotos:[
      "fotos_catalogo/Hombre/14/IMG_1219.jpg",
      "fotos_catalogo/Hombre/14/IMG_1222.jpg",
      "fotos_catalogo/Hombre/14/IMG_1224.jpg",
      "fotos_catalogo/Hombre/14/IMG_1226.jpg"
    ]},

  { id:15, genero:"hombre", marca:"Nike", marca_id:"nike", badge:"new", stock:true,
    nombre:"Nike Sportswear Club Fleece Shorts",
    precio:"Consultar",
    tallas:[],
    desc:"El short que Nike tiene en su línea desde siempre — y por algo es. Fleece suave por dentro, cintura con cordón, logo NIKE grande en la pierna. Blanco limpio que va con todo. Para la calle, el gym, o quedarte en casa como si fuera intencional.",
    fotos:[
      "fotos_catalogo/Hombre/15/IMG_1246.jpg",
      "fotos_catalogo/Hombre/15/IMG_1251.jpg",
      "fotos_catalogo/Hombre/15/IMG_1252.jpg",
      "fotos_catalogo/Hombre/15/IMG_1256.jpg"
    ]},

  { id:16, genero:"hombre", marca:"Air Jordan", marca_id:"jordan", badge:"new", stock:true,
    nombre:"Jordan MJ 23 Vintage Graphic Hoodie",
    precio:"Consultar",
    tallas:[],
    desc:"Michael Jordan. Número 23. Chicago Bulls. Todo eso en un hoodie negro de peso real. Gráfica vintage con collage de MJ en acción, letras de impacto, fleece grueso premium. Para los que crecieron mirando los highlights — y nunca olvidaron el legado.",
    fotos:[
      "fotos_catalogo/Hombre/16/IMG_1133.jpg",
      "fotos_catalogo/Hombre/16/IMG_1138.jpg",
      "fotos_catalogo/Hombre/16/IMG_1142.jpg",
      "fotos_catalogo/Hombre/16/IMG_1146.jpg",
      "fotos_catalogo/Hombre/16/IMG_1149.jpg"
    ]},

  // ─── MUJER ────────────────────────────────────────────────

  { id:17, genero:"mujer", marca:"GUESS", marca_id:"guess", badge:"new", stock:true,
    nombre:"GUESS Triangle Logo Crewneck — Taupe",
    precio:"Consultar",
    tallas:[],
    desc:"GUESS lo hace simple y lo hace con clase. Crewneck en taupe oscuro con el triángulo icónico en bordado tono sobre tono — elegancia sin esfuerzo. Tela gruesa premium, corte femenino relaxed. Del brunch al after: una sola pieza, mil ocasiones.",
    fotos:[
      "fotos_catalogo/Mujer/1/IMG_1440.jpg",
      "fotos_catalogo/Mujer/1/IMG_1442.jpg",
      "fotos_catalogo/Mujer/1/IMG_1443.jpg",
      "fotos_catalogo/Mujer/1/IMG_1444.jpg",
      "fotos_catalogo/Mujer/1/IMG_1445.jpg"
    ]}

];
