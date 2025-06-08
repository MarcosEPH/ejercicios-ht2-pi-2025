const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function mostrarSaludo(nombre) {
  console.log(`Hola, ${nombre}. Bienvenido al sistema de geometría`);
}

rl.question('¿Cuál es tu nombre? ', (nombre) => {
  rl.question('Ingresa la base del triángulo: ', (baseStr) => {
    rl.question('Ingresa la altura del triángulo: ', (alturaStr) => {
      const base = parseFloat(baseStr);
      const altura = parseFloat(alturaStr);

      mostrarSaludo(nombre);
      const area = calcularAreaTriangulo(base, altura);
      console.log(`El área del triángulo es: ${area}`);

      rl.close();
    });
  });
});