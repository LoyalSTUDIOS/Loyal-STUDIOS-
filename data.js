/* ═══ LOYAL STUDIOS — DATA ═══ */
const WA_NUM = "59171234567";
const TIENDA = "Loyal Studios™";

// Brands list — `wordmark` is the brand-styled display name. We don't try to
// reproduce real brand fonts, but we set tracking/weight/style so each name reads
// like the brand. `tag` is shown in lists; `name` is the canonical match value.
const BRANDS = [
  { id:"nike",      name:"Nike",            wordmark:"NIKE",            img:"assets/brand-nike.avif" },
  { id:"jordan",    name:"Air Jordan",      wordmark:"AIR JORDAN",      img:"assets/brand-jordan.avif" },
  { id:"adidas",    name:"Adidas",          wordmark:"adidas",          img:"assets/brand-adidas.avif" },
  { id:"newbalance",name:"New Balance",     wordmark:"New Balance",     img:"assets/brand-newbalance.jpg" },
  { id:"tommy",     name:"Tommy Hilfiger",  wordmark:"TOMMY HILFIGER",  img:"assets/brand-tommy.webp" },
  { id:"calvin",    name:"Calvin Klein",    wordmark:"Calvin Klein",    img:"assets/brand-calvin.jpg" },
  { id:"guess",     name:"GUESS",           wordmark:"GUESS",           img:"assets/brand-guess-v2.jpg" },
  { id:"deprimera", name:"De Primera",      wordmark:"De Primera ✦",    img:"assets/brand-deprimera.webp" }
];

const ITEMS = [
  { id:1, genero:"hombre", marca:"Nike", marca_id:"nike",
    nombre:"Air Force 1 Low '07 White", precio:"Bs. 595", badge:"new", stock:true,
    desc:"El blanco que lo cambia todo. Cuero premium full-grain, suela Air-Sole y la silueta que definió el streetwear moderno. Versátil, atemporal, obligatorio.",
    tallas:["38","39","40","41","42","43","44"],
    fotos:[
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop&q=75",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=1000&fit=crop&q=75",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=1000&fit=crop&q=75"
    ]},
  { id:2, genero:"hombre", marca:"Air Jordan", marca_id:"jordan",
    nombre:'Jordan 1 Retro High OG "Chicago"', precio:"Bs. 840", badge:"last", stock:true,
    desc:"La zapatilla que lo inició todo. Colorway Chicago original, cuero premium, detalle de ala en el tobillo. Una pieza de colección que se usa en la calle.",
    tallas:["40","41","42","43"],
    fotos:[
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=1000&fit=crop&q=75",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=1000&fit=crop&q=75",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=1000&fit=crop&q=75"
    ]},
  { id:3, genero:"mujer", marca:"Nike", marca_id:"nike",
    nombre:"Nike Air Max 90 Essential", precio:"Bs. 630", badge:"new", stock:true,
    desc:"La ventana de aire que lo conquistó todo. Construcción en capas, amortiguación Air visible, silueta curva icónica. Femenina y fiera.",
    tallas:["36","37","38","39","40"],
    fotos:[
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop&q=75",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=1000&fit=crop&q=75"
    ]},
  { id:5, genero:"hombre", marca:"De Primera", marca_id:"deprimera",
    nombre:"Nike Windrunner Jacket — De Primera", precio:"Bs. 290", badge:"dp", stock:true,
    desc:"Original sin etiqueta, elegida por ser fachera. Shell resistente al viento, forro interior, diseño en V icónico al pecho.",
    tallas:["M","L"],
    fotos:[
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop&q=75",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=1000&fit=crop&q=75"
    ]},
  { id:6, genero:"mujer", marca:"Tommy Hilfiger", marca_id:"tommy",
    nombre:"Tommy Hilfiger Polo Classic Mujer", precio:"Bs. 406", badge:null, stock:true,
    desc:"El polo que no pasa de moda. Piqué premium, bordado iconic en el pecho, corte femenino ajustado.",
    tallas:["XS","S","M","L"],
    fotos:[
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop&q=75",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&h=1000&fit=crop&q=75"
    ]},
  { id:7, genero:"hombre", marca:"Adidas", marca_id:"adidas",
    nombre:"Adidas Superstar Shell Toe", precio:"Bs. 525", badge:null, stock:true,
    desc:"Tres rayas, punta de concha, historia pura. Más de 50 años de cultura. La zapatilla más vendida de todos los tiempos.",
    tallas:["38","39","40","41","42","43"],
    fotos:[
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=1000&fit=crop&q=75",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&h=1000&fit=crop&q=75"
    ]},
  { id:8, genero:"mujer", marca:"De Primera", marca_id:"deprimera",
    nombre:"Adidas Track Jacket Mujer — De Primera", precio:"Bs. 210", badge:"dp", stock:true,
    desc:"En excelente estado, elegida por ser fachera. Track jacket clásica de los 90. Tres rayas en los costados, cuello alto, tela shell liviana.",
    tallas:["S","M"],
    fotos:[
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop&q=75",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=1000&fit=crop&q=75"
    ]}
];
