const products = [
  {
    id: '1',
    title: "Procesador AMD Ryzen 5 5600G",
    price: 100000,
    category: "cpu",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_951114-MLA48344211551_112021-O.webp",
    stock: 23,
    description: `Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles.
    AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.`,
  },
  {
    id: '2',
    title: "Procesador Intel Core I7 12700KF",
    price: 314000,
    category: "cpu",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_844536-MLA48557497958_122021-O.webp",
    stock: 15,
    description: `Productividad y entretenimiento, todo disponible en tu computadora de escritorio.
    La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.`,
  },
  {
    id: '3',
    title: "Procesador AMD Ryzen 9 7959X3D",
    price: 710000,
    category: "cpu",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_746011-MLA54835790960_042023-O.webp",
    stock: 8,
    description: `Bienvenido a la nueva era del rendimiento. La serie AMD Ryzen 7000 saca a relucir la velocidad descomunal de “Zen 4” y su potencia pura para que los jugadores y creadores puedan procesar cualquier juego o flujo de trabajo que se cruce en su camino.`,
  },
  {
    id: '4',
    title: "Gabinete Gamer Thermaltake V250 Tg Argb Air 4x120mm",
    price: 72000,
    category: "gabinetes",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_635314-MLU54963253456_042023-O.webp",
    stock: 6,
    description: `Gabinete Gamer Thermaltake V250 Tg Argb Air 4x120mm`,
  },
  {
    id: '5',
    title: "Gabinete Gamer Thermaltake H700 Tg Black 2x120mm Mid Tower",
    price: 72000,
    category: "gabinetes",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_881029-MLU54963026678_042023-O.webp",
    stock: 9,
    description: `Gabinete Gamer Thermaltake H700 Tg Black 2x120mm Mid Tower`,
  },
  {
    id: '6',
    title: "Gabinete Thermaltake Ah T200 Snow White Micro Y Mini Atx Usb",
    price: 99000,
    category: "gabinetes",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_677684-MLA49126767199_022022-O.webp",
    stock: 4,
    description: `Gabinete Thermaltake Ah T200 Snow White Micro Y Mini Atx Usb`,
  },
  {
    id: '7',
    title: "Board B550m Ds3h Gigabyte Amd Am4",
    price: 80000,
    category: "motherboard",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_824123-MCO47848741639_102021-O.webp",
    stock: 22,
    description: `Board B550m Ds3h Gigabyte Amd Am4`,
  },
  {
    id: '8',
    title: "Placa Madre Asrock A520m-hdv Color Negro",
    price: 80000,
    category: "motherboard",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_870491-MLU70500940548_072023-O.webp",
    stock: 20,
    description: `Placa Madre Asrock A520m-hdv Color Negro`,
  },
];

export function getProducts () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500)
  });
}

export function getProductById (productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === productId));
    }, 500)
  });
}

export function getProductsByCategory (categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(product => product.category === categoryId));
    }, 500)
  });
}