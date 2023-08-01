const products = [
  {
    id: '1',
    title: "Procesador AMD Ryzen 5 5600G",
    price: 100000,
    category: "CPU",
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
    category: "CPU",
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
    category: "CPU",
    pictureURL:
      "https://http2.mlstatic.com/D_NQ_NP_746011-MLA54835790960_042023-O.webp",
    stock: 8,
    description: `Bienvenido a la nueva era del rendimiento. La serie AMD Ryzen 7000 saca a relucir la velocidad descomunal de “Zen 4” y su potencia pura para que los jugadores y creadores puedan procesar cualquier juego o flujo de trabajo que se cruce en su camino.`,
  },
];

export function getProducts () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000)
  });
}

export function getProductById (productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === productId));
    }, 1000)
  });
}

export function getProductsByCategory (categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(product => product.category === categoryId));
    }, 1000)
  });
}