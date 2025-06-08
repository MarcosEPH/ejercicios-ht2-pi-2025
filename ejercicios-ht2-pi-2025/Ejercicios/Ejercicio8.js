const productos = [
  { nombre: 'Zapatos', precio: 100 },
  { nombre: 'Camisa', precio: 80 },
  { nombre: 'Pantalón', precio: 120 },
  { nombre: 'Corbata', precio: 50 },
];

const productosConIva = productos.map(prod => {
  return {
    nombre: prod.nombre,
    precio: prod.precio,
    precioIva: +(prod.precio * 1.12).toFixed(2)
  };
});

const productosFiltrados = productosConIva.filter(prod => prod.precioIva >= 100);

const productosOrdenados = [...productosConIva].sort((a, b) => a.precioIva - b.precioIva);

console.log('Productos con IVA:');
for (let p of productosConIva) {
  console.log(`${p.nombre}: Q${p.precioIva}`);
}

console.log('Productos filtrados (precio con IVA >= 100):');
for (let p of productosFiltrados) {
  console.log(`${p.nombre}: Q${p.precioIva}`);
}

console.log('Productos ordenados por precio con IVA (menor a mayor):');
for (let p of productosOrdenados) {
  console.log(`${p.nombre}: Q${p.precioIva}`);
}